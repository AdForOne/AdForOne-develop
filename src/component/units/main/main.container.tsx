import { collection, getDoc, getDocs } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { db } from "../../../common/firebase/firebase.config";
import MainPresenter from "./main.presenter";

const DataCard = [
  { Category: "카테고리1", title: "카드1" },
  { Category: "카테고리2", title: "카드2" },
  { Category: "카테고리3", title: "카드3" },
  { Category: "카테고리4", title: "카드4" },
  { Category: "카테고리5", title: "카드5" },
  { Category: "카테고리6", title: "카드6" },
  { Category: "카테고리7", title: "카드7" },
  { Category: "카테고리8", title: "카드8" },
  { Category: "카테고리9", title: "카드9" },
];

export default function MainContainer() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Data, setData] = useState([{}]);

  const MoveBoardListBtn = () => {
    router.push("./board/list");
  };
  const Test = async () => {
    const querySnapshot = await getDocs(collection(db, "myPage"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      const DataArr = [doc.data()];
      setEmail(doc.id);
      setData(DataArr);
    });
  };
  useEffect(() => {
    Test();
  }, []);
  return (
    <MainPresenter
      DataCard={DataCard}
      MoveBoardListBtn={MoveBoardListBtn}
      Email={Email}
      Data={Data}
    />
  );
}
