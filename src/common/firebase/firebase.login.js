import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AccessToken } from "../recoil/token";
import { UserDisplayName } from "../recoil/user";
import { auth } from "./firebase.config";

export default function useLogin() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState();
  const [accessToken, setAccessToken] = useRecoilState(AccessToken);
  const [UserName, setUserName] = useRecoilState(UserDisplayName);
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const displayName = user.displayName;
        console.log(displayName);
        setAccessToken(user.accessToken);
        setUserName(displayName);
        setIsSuccess(true);
        // ...
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            console.log(uid);
            // ...
          } else {
            alert("로그아웃 되었습니다.");
          }
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsSuccess(false);
      });
  };

  return { login, isSuccess, signOut };
}
