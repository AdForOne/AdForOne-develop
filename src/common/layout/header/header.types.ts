import { MouseEventHandler } from "react";

export interface IPropsHeader {
  onClickMoveToPage: MouseEventHandler<HTMLImageElement>;
  onClickLogOut: () => void;
  UserName: string;
  isLogin: any;
  onClickMoveToMyPage: () => void;
}
