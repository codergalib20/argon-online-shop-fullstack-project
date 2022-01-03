import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import Header from "../../components/Header";
import { product } from "../../fakeData/fakeData";
import useAuth from "../../hooks/useAuth";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "../../styles/Styles";
import AllProduct from "./AllProduct";

const AllProducts = () => {
  const [search, setSearch] = useState(product);
  const [filterText, setFilter] = useState("");
  const filterProducts = product.filter((product) =>
    product?.title.toLowerCase().includes(filterText.toLowerCase())
  );
  const {user} = useAuth();
  console.log(user.displayName);
  return (
    <Box>
      <Header />
      <Container sx={{ mt: "30px", py: "20px" }}>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            onChange={(e) => setFilter(e.target.value)}
            placeholder="I'm shopping for…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <Container sx={{py: '20px'}}>
          <Typography variant="h4" color="#f5841a" sx={{ mb: "20px" }}>
            {filterText ? !(filterProducts.length === 0) && 'Your search result ' + filterProducts.length : search.length + ' Product Showing'} 
          </Typography>
        </Container>
        <Grid container spacing={3} sx={{ marginTop: "30px" }}>
          {filterText
            ? filterProducts.length === 0 ? <Typography variant="h4" color="#f5841a">No Products Found</Typography> : filterProducts.map((product) => <AllProduct product={product} />)
            : search.map((product) => (
                <AllProduct key={product._id} product={product} />
              ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProducts;
