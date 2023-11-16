import { initializeApp } from "firebase/app"

export const firebaseConfig = {
    apiKey: "AIzaSyBY7jdD0vWF24Vtq7P73hpZnL4dKFnx9fA",
    authDomain: "ialgc23.firebaseapp.com",
    projectId: "ialgc23",
    storageBucket: "ialgc23.appspot.com",
    messagingSenderId: "902817473926",
    appId: "1:902817473926:web:70014eb5029bafa01f7807",
    measurementId: "G-NKPE7GCH6L"
}

const firebaseApp = initializeApp(firebaseConfig)

export default firebaseApp