import Image from "next/image";
import HeaderLoginBtn from "../../btns/header/header.loginBtn";
import HeaderSignInBtn from "../../btns/header/header.signinBtn";
import * as S from "./header.styles";

export default function HeaderPresenter() {
  return (
    <S.Outline>
      <S.Logo>
        <Image
          src="/header/Logo.png"
          alt="웹페이지 상단 ADFO로고"
          width="130"
          height="32"
        ></Image>
      </S.Logo>
      <S.HeaderBtnWrapper>
        <HeaderLoginBtn />
        <HeaderSignInBtn />
      </S.HeaderBtnWrapper>
    </S.Outline>
  );
}
