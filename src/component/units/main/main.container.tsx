import { collection, getDocs, query, where } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../../../common/firebase/firebase.config";
import MainPresenter from "./main.presenter";

export default function MainContainer() {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Data, setData] = useState([{}]);
  const [isList, setIsList] = useState(false);

  // 검색기능 구현
  const [searchList, setSearchList] = useState(null);
  const [searchData, setSearchData] = useState("");
  const [searchErr, setSearchErr] = useState<boolean>(false);
  const onChangeSearchKeyword = (e: any) => {
    setSearchData(e.currentTarget.value);
  };
  const SearchData = async () => {
    // firebase query문
    const q = query(
      collection(db, "users"),
      where("displayName", "==", searchData)
    );

    try {
      const querySnapshot = await getDocs(q);
      // 유저가 없다면
      if (querySnapshot.docs.length === 0) {
        setSearchErr(true);
        setSearchList(null);
      } else {
        querySnapshot.forEach((doc: any) => {
          // 사용자가 있다면 doc 데이터를 설정
          setSearchList(doc.data());
          setSearchErr(false);
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
  const handleKey = (e: KeyboardEvent) => {
    e.code === "Enter" && SearchData();
  };
  // --------------------------

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
      onChangeSearchKeyword={onChangeSearchKeyword}
      searchData={searchData}
      handleKey={handleKey}
      searchList={searchList}
      searchErr={searchErr}
      //
      MoveBoardListBtn={MoveBoardListBtn}
      Email={Email}
      Data={Data}
      onClickMoveToPage={onClickMoveToPage}
      arr={arr}
      router={router.asPath}
    />
  );
}
