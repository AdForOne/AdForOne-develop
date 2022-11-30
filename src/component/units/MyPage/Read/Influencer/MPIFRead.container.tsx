import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../../../common/firebase/firebase.config";
import { useIsSsr } from "../../../../../common/hooks/useSrr";
import MPIFReadPresenter from "./MPIFRead.presenter";

export default function MPIFReadContainer() {
  const isSsr = useIsSsr();
  const router = useRouter();

  // db에 mypage정보 가져오는 함수
  const fetchPage = async () => {
    const UserInfo = doc(db, "users", `${router.query?.email}`);
    const UserSnap = await getDoc(UserInfo);
    localStorage.setItem("Link", UserSnap.data()?.Link);
    localStorage.setItem("ServiceMain", UserSnap.data()?.ServiceMain);
    localStorage.setItem("email", UserSnap.data()?.email);
    localStorage.setItem("CheckCategory", UserSnap.data()?.CheckCategory);
    localStorage.setItem("SNSLink", UserSnap.data()?.SNSLink);
    localStorage.setItem("UsedSNS", UserSnap.data()?.UsedSNS);
    localStorage.setItem("value", UserSnap.data()?.value);
    console.log(UserSnap.data());
  };
  useEffect(() => {
    fetchPage();
  }, []);

  if (localStorage.getItem("ServiceMain")) {
    return <MPIFReadPresenter />;
  }
}
