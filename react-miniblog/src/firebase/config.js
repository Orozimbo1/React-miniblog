import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCJKwRZEYAsvDJsTvnvUHSXErRHxVnIwfU",
  authDomain: "miniblog-react-ecf6d.firebaseapp.com",
  projectId: "miniblog-react-ecf6d",
  storageBucket: "miniblog-react-ecf6d.appspot.com",
  messagingSenderId: "745204309610",
  appId: "1:745204309610:web:0df4f2022af9c89e0d7413"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db }