// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAxuBdVfDPa7MRUM2rk1B9amt7k9Fx9l4M',
  authDomain: 'markdown-7a4e7.firebaseapp.com',
  projectId: 'markdown-7a4e7',
  storageBucket: 'markdown-7a4e7.appspot.com',
  messagingSenderId: '627192995682',
  appId: '1:627192995682:web:b7ebcbfd962fa94ff4163b',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
