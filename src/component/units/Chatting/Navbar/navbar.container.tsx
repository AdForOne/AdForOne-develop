import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../../common/firebase/firebase.config";
import NavBarUI from "./navbar.presenter";

export default function NavBarContainer() {
  const [UserName, setUserName] = useState("");

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      setUserName(sessionStorage.getItem("displayName"));
    }
  });

  return (
    <>
      <NavBarUI UserName={UserName} />
    </>
  );
}
