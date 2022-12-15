import Image from "next/image";
import MPChangeBtn from "../../../../../common/btns/MPAD/MP.ChangeBtn";
import MPADChatBtn from "../../../../../common/btns/MPAD/MPAD.ChatBtn";
import MPADLinkInput from "../../../../../common/inputs/MP/MPAD.Input";
import MPADSNSLinkInput from "../../../../../common/inputs/MP/MPAD.SNSLinkInput";
import { UserInfo } from "../../../../../common/layout/header/header.styles";
import Tags from "../../../../../common/tags/MPAD.Tags";
import * as S from "./MPAD.styles";
import { IPropsMPAD } from "./MPAD.types";

export default function MyPageADPresenter(props: IPropsMPAD) {
  return (
    <S.Outline onSubmit={props.handleSubmit(props.onClickSubmit)}>
      <S.Header>
        <S.HeaderImg>
          <img
            src={
              props.UserInfo?.UserProfileImg
                ? props.UserInfo?.UserProfileImg
                : "/Profile.png"
            }
            alt="사용자 기본이미지"
            width="300"
            height="200"
            style={{ borderRadius: 5, cursor: "pointer" }}
          />
        </S.HeaderImg>
        <S.HeaderInfo>
          <S.InfoHead>
            <S.PageName>
              {props.UserInfo?.UserDisplayName}님의 마이페이지
            </S.PageName>

            <MPADChatBtn />
          </S.InfoHead>
          <S.DivideLine></S.DivideLine>
          <S.InfoSection>
            <S.InfoSectionWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  <S.InfoLabel>이메일</S.InfoLabel>
                  <S.InfoText>{props.UserInfo?.UserEmail}</S.InfoText>
                </S.InfoText>
              </S.InfoTextWrapper>
              <S.InfoTextWrapper>
                <S.InfoText>
                  {/* 수정버튼을 누르면 Tags 일반 상태일땐 단순 텍스트 */}
                  <Tags
                    UserCateGory={props.UserInfo?.UsedSNS}
                    register={props.register}
                    registerName={"UsedSNS"}
                  ></Tags>
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
          <MPADLinkInput
            register={props.register}
            registerName={"Link"}
            label={"소개글을 입력하세요"}
            default={props.UserInfo?.UserLink ? props.UserInfo?.UserLink : ""}
          />
        </S.SectionInfoText>
      </S.Section>

      <S.LinkWrapper>
        <S.LinkInfo>회사,제품 관련 링크</S.LinkInfo>
        <S.DivideLine></S.DivideLine>
        <S.LinkInfoText>
          <MPADSNSLinkInput
            register={props.register}
            registerName={"SNSLink"}
            label={"회사, 제품관련 내용을 입력하세요"}
            default={
              props.UserInfo?.UserSNSLink ? props.UserInfo?.UserSNSLink : ""
            }
          ></MPADSNSLinkInput>
        </S.LinkInfoText>

        <button type="submit" style={{ width: 1150 }}>
          변경사항 저장
        </button>
      </S.LinkWrapper>
    </S.Outline>
  );
}
