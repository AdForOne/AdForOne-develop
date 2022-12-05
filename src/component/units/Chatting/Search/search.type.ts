import { ChangeEvent } from "react";

export interface ISearch {
  userName: string | undefined;
  onChangeUserName: (event: ChangeEvent<HTMLInputElement>) => void;
  user: {
    CheckCategory: string[];
    Link: string;
    SNSLink: string;
    UsedSNS: string;
    displayName: string;
    email: string;
    uid: string;
    value: string;
  };
  err: boolean;
  onClickSelect: () => void;
  handleKey: (e: any) => void;
}
