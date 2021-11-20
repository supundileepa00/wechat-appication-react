import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyCAQrtzXva_mWCPMSzHL_NoQpiFS3fGZdY",
    authDomain: "wechat-3511a.firebaseapp.com",
    projectId: "wechat-3511a",
    storageBucket: "wechat-3511a.appspot.com",
    messagingSenderId: "884166908824",
    appId: "1:884166908824:web:66e473233ecc3b124929ed"
  }).auth();