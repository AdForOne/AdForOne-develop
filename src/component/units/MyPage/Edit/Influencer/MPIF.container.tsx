import { useForm } from "react-hook-form";
import MyPageIFPresenter from "./MPIF.presenter";

export default function MyPageIFContainer() {
  const UserInfo = {
    UserEmail: sessionStorage.getItem("userEmail"),
    UsedSNS: sessionStorage.getItem("userUsedSNS"),
    UserSNSLink: sessionStorage.getItem("userSNSLink"),
    UserCheckedCategory: sessionStorage.getItem("userCheckCategory"),
    UserDisplayName: sessionStorage.getItem("displayName"),
  };

  const { handleSubmit, register } = useForm();
  const onClickSavePage = (data: string) => {};
  return (
    <MyPageIFPresenter
      UserInfo={UserInfo}
      handleSubmit={handleSubmit}
      register={register}
      onClickSavePage={onClickSavePage}
    />
  );
}
