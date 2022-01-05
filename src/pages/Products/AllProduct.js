import { Box, Grid, Typography } from "@mui/material";
import React from 'react';
import { useStyles } from "../../styles/Styles";
const AllProduct = ({product}) => {
  const {cardCardsInfo,singleProductCard} = useStyles();
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} sx={{mt: '0.1rem'}}>
      <Box className={singleProductCard} sx={{cursor: 'pointer',}}>
        <Box sx={{overflow:'hidden', py: '1rem'}}>
        <img style={{width: '100%'}} src={product.img} alt="product" />
        </Box>
        <Typography className={cardCardsInfo} variant="h5">{product.title}</Typography>
        <Typography className={cardCardsInfo} variant="h6"><span>${product.price}</span> <span>{product.category}</span></Typography>
        {/* <Typography className={cardCardsInfo} variant="body2">{product.price} {product?.des.slice(0, 80)}...</Typography> */}
      </Box>
    </Grid>
  );
};

export default AllProduct;