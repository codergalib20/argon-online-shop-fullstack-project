import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";

const ShowProduct = ({ product }) => {
  console.log(product)
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Paper sx={{ p: "20px" }}>
        <img style={{width: '100%'}} src={product?.img} alt={product?.title} />
        <Box sx={{ p: "10px" }}>
          <Box>
            <Typography variant="h6">{product?.name}</Typography>
            <Box>
            <Typography variant="body1">{product?.price}</Typography>
            <Rating name="half-rating-read" defaultValue={product?.rating} precision={0.5} readOnly />

            </Box>
          </Box>
          <Typography variant="body1">{product?.des.slice(0, 100)}...</Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default ShowProduct;
