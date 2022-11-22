import MyPageIFPresenter from "./MPIF.presenter";

export default function MyPageIFContainer() {
  const UserInfo = {
    UserEmail: sessionStorage.getItem("userEmail"),
    UsedSNS: sessionStorage.getItem("userUsedSNS"),
    UserSNSLink: sessionStorage.getItem("userSNSLink"),
    UserCheckedCategory: sessionStorage.getItem("userCheckCategory"),
    UserDisplayName: sessionStorage.getItem("displayName"),
  };

  return <MyPageIFPresenter UserInfo={UserInfo} />;
}
