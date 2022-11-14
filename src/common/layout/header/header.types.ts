import { MouseEventHandler } from "react";

export interface IPropsHeader {
  onClickMoveToPage: MouseEventHandler<HTMLImageElement>;
  onClickLogOut: () => void;
  accessToken: string;
  UserName: string;
}
