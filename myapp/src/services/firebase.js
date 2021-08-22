import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAaJ3Rqk04J3b2tYCSnYXQxPCiblbcHbPc",
    authDomain: "gb-react-lesson9.firebaseapp.com",
    projectId: "gb-react-lesson9",
    storageBucket: "gb-react-lesson9.appspot.com",
    messagingSenderId: "691163591658",
    appId: "1:691163591658:web:14a174d80a22443afa3893",
};

firebase.initializeApp(firebaseConfig);


export const db = firebase.database();
export const auth = firebase.auth();