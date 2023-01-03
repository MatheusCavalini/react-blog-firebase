import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyA3-76znE_hobJJn0LufgEVrPiFEbOn8gI",
  authDomain: "miniblog-fbef6.firebaseapp.com",
  projectId: "miniblog-fbef6",
  storageBucket: "miniblog-fbef6.appspot.com",
  messagingSenderId: "588563052245",
  appId: "1:588563052245:web:db05a035e487dc142dd45c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };