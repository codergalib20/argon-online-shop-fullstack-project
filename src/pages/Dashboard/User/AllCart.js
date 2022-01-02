import { Container, Grid } from "@mui/material";
import React from "react";
import { Orders } from "../../../fakeData/fakeData";
import SingleCart from "./SingleCart";
const AllCart = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {Orders.map((cartItem) => (
            <SingleCart cartItem={cartItem} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default AllCart;
