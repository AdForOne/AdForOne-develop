import { styled, TextField } from "@mui/material";

export default function MPADLinkInput() {
  const MPADLinkTextField = styled(TextField)`
    width: 90%;
  `;
  return <MPADLinkTextField label="링크를 입력해주세요" variant="outlined" />;
}
