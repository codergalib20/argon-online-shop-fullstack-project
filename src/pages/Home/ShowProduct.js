import { Box, Grid, Paper, Rating, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const ShowProduct = ({ product }) => {
  console.log(typeof product.star);
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Link to={`/product/${product?.key}`}>
        <Paper sx={{ p: "20px" }}>
          <Box sx={{ height: "200px", overflow: "hidden" }}>
            <img
              className="cardImageStyle"
              style={{ width: "100%" }}
              src={product?.img}
              alt={product?.title}
            />
          </Box>
          <Box sx={{ p: "10px" }}>
            <Box>
              <Typography variant="h6">{product?.name.slice(0, 20)}</Typography>
              <Box>
                <Typography variant="body1">{product?.price}</Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={product?.star}
                  precision={0.5}
                  readOnly
                />
              </Box>
            </Box>
            <Typography variant="body1">
              {product?.des.slice(0, 100)}...
            </Typography>
          </Box>
        </Paper>
      </Link>
    </Grid>
  );
};

export default ShowProduct;
