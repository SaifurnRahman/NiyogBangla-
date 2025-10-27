import React, { createContext, use, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const updateUser =(updateData) => {
        return updateProfile(auth.currentUser, updateData);
    }

    useEffect(()=>{
    const unSubscrive = onAuthStateChanged( auth, (currentUser)=> {
        setUser(currentUser);
        setLoading(false)

    })
    return () => {
        unSubscrive
    }
    }, [])

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null);
    const authData = {
        user,
        setUser,
        createUser,
        logInUser,
        logOut,
        updateUser,
        loading,
        setLoading
        
    }


    return (
        <div>
            <AuthContext value={authData}>{children}</AuthContext>
        </div>
    );
};

export default AuthProvider;