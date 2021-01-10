import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDHncaS1WsjR_6hT2XeSI1h2biZyyVX4Jg",
  authDomain: "tinder-clone-5b4b7.firebaseapp.com",
  databaseURL: "https://tinder-clone-5b4b7.firebaseio.com",
  projectId: "tinder-clone-5b4b7",
  storageBucket: "tinder-clone-5b4b7.appspot.com",
  messagingSenderId: "332327254712",
  appId: "1:332327254712:web:ef879d7f84f29d2083524d",
  measurementId: "G-KLY68YS5N7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
