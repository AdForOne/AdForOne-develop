import * as CH from "./chatting.styles";
import ChatListContainer from "./ChatList/chatlist.container";
import NavBarContainer from "./Navbar/navbar.container";
import SearchContainer from "./Search/search.container";
import ChatInfoContainer from "./ChatInfo/chatinfo.container";
import MessagesContainer from "./Messages/messages.container";
import InputContainer from "./Messages/MessageInput/Input.container";

export default function ChattingPresenter() {
  return (
    <CH.Wrapper>
      <CH.Container>
        {/* SideBar */}
        <CH.SideBar>
          <NavBarContainer />
          <SearchContainer />
          <ChatListContainer />
        </CH.SideBar>

        {/* ChatBar */}
        <CH.ChatBar>
          <ChatInfoContainer />
          <MessagesContainer />
          <InputContainer />
        </CH.ChatBar>
      </CH.Container>
    </CH.Wrapper>
  );
}
