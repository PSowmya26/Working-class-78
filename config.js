import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyCbyY1xqgdn0MBdb0RCo6tkNcMFPMFd0LU",
  authDomain: "book-santa-cca7c.firebaseapp.com",
  databaseURL: "https://book-santa-cca7c.firebaseio.com",
  projectId: "book-santa-cca7c",
  storageBucket: "book-santa-cca7c.appspot.com",
  messagingSenderId: "577705142721",
  appId: "1:577705142721:web:8a673c29f39d9de98ce740",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
