import * as SC from "./search.styles";

export default function SearchUI() {
  return (
    <SC.Wrapper>
      <SC.SearchBox>
        <SC.SearchInput type="text" placeholder="유저찾기" />
      </SC.SearchBox>
      <SC.UserChatWrapper>
        <SC.UsersImg src="https://source.unsplash.com/random" alt="" />
        <SC.UserChatInfo>
          <span>사용자1</span>
        </SC.UserChatInfo>
      </SC.UserChatWrapper>
    </SC.Wrapper>
  );
}
