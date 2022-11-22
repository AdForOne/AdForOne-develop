import { useEffect, useMemo, useRef, useState } from "react";
import { useIsSsr } from "../../../../../common/hooks/useSrr";
import MyPageADPresenter from "./MPAD.presenter";

export default function MyPageADContainer() {
  const isSrr = useIsSsr();
  const [link, setLink] = useState([0]);
  if (isSrr) return null;
  const UserInfo = {
    UserEmail: sessionStorage.getItem("userEmail"),
    UsedSNS: sessionStorage.getItem("userUsedSNS"),
    UserSNSLink: sessionStorage.getItem("userSNSLink"),
    UserCheckedCategory: sessionStorage.getItem("userCheckCategory"),
    UserDisplayName: sessionStorage.getItem("displayName"),
  };

  const onClickMakeInputs = () => {
    const countArr = [...link];
    let counter = countArr.slice(-1)[0];
    counter += 1;
    countArr.push(counter); // index 사용 X
    // countArr[counter] = counter	// index 사용 시 윗줄 대신 사용
    setLink(countArr);
  };
  const onClickDeleteInputs = () => {
    const countDownArr = [...link];
    let uncounter = countDownArr.slice(-1)[0];
    uncounter += 1;
    countDownArr.pop();
    setLink(countDownArr);
  };
  return (
    <MyPageADPresenter
      onClickDeleteInputs={onClickDeleteInputs}
      Link={link}
      onClickMakeInputs={onClickMakeInputs}
      UserInfo={UserInfo}
    />
  );
}
