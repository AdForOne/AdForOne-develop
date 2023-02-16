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
  UserLink: string | null;
}

export interface IPropsMPAD {
  Link: any;
  UserInfo: IUserInfo | undefined;
  preview: string;
  imgRef: any;
  register: UseFormRegister<FieldValues>;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  onClickRef: () => void;
  onClickPreview: (event: any) => void;
  onClickSubmit: SubmitHandler<FieldValues>;
}
