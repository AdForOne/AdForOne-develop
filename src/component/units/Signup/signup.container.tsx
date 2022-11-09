import SignupPresenter from "./signup.presenter";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";
// Form & yup
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schma = yup.object({
  email: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다!")
    .required("이메일은 필수입력 사항입니다."),

  password: yup
    .string()
    .required("비밀번호는 필수 입력사항입니다.")
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
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const [value, setValue] = useState<string>("인플루언서");
  const [Cate, setCate] = useState<any>([]);

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

  const onClickSignUp = (data: any) => {
    // 인플루언서 광고주 차이로 카테고리 예외처리.
    if (value != "인플루언서") {
      console.log({
        email: data.email,
        password: data.password,
      });
    } else {
      console.log({
        email: data.email,
        password: data.password,
        UsedSNS: data.UsedSNS,
        SNSLink: data.SNSLink,
        CheckCategory: Cate,
      });
    }
  };

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
    />
  );
}
