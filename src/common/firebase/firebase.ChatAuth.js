import { useRouter } from "next/router";

export default function useLoginAuth() {
  const router = useRouter();
  const LoginAuth = (uid) => {
    if (uid) {
      console.log(uid);
      return router.push(`/chatting/${sessionStorage.uid}`);
    } else {
      console.log("error");
      router.push("/login");
      alert("로그인해주세요");
    }
  };

  return { LoginAuth };
}
