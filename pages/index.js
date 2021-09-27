import Head from "next/head";
import React from 'react';
import ReactDOM from 'react-dom';
import data from '../utils/data';
import useStyles from '../utils/styles'
import Layout from "../components/Layout";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import {Grid,
  Button,
   CardActions ,
   Card,
   CardActionArea ,
   CardMedia ,
   CardContent ,
   Typography,
 ButtonGroup,
 Container
 } from '@material-ui/core';


export default function Home() {
  const classes = useStyles();
    return (
      <Layout>
      <Container>
      <div>
        <h1> </h1>
        <Grid container spacing={3}>
        {data.products.map((product)=>(
          <Grid style={{
            fontSize:"16px"
          }}
          item md={3} key={product.name}>

          <Card>
          <CardActionArea>

          <IconButton style={{
            height:"32px",
            width:"32px",
            top:"23px",
            // bottom:"375px",
            left:"220px",
            backgroundColor:"#F1F3F6",
            borderRadius:"10rem",
          }} aria-label="add to shopping cart">
            <BookmarkBorderIcon />
          </IconButton>

          <CardMedia
          style={{
            fontSize:"16px"
          }}
          component="img"
          image={product.image}
          title={product.name}
          style={{
              objectFit: "contain",
              maxHeight:'250px',
              justifyContent: "center",
              // marginTop: "20px",
              alignItems: 'center',
            }}
          >
          </CardMedia>
          <CardContent>
          <Typography style={{
            fontSize:"16px"
          }}>
          {product.name.substring(0, 25)}...
          </Typography>
          <Typography style={{
            fontSize:"12px",
            color:"#969593",
          }}>
          by {product.description.substring(0, 35)}...
          </Typography>
          </CardContent>
          </CardActionArea>
          <CardActions
          style={{
            justifyItems: "center",
            justifyContent: "center",
      }}>

          <Typography
          style={{
            // fontSize:"16px"
          }}
           className={classes.price}>
          ₹{product.price}
          </Typography>
          <Typography
          style={{
            fontSize:"16px",
          }}
           className={classes.price}>
           (22% Off)
          </Typography>
          <Typography
          style={{
            fontSize:"16px",
          }}
           className={classes.price}>
           {product.rating}/5 ({product.numReviews})
          </Typography>
          </CardActions>

          <CardActions style={{
            justifyItems: "center",
            justifyContent: "center",
      }}>
  <IconButton style={{
    color:"#2C308B",
  }} aria-label="add to shopping cart">
    <AddShoppingCartIcon />
  </IconButton>
          <Button
          style={{
            fontSize:"16px"
          }}
          color="primary" size="small"  variant="contained">
          Add to cart
          </Button>
          </CardActions>
          </Card>
          </Grid>
        ))}
        </Grid>
        </div>
        </Container>
        </Layout >

    );
}
