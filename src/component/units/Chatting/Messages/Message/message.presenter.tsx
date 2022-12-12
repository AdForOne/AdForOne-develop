import * as MS from "./message.styles";

export default function MessageUI(props: any) {
  const Dateoptions = {
    year: "2-digit",
    month: "long",
    day: "numeric",
  };
  const Timeoptions = {
    hour: "numeric",
    minute: "2-digit",
  };
  return (
    // Message owener
    <MS.Wrapper id={props.message.id}>
      <MS.MessageInfo>
        {/* 메세지 정보 */}
        <MS.UserImg
          src={
            props.message.profileImg ? props.message.profileImg : "/Profile.png"
          }
          alt="상대프사"
        />
        <span>
          {props.message.time.toLocaleDateString("ko-KR", Dateoptions)}
        </span>
        <span>
          {props.message.time.toLocaleTimeString("ko-KR", Timeoptions)}
        </span>
      </MS.MessageInfo>
      <MS.MessageContext>
        {/* 메세지 내용 */}
        <MS.MessageText id={props.message.id}>
          {props.message.text}
          {props.message.img && <MS.ChatIMG src={props.message.img} alt="" />}
        </MS.MessageText>
      </MS.MessageContext>
    </MS.Wrapper>
  );
}
