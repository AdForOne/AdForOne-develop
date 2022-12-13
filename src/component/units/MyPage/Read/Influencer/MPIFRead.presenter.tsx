import DOMPurify from "dompurify";
import Image from "next/image";
import MPChangeBtn from "../../../../../common/btns/MPIF/MP.ChangeBtn";
import MPIFChatBtn from "../../../../../common/btns/MPIF/MPIF.ChatBtn";
import MPIFPriceCard from "../../../../../common/card/MPIF.PriceCard";
import MPIFLinkInput from "../../../../../common/inputs/MP/MPIF.Input";
import Tags from "../../../../../common/tags/MPIF.Tags";
import * as S from "./MPIFRead.styles";
import { IPropsMPIFRead } from "./MPIFRead.types";

export default function MPIFReadPresenter(props: IPropsMPIFRead) {
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
          <S.InfoHead>
            <S.PageName
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(`${MpData.displayName} 님의 페이지`),
              }}
            ></S.PageName>
            {MpData.email === sessionStorage.getItem("userEmail") ? (
              <S.BtnWrapper>
                <MPChangeBtn onClick={props.onClickMoveToEdit} />
                <MPIFChatBtn />
              </S.BtnWrapper>
            ) : (
              <MPIFChatBtn />
            )}
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <S.InfoLabel>이메일</S.InfoLabel>
                  <S.InfoText
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(`${MpData.email}`),
                    }}
                  ></S.InfoText>
                </S.InfoText>
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <Tags UserCateGory={MpData.CheckCategory}></Tags>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <S.InfoLabel>SNS종류</S.InfoLabel>
                  <S.InfoText
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(`${MpData.UsedSNS}`),
                    }}
                  ></S.InfoText>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
          </S.InfoSection>
          <S.InfoText></S.InfoText>
        </S.HeaderInfo>
      </S.Header>
      <S.Section>
        <S.SectionInfo>
          <S.SectionLabel>간단 소개글</S.SectionLabel>
          <S.DivideLine></S.DivideLine>
          <S.SectionSimpleText
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(
                MpData.Link ? MpData.Link : "소개글이 없습니다."
              ),
            }}
          ></S.SectionSimpleText>
        </S.SectionInfo>
        <S.SectionLabel>서비스 설명</S.SectionLabel>
        <S.DivideLine></S.DivideLine>
        <S.SectionService
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              MpData.ServiceMain
                ? MpData.ServiceMain
                : "서비스 설명이 없습니다."
            ),
          }}
        ></S.SectionService>
      </S.Section>
      <S.SectionLabel>가격정보</S.SectionLabel>
      <S.DivideLine></S.DivideLine>
      <S.PriceCardWrapper>
        <MPIFPriceCard
          cate={"베이직"}
          price={MpData.basicPrice}
          text={MpData.basicText}
        />
        <MPIFPriceCard
          cate={"익스퍼트"}
          price={MpData.expertPrice}
          text={MpData.expertText}
        />
        <MPIFPriceCard
          cate={"프로"}
          price={MpData.proPrice}
          text={MpData.proText}
        />
      </S.PriceCardWrapper>
    </S.Outline>
  );
}
