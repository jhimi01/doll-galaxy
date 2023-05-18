
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // ------------ signup with email and password --------------------
    const singupEmailPass = (email, password)=>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }



    // ------------ log in email pass --------------------
    const loginemailpass = (email, password)=>{
        setLoader(true)
    return signInWithEmailAndPassword(auth, email, password)
    }



    // login with google auth --------------------
    const loginWithGoogleAuth = ()=>{
        setLoader(true)
     return signInWithPopup(auth, providerGoogle)
    }

   // ------------ log out --------------------
   const logout = ()=>{
    setLoader(true)
    return signOut(auth)
   }


   // ----------------- user --------------------
   useEffect(()=>{
    const unsbscribe = onAuthStateChanged(auth, loggedInUser =>{
        setUser(loggedInUser)
        setLoader(false)
    })
    return ()=>{ unsbscribe()}
   },[])




    const authInfo = {
        user,
        loader,
        singupEmailPass,
        loginemailpass,
        loginWithGoogleAuth,
        logout
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;