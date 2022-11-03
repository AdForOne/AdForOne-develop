import { styled, TextField } from "@mui/material";

export default function MPIFLinkInput() {
  const MPIFLinkInput = styled(TextField)`
    width: 100%;
  `;
  return <MPIFLinkInput label="소개글을 입력해주세요" variant="outlined" />;
}
