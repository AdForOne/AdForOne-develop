import { useEffect, useState } from "react";
import MyPageADContainer from "../../../src/component/units/MyPage/Edit/Advertiser/MPAD.container";
import MyPageIFContainer from "../../../src/component/units/MyPage/Edit/Influencer/MPIF.container";

export default function MyPage() {
  const [isAD, setIsAD] = useState("");
  useEffect(() => {
    const ref = sessionStorage.getItem("userValue");
    if (ref === "인플루언서" || ref === "광고주") {
      setIsAD(ref);
    }
  }, []);

  return isAD !== "인플루언서" ? <MyPageADContainer /> : <MyPageIFContainer />;
}
