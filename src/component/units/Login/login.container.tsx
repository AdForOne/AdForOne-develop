import LoginPresenter from "./login.presenter";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useLogin from "../../../common/firebase/firebase.login";
import { useRouter } from "next/router";

export default function LoginContainer() {
  const { login, isSuccess } = useLogin();
  const router = useRouter();
  // yup & Form 을 통한 유효성 검사
  const schma = yup.object({
    email: yup
      .string()
      .email("이메일 형식이 적합하지 않습니다!")
      .required("이메일은 필수입력 사항입니다."),

    password: yup
      .string()
      .min(6, "비밀번호는 최대 6자리 이상입니다.")
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
    const data = new FormData(event.currentTarget);
    login(event.email, event.password);
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
