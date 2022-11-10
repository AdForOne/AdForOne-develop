import * as NB from "./navbar.styles";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function NavBarUI() {
  return (
    <NB.Wrapper>
      <NB.Logo>ADFO Chat</NB.Logo>
      <NB.User>
        <NB.UserIMG
          src="https://source.unsplash.com/random"
          alt=""
        ></NB.UserIMG>
        인플루언서
        <IconButton aria-label="delete" size="small">
          <ArrowBackIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
      </NB.User>
    </NB.Wrapper>
  );
}
