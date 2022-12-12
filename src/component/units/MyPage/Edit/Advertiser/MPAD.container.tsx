import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
import usePage from "../../../../../common/firebase/firebase.myPage";
import { useIsSsr } from "../../../../../common/hooks/useSrr";
import MyPageADPresenter from "./MPAD.presenter";
import { IDataForm } from "./MPAD.types";

export default function MyPageADContainer() {
  const router = useRouter();
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
    UserProfileImg: sessionStorage.getItem("profileImg"),
  };

  const onClickSubmit = (data: IDataForm) => {
    if (!data.Link || !data.SNSLink) {
      alert("내용을 입력하세요!");
      return;
    }
    createMyPageAD(
      UserInfo.UserEmail,
      data.Link,
      data.SNSLink,
      data.CheckCategory
    );
    router.push(`/myPage/detail/${UserInfo.UserEmail}`);
    sessionStorage.setItem("Link", data.Link);
    sessionStorage.setItem("userSNSLink", data.SNSLink);
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
