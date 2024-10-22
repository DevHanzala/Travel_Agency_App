import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBe_knA9RuwFbXILrMinQ1pwZg_nQDZ4h0",
  authDomain: "travel-agency-app-c8c17.firebaseapp.com",
  projectId: "travel-agency-app-c8c17",
  storageBucket: "travel-agency-app-c8c17.appspot.com",
  messagingSenderId: "629016521252",
  appId: "1:629016521252:web:d1ef7a6fee2e47a01606b1",
  measurementId: "G-PMS3QLGSXJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);
export const db=getFirestore(app)
// Export both app and auth
export {auth}
export default app;