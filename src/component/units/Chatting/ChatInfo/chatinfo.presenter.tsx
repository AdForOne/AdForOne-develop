import * as CI from "./chatinfo.styles";

export default function ChatInfoUI(props: any) {
  return (
    // Chat Info
    <CI.Wrapper>
      <CI.ChatInfoTitle>{props.chatUser.displayName}</CI.ChatInfoTitle>
      <CI.ChatInfo>{props.chatUser.value}</CI.ChatInfo>
    </CI.Wrapper>
  );
}
