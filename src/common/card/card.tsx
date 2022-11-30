import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function CardContainer(props: any) {
  return (
    <div id={props.id} onClick={props.onClickMoveToPage}>
      <Card sx={{ Width: 345 }}>
        <CardMedia
          component="img"
          width="230"
          height="200"
          image="https://source.unsplash.com/random"
          alt="test img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.displayName}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="#1976D2"></Typography>
          <Typography variant="body2" color="text.secondary">
            {props.Link}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" disableElevation size="small">
            {props.CheckCategory}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
