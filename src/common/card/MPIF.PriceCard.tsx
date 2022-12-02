import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface IPropsMPIFPriceCard {
  price: string | null;
  text: string | null;
  cate: string;
}

export default function MPIFPriceCard(props: IPropsMPIFPriceCard) {
  return (
    <div>
      <Card sx={{ width: 200, height: 350 }}>
        <CardMedia
          component="img"
          height="200"
          image="https://source.unsplash.com/random"
          alt="test img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            서비스 설명
            {props.text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
