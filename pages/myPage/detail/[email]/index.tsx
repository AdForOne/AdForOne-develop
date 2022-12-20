import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../../../../src/common/firebase/firebase.config";
import MPADReadContainer from "../../../../src/component/units/MyPage/Read/Advertiser/MPADRead.container";
import MPIFReadContainer from "../../../../src/component/units/MyPage/Read/Influencer/MPIFRead.container";

export default function MyPageRead() {
  const router = useRouter();
  const query = router.query.email?.toString();
  // query가 사라지면서 새로고침시 에러가 나는 것 같아 새로운 변수에 저장을 해줫ㅏ
  const email = query;
  const [value, setValue] = useState();
  if (email) {
    const onRenderCheckValue = async () => {
      const docRef = doc(db, "users", email);
      const docSnap = await getDoc(docRef);
      setValue(docSnap.data()?.value);
    };
    onRenderCheckValue();
  }

  return value !== "인플루언서" ? <MPADReadContainer /> : <MPIFReadContainer />;
}
