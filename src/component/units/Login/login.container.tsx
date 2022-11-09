import LoginPresenter from "./login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

export default function LoginContainer() {
  // yup & Form 을 통한 유효성 검사
  const schma = yup.object({
    email: yup
      .string()
      .email("이메일 형식이 적합하지 않습니다!")
      .required("이메일은 필수입력 사항입니다."),

    password: yup
      .string()
      .max(10, "비밀번호는 최대 10자리 이내로 입력해주세요")
      .required("비밀번호는 필수 입력사항입니다.")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,10}$/,
        "영문,숫자,특수문자를 포함해야 합니다."
      ),
  });

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(schma),
    mode: "onChange",
  });

  const onLoginClick = (event: any) => {
    // event.preventDefault();
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get("email"),
    //   password: data.get("password"),
    // });
    console.log({
      email: event.email,
      password: event.password,
    });
  };

  return (
    <LoginPresenter
      onLoginClick={onLoginClick}
      schma={schma}
      register={register}
      handleSubmit={handleSubmit}
      formState={formState}
    />
  );
}
