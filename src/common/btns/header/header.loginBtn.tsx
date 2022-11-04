import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function HeaderLoginBtn(props) {
  const HeaderLoginBtn = styled(Button)`
    width: 130px;
    height: 40px;
    border: 1px solid #18a0fb;
    border-radius: 6px;
    background-color: #fff;
    color: #18a0fb;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      background-color: #e4e4e4;
    }
  `;
  return (
    <HeaderLoginBtn id={props.id} onClick={props.onClick}>
      로그인
    </HeaderLoginBtn>
  );
}
