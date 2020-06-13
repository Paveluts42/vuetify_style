import firebase from "firebase/app";
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyBhw1NR5SunnHM0560MxDjU6ZWJP8tS_pc",
    authDomain: "vuetify-app-f98f7.firebaseapp.com",
    databaseURL: "https://vuetify-app-f98f7.firebaseio.com",
    projectId: "vuetify-app-f98f7",
    storageBucket: "vuetify-app-f98f7.appspot.com",
    messagingSenderId: "358265026828",
    appId: "1:358265026828:web:600766ab2329e2d7ecf129"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db=firebase.firestore()

db.settings({
})

export default db
