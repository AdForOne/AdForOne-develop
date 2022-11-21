import { doc, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../../common/firebase/firebase.config";
import ChatListUI from "./chatlist.presenter";

const User = [
  { ID: "1", Name: "블랙", Message: "카드1" },
  { ID: "2", Name: "핑크", Message: "카드2" },
  { ID: "3", Name: "뚜두", Message: "카드3" },
  { ID: "4", Name: "뚜두", Message: "카드4" },
  { ID: "5", Name: "마지막", Message: "카드5" },
  { ID: "6", Name: "처럼", Message: "카드6" },
  { ID: "7", Name: "블랙", Message: "카드7" },
  { ID: "8", Name: "핑크", Message: "카드8" },
  { ID: "9", Name: "에리어", Message: "카드9" },
];

export default function ChatListContainer() {
  const [chats, setChats] = useState([]);

  // 계속 데이터를 넣는 것이 아닌 실시간 데이터를 받아서 넣는 것
  useEffect(
    () => {
      const getChats = () => {
        const unsub = onSnapshot(
          doc(db, "userChats", "전역변수 uid"),
          (doc) => {
            setChats(doc.data());
          }
        );
        return () => {
          unsub();
        };
      };

      // 전역변수.uid && getChats();
    },
    [
      /*전역변수 uid*/
    ]
  );

  // 채팅목록에서 채팅 클릭시 그 채팅방 기록을 가져오기 위해서 새롭게 전역변수 설정
  const onClickSelect = () => {};

  return (
    <>
      <ChatListUI User={User} onClickSelect={onClickSelect} />
    </>
  );
}
