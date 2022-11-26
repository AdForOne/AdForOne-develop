import Message from "./Message/message.container";
import * as MS from "./messages.styles";

export default function MessagesUI(props: any) {
  console.log(props.messages);
  return (
    // To Many Message
    <MS.Wrapper>
      {props.messages?.map((m: any) => (
        <Message message={m.text} key={m.id} />
      ))}
    </MS.Wrapper>
  );
}
