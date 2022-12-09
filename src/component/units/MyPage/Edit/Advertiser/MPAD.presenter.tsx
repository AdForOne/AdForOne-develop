import Image from "next/image";
import MPChangeBtn from "../../../../../common/btns/MPAD/MP.ChangeBtn";
import MPADChatBtn from "../../../../../common/btns/MPAD/MPAD.ChatBtn";
import MPADLinkInput from "../../../../../common/inputs/MP/MPAD.Input";
import Tags from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPAD.styles";
import { IPropsMPAD } from "./MPAD.types";

export default function MyPageADPresenter(props: IPropsMPAD) {
  return (
    <S.Outline onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.PageName>{props.UserInfo?.UserDisplayName}님의 마이페이지</S.PageName>
      <S.Header>
        <S.HeaderImg>
          <Image
            src="/MyPage/DefaultImg.png"
            alt="사용자 기본이미지"
            width="300"
            height="200"
          />
        </S.HeaderImg>
        <S.HeaderInfo>
          <S.InfoHead>
            <S.InfoText>사업체 이름, 상품이름</S.InfoText>
            <MPADChatBtn />
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>이메일 : {props.UserInfo?.UserEmail}</S.InfoText>
                <MPChangeBtn />
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <Tags UserCateGory={props.UserInfo?.UsedSNS}></Tags>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
          </S.InfoSection>
          <S.InfoText></S.InfoText>
        </S.HeaderInfo>
      </S.Header>
      <S.Section>
        <S.SectionInfo>사업체 및 상품 간단 소개글</S.SectionInfo>
        <S.DivideLine></S.DivideLine>
        <S.SectionInfoText>
          <MPADLinkInput
            register={props.register}
            registerName={"Link"}
            label={"소개글을 입력하세요"}
          />
        </S.SectionInfoText>
        <S.DivideLine></S.DivideLine>
      </S.Section>

      <S.LinkWrapper>
        <S.LinkInfo>회사,제품 관련 링크</S.LinkInfo>
        <S.DivideLine></S.DivideLine>
        <S.LinkInfoText>
          <MPADLinkInput
            register={props.register}
            registerName={"SNSLink"}
            label={"회사, 제품관련 내용을 입력하세요"}
          ></MPADLinkInput>
        </S.LinkInfoText>

        <S.DivideLine></S.DivideLine>
        <button type="submit" style={{ width: 1150 }}>
          변경사항 저장
        </button>
      </S.LinkWrapper>
    </S.Outline>
  );
}
