import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: 'AIzaSyB6hSufCYul-i_foaNNehAwn1amit1iC6A',
    authDomain: 'react-translate-bf486.firebaseapp.com',
    projectId: 'react-translate-bf486',
    storageBucket: 'react-translate-bf486.appspot.com',
    messagingSenderId: '940014080366',
    appId: '1:940014080366:web:8fd24c74426f5e5295717f',
    measurementId: 'G-RJMGQZ6XG2'
};

// if initialized use one, else create one
const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
