import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../../../common/firebase/firebase.config";
import { ChangeAdIf } from "../../../../../common/recoil/MP";
import MPADReadPresenter from "./MPADRead.presenter";

export default function MPADReadContainer() {
  const router = useRouter();
  const [isAd, setIsAd] = useRecoilState(ChangeAdIf);
  const [render, setRender] = useState(false);

  const fetchPage = async () => {
    const UserInfo = doc(db, "users", `${router.query?.email}`);
    const UserSnap = await getDoc(UserInfo);
    const userMpData = {
      displayName: UserSnap.data()?.displayName,
      Link: UserSnap.data()?.Link,
      ServiceMain: UserSnap.data()?.ServiceMain,
      email: UserSnap.data()?.email,
      CheckCategory: UserSnap.data()?.CheckCategory,
      SNSLink: UserSnap.data()?.SNSLink,
      UsedSNS: UserSnap.data()?.UsedSNS,
      value: UserSnap.data()?.value,
      profileImg: UserSnap.data()?.profileImg,
    };
    localStorage.clear();
    localStorage.setItem("userMpData", JSON.stringify(userMpData));
    console.log(UserSnap.data());
    setRender(true);
  };

  useEffect(() => {
    fetchPage();
  });

  const onClickChangePage = () => {
    console.log(isAd);
    setIsAd((prev) => !prev);
  };
  if (render) {
    return <MPADReadPresenter onClickChangePage={onClickChangePage} />;
  }
}
