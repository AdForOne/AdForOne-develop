import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../../../common/firebase/firebase.config";
import { useIsSsr } from "../../../../../common/hooks/useSrr";
import MPIFReadPresenter from "./MPIFRead.presenter";

export default function MPIFReadContainer() {
  const isSsr = useIsSsr();
  const router = useRouter();
  const [render, setRender] = useState(false);

  // db에 mypage정보 가져오는 함수
  const fetchPage = async () => {
    const UserInfo = doc(db, "users", `${router.query?.email}`);
    const UserSnap = await getDoc(UserInfo);

    if (!render) {
      /** 메인, 리스트에서 카드 클릭시 LocalStorage에 저장하는 정보 */
      const userMpData = {
        displayName: UserSnap.data()?.displayName,
        Link: UserSnap.data()?.Link,
        ServiceMain: UserSnap.data()?.ServiceMain,
        email: UserSnap.data()?.email,
        CheckCategory: UserSnap.data()?.CheckCategory,
        SNSLink: UserSnap.data()?.SNSLink,
        UsedSNS: UserSnap.data()?.UsedSNS,
        value: UserSnap.data()?.value,
        basicPrice: UserSnap.data()?.basicPrice,
        basicText: UserSnap.data()?.basicText,
        basicImg: UserSnap.data()?.basicImg,
        expertPrice: UserSnap.data()?.expertPrice,
        expertText: UserSnap.data()?.expertText,
        expertImg: UserSnap.data()?.expertImg,
        proPrice: UserSnap.data()?.proPrice,
        proText: UserSnap.data()?.proText,
        proImg: UserSnap.data()?.proImg,
        profileImg: UserSnap.data()?.profileImg,
      };
      localStorage.clear();
      localStorage.setItem("userMpData", JSON.stringify(userMpData));
      setRender(true);
    }
  };
  useEffect(() => {
    fetchPage();
  });

  const onClickMoveToEdit = () => {
    router.push(`/myPage/edit`);
  };
  if (render) {
    return <MPIFReadPresenter onClickMoveToEdit={onClickMoveToEdit} />;
  } else {
    return <div>loading...</div>;
  }
}
