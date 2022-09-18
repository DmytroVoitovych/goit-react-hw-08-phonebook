import { initializeApp, } from "firebase/app";
import { getAuth, getIdToken, onIdTokenChanged } from "firebase/auth";
import SecureLS from 'secure-ls';

var ls = new SecureLS({ encodingType: 'rc4', });

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

  onIdTokenChanged(auth,  (user) => {  // обновление токена

    if (user) {
     ls.set('email', user.email);
    
      getIdToken(user, true).then(r => {return ls.set('token', r); });
      
     }
  
     return null; 
}); 

