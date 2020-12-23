import firebase from 'firebase';

var firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'justin-money.firebaseapp.com',
  projectId: 'justin-money',
  storageBucket: 'justin-money.appspot.com',
  messagingSenderId: '877189545041',
  appId: '1:877189545041:web:e98954b369ecda6e048c70',
  measurementId: 'G-4MKTEQHET3',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth;
