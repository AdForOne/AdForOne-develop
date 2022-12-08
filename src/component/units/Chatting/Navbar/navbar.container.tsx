import { onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { useState } from "react";
import { auth } from "../../../../common/firebase/firebase.config";
import NavBarUI from "./navbar.presenter";

export default function NavBarContainer() {
  const [UserName, setUserName] = useState<string | null>("");
  const [UserIMG, setUserIMG] = useState<string | null>("");
  const router = useRouter();

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      setUserName(sessionStorage.getItem("displayName"));
      setUserIMG(sessionStorage.getItem("profileImg"));
    }
  });

  // 이전페이지로 이동
  // 수정필요
  const onClickBack = () => {
    router.push("http://localhost:3000/myPage/edit");
  };

  return (
    <>
      <NavBarUI
        UserName={UserName}
        UserIMG={UserIMG}
        onClickBack={onClickBack}
      />
    </>
  );
}
