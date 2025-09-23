// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAk3jHStYW4dvTuVwH--6l1fqQarK_a4Q",
  authDomain: "tradertalk-66803.firebaseapp.com",
  projectId: "tradertalk-66803",
  storageBucket: "tradertalk-66803.firebasestorage.app",
  messagingSenderId: "933305037723",
  appId: "1:933305037723:web:d72f08b14b8935fc04673e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db }