import { useEffect, useState } from "react";
import { useIsSsr } from "../../../../src/common/hooks/useSrr";
import MPADReadContainer from "../../../../src/component/units/MyPage/Read/Advertiser/MPADRead.container";
import MPIFReadContainer from "../../../../src/component/units/MyPage/Read/Influencer/MPIFRead.container";

export default function MyPageRead() {
  const [isAD, setIsAD] = useState("");
  useEffect(() => {
    const ref = sessionStorage.getItem("userValue");
    if (ref === "인플루언서" || ref === "광고주") {
      setIsAD(ref);
    }
  }, []);
  return isAD !== "인플루언서" ? <MPADReadContainer /> : <MPIFReadContainer />;
}
