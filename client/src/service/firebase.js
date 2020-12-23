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

export const firebaseInit = () => {
  firebase.initializeApp(firebaseConfig);
  console.log('firebase init');
};

export const auth = firebase.auth;

export function signInWithGoogle() {
  const provider = new auth.GoogleAuthProvider();
  auth()
    .signInWithPopup(provider)
    .catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode);
      alert(errorCode);

      var errorMessage = error.message;
      console.log(errorMessage);
      alert(errorMessage);
    });
}
