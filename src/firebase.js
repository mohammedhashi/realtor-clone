// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAX7jJYc2D6YhGHkZokzhf5BVyvGwz0JpE",
  authDomain: "realtor-clone-react-5ddf3.firebaseapp.com",
  projectId: "realtor-clone-react-5ddf3",
  storageBucket: "realtor-clone-react-5ddf3.appspot.com",
  messagingSenderId: "772910784241",
  appId: "1:772910784241:web:65a529acb1508278e55350"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
 export const db = getFirestore()
