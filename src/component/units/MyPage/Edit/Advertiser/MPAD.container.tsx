import { useMemo, useRef, useState } from "react";
import MyPageADPresenter from "./MPAD.presenter";

export default function MyPageADContainer() {
  const [link, setLink] = useState([0]);

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
    />
  );
}
