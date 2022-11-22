import { styled, TextField } from "@mui/material";

export default function MPIFChangeInputs(props: any) {
  const MPIFChangeInputs = styled(TextField)`
    width: 100%;
    height: 30px;
    margin-top: -5px;
  `;
  return (
    <MPIFChangeInputs
      label={props.text}
      variant="outlined"
      size="small"
      defaultValue={props.data}
    />
  );
}
