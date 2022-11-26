import { useRecoilState } from "recoil";
import { ChatUserInfo } from "../../../../common/recoil/chatuser";
import ChatInfoUI from "./chatinfo.presenter";

export default function ChatInfoContainer() {
  const [chatUser] = useRecoilState(ChatUserInfo);

  return (
    <>
      <ChatInfoUI chatUser={chatUser} />
    </>
  );
}
