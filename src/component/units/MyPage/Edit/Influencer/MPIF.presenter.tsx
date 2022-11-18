import Image from "next/image";
import MPChangeBtn from "../../../../../common/btns/MPAD/MP.ChangeBtn";
import MPIFChatBtn from "../../../../../common/btns/MPIF/MPIF.ChatBtn";
import Tags from "../../../../../common/tags/MPIF.Tags";
import * as S from "./MPIF.styles";
import MPIFPriceInputShort from "../../../../../common/inputs/MP/MPIF.PriceShort";
import MPIFLinkInput from "../../../../../common/inputs/MP/MPIF.Input";
import MPIFQuill from "../../../../../common/quill/mpif/mpif.quill";
import MPIFPriceInputLong from "../../../../../common/inputs/MP/MPIF.PriceLong";
import { IPropsMPIF } from "./MPIF.types";

export default function MyPageIFPresenter(props: IPropsMPIF) {
  return (
    <S.Outline>
      <S.Header>
        <S.HeaderImg>
          <Image
            src="/MyPage/DefaultImg.png"
            alt="기본 이미지"
            width="300"
            height="200"
          ></Image>
        </S.HeaderImg>
        <S.HeaderInfo>
          <S.InfoHead>
            <S.InfoText>
              {props.UserInfo.UserDisplayName}님의 마이페이지
            </S.InfoText>
            <MPIFChatBtn />
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>이메일 : {props.UserInfo.UserEmail}</S.InfoText>
                <MPChangeBtn />
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <Tags
                    UserCateGory={props.UserInfo.UserCheckedCategory}
                  ></Tags>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>SNS종류 : {props.UserInfo.UsedSNS}</S.InfoText>
                <MPChangeBtn></MPChangeBtn>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
          </S.InfoSection>
          <S.InfoText></S.InfoText>
        </S.HeaderInfo>
      </S.Header>
      <S.DivideLine></S.DivideLine>
      <S.Section>
        <S.SectionInfo>
          <MPIFLinkInput />
        </S.SectionInfo>
        <S.DivideLine></S.DivideLine>
        <h1>서비스 설명</h1>
        <S.SectionService>
          <MPIFQuill />
        </S.SectionService>
      </S.Section>
      <S.DivideLine></S.DivideLine>
      <h1>가격정보</h1>
      <S.PriceWrapper>
        <S.PriceBox>
          <Image
            src="/MyPage/DefaultImg.png"
            alt="가격정보 기본이미지"
            width="180"
            height="150"
          ></Image>
          <S.PriceInfo>
            <MPIFPriceInputShort label="베이직(원)" />
            <MPIFPriceInputLong label="서비스 한 줄 설명" />
          </S.PriceInfo>
        </S.PriceBox>
        <S.PriceBox>
          <Image
            src="/MyPage/DefaultImg.png"
            alt="가격정보 기본이미지"
            width="180"
            height="150"
          ></Image>
          <S.PriceInfo>
            <MPIFPriceInputShort label="베이직(원)" />
            <MPIFPriceInputLong label="서비스 한 줄 설명" />
          </S.PriceInfo>
        </S.PriceBox>
        <S.PriceBox>
          <Image
            src="/MyPage/DefaultImg.png"
            alt="가격정보 기본이미지"
            width="180"
            height="150"
          ></Image>
          <S.PriceInfo>
            <MPIFPriceInputShort label="베이직(원)" />
            <MPIFPriceInputLong label="서비스 한 줄 설명" />
          </S.PriceInfo>
        </S.PriceBox>
      </S.PriceWrapper>
    </S.Outline>
  );
}
