import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAVpTtWAnvVpjMfr2pfpHy044gk-dAWpCM",
    authDomain: "fir-login-48e01.firebaseapp.com",
    projectId: "fir-login-48e01",
    storageBucket: "fir-login-48e01.appspot.com",
    messagingSenderId: "246378420510",
    appId: "1:246378420510:web:7e22897fb7af3eea9b510f",
    measurementId: "G-3Q3R9X844T"
};

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;