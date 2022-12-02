import DOMPurify from "dompurify";
import Image from "next/image";
import MPIFPriceCard from "../../../../../common/card/MPIF.PriceCard";
import MPIFLinkInput from "../../../../../common/inputs/MP/MPIF.Input";
import Tags from "../../../../../common/tags/MPIF.Tags";
import * as S from "./MPIFRead.styles";

export default function MPIFReadPresenter(props: any) {
  return (
    <S.Outline>
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
                      `이메일 : ${
                        JSON.parse(localStorage.getItem("userMpData")).email
                      }`
                    ),
                  }}
                ></S.InfoText>
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <Tags
                    UserCateGory={
                      JSON.parse(localStorage.getItem("userMpData"))
                        .CheckCategory
                    }
                  ></Tags>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      `SNS종류 : ${
                        JSON.parse(localStorage.getItem("userMpData")).UsedSNS
                      }`
                    ),
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
              __html: DOMPurify.sanitize(
                JSON.parse(localStorage.getItem("userMpData")).Link
              ),
            }}
          ></S.SectionSimpleText>
        </S.SectionInfo>
        <S.DivideLine></S.DivideLine>
        <h1>서비스 설명</h1>
        <S.SectionService
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              JSON.parse(localStorage.getItem("userMpData")).ServiceMain
            ),
          }}
        ></S.SectionService>
      </S.Section>
      <S.DivideLine></S.DivideLine>
      <h1>가격정보</h1>
      <S.PriceCardWrapper>
        <MPIFPriceCard
          cate={"베이직"}
          price={JSON.parse(localStorage.getItem("userMpData")).basicPrice}
          text={JSON.parse(localStorage.getItem("userMpData")).basicText}
        />
        <MPIFPriceCard
          cate={"익스퍼트"}
          price={JSON.parse(localStorage.getItem("userMpData")).expertPrice}
          text={JSON.parse(localStorage.getItem("userMpData")).expertText}
        />
        <MPIFPriceCard
          cate={"프로"}
          price={JSON.parse(localStorage.getItem("userMpData")).proPrice}
          text={JSON.parse(localStorage.getItem("userMpData")).proText}
        />
      </S.PriceCardWrapper>
    </S.Outline>
  );
}
