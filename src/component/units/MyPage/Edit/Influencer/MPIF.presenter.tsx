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
import MPIFChangeInputs from "../../../../../common/inputs/MP/MPIF.ChangeInputs";

export default function MyPageIFPresenter(props: IPropsMPIF) {
  return (
    <S.Outline onSubmit={props.handleSubmit(props.onClickSavePage)}>
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
                <S.InfoText>
                  <MPIFChangeInputs
                    text={"이메일을 입력 해 주세요"}
                    data={props.UserInfo.UserEmail}
                  />
                </S.InfoText>
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
                <S.InfoText>
                  <MPIFChangeInputs
                    text={"SNS종류를 입력 해 주세요"}
                    data={props.UserInfo.UsedSNS}
                  />
                </S.InfoText>
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
          <MPIFLinkInput register={props.register} registerName="Link" />
        </S.SectionInfo>
        <S.DivideLine></S.DivideLine>
        <h1>서비스 설명</h1>
        <S.SectionService>
          <MPIFQuill
            register={props.register}
            registerName="ServiceMain"
            onChange={props.onChangeContents}
          />
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
            <MPIFPriceInputShort
              label="베이직(원)"
              register={props.register}
              registerName={"basicPrice"}
            />
            <MPIFPriceInputLong
              label="서비스 한 줄 설명"
              register={props.register}
              registerName={"basicText"}
            />
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
            <MPIFPriceInputShort
              label="익스퍼트(원)"
              register={props.register}
              registerName={"expertPrice"}
            />
            <MPIFPriceInputLong
              label="서비스 한 줄 설명"
              register={props.register}
              registerName={"expertText"}
            />
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
            <MPIFPriceInputShort
              label="프로(원)"
              register={props.register}
              registerName={"proPrice"}
            />
            <MPIFPriceInputLong
              label="서비스 한 줄 설명"
              register={props.register}
              registerName={"proText"}
            />
          </S.PriceInfo>
        </S.PriceBox>
        <button style={{ width: 1143 }} type="submit">
          변경사항 저장
        </button>
      </S.PriceWrapper>
    </S.Outline>
  );
}
