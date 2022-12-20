import Image from "next/image";
import MPChangeBtn from "../../../../../common/btns/MPAD/MP.ChangeBtn";
import MPIFChatBtn from "../../../../../common/btns/MPIF/MPIF.ChatBtn";
import TagsCate from "../../../../../common/tags/MPIF.Tags";
import TagsSNS from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPIF.styles";
import MPIFPriceInputShort from "../../../../../common/inputs/MP/MPIF.PriceShort";
import MPIFLinkInput from "../../../../../common/inputs/MP/MPIF.Input";
import MPIFQuill from "../../../../../common/quill/mpif/mpif.quill";
import MPIFPriceInputLong from "../../../../../common/inputs/MP/MPIF.PriceLong";
import { IPropsMPIF } from "./MPIF.types";

export default function MyPageIFPresenter(props: IPropsMPIF) {
  return (
    <S.Outline onSubmit={props.handleSubmit(props.onClickSavePage)}>
      <S.Header>
        <S.HeaderImg>
          <img
            src={
              props.preview
                ? props.preview
                : props.UserInfo.UserProfile !== "undefined"
                ? props.UserInfo.UserProfile
                : "/Profile.png"
            }
            alt="기본 이미지"
            width="300"
            height="200"
            style={{ borderRadius: 5 }}
            onClick={props.onClickRef}
          ></img>
          <input
            type="file"
            hidden
            ref={props.imgRef}
            onChange={props.onClickPreview}
          ></input>
        </S.HeaderImg>
        <S.HeaderInfo>
          <S.InfoHead>
            <S.PageName>
              {props.UserInfo.UserDisplayName}님의 마이페이지
            </S.PageName>
            <MPIFChatBtn />
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <S.InfoLabel>이메일</S.InfoLabel>
                  <S.InfoText>{props.UserInfo.UserEmail}</S.InfoText>
                </S.InfoText>
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <TagsCate
                    UserCateGory={props.UserInfo.UserCheckedCategory}
                    register={props.register}
                    registerName={"CheckCategory"}
                  ></TagsCate>
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <TagsSNS
                    UserCateGory={props.UserInfo.UsedSNS}
                    register={props.register}
                    registerName={"UsedSNS"}
                  />
                </S.InfoText>
              </S.InfoTextWrapper>
            </S.InfoSectionWrapper>
          </S.InfoSection>
          <S.InfoText></S.InfoText>
        </S.HeaderInfo>
      </S.Header>
      <S.Section>
        <S.SectionInfo>
          <S.PageName>간단 소개글</S.PageName>
          <S.DivideLine></S.DivideLine>
          <MPIFLinkInput
            label="소개글을 입력해주세요"
            register={props.register}
            registerName="Link"
            default={props.UserInfo.UserLink}
          />
        </S.SectionInfo>
        <S.PageName>서비스 설명</S.PageName>
        <S.DivideLine></S.DivideLine>
        <S.SectionService>
          <MPIFQuill
            register={props.register}
            registerName="ServiceMain"
            onChange={props.onChangeContents}
            default={props.UserInfo.UserServiceMain}
          />
        </S.SectionService>
      </S.Section>
      <S.PriceWrapper>
        <S.PageName>가격정보</S.PageName>
        <S.DivideLine></S.DivideLine>
        <S.PriceBox>
          <img
            src={
              props.basic
                ? props.basic
                : props.UserInfo.basicImg
                ? props.UserInfo.basicImg
                : "/MyPage/DefaultImg.png"
            }
            alt="가격정보 기본이미지"
            width="180"
            height="150"
            style={{ borderRadius: 5 }}
            onClick={props.onClickBasicRef}
          ></img>
          <input
            type="file"
            hidden
            ref={props.basicRef}
            onChange={props.onChangePreviewBasic}
          ></input>
          <S.PriceInfo>
            <MPIFPriceInputShort
              label="베이직(원)"
              register={props.register}
              registerName={"basicPrice"}
              default={props.UserInfo.basicPrice}
            />
            <MPIFPriceInputLong
              label="서비스 한 줄 설명"
              register={props.register}
              registerName={"basicText"}
              default={props.UserInfo.basicText}
            />
          </S.PriceInfo>
        </S.PriceBox>
        <S.PriceBox>
          <img
            src={
              props.expert
                ? props.expert
                : props.UserInfo.expertImg
                ? props.UserInfo.expertImg
                : "/MyPage/DefaultImg.png"
            }
            alt="가격정보 기본이미지"
            width="180"
            height="150"
            onClick={props.onClickExpertRef}
            style={{ borderRadius: 5 }}
          ></img>
          <input
            type="file"
            hidden
            ref={props.expertRef}
            onChange={props.onChangePreviewExpert}
          ></input>
          <S.PriceInfo>
            <MPIFPriceInputShort
              label="익스퍼트(원)"
              register={props.register}
              registerName={"expertPrice"}
              default={props.UserInfo.expertPrice}
            />
            <MPIFPriceInputLong
              label="서비스 한 줄 설명"
              register={props.register}
              registerName={"expertText"}
              default={props.UserInfo.expertText}
            />
          </S.PriceInfo>
        </S.PriceBox>
        <S.PriceBox>
          <img
            src={
              props.pro
                ? props.pro
                : props.UserInfo.proImg
                ? props.UserInfo.proImg
                : "/MyPage/DefaultImg.png"
            }
            alt="가격정보 기본이미지"
            width="180"
            height="150"
            onClick={props.onClickProRef}
            style={{ borderRadius: 5 }}
          ></img>
          <input
            type="file"
            hidden
            ref={props.proRef}
            onChange={props.onChangePreviewPro}
          ></input>
          <S.PriceInfo>
            <MPIFPriceInputShort
              label="프로(원)"
              register={props.register}
              registerName={"proPrice"}
              default={props.UserInfo.proPrice}
            />
            <MPIFPriceInputLong
              label="서비스 한 줄 설명"
              register={props.register}
              registerName={"proText"}
              default={props.UserInfo.proText}
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
