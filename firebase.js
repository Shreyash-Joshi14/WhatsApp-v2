// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBUNt_JCBxKNxkE020muMLo1o9KKTYtRcQ",
//   authDomain: "whatsapp-2-c08b6.firebaseapp.com",
//   projectId: "whatsapp-2-c08b6",
//   storageBucket: "whatsapp-2-c08b6.appspot.com",
//   messagingSenderId: "893099026300",
//   appId: "1:893099026300:web:1d615a4e59d4d446e9e6f9"
// };

// const app = !firebase.apps.length
//   ? firebase.initializeApp(firebaseConfig)
//   : firebase.app();

// const db = app.firestore();
// const auth = app.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { db, auth, provider };




import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBUNt_JCBxKNxkE020muMLo1o9KKTYtRcQ",
  authDomain: "whatsapp-2-c08b6.firebaseapp.com",
  projectId: "whatsapp-2-c08b6",
  storageBucket: "whatsapp-2-c08b6.appspot.com",
  messagingSenderId: "893099026300",
  appId: "1:893099026300:web:1d615a4e59d4d446e9e6f9"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };