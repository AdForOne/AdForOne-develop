import { useState } from "react";
import SearchUI from "./search.presenter";
import {
  query,
  where,
  collection,
  getDocs,
  getDoc,
  setDoc,
  doc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { auth, db } from "../../../../common/firebase/firebase.config";
import { useRecoilState } from "recoil";
import { UserDisplayName } from "../../../../common/recoil/user";
import { onAuthStateChanged } from "firebase/auth";

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
      querySnapshot.forEach((doc: any) => {
        // 사용자가 있다면 doc 데이터를 설정
        // console.log(doc.data());
        setUser(doc.data());
      });
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e: any) => {
    e.code === "Enter" && handleSearch();
    // 엔터를 치면 handleSearch 함수 발생
  };

  const onClickSelect = async () => {
    // 본인과 검색한 사람의 채팅을 가져와야함
    // ex) 본인의 ID, 상대방 ID를 가져와서 채팅모음에 저장되어 있어야함
    // 그후, 메세지 배열에 메세지 세부정보를 포함
    // 1. 그룹(채팅기록)이 있는지 체크  if not -> 새로운 그룹을 Create
    console.log(user, "유저");
    // try {
    //   const ref = doc(db, "users");
    //   const docSnap = await getDoc(ref);
    //   console.log(ref);
    // } catch (error) {
    //   console.log(error);
    // }
    // 2. 사용자 채팅 생성
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
