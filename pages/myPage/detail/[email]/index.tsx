import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { db } from "../../../../src/common/firebase/firebase.config";
import MPADReadContainer from "../../../../src/component/units/MyPage/Read/Advertiser/MPADRead.container";
import MPIFReadContainer from "../../../../src/component/units/MyPage/Read/Influencer/MPIFRead.container";

export default function MyPageRead() {
  const router = useRouter();
  const query = router.query.email?.toString();
  const [value, setValue] = useState();
  const onRenderCheckValue = async () => {
    if (query !== "undefined") {
      const docRef = doc(db, "users", query);
      const docSnap = await getDoc(docRef);
      setValue(docSnap.data()?.value);
    }
    // if (ref === "인플루언서" || ref === "광고주") {
    //   setIsAD(ref);
    // }
  };
  onRenderCheckValue();
  return value !== "인플루언서" ? <MPADReadContainer /> : <MPIFReadContainer />;
}
