import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBJnZNJNniDC-mIQ9akn5NAOYKmoMYXA34",
  authDomain: "insta-clone-react-942e1.firebaseapp.com",
  projectId: "insta-clone-react-942e1",
  storageBucket: "insta-clone-react-942e1.appspot.com",
  messagingSenderId: "166590610027",
  appId: "1:166590610027:web:340723b6aa702e03738f2e",
  measurementId: "G-FZBJ8WYGT8"
  
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

