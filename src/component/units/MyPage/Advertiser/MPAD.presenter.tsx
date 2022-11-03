import Image from "next/image";
import MPChangeBtn from "../../../../common/btns/MPAD/MP.ChangeBtn";
import MPADChatBtn from "../../../../common/btns/MPAD/MPAD.ChatBtn";
import MPADLinkBtn from "../../../../common/btns/MPAD/MPAD.LinkBtn";
import MPADLinkInput from "../../../../common/inputs/MP/MPAD.LinkInput";
import CloseIcon from "@mui/icons-material/Close";
import Tags from "../../../../common/tags/MPAD.Tags";
import * as S from "./MPAD.styles";
import { IPropsMPAD } from "./MPAD.types";

export default function MyPageADPresenter(props: IPropsMPAD) {
  return (
    <S.Outline>
      <S.PageName>ㅁㅁㅁ님의 마이페이지</S.PageName>
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
                <S.InfoText>이메일 : ㅁㅁㅁ@ㅁㅁㅁㅁㅁ.ㅁㅁㅁ</S.InfoText>
                <MPChangeBtn />
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <Tags></Tags>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>업체종류 : ㅁㅁㅁㅁ</S.InfoText>
                <MPChangeBtn></MPChangeBtn>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
          </S.InfoSection>
          <S.InfoText></S.InfoText>
        </S.HeaderInfo>
      </S.Header>
      <S.Section>
        <S.SectionInfo>사업체 및 상품 간단 소개글</S.SectionInfo>
        <S.DivideLine></S.DivideLine>
        <S.SectionInfoText>리액트 퀼 사용 예정</S.SectionInfoText>
        <S.DivideLine></S.DivideLine>
      </S.Section>

      <S.LinkWrapper>
        <S.LinkInfo>회사,제품 관련 링크</S.LinkInfo>
        <S.DivideLine></S.DivideLine>
        <S.LinkInfoText>
          {props.Link &&
            props.Link.map((el: any, index: any) => (
              <S.MPADLinkInputWrapper key={index}>
                <MPADLinkInput />
                <CloseIcon onClick={props.onClickDeleteInputs}></CloseIcon>
              </S.MPADLinkInputWrapper>
            ))}
          <MPADLinkBtn onClick={props.onClickMakeInputs} />
        </S.LinkInfoText>

        <S.DivideLine></S.DivideLine>
      </S.LinkWrapper>
    </S.Outline>
  );
}
