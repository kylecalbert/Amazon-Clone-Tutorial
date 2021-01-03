//connecting database to react
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBhB7dPGGQ92jFWF_4QeCQSDysF14Yo43E",
    authDomain: "clone-1bfd1.firebaseapp.com",
    projectId: "clone-1bfd1",
    storageBucket: "clone-1bfd1.appspot.com",
    messagingSenderId: "1042392861377",
    appId: "1:1042392861377:web:ee220196b2c55a9294a240",
    measurementId: "G-CK7TWBMNZ4"

});


const auth = firebase.auth();
export{auth};
