import { useRecoilState } from "recoil";
import { LoginKeys } from "../src/common/recoil/login.State";

export default function Home() {
  const [test, setTest] = useRecoilState(LoginKeys);
  return <div>{test}</div>;
}
