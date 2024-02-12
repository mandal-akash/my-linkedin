import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCdRZIlkJTw-R28U__FXHeA30LxVViRo84",
  authDomain: "my-linkedin-47f65.firebaseapp.com",
  projectId: "my-linkedin-47f65",
  storageBucket: "my-linkedin-47f65.appspot.com",
  messagingSenderId: "925537481139",
  appId: "1:925537481139:web:0b6f9521ff24da6d5f5bc6",
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = app.auth();

export {db , auth};