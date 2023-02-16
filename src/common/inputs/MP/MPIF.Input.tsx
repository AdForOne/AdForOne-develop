import { styled, TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsLinkInput {
  register: UseFormRegister<FieldValues>;
  registerName: string;
  default: string | null;
  label: string;
}

export default function MPIFLinkInput(props: IPropsLinkInput) {
  const MPIFLinkInput = styled(TextField)`
    width: 100%;
  `;
  return (
    <MPIFLinkInput
      label={props.label}
      defaultValue={props.default ? props.default : ""}
      variant="outlined"
      {...props.register(props.registerName)}
    />
  );
}
