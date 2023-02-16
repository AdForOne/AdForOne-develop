import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

interface IPropsMPIFPriceCard {
  price: string | null;
  text: string | null;
  cate: string;
  imgSrc: string | null;
}

export default function MPIFPriceCard(props: IPropsMPIFPriceCard) {
  return (
    <div>
      <Card sx={{ width: 200, height: 350 }}>
        <CardMedia
          component="img"
          height="200"
          image={props.imgSrc ? props.imgSrc : "/MyPage/DefaultImg.png"}
          alt="test img"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.cate}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.price ? props.price : "가격 정보가 없습니다."}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.text ? props.text : "서비스 설명이 없습니다."}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
