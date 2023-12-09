import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { initializeApp } from 'firebase/app';
import 'firebase/compat/storage';
import { getStorage } from 'firebase/storage';
import { ref as stroageRef } from 'firebase/storage';

export const firebaseConfig = {
    apiKey: "AIzaSyDjLaGpQ8uYu6d3oRMBfd4wGqClmAVoBlw",
    authDomain: "reactnativeexpootp.firebaseapp.com",
    projectId: "reactnativeexpootp",
    storageBucket: "reactnativeexpootp.appspot.com",
    messagingSenderId: "680277507467",
    appId: "1:680277507467:web:865df804c4129dc45dc38e",
    measurementId: "G-WWKZB1BTD2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export { stroageRef };