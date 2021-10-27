import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const firebaseInitial = () => {
   return initializeApp(firebaseConfig);
}
   
export default firebaseInitial;