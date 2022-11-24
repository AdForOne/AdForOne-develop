import { useRecoilState } from "recoil";
import { ChatUser } from "../../../../common/recoil/chatuser";
import ChatInfoUI from "./chatinfo.presenter";

export default function ChatInfoContainer() {
  const [chatUser] = useRecoilState(ChatUser);

  return (
    <>
      <ChatInfoUI chatUser={chatUser} />
    </>
  );
}
