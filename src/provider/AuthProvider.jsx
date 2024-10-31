import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, GoogleAuthProvider } from "firebase/auth";
import { app } from './../firebase/firebase.config';
import useAxiosPublic from './../hooks/useAxiosPublic';

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children})=>{

    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const axiosPublic = useAxiosPublic();
    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
      const unSubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser);
            const userInfo = {email: currentUser?.email};
            if(currentUser){
                axiosPublic.post('/jwt', userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('token', res.data.token);
                    }
                })
            } else {
                localStorage.removeItem('token');
            }
            setLoading(false);
        });
      
        return ()=>{
           return unSubscribe();
        }
    },[axiosPublic])

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
