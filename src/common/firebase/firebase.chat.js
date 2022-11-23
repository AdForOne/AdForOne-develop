import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.config";

export default function useChat() {
  const Chat = async (userID, SearchID) => {
    try {
      await setDoc(doc(db, "Chats", uid), {
        email,
        UsedSNS,
        SNSLink,
        CheckCategory,
        value,
        uid: user.uid,
      });
    } catch (e) {
      console.log(e.message);
    }
  };
  return { useChat };
}
