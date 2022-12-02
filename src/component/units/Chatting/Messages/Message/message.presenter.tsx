import * as MS from "./message.styles";

export default function MessageUI(props: any) {
  return (
    // Message owener
    <MS.Wrapper id={props.message.id}>
      <MS.MessageInfo>
        {/* 메세지 정보 */}
        <MS.UserImg src="https://source.unsplash.com/random" alt="상대프사" />
        <span>{props.message.time.toLocaleTimeString()}</span>
      </MS.MessageInfo>
      <MS.MessageContext>
        {/* 메세지 내용 */}
        <MS.MessageText id={props.message.id}>
          {props.message.text ? props.message.text : "Hello"}
        </MS.MessageText>
        {/* <img src="https://source.unsplash.com/random" alt="상대가 올린 이미지" /> */}
      </MS.MessageContext>
    </MS.Wrapper>
  );
}
