import { Fab } from "@mui/material";
import { styled } from "@mui/material/styles";
import AddIcon from "@mui/icons-material/Add";
export default function MPADLinkBtn(props: any) {
  const MPADLinkBtn = styled(Fab)``;
  return (
    <MPADLinkBtn color="primary" aria-label="add" onClick={props.onClick}>
      <AddIcon></AddIcon>
    </MPADLinkBtn>
  );
}
