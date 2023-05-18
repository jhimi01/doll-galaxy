
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/Firebase.config";
import { createContext, useState } from "react";

export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    // ------------ signup with email and password --------------------
    const singupEmailPass = (email, password)=>{
        setLoader(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }



    // ------------ log in email pass --------------------
    const loginemailpass = (email, password)=>{
    return signInWithEmailAndPassword(auth, email, password)
    }



    // login with google auth --------------------
    const loginWithGoogleAuth = (email, password)=>{

    }

   // ------------ log out --------------------


   // ----------------- user --------------------


    const authInfo = {
        user,
        loader,
        singupEmailPass,
        loginemailpass,
        loginWithGoogleAuth
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;