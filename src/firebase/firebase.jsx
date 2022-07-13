// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9xqrPZZdQ0rJJ-16z5Nir4WwBgd01Mhc",
    authDomain: "login-project-00.firebaseapp.com",
    projectId: "login-project-00",
    storageBucket: "login-project-00.appspot.com",
    messagingSenderId: "597599072210",
    appId: "1:597599072210:web:828d455b4a7679c72c620b",
    measurementId: "G-WB5E1S17HC"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
