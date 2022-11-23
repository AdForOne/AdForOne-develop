import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

import MyPageIFPresenter from "./MPIF.presenter";

export default function MyPageIFContainer() {
  const router = useRouter();
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

  const onClickSavePage = (data: any) => {
    console.log(data.Link, data.ServiceMain);
    router.push(`myPage/detail/${UserInfo.UserEmail}`);
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
