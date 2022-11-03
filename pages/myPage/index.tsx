import { useState } from "react";
import MyPageADContainer from "../../src/component/units/MyPage/Advertiser/MPAD.container";
import MyPageIFContainer from "../../src/component/units/MyPage/Influencer/MPIF.container";

export default function MyPage() {
  const [isAD, setIsAD] = useState(false);

  return isAD ? <MyPageADContainer /> : <MyPageIFContainer />;
}
