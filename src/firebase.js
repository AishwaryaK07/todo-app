import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
        apiKey: "AIzaSyBFC1OGFPMU5Q-JsxdQ8ZwfeZIXHJLMPKw",
        authDomain: "todo-app-59eb6.firebaseapp.com",
        databaseURL: "https://todo-app-59eb6.firebaseio.com",
        projectId: "todo-app-59eb6",
        storageBucket: "todo-app-59eb6.appspot.com",
        messagingSenderId: "223638826521",
        appId: "1:223638826521:web:3f80b0b9b5c6c249570488",
        measurementId: "G-H9X41FX39F"
});

const db = firebaseApp.firestore();

export default db;
