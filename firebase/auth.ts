import {getAuth, onAuthStateChanged} from "firebase/auth";
import firebaseApp from "@/firebase/config";

const auth = getAuth(firebaseApp)

export {
    onAuthStateChanged
}