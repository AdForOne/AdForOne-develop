import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import usePage from "../../../../../common/firebase/firebase.myPage";
import useStorage from "../../../../../common/firebase/firebase.storage";
import { useIsSsr } from "../../../../../common/hooks/useSrr";
import MyPageADPresenter from "./MPAD.presenter";

export default function MyPageADContainer() {
  const router = useRouter();
  const isSrr = useIsSsr();
  const [link, setLink] = useState([0]);
  const imgRef: any = useRef();
  const [preview, setPreview] = useState("");
  const [file, setFile] = useState();
  const { handleSubmit, register } = useForm();
  const { createMyPageAD } = usePage();
  if (isSrr) return null;
  const UserInfo: any = {
    UserEmail: sessionStorage.getItem("userEmail"),
    UsedSNS: sessionStorage.getItem("userUsedSNS"),
    UserSNSLink: sessionStorage.getItem("userSNSLink"),
    UserCheckedCategory: sessionStorage.getItem("userCheckCategory"),
    UserDisplayName: sessionStorage.getItem("displayName"),
    UserProfileImg: sessionStorage.getItem("profileImg"),
    UserLink: sessionStorage.getItem("Link"),
  };

  // 페이지 수정 프로세스
  const { Upload } = useStorage();
  const onClickSubmit = async (data: any) => {
    // 수정시 값이 수정이 안되있다면 빈값으로 인식되기때문에 삼항연산자로 값이없다면 저장된 값을 새로 저장함
    await createMyPageAD(
      UserInfo.UserEmail,
      data.Link ? data.Link : UserInfo.UserLink,
      data.SNSLink ? data.SNSLink : UserInfo.UserSNSLink,
      data.UsedSNS ? data.UsedSNS : UserInfo.UsedSNS
    );
    if (file) {
      const url = await Upload(file, UserInfo.UserEmail);
    }
    // 세션에 수정된 값을 저장
    sessionStorage.setItem(
      "userUsedSNS",
      data.UsedSNS ? data.UsedSNS : UserInfo.UsedSNS
    );
    sessionStorage.setItem("Link", data.Link ? data.Link : UserInfo.UserLink);
    sessionStorage.setItem(
      "userSNSLink",
      data.SNSLink ? data.SNSLink : UserInfo.UserSNSLink
    );
    router.push(`/myPage/detail/${UserInfo.UserEmail}`);
  };

  // 이미지 프로세스

  const onClickRef = () => {
    imgRef.current?.click();
  };
  const onClickPreview = (event: any) => {
    const imageSrc = URL.createObjectURL(event.target.files?.[0]);
    setPreview(imageSrc);
    setFile(event.target.files?.[0]);
  };
  return (
    <MyPageADPresenter
      Link={link}
      UserInfo={UserInfo}
      register={register}
      handleSubmit={handleSubmit}
      preview={preview}
      imgRef={imgRef}
      onClickRef={onClickRef}
      onClickPreview={onClickPreview}
      onClickSubmit={onClickSubmit}
    />
  );
}
