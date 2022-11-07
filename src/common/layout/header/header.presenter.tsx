import Image from "next/image";
import HeaderLoginBtn from "../../btns/header/header.loginBtn";
import HeaderSignInBtn from "../../btns/header/header.signinBtn";
import * as S from "./header.styles";

export default function HeaderPresenter(props: any) {
  return (
    <S.Outline>
      <S.Logo>
        <Image
          src="/header/Logo.png"
          alt="웹페이지 상단 ADFO로고"
          width="130"
          height="32"
          id="/main"
          onClick={props.onClickMoveToPage}
        ></Image>
      </S.Logo>
      <S.HeaderBtnWrapper>
        <HeaderLoginBtn id={"/login"} onClick={props.onClickMoveToPage} />
        <HeaderSignInBtn id={"/signup"} onClick={props.onClickMoveToPage} />
      </S.HeaderBtnWrapper>
    </S.Outline>
  );
}
