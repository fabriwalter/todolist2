import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCfTbtkjZpdUUZMjZnZAf3b0qxyOzdeFTY",
    authDomain: "lista-de-tarefas-409eb.firebaseapp.com",
    projectId: "lista-de-tarefas-409eb",
    storageBucket: "lista-de-tarefas-409eb.appspot.com",
    messagingSenderId: "1049684700451",
    appId: "1:1049684700451:web:2653d17e1350f475abb096",
    measurementId: "G-K8HDKR0WKE"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };