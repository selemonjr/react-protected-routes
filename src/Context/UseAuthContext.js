import {createContext,useContext,useEffect,useState} from "react";
import {auth} from "../firebase/firebaseConfig.js";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,getAuth} from "firebase/auth";
const userAuthContext = createContext();
export const UserAuthContextProvider = ({children}) => {
    const [user,SetUser] = useState("")
    const signUp = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    };
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    };
    const logOut = () => {
        return signOut(auth)
    };
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(getAuth(), (currentUser) => {
            SetUser(currentUser);
        });
        return () => {
            unsubscribe();
        }
    },[])
    return <userAuthContext.Provider value={{user,logOut,signUp,signIn}}>
    {children}
    </userAuthContext.Provider>
}
export const useUserAuth = () => {
    return useContext(userAuthContext)
}