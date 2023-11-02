import {
    collection,
    doc,
    getDoc,
    getDocs,
    getFirestore,
    orderBy,
    query,
    setDoc,
    updateDoc,
    where
} from "firebase/firestore";
import {ApplicationPosition} from "@/types/application";
import {User} from "@/types/user";
import firebaseApp from "@/firebase/config";

const db = getFirestore(firebaseApp)
const applicationsRef = collection(db, "users")

export const registerUser = async (uid: string, email: string) => {
    const docRef = doc(db, "applications", uid)
    return await setDoc(docRef, {email: email})
}

export const setApplication = async (uid: string, data: object) => {
    const docRef = doc(db, "applications", uid)
    return await updateDoc(docRef, data)
}

export const checkUser = async (uid: string) => {
    const docRef = doc(db, "applications", uid)
    const snapshot = await getDoc(docRef)
    return snapshot.exists() ? snapshot.data() : null
}

export const getApplications = async (position: ApplicationPosition) => {
    const q = query(applicationsRef, where("application", "!=", null), where("position", "==", position), orderBy("date", "desc"))
    const snapshot = await getDocs(q)
    return snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
}

export const updateUser = async (uid: string, data: User) => {
    const docRef = doc(db, "applications", uid)
    return await updateDoc(docRef, data as object)
}

export const getUser = async (uid: string) => {
    const docRef = doc(db, "applications", uid)
    return await getDoc(docRef)
}