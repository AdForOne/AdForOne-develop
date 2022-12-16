import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import useLoginAuth from "../../firebase/firebase.ChatAuth";

export default function MPADChatBtn() {
  const MPADChatBtn = styled(Button)`
    width: 100px;
  `;
  const router = useRouter();
  const { LoginAuth } = useLoginAuth();
  const onClickMoveChat = () => {
    LoginAuth(sessionStorage?.uid);
  };
  return (
    <MPADChatBtn variant="contained" onClick={onClickMoveChat}>
      {sessionStorage.userEmail === router.asPath.split("/").slice(-1).join("")
        ? "채팅목록"
        : "채팅걸기"}
    </MPADChatBtn>
  );
}
