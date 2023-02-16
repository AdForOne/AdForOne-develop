import { onAuthStateChanged, signOut } from "firebase/auth";
import { useRouter } from "next/router";
import { MouseEvent, useEffect, useState } from "react";
import { auth, db } from "../../firebase/firebase.config";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const [isLogin, setIsLogin] = useState(false);
  const [UserName, setUserName] = useState("");
  const router = useRouter();

  const onClickMoveToPage = (event: MouseEvent<HTMLImageElement>) => {
    const href = event.currentTarget.id;
    router.push(href);
  };
  const onClickMoveToMyPage = async () => {
    await router.push(`/myPage/detail/${sessionStorage.getItem("userEmail")}`);
    router.reload();
  };

  const onClickLogOut = () => {
    signOut(auth)
      .then(() => {
        sessionStorage.clear();
        router.push("/login");
        alert("로그아웃 되었습니다.");
      })
      .catch((e) => {});
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
      onClickMoveToMyPage={onClickMoveToMyPage}
    />
  );
}
