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
}

// export interface IFormData {
//   hello: string;
// }

export interface IPropsMPIF {
  UserInfo: IUserInfo;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  register: UseFormRegister<FieldValues>;
  onClickSavePage: SubmitHandler<FieldValues>;
  onChangeContents: (value: string) => void;
}
