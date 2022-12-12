import * as CL from "./chatlist.styles";
import { IChatList } from "./chatlist.type";

export default function ChatListUI(props: IChatList) {
  return (
    <CL.Wrapper>
      {Object.entries(props.chats)
        .sort((a: any, b: any) => b[1].date - a[1].date)
        .map((el: any) => (
          <CL.UserChatWrapper
            key={el[0]}
            onClick={() => {
              props.onClickSelect(el[1].userInfo);
            }}
          >
            <CL.UsersImg
              src={
                el[1].userInfo?.profileImg
                  ? el[1].userInfo.profileImg
                  : "/Profile.png"
              }
              alt=""
            />
            <CL.UserChatInfo>
              <CL.UserName>{el[1].userInfo?.displayName}</CL.UserName>
              <CL.LatestMessage>
                {/* 최근메세지 */}
                {el[1].userInfo?.lastMessage?.text}
              </CL.LatestMessage>
            </CL.UserChatInfo>
          </CL.UserChatWrapper>
        ))}
    </CL.Wrapper>
  );
}
