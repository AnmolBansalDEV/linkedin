import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyDH-LbBhqDfU8FGg8O76uVJ5eg_59JuLAM",
    authDomain: "linkedin-clone-fb39c.firebaseapp.com",
    projectId: "linkedin-clone-fb39c",
    storageBucket: "linkedin-clone-fb39c.appspot.com",
    messagingSenderId: "677197305423",
    appId: "1:677197305423:web:ed121cccc9e2a18ba97c3a",
    measurementId: "G-QWB077MCYS"
  };

  const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp)

export const auth = getAuth()