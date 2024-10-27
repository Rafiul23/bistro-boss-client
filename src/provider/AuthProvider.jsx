const { createContext, useState, useEffect } = require("react");
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { app } from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children})=>{


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        });
      
        return ()=>{
           return unSubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading
    };

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;
