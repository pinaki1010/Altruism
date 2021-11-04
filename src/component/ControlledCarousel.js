import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
  
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} className="my-4"  >
        <Carousel.Item>
        <Card sx={{ maxWidth: 4000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9uYXRpb258ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
          alt="green iguana"
        />
        </CardActionArea>
        </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card sx={{ maxWidth: 4000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://i.pinimg.com/originals/96/8c/1d/968c1d3ef972355fe3a4818a370a1455.jpg"
          alt="green iguana"
        />
        </CardActionArea>
        </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card sx={{ maxWidth: 4000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://www.blogsavenue.com/wp-content/uploads/2018/01/How-to-help-your-local-charity-in-2018-2.jpg"
          alt="green iguana"
        />
        </CardActionArea>
        </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card sx={{ maxWidth: 4000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://dkprodimages.gumlet.io/JMES_Join-the-cause-and-support.jpg?format=webp&w=400&dpr=2.6"
          alt="green iguana"
        />
        </CardActionArea>
        </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card sx={{ maxWidth: 4000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://as1.ftcdn.net/v2/jpg/03/14/38/44/500_F_314384420_1kowL2Ns4hhPxora2cHzzFc6ZYcFBA42.jpg"
          alt="green iguana"
        />
        </CardActionArea>
        </Card>
        </Carousel.Item>
        <Carousel.Item>
        <Card sx={{ maxWidth: 4000 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="500"
          image="https://media.istockphoto.com/photos/all-you-need-is-a-lending-hand-picture-id904483798?k=20&m=904483798&s=612x612&w=0&h=cmwCpkes_bDl1Bipxm11ZSrmQwcHBW04e7-A70fplKU="
          alt="green iguana"
        />
        </CardActionArea>
        </Card>
        </Carousel.Item>
      </Carousel>
    );
  }
  
  

  export default ControlledCarousel;