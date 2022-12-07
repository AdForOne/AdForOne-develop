import SignupPresenter from "./signup.presenter";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useRef, useState } from "react";
// Form & yup
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
// useSignIn 훅
import useSignIn from "../../../common/firebase/firebase.auth";
import { useRouter } from "next/router";
import useStorage from "../../../common/firebase/firebase.storage";

const schma = yup.object({
  nickName: yup.string().required("닉네임을 입력 해 주세요"),
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다!")
    .required("이메일은 필수입력 사항입니다."),

  password: yup
    .string()
    .required("비밀번호는 필수 입력사항입니다.")
    .min(6, "비밀번호는 최소 6자리 이상으로 입력해주세요")
    .max(10, "비밀번호는 최대 10자리 이내로 입력해주세요")
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,10}$/,
      "비밀번호는 영문,숫자,특수문자를 포함해야 합니다."
    ),

  passwordCheck: yup
    .string()
    .oneOf([yup.ref("password"), null], "패스워드와 일치하지 않습니다.")
    .required("패스워드 확인을 입력하지 않았습니다."),

  SNSLink: yup.string(),
  UsedSNS: yup.string(),
});

export default function SignupContainer() {
  const router = useRouter();
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [value, setValue] = useState<string>("인플루언서");
  const [Cate, setCate] = useState<any>([]);
  const [file, setFile] = useState();
  const [preview, setPreview] = useState("");
  const { signIn } = useSignIn();
  const { Upload } = useStorage();

  const SNS = [
    { label: "Instargram", id: 1 },
    { label: "FaceBook", id: 2 },
    { label: "Youtube", id: 3 },
    { label: "AfreecaTV", id: 4 },
    { label: "TwitchTV", id: 5 },
  ];

  const categories = [
    { title: "음악", id: "a" },
    { title: "영상편집", id: "b" },
    { title: "IT", id: "c" },
  ];

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });
  /** 회원가입 함수 */
  const onClickSignUp = async (data: any) => {
    // 인플루언서 광고주 차이로 카테고리 예외처리.
    if (value !== "인플루언서") {
      const url = await Upload(file, data.email);
      setFile(url);
      console.log(url);
      signIn(
        data.nickName,
        data.email,
        data.password,
        data.UsedSNS,
        data.SNSLink,
        Cate,
        value,
        url
      );
    } else {
      const url = await Upload(file, data.email);
      setFile(url);
      console.log(url);
      signIn(
        data.nickName,
        data.email,
        data.password,
        data.UsedSNS,
        data.SNSLink,
        Cate,
        value,
        url
      );
    }
    router.push("/login");
  };

  const imgRef = useRef();
  const onPreview = (event: any) => {
    // 브라우저 저장소에 url을 저장하는 방식, 매번 새로 저장하기 때문에 삭제하는 기능도 만들어야 한다.
    const imageSrc = URL.createObjectURL(event.target.files?.[0]);
    setPreview(imageSrc);
  };
  const onClickUpload = () => {
    imgRef.current?.click();
  };

  /** input(file)을 히든으로 감추고 임의의 버튼으로 대체하기 위한 ref */
  return (
    <SignupPresenter
      Cate={Cate}
      setCate={setCate}
      onClickSignUp={onClickSignUp}
      handleSubmit={handleSubmit}
      formState={formState}
      register={register}
      categories={categories}
      SNS={SNS}
      icon={icon}
      checkedIcon={checkedIcon}
      value={value}
      handleChange={handleChange}
      onClick={onPreview}
      preview={preview}
      imgRef={imgRef}
      onClickUpload={onClickUpload}
    />
  );
}
