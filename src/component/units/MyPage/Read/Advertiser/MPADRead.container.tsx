import { useRecoilState } from "recoil";
import { ChangeAdIf } from "../../../../../common/recoil/MP";
import MPADReadPresenter from "./MPADRead.presenter";

export default function MPADReadContainer() {
  const [isAd, setIsAd] = useRecoilState(ChangeAdIf);

  const onClickChangePage = () => {
    console.log(isAd);
    setIsAd((prev) => !prev);
  };
  return <MPADReadPresenter onClickChangePage={onClickChangePage} />;
}
