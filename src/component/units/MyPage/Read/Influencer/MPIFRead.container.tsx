import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../../../common/firebase/firebase.config";
import usePage from "../../../../../common/firebase/firebase.myPage";
import MPIFReadPresenter from "./MPIFRead.presenter";

export default function MPIFReadContainer() {
  const [Link, setLink] = useState();
  const [ServiceMain, setServiceMain] = useState();
  const [userInfo, setUserInfo] = useState({});

  // db에 mypage정보 가져오는 함수
  const fetchPage = async () => {
    const router = useRouter();
    const PageRef = doc(db, "myPage", `${router.query?.email}`);
    const PageSnap = await getDoc(PageRef);
    const UserInfo = doc(db, "users", `${router.query?.email}`);
    const UserSnap = await getDoc(UserInfo);

    setUserInfo({
      uid: UserSnap.data()?.uid,
    });
    setLink(PageSnap.data()?.Link);
    setServiceMain(PageSnap.data()?.ServiceMain);
    console.log(userInfo);
  };

  fetchPage();
  return <MPIFReadPresenter Link={Link} ServiceMain={ServiceMain} />;
}
