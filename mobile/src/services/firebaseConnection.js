import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/firestore';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCn_RyUSR5_c5HjmE2U17J2aLdXcx7cszU",
  authDomain: "databasefb-6948c.firebaseapp.com",
  projectId: "databasefb-6948c",
  storageBucket: "databasefb-6948c.appspot.com",
  messagingSenderId: "188705054886",
  appId: "1:188705054886:web:5e688ff81c52580d6e9467",
  measurementId: "G-PY7V5TNJZ5"
};

// Initialize Firebase
//if(firebaseConfig.apps.length === 0){
    Firebase = initializeApp(firebaseConfig);
    //const analytics = getAnalytics(Firebase);
//}
export default Firebase;

//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);