// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyCEVobItfZkCBnq0XNX9PakTi-Nt19Wk3g",

  authDomain: "fir-auth-8a0a3.firebaseapp.com",

  projectId: "fir-auth-8a0a3",

  storageBucket: "fir-auth-8a0a3.appspot.com",

  messagingSenderId: "207097697815",

  appId: "1:207097697815:web:bdb242298e56632a66ae52",

  measurementId: "G-6R4K03EMCL"

};


// Initialize Firebase
let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app()
}

const auth = firebase.auth()

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
