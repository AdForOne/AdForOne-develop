import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import usePage from "../../../../../common/firebase/firebase.myPage";
import MyPageIFPresenter from "./MPIF.presenter";

export default function MyPageIFContainer() {
  const router = useRouter();
  const { createMyPage } = usePage();
  const UserInfo = {
    UserEmail: sessionStorage.getItem("userEmail"),
    UsedSNS: sessionStorage.getItem("userUsedSNS"),
    UserSNSLink: sessionStorage.getItem("userSNSLink"),
    UserCheckedCategory: sessionStorage.getItem("userCheckCategory"),
    UserDisplayName: sessionStorage.getItem("displayName"),
  };

  const { handleSubmit, register, setValue, trigger } = useForm();
  /** 리액트 퀼을 useForm과 같이 쓰게하는 onChange함수 */
  const onChangeContents = (value: string) => {
    setValue("ServiceMain", value === "<p><br></p>" ? "" : value);
    trigger("ServiceMain");
  };

  const onClickSavePage = async (data: any) => {
    await createMyPage(
      UserInfo.UserEmail,
      data.Link,
      data.ServiceMain,
      data.basicPrice,
      data.basicText,
      data.expertPrice,
      data.expertText,
      data.proPrice,
      data.proText
    );
    // 페이지 생성 완료 혹은 수정 완료시 디테일 페이지로 이동
    await router.push(`detail/${UserInfo.UserEmail}`);
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
