import { borderRadius } from "@mui/system";
import Image from "next/image";
import MPChangeBtn from "../../../../../common/btns/MPAD/MP.ChangeBtn";
import MPADChatBtn from "../../../../../common/btns/MPAD/MPAD.ChatBtn";
import Tags from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPADRead.styles";
import { IPropsMPADRead } from "./MPADRead.types";

export default function MPADReadPresenter(props: IPropsMPADRead) {
  const MpData = JSON.parse(localStorage.getItem("userMpData"));
  return (
    <S.Outline>
      <S.Header>
        <S.HeaderImg>
          <img
            src={MpData.profileImg ? MpData.profileImg : "/Profile.png"}
            alt="사용자 기본이미지"
            width="300"
            height="200"
            style={{ borderRadius: 5 }}
          />
        </S.HeaderImg>
        <S.HeaderInfo>
          <S.HeaderInfoWrapper>
            <S.PageName>{MpData.displayName}님의 마이페이지</S.PageName>
            {MpData.email === sessionStorage.getItem("userEmail") ? (
              <S.BtnWrapper>
                <MPChangeBtn onClick={props.onClickMoveToEdit} />
                <MPADChatBtn />
              </S.BtnWrapper>
            ) : (
              <MPADChatBtn />
            )}
          </S.HeaderInfoWrapper>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <S.InfoLabel>이메일</S.InfoLabel>
                  <S.InfoText>
                    <a>{MpData.email}</a>
                  </S.InfoText>
                </S.InfoText>
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  {/* <Tags UserCateGory={MpData.UsedSNS}></Tags> */}
                  <S.InfoLabel>사용하는 SNS</S.InfoLabel>
                  <S.InfoText>{MpData.UsedSNS}</S.InfoText>
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
          {MpData.Link === "" ? "소개글이 없습니다." : MpData.Link}
        </S.SectionInfoText>

        <S.LinkInfo>회사, 제품 관련 링크</S.LinkInfo>
        <S.DivideLine></S.DivideLine>
        <S.LinkInfoText>
          {MpData.SNSLink === "" ? "링크가 없습니다." : MpData.SNSLink}
        </S.LinkInfoText>
      </S.Section>
    </S.Outline>
  );
}
