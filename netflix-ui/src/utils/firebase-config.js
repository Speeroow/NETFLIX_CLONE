import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAzjRU5M31vyOxAeuxNTSWqjsKtw0HOXjA",
  authDomain: "netflix-5e73d.firebaseapp.com",
  projectId: "netflix-5e73d",
  storageBucket: "netflix-5e73d.appspot.com",
  messagingSenderId: "827806179488",
  appId: "1:827806179488:web:2c0efd280aab65173069c5",
  measurementId: "G-FV0V16QL0M",
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);
