import DOMPurify from "dompurify";
import Image from "next/image";
import MPIFPriceCard from "../../../../../common/card/MPIF.PriceCard";
import MPIFLinkInput from "../../../../../common/inputs/MP/MPIF.Input";
import Tags from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPIFRead.styles";

export default function MPIFReadPresenter(props: any) {
  return (
    <S.Outline>
      <button onClick={props.onClickChangePage}>변경</button>
      <S.PageName>inf(Read)님의 마이페이지</S.PageName>
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
            <S.InfoText
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize("사업체 이름, 상품이름"),
              }}
            ></S.InfoText>
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      "이메일 : ㅁㅁㅁ@ㅁㅁㅁㅁㅁ.ㅁㅁㅁ"
                    ),
                  }}
                ></S.InfoText>
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <Tags></Tags>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize("업체종류 : ㅁㅁㅁㅁ"),
                  }}
                ></S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
          </S.InfoSection>
          <S.InfoText></S.InfoText>
        </S.HeaderInfo>
      </S.Header>
      <S.Section>
        <S.SectionInfo>
          <h1>간단 소개글</h1>
          <S.SectionSimpleText
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(props.Link),
            }}
          ></S.SectionSimpleText>
        </S.SectionInfo>
        <S.DivideLine></S.DivideLine>
        <h1>서비스 설명</h1>
        <S.SectionService
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(props.ServiceMain),
          }}
        ></S.SectionService>
      </S.Section>
      <S.DivideLine></S.DivideLine>
      <h1>가격정보</h1>
      <S.PriceCardWrapper>
        <MPIFPriceCard />
        <MPIFPriceCard />
        <MPIFPriceCard />
      </S.PriceCardWrapper>
    </S.Outline>
  );
}
