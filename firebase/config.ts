import { initializeApp } from "firebase/app"

export const firebaseConfig = {
    apiKey: "AIzaSyAPtPnvsmHTBm6mpmK09ihZIV77FdCO6WU",
    authDomain: "ialgenclikcalistayiresmi.firebaseapp.com",
    projectId: "ialgenclikcalistayiresmi",
    storageBucket: "ialgenclikcalistayiresmi.firebasestorage.app",
    messagingSenderId: "93520569332",
    appId: "1:93520569332:web:5d2649f1c40247b04ecfa1",
    measurementId: "G-CV8G61NF5Z"
};

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp