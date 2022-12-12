import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IUserInfo {
  UserEmail: string | null;
  UsedSNS: string | null;
  UserSNSLink: string | null;
  UserCheckedCategory: string | null;
  UserDisplayName: string | null;
  UserProfileImg: string | null;
}

export interface IDataForm {
  Link: string | null;
  SNSLink: string | null;
  CheckCategory: string | null;
}

export interface IPropsMPAD {
  Link: any;
  UserInfo: IUserInfo | undefined;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickSubmit: SubmitHandler<FieldValues>;
}
