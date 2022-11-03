import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IPropsInputShort {
  label: string;
}
/** label = 인풋안에 들어가는 문자열 */
export default function MPIFPriceInputShort(props: IPropsInputShort) {
  const MPIFPriceInputShort = styled(TextField)``;
  return (
    <MPIFPriceInputShort
      label={props.label}
      variant="outlined"
    ></MPIFPriceInputShort>
  );
}
