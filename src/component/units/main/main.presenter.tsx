import { Button, TextField } from "@mui/material";
import CardContainer from "../../../common/card/card";
import * as MS from "./main.styles";

export default function MainPresenter(props: any) {
  return (
    <MS.Wrapper>
      {/* 메인광고 및 사이트 소개 */}
      {props.router === "/main" ? (
        <MS.TestImg src="https://source.unsplash.com/random" />
      ) : (
        <MS.SearchInput type="text" placeholder="인플루언서 검색하기" />
      )}

      {/* 카테고리 div */}
      {/* 베스트 카테고리만 노출 */}
      <MS.CategoryWrapper>
        <MS.FindText>FIND</MS.FindText>
        <MS.Bar></MS.Bar>
        <MS.Text>빠르게 인플루언서를 찾아보세요!</MS.Text>
      </MS.CategoryWrapper>

      {/* 카드 div */}
      <MS.CardGridBox>
        {props.Data.map((el: any, index: number) => (
          <CardContainer
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
      <MS.BtnBox>
        <Button
          variant="contained"
          size="large"
          onClick={props.MoveBoardListBtn}
        >
          더 보러 가기
        </Button>
      </MS.BtnBox>
    </MS.Wrapper>
  );
}
