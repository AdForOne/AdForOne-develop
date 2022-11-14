import { getAuth } from "firebase/auth";
import { useRouter } from "next/router";
import { MouseEvent } from "react";
import { useRecoilState } from "recoil";
import useLogin from "../../firebase/firebase.login";
import { AccessToken } from "../../recoil/token";
import { UserDisplayName } from "../../recoil/user";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const auth = getAuth();
  const router = useRouter();
  const { signOut } = useLogin();
  // recoil State
  const [accessToken, setAccessToken] = useRecoilState(AccessToken);
  const [UserName, setUserName] = useRecoilState(UserDisplayName);
  const onClickMoveToPage = (event: MouseEvent<HTMLImageElement>) => {
    const href = event.currentTarget.id;
    router.push(href);
  };
  const onClickLogOut = () => {
    signOut(auth)
      .then(() => {
        setAccessToken("");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <HeaderPresenter
      onClickMoveToPage={onClickMoveToPage}
      onClickLogOut={onClickLogOut}
      accessToken={accessToken}
      UserName={UserName}
    />
  );
}
