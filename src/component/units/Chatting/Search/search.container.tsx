import { ChangeEvent, KeyboardEvent, useState } from "react";
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

export default function SearchContainer() {
  const [userName, setUserName] = useState<string>("");
  const [user, setUser] = useState<null | any>(null);
  const [err, setErr] = useState<boolean>(false);

  const handleSearch = async () => {
    // firebase query문
    const q = query(
      collection(db, "users"),
      where("displayName", "==", userName)
    );

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

  const handleKey = (e: KeyboardEvent) => {
    // 나와의 채팅일시 return 으로 함수 종료
    if (userName === sessionStorage.displayName) {
      setErr(true);
      return;
    }
    e.code === "Enter" && handleSearch();
  };

  const onChangeUserName = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
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
            displayName: user.displayName,
            value: user.value,
            profileImg: user.profileImg,
          },
          [ChatID + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [ChatID + ".userInfo"]: {
            uid: sessionStorage.uid,
            email: sessionStorage.userEmail,
            displayName: sessionStorage.displayName,
            value: sessionStorage.userValue,
            profileImg: sessionStorage.profileImg,
          },
          [ChatID + ".date"]: serverTimestamp(),
        });
      }
    } catch (error: any) {
      console.log("에러", error.message);
    }
    setUser(null);
    setUserName("");
  };

  return (
    <>
      <SearchUI
        userName={userName}
        onChangeUserName={onChangeUserName}
        user={user}
        err={err}
        handleKey={handleKey}
        onClickSelect={onClickSelect}
      />
    </>
  );
}
