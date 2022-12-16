import { LegacyRef, MutableRefObject } from "react";
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
} from "react-hook-form";

export interface IUserInfo {
  UserProfile: string | null;
  UserEmail: string | null;
  UsedSNS: string | null;
  UserSNSLink: string | null;
  UserCheckedCategory: string | null;
  UserDisplayName: string | null;
  UserLink: string | null;
  UserServiceMain: string | null;
  basicPrice: string | null;
  basicText: string | null;
  expertPrice: string | null;
  expertText: string | null;
  proPrice: string | null;
  proText: string | null;
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
  file: string | undefined;
  preview: string | undefined;
  imgRef: any;
  onClickPreview: (event: any) => void;
  onClickRef: () => void;
}
