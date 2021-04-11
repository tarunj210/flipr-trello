import firebase from 'firebase/app';
import 'firebase/auth';
var firebaseConfig = {
  apiKey: "AIzaSyCI-svv8bzVxk4xmfdxT43xdBX5rYVPiOE",
  authDomain: "login-373f6.firebaseapp.com",
  projectId: "login-373f6",
  storageBucket: "login-373f6.appspot.com",
  messagingSenderId: "647581636078",
  appId: "1:647581636078:web:4904087309c02f780e6aff",
  measurementId: "G-TYGZGZRV4E"
};
const fire = firebase.default.initializeApp(firebaseConfig);

export default fire;