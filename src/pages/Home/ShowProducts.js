import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "../../styles/Styles";
import ShowProduct from "./ShowProduct";

const ShowProducts = () => {
  const { outlineButton, featuresButtons } = useStyles();
  const [selectProduct, setSelectProduct] = useState("man");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://blooming-plains-44019.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
   console.log(products);
  // const filerProducts = product.filter()
  const filteringProduct = products.filter(
    (pro) => pro.category === selectProduct
  );

  return (
    <Box sx={{ py: "20px" }}>
      <Container sx={{ borderBottom: "2px solid #e83a3b", py: "10px" }}>
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
      <Container sx={{ py: "10px" }}>
        <Grid container spacing={3}>
          {filteringProduct?.slice(0, 8).map((pro) => (
            <ShowProduct key={pro._id} product={pro} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ShowProducts;
