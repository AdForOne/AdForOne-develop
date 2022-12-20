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

  const onClickBack = () => {
    router.push(`/myPage/detail/${sessionStorage.getItem("userEmail")}`);
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
