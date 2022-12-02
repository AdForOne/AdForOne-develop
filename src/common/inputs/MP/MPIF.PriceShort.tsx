import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsInputShort {
  label: string;
  register: UseFormRegister<FieldValues>;
  registerName: string;
}
/** label = 인풋안에 들어가는 문자열 */
export default function MPIFPriceInputShort(props: IPropsInputShort) {
  const MPIFPriceInputShort = styled(TextField)``;
  return (
    <MPIFPriceInputShort
      label={props.label}
      variant="outlined"
      {...props.register(props.registerName)}
    ></MPIFPriceInputShort>
  );
}
