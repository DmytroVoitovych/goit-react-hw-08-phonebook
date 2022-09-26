import { initializeApp, } from "firebase/app";
import { getAuth, } from "firebase/auth";

 export const firebaseConfig = {
 apiKey: "AIzaSyCJO6J5S13Pdm3k-fiqWujVysknh69eHLg",
  authDomain: "autorisation-cda1f.firebaseapp.com",
  databaseURL: "https://autorisation-cda1f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "autorisation-cda1f",
  storageBucket: "autorisation-cda1f.appspot.com",
  messagingSenderId: "585852637723",
  appId: "1:585852637723:web:f798ec72fd1c6e84701ebe"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

