import firebase from 'firebase'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB_RVDC9XknCmlCJYtAfUoT_Ea7VGvTntE",
    authDomain: "noty-d30f8.firebaseapp.com",
    databaseURL: "https://noty-d30f8.firebaseio.com",
    projectId: "noty-d30f8",
    storageBucket: "noty-d30f8.appspot.com",
    messagingSenderId: "743665496313",
    appId: "1:743665496313:web:76b74fd4191e1299993228"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore()
const auth = firebase.auth();
export { db, auth }