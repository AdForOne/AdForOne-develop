import Message from "./Message/message.container";
import * as MS from "./messages.styles";

export default function MessagesUI(props: any) {
  return (
    // To Many Message
    <MS.Wrapper>
      {props.messages?.map((m: any) => (
        <Message
          text={m.text}
          key={m.id}
          id={m.senderId}
          time={m.date.toDate()}
        />
      ))}
    </MS.Wrapper>
  );
}
