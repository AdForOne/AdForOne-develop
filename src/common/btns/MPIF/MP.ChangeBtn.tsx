import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IPropsMPChangeBtn {
  onClick: () => void;
}

export default function MPChangeBtn(props: IPropsMPChangeBtn) {
  const MPChangeBtn = styled(Button)`
    width: 95px;
  `;
  return (
    <MPChangeBtn variant="contained" onClick={props.onClick}>
      수정
    </MPChangeBtn>
  );
}
