import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../../common/firebase/firebase.config";
import { ChatUser } from "../../../../common/recoil/chatuser";
import ChatListUI from "./chatlist.presenter";

export default function ChatListContainer() {
  const [chatUser, setChatUser] = useRecoilState(ChatUser);
  const [chats, setChats] = useState([]);

  // 계속 데이터를 넣는 것이 아닌 실시간 데이터를 받아서 넣어야함
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
    setChatUser(e);
  };
  // console.log(chatUser);

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
