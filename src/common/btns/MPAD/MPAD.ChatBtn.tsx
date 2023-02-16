import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { ValidationURL } from "../../../component/commons/ChatBtnVal";
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
      {ValidationURL(
        sessionStorage.userEmail,
        router.asPath.split("/").slice(-1).join("")
      )}
    </MPADChatBtn>
  );
}
