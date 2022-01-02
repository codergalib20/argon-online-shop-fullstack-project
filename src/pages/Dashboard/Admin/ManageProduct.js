import { Box, Container, Grid } from "@mui/material";
import React from "react";
import { product } from "../../../fakeData/fakeData";
import ProductManage from "./ProductManage";

const ManageProduct = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={3}>
          {product.map((pro) => (
            <ProductManage key={pro._id} product={pro} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ManageProduct;
