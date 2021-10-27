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
    
  }).catch((error) => {
  
  });
    }

    const handleEmailPasswordRegister = (email, password) => {
        createUserWithEmailAndPassword (auth, email, password)
  .then((result) => {
   console.log(result.user);
    // setUser(result.user)
   
  })
  .catch((error) => {
    
     setError(error.message)
  });
    }

    return {
        error,
        signInUsingGoogle,
        handleEmailPasswordRegister
    }
}

export default useFirebase;