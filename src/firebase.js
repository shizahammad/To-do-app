import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
 
        apiKey: "AIzaSyB3ahqyC5VUT50tlSeZ1AFmjvl6T85TP5I",
        authDomain: "to-do-79c8d.firebaseapp.com",
        databaseURL: "https://to-do-79c8d.firebaseio.com",
        projectId: "to-do-79c8d",
        storageBucket: "to-do-79c8d.appspot.com",
        messagingSenderId: "561799756260",
        appId: "1:561799756260:web:86200a736f18f3c5b66ff1",
        measurementId: "G-CVYPPWJ71E"

});
const db =firebaseApp.firestore();
export default db;