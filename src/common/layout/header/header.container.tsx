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
  // recoil State
  const onClickMoveToPage = (event: MouseEvent<HTMLImageElement>) => {
    const href = event.currentTarget.id;
    router.push(href);
  };

  const onClickLogOut = () => {
    signOut(auth)
      .then(() => {
        // setAccessToken("");
        sessionStorage.clear();
        router.push("/login");
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
      const docRef = doc(db, "cities", "SF");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
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
