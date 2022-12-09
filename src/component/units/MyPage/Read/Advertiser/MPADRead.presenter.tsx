import Image from "next/image";
import Tags from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPADRead.styles";

export default function MPADReadPresenter(props: any) {
  const MpData = JSON.parse(localStorage.getItem("userMpData"));
  return (
    <S.Outline>
      <S.PageName>{MpData.displayName}님의 마이페이지</S.PageName>
      <S.Header>
        <S.HeaderImg>
          <img
            src={MpData.profileImg ? MpData.profileImg : "/Profile.png"}
            alt="사용자 기본이미지"
            width="300"
            height="200"
          />
        </S.HeaderImg>
        <S.HeaderInfo>
          <S.InfoHead>
            <S.InfoText>사업체 이름, 상품이름</S.InfoText>
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>이메일 : {MpData.email}</S.InfoText>
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <Tags UserCateGory={MpData.UsedSNS}></Tags>
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
        <S.DivideLine></S.DivideLine>
        <S.LinkInfo>회사, 제품 관련 링크</S.LinkInfo>
        <S.DivideLine></S.DivideLine>
        <S.LinkInfoText>
          {MpData.SNSLink === "" ? "링크가 없습니다." : MpData.SNSLink}
        </S.LinkInfoText>
      </S.Section>
    </S.Outline>
  );
}
