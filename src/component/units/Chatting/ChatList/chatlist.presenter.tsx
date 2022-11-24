import * as CL from "./chatlist.styles";

export default function ChatListUI(props: any) {
  // 객체를 entries()함수로 배열로 바꾸고 sort 를 활용해서 채팅저장할때 만든 date(시간)순으로 정렬
  // map 으로 userInfo 뿌리면 채팅목록 시간순으로 가능
  // console.log(
  //   Object.entries(chats).sort((a: any, b: any) => b[1].date - a[1].date)
  // );
  return (
    <CL.Wrapper>
      {/* 일단 디자인만을 위해서 map 함수 사용 */}
      {/* useEffect 로 userChats 을 가져오면 key값 변경, onClickSelect 고차함수에 uid 변수로 넣어주기 */}
      {Object.entries(props.chats)
        .sort((a: any, b: any) => b[1].date - a[1].date)
        .map((el: any) => (
          <CL.UserChatWrapper
            key={el[0]}
            onClick={() => {
              props.onClickSelect(el[1].userInfo);
            }}
          >
            <CL.UsersImg src="https://source.unsplash.com/random" alt="" />
            <CL.UserChatInfo>
              <CL.UserName>{el[1].userInfo.email}</CL.UserName>
              <CL.LatestMessage>
                {/* 최근메세지 */}
                {el[1].userInfo.lastMessage?.text}
              </CL.LatestMessage>
            </CL.UserChatInfo>
          </CL.UserChatWrapper>
        ))}
    </CL.Wrapper>
  );
}
