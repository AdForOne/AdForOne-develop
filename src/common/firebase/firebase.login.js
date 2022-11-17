import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
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
        const refreshToken = user.refreshToken;
        console.log(refreshToken);
        // setAccessToken(user.accessToken);
        sessionStorage.setItem("Token", user.accessToken);
        sessionStorage.setItem("displayName", user.displayName);
        // setUserName(displayName);
        setIsSuccess(true);
        onAuthStateChanged(auth, (user) => {
          if (user) {
            const uid = user.uid;
            // ...
          } else {
            alert("로그아웃 되었습니다.");
          }
        });
        router.push("/main");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setIsSuccess(false);
        alert("존재하지 않는 아이디 입니다.");
      });
  };

  return { login, isSuccess, signOut };
}
