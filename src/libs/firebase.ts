
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: Process.env.REACT_APP_FIREBASE_APIKEY
  authDomain: Process.env.REACT_APP_FIREBASE_AUTHDOMAIN,
  databaseURL: Process.env.REACT_APP_FIREBASE_DATABASEURL,
  projectId: Process.env.REACT_APP_FIREBASE_PROJECTID,
  storageBucket: Process.env.REACT_APP_FIREBASE_STORAGEBUCKET,
  messagingSenderId: Process.env.REACT_APP_FIREBASE_MENSSAGINGSENDERID,
  appId: Process.env.REACT_APP_FIREBASE_APPID,
  measurementId: Process.env.REACT_APP_FIREBASE_MEASUREMENTID
};


const galleryapp = initializeApp(firebaseConfig);

export const storage = getStorage(galleryapp);