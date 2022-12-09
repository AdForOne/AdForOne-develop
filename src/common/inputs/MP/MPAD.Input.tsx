import { styled, TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsLinkInput {
  register: UseFormRegister<FieldValues>;
  registerName: string;
  label: string;
}

export default function MPADLinkInput(props: IPropsLinkInput) {
  const MPADLinkInput = styled(TextField)`
    width: 100%;
  `;
  return (
    <MPADLinkInput
      label={props.label}
      variant="outlined"
      {...props.register(props.registerName)}
    />
  );
}
