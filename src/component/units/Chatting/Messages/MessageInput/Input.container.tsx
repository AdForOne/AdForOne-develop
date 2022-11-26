import {
  arrayUnion,
  doc,
  serverTimestamp,
  Timestamp,
  updateDoc,
} from "firebase/firestore";
import { useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../../../common/firebase/firebase.config";
import { ChatUserInfo } from "../../../../../common/recoil/chatuser";
import InputUI from "./Input.presenter";
import { v4 as uuid } from "uuid";

export default function InputContainer() {
  const [text, setText] = useState("");
  const [chatUser] = useRecoilState<any>(ChatUserInfo);
  // const [img, setImg] = useState(null);

  // arrayUnion() 은 배열에 요소를 추가하지만 아직 존재하지 않는 요소만 추가합니다.
  const MessageSubmit = async (e: any) => {
    await updateDoc(doc(db, "chats", chatUser.chatId), {
      messages: arrayUnion({
        id: uuid(),
        text,
        senderId: sessionStorage.uid,
        date: Timestamp.now(),
      }),
    });
    await updateDoc(doc(db, "userChats", sessionStorage.uid), {
      [chatUser.chatId + ".lastMessage"]: {
        text,
      },
      [chatUser.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", chatUser.userInfo.uid), {
      [chatUser.chatId + ".lastMessage"]: {
        text,
      },
      [chatUser.chatId + ".date"]: serverTimestamp(),
    });

    setText("");
  };

  return (
    <InputUI text={text} setText={setText} MessageSubmit={MessageSubmit} />
  );
}
