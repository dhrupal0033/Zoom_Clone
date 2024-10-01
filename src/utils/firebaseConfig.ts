import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyADdH1MlmvbYNLk7_t93srbxZtuytR_6yc",
  authDomain: "zoom-clone-5f944.firebaseapp.com",
  projectId: "zoom-clone-5f944",
  storageBucket: "zoom-clone-5f944.appspot.com",
  messagingSenderId: "226131624022",
  appId: "1:226131624022:web:328143aab02326ca61bbf7",
  measurementId: "G-6SB03X2MZ0",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
