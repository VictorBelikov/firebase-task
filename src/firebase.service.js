import firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyB0Fo3iYdEnTegxKUFy_P1WkJc7Z-UDbt4',
  authDomain: 'rss-firebase-task.firebaseapp.com',
  databaseURL: 'https://rss-firebase-task.firebaseio.com',
  projectId: 'rss-firebase-task',
  storageBucket: 'rss-firebase-task.appspot.com',
  messagingSenderId: '177135220242',
};
const fire = firebase.initializeApp(config);

const provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');

export const fb = {
  login: () => fire.auth().signInWithPopup(provider),
};
