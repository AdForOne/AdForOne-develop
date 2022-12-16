import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { db } from "../../../../../common/firebase/firebase.config";
import usePage from "../../../../../common/firebase/firebase.myPage";
import useStorage from "../../../../../common/firebase/firebase.storage";
import MyPageIFPresenter from "./MPIF.presenter";

export default function MyPageIFContainer() {
  const router = useRouter();
  const { createMyPage } = usePage();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState("");

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
    await createMyPage(
      UserInfo.UserEmail,
      data.Link ? data.Link : UserInfo.UserLink,
      data.ServiceMain ? data.ServiceMain : UserInfo.UserServiceMain,
      data.CheckCategory ? data.CheckCategory : UserInfo.UserCheckedCategory,
      data.UsedSNS ? data.UsedSNS : UserInfo.UsedSNS,
      data.basicPrice ? data.basicPrice : UserInfo.basicPrice,
      data.basicText ? data.basicText : UserInfo.basicText,
      data.expertPrice ? data.expertPrice : UserInfo.expertPrice,
      data.expertText ? data.expertText : UserInfo.expertText,
      data.proPrice ? data.proPrice : UserInfo.proPrice,
      data.proText ? data.proPrice : UserInfo.proText
    );
    const { Upload } = useStorage();
    /* 이미지 변경 후 변경사항 저장을 누르면 storage에 저장시키는 함수.
     이미지가 없이 upload되는 걸 방지하기 위해 조건문 포함 */
    if (file) {
      const url = Upload(file, UserInfo.UserEmail);
      console.log("이미지 업로드 완료");
    }

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

  /* 
  이미지 수정시 필요한것
  1. hidden input(type=File)버튼.
  2. 파일 선택시 보여줄 이미지 
    (삼항선택자로 선택된 이미지가 없으면 기존 img태그, 이미지 선택을 했다면 미리보기용 img태그를 보여준다)
  3. 선택 완료후 변경사항 저장 버튼을 누르면 storage에 저장되게하는 함수.
  */

  const imgRef = useRef();
  /** 1. hidden Input을 위한 Ref함수 */
  const onClickRef = () => {
    imgRef.current?.click();
  };

  /** 2. 파일선택시 브라우저 저장소에 선택한 이미지를 저장해 보여주는 함수 */
  const onClickPreview = (event: any) => {
    const imageSrc = URL.createObjectURL(event.target.files?.[0]);
    setPreview(imageSrc);
    setFile(event.target.files?.[0]);
  };

  return (
    <MyPageIFPresenter
      UserInfo={UserInfo}
      handleSubmit={handleSubmit}
      register={register}
      onClickSavePage={onClickSavePage}
      onChangeContents={onChangeContents}
      file={file}
      preview={preview}
      imgRef={imgRef}
      onClickPreview={onClickPreview}
      onClickRef={onClickRef}
    />
  );
}
