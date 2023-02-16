import SearchIcon from "@mui/icons-material/Search";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CardContainer from "../../../common/card/card";
import * as MS from "./main.styles";

export default function MainPresenter(props: any) {
  return (
    <MS.Wrapper>
      {/* 메인광고 및 사이트 소개 */}
      {props.router !== "/board/list" && (
        <MS.TestImg src="https://source.unsplash.com/random" />
      )}

      <MS.CategoryWrapper>
        <MS.FindText>FIND</MS.FindText>
        <MS.Bar />
        <MS.Text>빠르게 인플루언서를 찾아보세요!</MS.Text>
      </MS.CategoryWrapper>
      {/* test */}
      {props.router === "/board/list" && (
        <MS.SearchWrapper>
          <MS.SearchInput>
            <SearchIcon fontSize="large" />
            <TextField
              fullWidth
              label="인플루언서 검색하기"
              value={props.searchData}
              onChange={props.onChangeSearchKeyword}
              onKeyDown={props.handleKey}
            />
          </MS.SearchInput>
        </MS.SearchWrapper>
      )}
      {/* SearchErr & SearchUser */}
      {props.searchErr && <MS.SearchErr>유저를 찾을 수 없습니다!</MS.SearchErr>}
      {props.searchList ? (
        <MS.SearchCardWrapper>
          <CardContainer
            Link={props.searchList.Link}
            displayName={props.searchList.displayName}
            CheckCategory={props.searchList.CheckCategory}
            UsedSNS={props.searchList.UsedSNS}
            id={props.searchList.email}
            onClickMoveToPage={props.onClickMoveToPage}
            profileImg={props.searchList.profileImg}
            value={props.searchList.value}
          />
        </MS.SearchCardWrapper>
      ) : (
        <MS.CardGridBox>
          {/* 메인과 List 페이지 차이두기. */}
          {props.router !== "/board/list"
            ? props.Data.slice(0, 6).map((el: any, index: number) => (
                <CardContainer
                  key={index}
                  Link={el.Link}
                  displayName={el.displayName}
                  CheckCategory={el.CheckCategory}
                  UsedSNS={el.UsedSNS}
                  id={el.email}
                  onClickMoveToPage={props.onClickMoveToPage}
                  profileImg={el.profileImg}
                  value={el.value}
                />
              ))
            : props.Data.map((el: any, index: number) => (
                <CardContainer
                  key={index}
                  Link={el.Link}
                  displayName={el.displayName}
                  CheckCategory={el.CheckCategory}
                  UsedSNS={el.UsedSNS}
                  id={el.email}
                  onClickMoveToPage={props.onClickMoveToPage}
                  profileImg={el.profileImg}
                  value={el.value}
                />
              ))}
        </MS.CardGridBox>
      )}
      {/* 카드 div */}

      {props.router !== "/board/list" && (
        <MS.BtnBox>
          <Button
            variant="contained"
            size="large"
            onClick={props.MoveBoardListBtn}
          >
            더 보러 가기
          </Button>
        </MS.BtnBox>
      )}
    </MS.Wrapper>
  );
}
