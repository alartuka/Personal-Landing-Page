// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBwOz-8DOQ6_PrEczbKQcM6mdlHofPR2c",
  authDomain: "tuka-alsharief-site.firebaseapp.com",
  databaseURL: "https://tuka-alsharief-site-default-rtdb.firebaseio.com",
  projectId: "tuka-alsharief-site",
  storageBucket: "tuka-alsharief-site.appspot.com",
  messagingSenderId: "498292335178",
  appId: "1:498292335178:web:4bc0273b2498e1291dbcb3",
  measurementId: "G-B2PH9BLXB1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
