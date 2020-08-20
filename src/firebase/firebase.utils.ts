import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyCDPyRMe2hsShuC7E935-bThyF0fRb_Bqg",
  authDomain: "crwn-db-b0743.firebaseapp.com",
  databaseURL: "https://crwn-db-b0743.firebaseio.com",
  projectId: "crwn-db-b0743",
  storageBucket: "crwn-db-b0743.appspot.com",
  messagingSenderId: "427342062245",
  appId: "1:427342062245:web:5c070f217f4840a139634c",
  measurementId: "G-N8CPWSCKK5"
};

export const createUserProfileDocument = async (userAuth: any, additionalData: any) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error(error.message);
    }
  }

  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;