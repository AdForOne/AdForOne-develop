import Image from "next/image";
import Tags from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPADRead.styles";

export default function MPADReadPresenter(props: any) {
  return (
    <S.Outline>
      <button onClick={props.onClickChangePage}>
        {/* (파이어베이스 적용시 제거) */}
        변경
      </button>
      <S.PageName>AD(Read)님의 마이페이지</S.PageName>
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
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>이메일 : ㅁㅁㅁ@ㅁㅁㅁㅁㅁ.ㅁㅁㅁ</S.InfoText>
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
          Sunt laboris veniam culpa ipsum sint ipsum cillum sint duis deserunt
          ex magna consequat.Sunt laboris veniam culpa ipsum sint ipsum cillum
          sint duis deserunt ex magna consequat.Sunt laboris veniam culpa ipsum
          sint ipsum cillum sint duis deserunt ex magna consequat.Sunt laboris
          veniam culpa ipsum sint ipsum cillum sint duis deserunt ex magna
          consequat.Sunt laboris veniam culpa ipsum sint ipsum cillum sint duis
          deserunt ex magna consequat.
        </S.SectionInfoText>
        <S.DivideLine></S.DivideLine>
        <S.LinkInfo>회사, 제품 관련 링크</S.LinkInfo>
        <S.DivideLine></S.DivideLine>
        <S.LinkInfoText>LinkHere</S.LinkInfoText>
      </S.Section>
    </S.Outline>
  );
}
