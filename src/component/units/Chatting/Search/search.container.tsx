import { useState } from "react";
import SearchUI from "./search.presenter";
import {
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";
import { db } from "../../../../common/firebase/firebase.config";
// 파이어베이스 DB가져오기

export default function SearchContainer() {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState(null);
  const [err, setErr] = useState(false);
  // 로그인이 되있는지 확인 및 전역변수를 통해 유저정보 가져오기?
  // const [LoginUser, setLoginUser] = useRecoil????

  const handleSearch = async () => {
    // firebase query문
    const q = query(collection(db, "users"), where("email", "==", userEmail));
    try {
      const querySnapshot = await getDocs(q);
      console.log(querySnapshot);
      // querySnapshot.forEach((doc) => {
      //   setUser(doc.data());
      // });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e: any) => {
    e.code === "Enter" && handleSearch();
    // 엔터를 치면 handleSearch 함수 발생
  };

  const onClickSelect = () => {
    const q2 = query(collection(db, "users"));
    console.log(q2);
  };

  return (
    <>
      <SearchUI
        userEmail={userEmail}
        setUserEmail={setUserEmail}
        user={user}
        err={err}
        handleSearch={handleSearch}
        handleKey={handleKey}
        onClickSelect={onClickSelect}
      />
    </>
  );
}
