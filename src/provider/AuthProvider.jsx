const { createContext, useState, useEffect } = require("react");
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from './../firebase/firebase.config';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children})=>{


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = ()=>{
        return signInWithPopup(auth);
    };

    const logOut = ()=>{
        return signOut(auth);
    }

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
        loading,
        createUser,
        signIn,
        signInWithGoogle,
        logOut 
    };

    return (<AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    )
}

export default AuthProvider;
