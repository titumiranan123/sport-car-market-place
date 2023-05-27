/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { app } from "../Firebase/firebase.confi";

export const Authcontext = createContext(null);


const Authprovider = ({ children }) => {
    const [lodder, setLodder] = useState(true)
    const [user, setUser] = useState('')
    const auth = getAuth(app)
    const createUser = (email, password) => {
        setLodder(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const singin = (email, password) => {
        setLodder(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logout = () => {
        setLodder(true)
        return signOut(auth);
    }
    const updateUser = (user, name, photourl) => {
        return updateProfile(user, {
            displayName: name,
            photoURL: photourl,
        })
    }
    const provider = new GoogleAuthProvider();
    const loginwithGoogle = () => {
        return signInWithPopup(auth, provider)
    }
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
                setLodder(false)
            }
        })
        return () => {
            return unsbscribe();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])
    const forgetPassword = () => {
        const email = user && user.email;
        return sendPasswordResetEmail(auth, email)

    }
    const authinfo = {
        createUser,
        singin,
        logout,
        user,
        setLodder,
        lodder,
        updateUser,
        loginwithGoogle,
        forgetPassword
    }
    return (
        <Authcontext.Provider value={authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;