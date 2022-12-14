import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface IPropsInputLong {
  label: string;
  register: UseFormRegister<FieldValues>;
  registerName: string;
  default: string | null;
}
/** label = 인풋안에 들어가는 문자열 */
export default function MPIFPriceInputLong(props: IPropsInputLong) {
  const MPIFPriceInputLong = styled(TextField)`
    width: 100%;
    &:hover {
      border: none;
    }
  `;
  return (
    <MPIFPriceInputLong
      label={props.label}
      variant="outlined"
      {...props.register(props.registerName)}
      defaultValue={props.default}
    ></MPIFPriceInputLong>
  );
}
