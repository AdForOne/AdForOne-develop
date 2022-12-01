import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useId, useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../../common/firebase/firebase.config";
import { ChatUserInfo } from "../../../../common/recoil/chatuser";

import ChatListUI from "./chatlist.presenter";

export default function ChatListContainer() {
  const [chatUser, setChatUser] = useRecoilState<any>(ChatUserInfo);
  const [chats, setChats] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getChats = () => {
      const unsub = onSnapshot(
        doc(db, "userChats", sessionStorage.uid),
        (doc: any) => {
          setChats(doc.data());
        }
      );

      // Clean up
      return () => {
        unsub();
      };
    };

    sessionStorage.uid && getChats();
  }, []);
  // 유저정보(로그인한 유저)가 바뀔때만 useEffect 로 채팅정보 가져옴
  // 채팅목록에서 채팅 클릭시 그 채팅방 기록을 가져오기 위해서 새롭게 전역변수 설정
  const onClickSelect = (e: any) => {
    setChatUser({
      chatId:
        e.uid > sessionStorage.uid
          ? sessionStorage.uid + e.uid
          : e.uid + sessionStorage.uid,
      userInfo: e,
    });
    router.push(
      `/chatting/${
        e.uid > sessionStorage.uid
          ? sessionStorage.uid + e.uid
          : e.uid + sessionStorage.uid
      }`
    );
  };

  return (
    <>
      <ChatListUI
        chats={chats}
        chatUser={chatUser}
        onClickSelect={onClickSelect}
      />
    </>
  );
}
