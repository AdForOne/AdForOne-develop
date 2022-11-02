import * as MS from "./main.styles";

export default function MainPresenter() {
  return (
    <MS.Wrapper>
      <MS.TestImg src="./testimg/test.png" />
      {/* 카테고리 div */}
      <MS.CategoryWrapper>
        <p>Find</p>
        <p>빠르게 인플루언서를 찾아보세요!</p>
        {/* Grid 이용해서 카테고리 이미지 만들기?? */}
      </MS.CategoryWrapper>
      메인페이지입니다.
    </MS.Wrapper>
  );
}
