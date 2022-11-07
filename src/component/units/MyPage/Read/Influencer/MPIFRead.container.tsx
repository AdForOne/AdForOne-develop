import { useRecoilState } from "recoil";
import { ChangeAdIf } from "../../../../../common/recoil/MP";
import MPIFReadPresenter from "./MPIFRead.presenter";

export default function MPIFReadContainer() {
  const [isAd, setIsAd] = useRecoilState(ChangeAdIf);

  const onClickChangePage = () => {
    console.log(isAd);
    setIsAd((prev) => !prev);
  };

  return <MPIFReadPresenter onClickChangePage={onClickChangePage} />;
}
