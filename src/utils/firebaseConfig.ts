import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDSQDzvRQPxCpyBMvYjR6HdvOqcmiMF3i4",
  authDomain: "videoapp-348ae.firebaseapp.com",
  projectId: "videoapp-348ae",
  storageBucket: "videoapp-348ae.appspot.com",
  messagingSenderId: "1004693218740",
  appId: "1:1004693218740:web:fb69dcffa9a5059d7efee1",
  measurementId: "G-ZDGFL84Y4T",
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);

export const usersRef = collection(firebaseDB, "users");
export const meetingsRef = collection(firebaseDB, "meetings");
