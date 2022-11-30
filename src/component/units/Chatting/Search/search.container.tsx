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

import { db } from "../../../../common/firebase/firebase.config";

// 파이어베이스 DB가져오기

export default function SearchContainer() {
  const [userEmail, setUserEmail] = useState("");
  const [user, setUser] = useState<null | any>(null);
  const [err, setErr] = useState(false);
  // 로그인이 되있는지 확인 및 전역변수를 통해 유저정보 가져오기?
  // const [LoginUser, setLoginUser] = useRecoil????

  const handleSearch = async () => {
    // firebase query문
    const q = query(collection(db, "users"), where("email", "==", userEmail));

    // 코드 최적화 필요 11/23
    try {
      const querySnapshot = await getDocs(q);
      // 유저가 없다면
      if (querySnapshot.docs.length === 0) {
        setErr(true);
        setUser(null);
      } else {
        querySnapshot.forEach((doc: any) => {
          // 사용자가 있다면 doc 데이터를 설정
          setUser(doc.data());
          setErr(false);
        });
      }
    } catch (err) {
      setErr(true);
    }
  };

  const handleKey = (e: any) => {
    e.code === "Enter" && handleSearch();
  };

  const onClickSelect = async () => {
    // 본인과 검색한 사람의 채팅을 가져와야함
    // ex) 본인의 ID, 상대방 ID를 가져와서 채팅모음에 저장되어 있어야함
    // 그후, 메세지 배열에 메세지 세부정보를 포함
    // 1. 그룹(채팅기록)이 있는지 체크  if not -> 새로운 그룹을 Create
    const ChatID =
      user.uid > sessionStorage.uid
        ? sessionStorage.uid + user.uid
        : user.uid + sessionStorage.uid;
    try {
      const res = await getDoc(doc(db, "chats", ChatID));

      if (!res.exists()) {
        // 2. 사용자 채팅 생성 res 데이터가 없다면
        // chats 컬렉션 생성, messages 라는 객체를 담아서
        await setDoc(doc(db, "chats", ChatID), { messages: [] });
        // userChats은 회원가입하면서 만들어진 컬렉션 (채팅을 담을 컬렉션)
        // userChats컬렉션을 updateDoc 으로 수정

        await updateDoc(doc(db, "userChats", sessionStorage.uid), {
          [ChatID + ".userInfo"]: {
            uid: user.uid,
            email: user.email,
          },
          [ChatID + ".date"]: serverTimestamp(),
        });
        await updateDoc(doc(db, "userChats", user.uid), {
          [ChatID + ".userInfo"]: {
            uid: sessionStorage.uid,
            email: sessionStorage.userEmail,
          },
          [ChatID + ".date"]: serverTimestamp(),
        });
      }
    } catch (error: any) {
      console.log("에러", error.message);
    }
    setUser(null);
    setUserEmail("");
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
