import { useState } from "react";
import { useForm } from "react-hook-form";
import usePage from "../../../../../common/firebase/firebase.myPage";
import { useIsSsr } from "../../../../../common/hooks/useSrr";
import MyPageADPresenter from "./MPAD.presenter";
import { IDataForm } from "./MPAD.types";

export default function MyPageADContainer() {
  const isSrr = useIsSsr();
  const [link, setLink] = useState([0]);
  const { handleSubmit, register } = useForm();
  const { createMyPageAD } = usePage();
  if (isSrr) return null;
  const UserInfo = {
    UserEmail: sessionStorage.getItem("userEmail"),
    UsedSNS: sessionStorage.getItem("userUsedSNS"),
    UserSNSLink: sessionStorage.getItem("userSNSLink"),
    UserCheckedCategory: sessionStorage.getItem("userCheckCategory"),
    UserDisplayName: sessionStorage.getItem("displayName"),
  };

  const onClickSubmit = (data: IDataForm) => {
    createMyPageAD(UserInfo.UserEmail, data.Link, data.SNSLink);
  };

  return (
    <MyPageADPresenter
      Link={link}
      UserInfo={UserInfo}
      register={register}
      handleSubmit={handleSubmit}
      onClickSubmit={onClickSubmit}
    />
  );
}
