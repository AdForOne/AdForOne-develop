import { styled, TextField } from "@mui/material";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsLinkInput {
  register: UseFormRegister<FieldValues>;
  registerName: string;
}

export default function MPIFLinkInput(props: IPropsLinkInput) {
  const MPIFLinkInput = styled(TextField)`
    width: 100%;
  `;
  return (
    <MPIFLinkInput
      label="소개글을 입력해주세요"
      variant="outlined"
      {...props.register(props.registerName)}
    />
  );
}
