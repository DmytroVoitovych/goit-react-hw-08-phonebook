import { initializeApp, } from "firebase/app";
import { getAuth, getIdToken, onIdTokenChanged } from "firebase/auth";
// import { handleRefetchOne } from "components/Login/refeth";
import SecureLS from 'secure-ls';
var ls = new SecureLS({ encodingType: 'rc4', });

 export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

  onIdTokenChanged(auth,  (user) => {  // обновление токена

    if (user) {
     ls.set('email', user.email);
    
      getIdToken(user, true).then(r => {return ls.set('token', r); });
      // handleRefetchOne();
     }
  
     return null; 
}); 

