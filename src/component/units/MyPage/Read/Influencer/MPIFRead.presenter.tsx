import Image from "next/image";
import Tags from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPifRead.styles";

export default function MPADReadPresenter() {
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
    </S.Outline>
  );
}
