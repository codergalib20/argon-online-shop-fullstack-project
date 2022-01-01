import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { product } from "../../fakeData/fakeData";
import { useStyles } from "../../styles/Styles";
import ShowProduct from "./ShowProduct";

const ShowProducts = () => {
  const { outlineButton, featuresButtons } = useStyles();
  const [selectProduct, setSelectProduct] = useState("woman");

  // const filerProducts = product.filter()
  const filteringProduct = product.filter(
    (pro) => pro.category === selectProduct
  );

  return (
    <Box sx={{ py: "20px" }}>
      <Container sx={{borderBottom: '2px solid #e83a3b', py: '10px'}}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h4">Show Product</Typography>
          </Grid>
          <Grid item xs={12} md={6} className={featuresButtons}>
            <Box>
              <Button
                onClick={() => setSelectProduct("man")}
                variant="contained"
                className={outlineButton}
              >
                Man
              </Button>

              <Button
                onClick={() => setSelectProduct("woman")}
                sx={{ ml: "8px" }}
                variant="contained"
                className={outlineButton}
              >
                Woman
              </Button>

              <Button
                onClick={() => setSelectProduct("children")}
                variant="contained"
                sx={{ ml: "8px" }}
                className={outlineButton}
              >
                Children
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <Container  sx={{py: '10px'}}>
        <Grid container spacing={3}>
          {filteringProduct.map((pro) => (
            <ShowProduct key={pro._id} product={pro} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShowProducts;
