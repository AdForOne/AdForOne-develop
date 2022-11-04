import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function HeaderSignInBtn(props: any) {
  const HeaderSignInBtn = styled(Button)`
    width: 130px;
    height: 40px;
    border: none;
    border-radius: 6px;
    background-color: #18a0fb;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    &:hover {
      background-color: #0883d5;
    }
  `;
  return (
    <HeaderSignInBtn id={props.id} onClick={props.onClick}>
      회원가입
    </HeaderSignInBtn>
  );
}
