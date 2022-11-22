export interface IUserInfo {
  UserEmail: string | null;
  UsedSNS: string | null;
  UserSNSLink: string | null;
  UserCheckedCategory: string | null;
  UserDisplayName: string | null;
}

export interface IPropsMPAD {
  Link: any;
  onClickMakeInputs: () => void;
  onClickDeleteInputs: () => void;
  UserInfo: IUserInfo | undefined;
}
