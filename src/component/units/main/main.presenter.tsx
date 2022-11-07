import { Button } from "@mui/material";
import CardContainer from "../../../common/card/card";
import Category from "../../../common/category/category";
import * as MS from "./main.styles";

export default function MainPresenter(props: any) {
  return (
    <MS.Wrapper>
      {/* 메인광고 및 사이트 소개 */}
      <MS.TestImg src="./testimg/test.png" />

      {/* 카테고리 div */}
      {/* 베스트 카테고리만 노출*/}
      <MS.CategoryWrapper>
        <MS.FindText>FIND</MS.FindText>
        <MS.Text>빠르게 인플루언서를 찾아보세요!</MS.Text>
        <MS.CategoryGridBox>
          {props.DataCard.map((el: any, index: number) => (
            <MS.CategoryBox key={index}>
              <Category />
            </MS.CategoryBox>
          ))}
        </MS.CategoryGridBox>
      </MS.CategoryWrapper>

      {/* 카드 div */}
      {/* 무한스크롤 적용시키기?*/}
      <MS.CardGridBox>
        {props.DataCard.slice(0, 6).map((el: any, index: number) => (
          <div key={index}>
            <CardContainer />
            {/* {el.title} */}
          </div>
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
