import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";

export default function MPIFChatBtn() {
  const MPIFChatBtn = styled(Button)``;

  const router = useRouter();
  const onClickMoveChat = () => {
    router.push("/chatting");
  };
  return (
    <MPIFChatBtn variant="contained" onClick={onClickMoveChat}>
      채팅목록
    </MPIFChatBtn>
  );
}
