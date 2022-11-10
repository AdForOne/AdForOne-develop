import * as CH from "./chatting.styles";
import ChatListContainer from "./ChatList/chatlist.container";
import NavBarContainer from "./Navbar/navbar.container";
import SearchContainer from "./Search/search.container";

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
        <CH.ChatBar>채팅메신저</CH.ChatBar>
      </CH.Container>
    </CH.Wrapper>
  );
}
