import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase.config";

export default function useSignin() {
  /** displayName, email, password, UsedSNS, SNSLink, CheckCategory, value */
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
          await setDoc(doc(db, "users", email), {
            email,
            UsedSNS,
            SNSLink,
            CheckCategory,
            value,
            uid: user.uid,
          });
          // 유저채팅정보
          await setDoc(doc(db, "userChats", user.uid), {
            // userChatInfo,
          });
        } catch (e) {
          console.log(e.message);
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
