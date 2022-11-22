import * as CL from "./chatlist.styles";

export default function ChatListUI(props: any) {
  // console.log(props.User);
  return (
    <CL.Wrapper>
      {/* 일단 디자인만을 위해서 map 함수 사용 */}
      {/* useEffect 로 userChats 을 가져오면 key값 변경, onClickSelect 고차함수에 uid 변수로 넣어주기 */}
      {props.User.map((el: any, i: number) => (
        <CL.UserChatWrapper
          key={i}
          onClick={() => {
            props.onClickSelect;
          }}
        >
          <CL.UsersImg src="https://source.unsplash.com/random" alt="" />
          <CL.UserChatInfo>
            <CL.UserName>{el.Name}</CL.UserName>
            <CL.LatestMessage>{el.Message}</CL.LatestMessage>
          </CL.UserChatInfo>
        </CL.UserChatWrapper>
      ))}
    </CL.Wrapper>
  );
}
