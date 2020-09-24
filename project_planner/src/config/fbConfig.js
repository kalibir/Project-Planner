 import firebase from "firebase/app";
 import 'firebase/firestore';
 import 'firebase/auth';
 import 'firebase/analytics';



 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAKFbYeg5EDXnGrctqewSgNZPgnW68FC_I",
    authDomain: "project-plan-a63b5.firebaseapp.com",
    databaseURL: "https://project-plan-a63b5.firebaseio.com",
    projectId: "project-plan-a63b5",
    storageBucket: "project-plan-a63b5.appspot.com",
    messagingSenderId: "531144735866",
    appId: "1:531144735866:web:3c52e30f4c157ff1e70fc3",
    measurementId: "G-T7NCELC0XE"
  };
  

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

 export default firebase;