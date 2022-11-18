import * as NB from "./navbar.styles";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NavBarUI(props: any) {
  return (
    <NB.Wrapper>
      <NB.Logo>ADFO Chat</NB.Logo>
      <NB.User>
        {/* 이미지 수정해야함 */}
        <NB.UserIMG
          src="https://source.unsplash.com/random"
          alt=""
        ></NB.UserIMG>
        {props.UserName}
        <IconButton aria-label="delete" size="small">
          <ArrowBackIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
      </NB.User>
    </NB.Wrapper>
  );
}
