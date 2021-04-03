import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD3lrGtUqboumIdvtRsBaXHLx5Dtd9bpak",
  authDomain: "twitter-clone-413b7.firebaseapp.com",
  projectId: "twitter-clone-413b7",
  storageBucket: "twitter-clone-413b7.appspot.com",
  messagingSenderId: "767464714733",
  appId: "1:767464714733:web:809e309d711f7e7ad837e4",
  measurementId: "G-W9HYEVG88S"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;