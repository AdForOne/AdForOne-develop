import * as MS from "./message.styles";

export default function MessageUI(props: any) {
  return (
    // Message owener
    <MS.Wrapper id="owener">
      <MS.MessageInfo>
        {/* 메세지 정보 */}
        <MS.UserImg src="https://source.unsplash.com/random" alt="상대프사" />
        <span>Just Now</span>
      </MS.MessageInfo>
      <MS.MessageContext>
        {/* 메세지 내용 */}
        <MS.MessageText>
          {props.message ? props.message : "Hello"}
        </MS.MessageText>
        {/* <img src="https://source.unsplash.com/random" alt="상대가 올린 이미지" /> */}
      </MS.MessageContext>
    </MS.Wrapper>
  );
}
