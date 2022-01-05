import { Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import ManageOrder from "./ManageOrder";


const AllCart = () => {
  const [carts, setCarts] = useState([]);
  useEffect(()=>{
    fetch("https://blooming-plains-44019.herokuapp.com/orderCollections")
    .then(res=>res.json())
    .then(data=>setCarts(data))
  },[])
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {carts.map((cartItem) => (
            <ManageOrder cartItem={cartItem} carts={carts} setCarts={setCarts} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllCart;
