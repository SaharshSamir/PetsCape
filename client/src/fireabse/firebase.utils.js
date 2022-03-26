import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBLi-UWYZK_c0DVSw1NTolal9-Lvrx5xh4",
  authDomain: "petscape-a734c.firebaseapp.com",
  projectId: "petscape-a734c",
  storageBucket: "petscape-a734c.appspot.com",
  messagingSenderId: "387074890222",
  appId: "1:387074890222:web:dab96ffa4f97d7478a56ff",
  measurementId: "G-9YNGFSRKRD",
};

const app = initializeApp(firebaseConfig);


export const firestore = firebase.firestore();



