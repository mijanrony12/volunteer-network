import firebaseInitial from "../../firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";

firebaseInitial();
const useFirebase = () => {
    const [ error, setError ] = useState('')
    const [user, setUser]=useState({})
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            setUser(result.user);
            console.log(result.user)
        }).catch((error) => {
        
        });
    }

    const handleEmailPasswordRegister = (email, password) => {
        createUserWithEmailAndPassword (auth, email, password)
                .then((result) => {
               
                    setUser(result.user)
                
                })
                .catch((error) => {
                    
                    setError(error.message)
                });
    }


    const handleEmailPasswordLogIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
           setUser(result.user)
        })
        .catch((error) => {
            setError(error.message);
        });
    }

    return {
        user,
        error,
        signInUsingGoogle,
        handleEmailPasswordRegister,
        handleEmailPasswordLogIn
    }
}

export default useFirebase;