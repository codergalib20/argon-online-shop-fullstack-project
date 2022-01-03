import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header";
import CategoryResult from "./CategoryResult";
const CategoryResults = () => {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const categoriesPage = location.pathname.split("/")[2];
  const filterProducts = products.filter(
    (product) => product.category === categoriesPage
  );
  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <Box>
      <Header />
      <Container sx={{ py: "20px" }}>
        <Typography
          sx={{ textAlign: "center" }}
          fontWeight="600"
          color="#f5841a"
          variant="h4"
        >
          {categoriesPage} Product Collection
        </Typography>
      </Container>
      <Container sx={{ py: "20px" }}>
        <Grid container spacing={3} sx={{ marginTop: "30px" }}>
          {filterProducts.map((product) => (
            <CategoryResult key={product._id} product={product} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CategoryResults;