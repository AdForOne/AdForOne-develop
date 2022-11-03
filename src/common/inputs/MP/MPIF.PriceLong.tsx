import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

interface IPropsInputLong {
  label: string;
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
    ></MPIFPriceInputLong>
  );
}
