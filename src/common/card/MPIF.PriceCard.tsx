import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function MPIFPriceCard() {
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
            베이직
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Basic 가격(원)
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            서비스 설명
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
