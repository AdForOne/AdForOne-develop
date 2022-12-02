import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { db } from "../../../../src/common/firebase/firebase.config";
import { useIsSsr } from "../../../../src/common/hooks/useSrr";
import { ISAD } from "../../../../src/common/recoil/isAD";
import MPADReadContainer from "../../../../src/component/units/MyPage/Read/Advertiser/MPADRead.container";
import MPIFReadContainer from "../../../../src/component/units/MyPage/Read/Influencer/MPIFRead.container";

export default function MyPageRead() {
  const router = useRouter();
  const [isAD, setIsAD] = useState();
  useEffect(() => {
    const ref = sessionStorage.getItem("userValue");
    if (ref === "인플루언서" || ref === "광고주") {
      setIsAD(ref);
    }
  }, []);
  return isAD !== "인플루언서" ? <MPADReadContainer /> : <MPIFReadContainer />;
}
