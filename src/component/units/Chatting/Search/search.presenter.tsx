import * as SC from "./search.styles";
import { ISearch } from "./search.type";

export default function SearchUI(props: ISearch) {
  return (
    <SC.Wrapper>
      <SC.SearchBox>
        <SC.SearchInput
          type="text"
          placeholder="유저찾기"
          value={props.userName}
          onKeyDown={props.handleKey}
          onChange={props.onChangeUserName}
          // 간단한 온체인지함수
        />
      </SC.SearchBox>
      {props.err && <SC.UserInfoErr>유저를 찾을 수 없습니다!</SC.UserInfoErr>}
      {props.user && (
        <SC.UserChatWrapper onClick={props.onClickSelect}>
          {/* 온클릭 함수 작성필요. 유저 정보가 Search창에 나올시 채팅목록을 불러와야함 */}
          <SC.UsersImg
            src={
              props.user.profileImg
                ? props.user.profileImg
                : "https://source.unsplash.com/random"
            }
            alt=""
          />
          <SC.UserChatInfo>
            <span>{props.user.displayName}</span>
          </SC.UserChatInfo>
        </SC.UserChatWrapper>
      )}
    </SC.Wrapper>
  );
}
