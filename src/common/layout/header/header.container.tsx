import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { collection, doc, getDoc, getDocs } from "firebase/firestore/lite";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { auth, db } from "../../firebase/firebase.config";
import { AccessToken } from "../../recoil/token";
import { UserDisplayName } from "../../recoil/user";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const [isLogin, setIsLogin] = useState(false);
  const [UserName, setUserName] = useState("");
  const router = useRouter();

  const onClickMoveToPage = (event: MouseEvent<HTMLImageElement>) => {
    const href = event.currentTarget.id;
    router.push(href);
    console.log(sessionStorage.getItem("UserInfo"));
  };

  const onClickLogOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        router.push("/login");
        alert("로그아웃 되었습니다.");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      setIsLogin(true);
      setUserName(sessionStorage.getItem("displayName"));
    } else {
      setIsLogin(false);
    }
  });
  return (
    <HeaderPresenter
      onClickMoveToPage={onClickMoveToPage}
      onClickLogOut={onClickLogOut}
      UserName={UserName}
      isLogin={isLogin}
    />
  );
}
