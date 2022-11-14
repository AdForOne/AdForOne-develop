import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore/lite";
import { auth, db } from "./firebase.config";

export default function useSignin() {
  /** email, password, UsedSNS, SNSLink, CheckCategory */
  const signIn = (
    displayName,
    email,
    password,
    UsedSNS,
    SNSLink,
    CheckCategory,
    value
  ) => {
    createUserWithEmailAndPassword(auth, email, password, displayName)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        await updateProfile(auth.currentUser, {
          displayName,
        })
          .then(() => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            console.log(error.message);
          });
        try {
          const docRef = addDoc(collection(db, "users"), {
            email,
            UsedSNS,
            SNSLink,
            CheckCategory,
            value,
          });
          console.log("Document written with ID: ", docRef.email);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        // ..
      });
  };

  return { signIn };
}
