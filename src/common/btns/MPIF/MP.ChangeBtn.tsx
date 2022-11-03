import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";

export default function MPChangeBtn() {
  const MPChangeBtn = styled(Button)`
    width: 95px;
  `;
  return <MPChangeBtn variant="contained">변경</MPChangeBtn>;
}
