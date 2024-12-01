import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCEv2oDpEN3qNXBkrj93sgvujcYZY3D-Ak",
  authDomain: "confirma-zap.firebaseapp.com",
  projectId: "confirma-zap",
  storageBucket: "confirma-zap.firebasestorage.app",
  messagingSenderId: "735749742554",
  appId: "1:735749742554:web:3bb08cfe452db8f383eae3",
  measurementId: "G-NJ33QBHJN0"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };