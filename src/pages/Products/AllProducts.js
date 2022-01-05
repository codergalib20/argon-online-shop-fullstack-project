import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import useAuth from "../../hooks/useAuth";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase
} from "../../styles/Styles";

const AllProducts = () => {
  const [product , setProduct] = useState([]);
  const [search, setSearch] = useState(product);
  const [filterText, setFilter] = useState("");
  // const filterProducts = product.filter((prod) =>
  //   prod?.name.includes(filterText.toLowerCase())
  // );
  console.log(product.map.product.name);
  useEffect(()=>{
       fetch("https://blooming-plains-44019.herokuapp.com/products")
      .then((res) => res.json())
      .then((result) => {
        setProduct(result);
      });
  }, [])
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
          {/* <Typography variant="h4" color="#f5841a" sx={{ mb: "20px" }}>
            {filterText ? !(filterProducts.length === 0) && 'Your search result ' + filterProducts.length : search.length + ' Product Showing'} 
          </Typography> */}
        </Container>
        <Grid container spacing={3} sx={{ marginTop: "30px" }}>
          {/* {filterText
            ? filterProducts.length === 0 ? <Typography variant="h4" color="#f5841a">No Products Found</Typography> : filterProducts.map((product) => <AllProduct product={product} />)
            : search.map((product) => (
                <AllProduct key={product._id} product={product} />
              ))} */}
        </Grid>
      </Container>
    </Box>
  );
};

export default AllProducts;
