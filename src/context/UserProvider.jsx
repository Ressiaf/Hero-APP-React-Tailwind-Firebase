import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup,
    signOut,
} from "firebase/auth";
import { createContext, useState , useEffect} from "react";
import { auth } from "../firebase/firebase.js";

export const UserContext = createContext( );

const UserProvider = ( { children } ) => {
    
    const [ user, setUser ] = useState(false);
    const googleProvider = new GoogleAuthProvider()

    useEffect( ( ) => {
        const unsuscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, photoURL, displayName } = user;
                setUser({ uid, email, photoURL, displayName });
            } else {
                setUser(null);
            }
        });
        return ( ) => unsuscribe( );
    }, [ ] );

    const registerUser = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password);

    const loginUser = (email, password) =>
        signInWithEmailAndPassword( auth, email, password );

    const loginUserWhitGoogle = ( ) =>
        signInWithPopup( auth, googleProvider );

    const singOutUser = () => signOut(auth);

    return (
        <UserContext.Provider
        value={{ user, setUser, registerUser, loginUser, loginUserWhitGoogle, singOutUser}}
        >
            {children}
        </UserContext.Provider>
    );
};

export default UserProvider;