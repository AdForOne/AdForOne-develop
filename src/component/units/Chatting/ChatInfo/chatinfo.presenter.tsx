import * as CI from "./chatinfo.styles";

export default function ChatInfoUI(props: any) {
  return (
    // Chat Info
    <CI.Wrapper>
      <CI.ChatInfoTitle>{props.chatUser.userInfo.email}</CI.ChatInfoTitle>
      <CI.ChatInfo>{props.chatUser.userInfo.value}</CI.ChatInfo>
    </CI.Wrapper>
  );
}
