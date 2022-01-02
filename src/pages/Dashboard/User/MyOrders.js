import { Container, Grid } from "@mui/material";
import React from "react";
import { Orders } from "../../../fakeData/fakeData";
import MyOrder from "./MyOrder";
const MyOrders = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {Orders.map((cartItem) => (
            <MyOrder cartItem={cartItem} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default MyOrders;
