import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../../../common/firebase/firebase.config";
import usePage from "../../../../../common/firebase/firebase.myPage";
import MyPageIFPresenter from "./MPIF.presenter";

export default function MyPageIFContainer() {
  const router = useRouter();
  const { createMyPage } = usePage();

  const UserInfo = {
    UserProfile: sessionStorage.getItem("profileImg"),
    UserEmail: sessionStorage.getItem("userEmail"),
    UsedSNS: sessionStorage.getItem("userUsedSNS"),
    UserSNSLink: sessionStorage.getItem("userSNSLink"),
    UserCheckedCategory: sessionStorage.getItem("userCheckCategory"),
    UserDisplayName: sessionStorage.getItem("displayName"),
    UserLink: sessionStorage.getItem("Link"),
    UserServiceMain: sessionStorage.getItem("ServiceMain"),
    basicPrice: sessionStorage.getItem("basicPrice"),
    basicText: sessionStorage.getItem("basicText"),
    expertPrice: sessionStorage.getItem("expertPrice"),
    expertText: sessionStorage.getItem("expertText"),
    proPrice: sessionStorage.getItem("proPrice"),
    proText: sessionStorage.getItem("proText"),
  };

  const { handleSubmit, register, setValue, trigger } = useForm();
  /** 리액트 퀼을 useForm과 같이 쓰게하는 onChange함수 */
  const onChangeContents = (value: string) => {
    setValue("ServiceMain", value === "<p><br></p>" ? "" : value);
    trigger("ServiceMain");
  };

  const onClickSavePage = async (data: any) => {
    // 내용 중 하나라도 빈 값일때 경고창과 함께 함수 중지
    if (
      !data.Link ||
      !data.ServiceMain ||
      !data.basicPrice ||
      !data.basicText ||
      !data.expertPrice ||
      !data.expertText ||
      !data.proPrice ||
      !data.proText
    ) {
      return alert("내용을 모두 입력 해 주세요");
    }
    await createMyPage(
      UserInfo.UserEmail,
      data.Link,
      data.ServiceMain,
      data.CheckCategory,
      data.UsedSNS,
      data.basicPrice,
      data.basicText,
      data.expertPrice,
      data.expertText,
      data.proPrice,
      data.proText
    );
    sessionStorage.setItem("Link", data.Link);
    sessionStorage.setItem("ServiceMain", data.ServiceMain);
    sessionStorage.setItem("userCheckCategory", data.CheckCategory);
    sessionStorage.setItem("userUsedSNS", data.UsedSNS);
    sessionStorage.setItem("basicPrice", data.basicPrice);
    sessionStorage.setItem("basicText", data.basicText);
    sessionStorage.setItem("expertPrice", data.expertPrice);
    sessionStorage.setItem("expertText", data.expertText);
    sessionStorage.setItem("proPrice", data.proPrice);
    sessionStorage.setItem("proText", data.proText);

    // 페이지 생성 완료 혹은 수정 완료시 디테일 페이지로 이동
    await router.push(`/myPage/detail/${UserInfo.UserEmail}`);
  };
  return (
    <MyPageIFPresenter
      UserInfo={UserInfo}
      handleSubmit={handleSubmit}
      register={register}
      onClickSavePage={onClickSavePage}
      onChangeContents={onChangeContents}
    />
  );
}
