import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCFuFr9KGcJol5-0veno1AXCP1CBuW_BKA",
  authDomain: "crwn-db-8a443.firebaseapp.com",
  projectId: "crwn-db-8a443",
  storageBucket: "crwn-db-8a443.appspot.com",
  messagingSenderId: "303719679296",
  appId: "1:303719679296:web:33a8a66e15526ccd5c26a5",
  measurementId: "G-C7KNNKFJX0",
};

export const createUserProfileDocument = async (userAuth, additionalDate) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalDate });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
