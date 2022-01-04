import { Box, Container, Grid, Skeleton } from "@mui/material";
import React, { useEffect } from "react";
import ProductManage from './ProductManage';
const ManageProduct = () => {
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://blooming-plains-44019.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProducts(result);
        setLoading(false);
      });
  }, []);

  

  return (
    <Container maxWidth="lg">
      <Box mt={2} mb={2}>
        {loading && <Grid container spacing={3}>
          {[...Array(12)].map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Skeleton variant="rectangular" sx={{background: '#333'}} height={250} />
            </Grid>
          ))}          
          </Grid>}
        {!loading && (
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item xs={12} sm={6} md={4} key={product.id}>
                <ProductManage setProducts={setProducts} products={products} product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Container>
  );
};

export default ManageProduct;
