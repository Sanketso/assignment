// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyeu3X9oz65umRkE1qMFBSMQi8iGRNDBw",
  authDomain: "crud-48532.firebaseapp.com",
  projectId: "crud-48532",
  storageBucket: "crud-48532.appspot.com",
  messagingSenderId: "598854147372",
  appId: "1:598854147372:web:387f6dd3db691d84ad2089"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);