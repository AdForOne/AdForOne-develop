import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../common/firebase/firebase.config";
import { ISAD } from "../../../common/recoil/isAD";
import MainPresenter from "./main.presenter";

export default function MainContainer() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Data, setData] = useState([{}]);
  const [isList, setIsList] = useState(false);
  const MoveBoardListBtn = () => {
    router.push("./board/list");
  };
  // type Error
  const arr: any[] = [];

  const Test = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      arr.push(doc.data());
    });
    setData(arr);
  };
  if (isList !== true) {
    Test();
    setIsList(true);
  }

  const onClickMoveToPage = async (event: any) => {
    router.push(`/myPage/detail/${event.currentTarget.id}`);
  };

  return (
    <MainPresenter
      MoveBoardListBtn={MoveBoardListBtn}
      Email={Email}
      Data={Data}
      onClickMoveToPage={onClickMoveToPage}
      arr={arr}
      router={router.asPath}
    />
  );
}
