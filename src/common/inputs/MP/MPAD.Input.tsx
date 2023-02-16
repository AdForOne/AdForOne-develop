import { styled, TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsLinkInput {
  register: UseFormRegister<FieldValues>;
  registerName: string;
  label: string;
  default: string | null;
}

export default function MPADLinkInput(props: IPropsLinkInput) {
  const MPADLinkInput = styled(TextField)`
    width: 100%;
  `;
  return (
    <MPADLinkInput
      label={props.label}
      defaultValue={props.default}
      variant="outlined"
      {...props.register(props.registerName)}
    />
  );
}
