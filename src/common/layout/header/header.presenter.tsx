import Image from "next/image";
import HeaderLoginBtn from "../../btns/header/header.loginBtn";
import HeaderLogoutBtn from "../../btns/header/header.logoutBtn";
import HeaderSignInBtn from "../../btns/header/header.signinBtn";
import * as S from "./header.styles";
import { IPropsHeader } from "./header.types";

export default function HeaderPresenter(props: IPropsHeader) {
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
      {props.isLogin ? (
        <S.HeaderBtnWrapper>
          <S.UserInfo id="/myPage/edit" onClick={props.onClickMoveToPage}>
            {props.UserName}님의 마이페이지
          </S.UserInfo>
          <HeaderLogoutBtn onClick={props.onClickLogOut} />
        </S.HeaderBtnWrapper>
      ) : (
        <S.HeaderBtnWrapper>
          <HeaderLoginBtn id={"/login"} onClick={props.onClickMoveToPage} />
          <HeaderSignInBtn id={"/signup"} onClick={props.onClickMoveToPage} />
        </S.HeaderBtnWrapper>
      )}
    </S.Outline>
  );
}
