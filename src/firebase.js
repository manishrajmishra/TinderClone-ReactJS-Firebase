import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAH3rIdWiJLGB9cZCn1gq8wdHIcLQcXAIk",
  authDomain: "tinder-clone-42c88.firebaseapp.com",
  projectId: "tinder-clone-42c88",
  storageBucket: "tinder-clone-42c88.appspot.com",
  messagingSenderId: "175395543855",
  appId: "1:175395543855:web:7fc6fe6d2050fc07445fda",
  measurementId: "G-VLTSD46JDK"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
