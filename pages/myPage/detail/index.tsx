import { useState } from "react";
import { useRecoilState } from "recoil";
import { ChangeAdIf } from "../../../src/common/recoil/MP";
import MPADReadContainer from "../../../src/component/units/MyPage/Read/Advertiser/MPADRead.container";
import MPIFReadContainer from "../../../src/component/units/MyPage/Read/Influencer/MPIFRead.container";

export default function MyPageRead() {
  const [isAd, setIsAd] = useRecoilState(ChangeAdIf);
  return isAd ? <MPADReadContainer /> : <MPIFReadContainer />;
}
