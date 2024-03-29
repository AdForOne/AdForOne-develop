import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  width: 300px;
  height: 100%;
`;
const UserTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export default function CardContainer(props: any) {
  return (
    <Wrapper id={props.id} onClick={props.onClickMoveToPage}>
      <Card sx={{ Width: 300 }}>
        <CardMedia
          component="img"
          width="300"
          height="300"
          image={props.profileImg ? props.profileImg : "/Profile.png"}
          alt="test img"
        />
        <CardContent>
          <UserTitleWrapper>
            <Typography gutterBottom variant="h5" component="div">
              {props.displayName}
            </Typography>
            {props.value === "광고주" && (
              <Button variant="outlined" color="error">
                광고주
              </Button>
            )}
          </UserTitleWrapper>

          <Typography variant="body2" color="text.secondary">
            {props.Link === "" ? "소개글이 없습니다." : props.Link}
          </Typography>
        </CardContent>

        <CardActions>
          {props.value !== "인플루언서" ? (
            <Button variant="contained" disableElevation size="small">
              {props.UsedSNS}
            </Button>
          ) : (
            <Button variant="contained" disableElevation size="small">
              {props.CheckCategory}
            </Button>
          )}
        </CardActions>
      </Card>
    </Wrapper>
  );
}
