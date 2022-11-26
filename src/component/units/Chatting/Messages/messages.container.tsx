import { doc, onSnapshot } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../../common/firebase/firebase.config";
import { ChatUserInfo } from "../../../../common/recoil/chatuser";
import MessagesUI from "./messages.presenter";

export default function MessagesContainer() {
  // To Many Message
  const [chatUser] = useRecoilState<any>(ChatUserInfo);
  const [messages, setMessages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const unSub = onSnapshot(
      doc(db, "chats", chatUser.chatId || router.asPath.split("/")[2]),
      (doc) => {
        doc.exists() && setMessages(doc.data().messages);
      }
    );

    return () => {
      unSub();
    };
  }, [chatUser.chatId]);

  return <MessagesUI messages={messages} />;
}
