import {
  browserSessionPersistence,
  onAuthStateChanged,
  setPersistence,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { AccessToken } from "../recoil/token";
import { UserDisplayName } from "../recoil/user";
import { auth, db } from "./firebase.config";

export default function useLogin() {
  const router = useRouter();
  const [isSuccess, setIsSuccess] = useState();
  const [accessToken, setAccessToken] = useRecoilState(AccessToken);
  const [UserName, setUserName] = useRecoilState(UserDisplayName);
  const login = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        // Signed in
        const user = userCredential.user;
        sessionStorage.setItem("Token", user.accessToken);
        sessionStorage.setItem("displayName", user.displayName);
        sessionStorage.setItem("uid", user.uid);
        setIsSuccess(true);
        // onAuthStateChanged(auth, (user) => {
        //   if (user) {
        //     const uid = user.uid;
        //     // ...
        //   } else {
        //     alert("로그아웃 되었습니다.");
        //   }
        // });
        router.push("/main");
        const docRef = doc(db, "users", user.email);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const UserInfo = docSnap.data();
          console.log(UserInfo);
          sessionStorage.setItem("userEmail", UserInfo.email);
          sessionStorage.setItem("userUsedSNS", UserInfo.UsedSNS);
          sessionStorage.setItem("userSNSLink", UserInfo.SNSLink);
          sessionStorage.setItem("userCheckCategory", UserInfo.CheckCategory);
          sessionStorage.setItem("userValue", UserInfo.value);
        } else {
          // doc.data() will be undefined in this case
        }
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
