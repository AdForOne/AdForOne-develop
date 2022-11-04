import { useRouter } from "next/router";
import { MouseEvent } from "react";
import HeaderPresenter from "./header.presenter";

export default function HeaderContainer() {
  const router = useRouter();
  const onClickMoveToPage = (event: MouseEvent<HTMLImageElement>) => {
    const href = event.currentTarget.id;
    router.push(href);
  };
  return <HeaderPresenter onClickMoveToPage={onClickMoveToPage} />;
}
