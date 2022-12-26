import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { MutableRefObject, useEffect, useRef, useState } from "react";
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
    basicImg: sessionStorage.getItem("basicImg"),
    expertPrice: sessionStorage.getItem("expertPrice"),
    expertText: sessionStorage.getItem("expertText"),
    expertImg: sessionStorage.getItem("expertImg"),
    proPrice: sessionStorage.getItem("proPrice"),
    proText: sessionStorage.getItem("proText"),
    proImg: sessionStorage.getItem("proImg"),
  };

  const { handleSubmit, register, setValue, trigger } = useForm();
  /** 리액트 퀼을 useForm과 같이 쓰게하는 onChange함수 */
  const onChangeContents = (value: string) => {
    setValue("ServiceMain", value === "<p><br></p>" ? "" : value);
    trigger("ServiceMain");
  };

  // 변경사항저장 버튼 클릭시 작동하는 함수 fireStore에 저장, Storage에 저장
  const onClickSavePage = async (data: any) => {
    // 내용 중 하나라도 빈 값일때 경고창과 함께 함수 중지
    await createMyPage(
      UserInfo.UserEmail,
      data.Link ? data.Link : UserInfo.UserLink,
      data.ServiceMain
        ? data.ServiceMain.toString()
        : UserInfo.UserServiceMain?.toString(),
      data.CheckCategory ? data.CheckCategory : UserInfo.UserCheckedCategory,
      data.UsedSNS ? data.UsedSNS : UserInfo.UsedSNS,
      data.basicPrice ? data.basicPrice : UserInfo.basicPrice,
      data.basicText ? data.basicText : UserInfo.basicText,
      data.expertPrice ? data.expertPrice : UserInfo.expertPrice,
      data.expertText ? data.expertText : UserInfo.expertText,
      data.proPrice ? data.proPrice : UserInfo.proPrice,
      data.proText ? data.proPrice : UserInfo.proText
    );
    const { Upload, UploadPriceCardImg } = useStorage();
    /* 이미지 변경 후 변경사항 저장을 누르면 storage에 저장시키는 함수.
     이미지가 없이 upload되는 걸 방지하기 위해 조건문 포함 */
    if (file) {
      const url = await Upload(file, UserInfo.UserEmail);
    }
    // 가격정보 이미지 프로세스
    if (basicFile) {
      const url = await UploadPriceCardImg(
        basicFile,
        UserInfo.UserEmail,
        "basic"
      );
    }
    if (expertFile) {
      const url = await UploadPriceCardImg(
        expertFile,
        UserInfo.UserEmail,
        "expert"
      );
    }
    if (proFile) {
      const url = await UploadPriceCardImg(proFile, UserInfo.UserEmail, "pro");
    }

    sessionStorage.setItem("Link", data.Link ? data.Link : UserInfo.UserLink);
    sessionStorage.setItem(
      "ServiceMain",
      data.ServiceMain ? data.ServiceMain : UserInfo.UserServiceMain
    );
    sessionStorage.setItem(
      "userCheckCategory",
      data.CheckCategory ? data.CheckCategory : UserInfo.UserCheckedCategory
    );
    sessionStorage.setItem(
      "userUsedSNS",
      data.UsedSNS ? data.UsedSNS : UserInfo.UsedSNS
    );
    sessionStorage.setItem("basicPrice", data.basicPrice);
    sessionStorage.setItem("basicText", data.basicText);
    sessionStorage.setItem("expertPrice", data.expertPrice);
    sessionStorage.setItem("expertText", data.expertText);
    sessionStorage.setItem("proPrice", data.proPrice);
    sessionStorage.setItem("proText", data.proText);

    // 페이지 생성 완료 혹은 수정 완료시 디테일 페이지로 이동
    await router.push(`/myPage/detail/${UserInfo.UserEmail}`);
  };

  // 이미지 수정 프로세스
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

  // 가격정보 이미지 프로세스
  const basicRef = useRef();
  const expertRef = useRef();
  const proRef = useRef();
  const [basic, setBasic] = useState("");
  const [basicFile, setBasicFile] = useState("");
  const [expert, setExpert] = useState("");
  const [expertFile, setExpertFile] = useState("");
  const [pro, setPro] = useState("");
  const [proFile, setProFile] = useState("");

  const onClickBasicRef = () => {
    basicRef.current?.click();
  };
  const onClickExpertRef = () => {
    expertRef.current?.click();
  };
  const onClickProRef = () => {
    proRef.current?.click();
  };

  const onChangePreviewBasic = (event: any) => {
    const imageSrc = URL.createObjectURL(event.target.files?.[0]);
    setBasic(imageSrc);
    setBasicFile(event.target.files?.[0]);
  };
  const onChangePreviewExpert = (event: any) => {
    const imageSrc = URL.createObjectURL(event.target.files?.[0]);
    setExpert(imageSrc);
    setExpertFile(event.target.files?.[0]);
  };
  const onChangePreviewPro = (event: any) => {
    const imageSrc = URL.createObjectURL(event.target.files?.[0]);
    setPro(imageSrc);
    setProFile(event.target.files?.[0]);
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
      basic={basic}
      basicRef={basicRef}
      expert={expert}
      expertRef={expertRef}
      pro={pro}
      proRef={proRef}
      onClickBasicRef={onClickBasicRef}
      onClickExpertRef={onClickExpertRef}
      onClickProRef={onClickProRef}
      onChangePreviewBasic={onChangePreviewBasic}
      onChangePreviewExpert={onChangePreviewExpert}
      onChangePreviewPro={onChangePreviewPro}
    />
  );
}
