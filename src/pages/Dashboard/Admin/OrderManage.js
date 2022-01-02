import { Container, Grid } from "@mui/material";
import React from "react";
import { Orders } from "../../../fakeData/fakeData";
import ManageOrder from "./ManageOrder";
const OrderManage = () => {
  return (
    <div>
      <Container>
        <Grid container spacing={3}>
          {Orders.map((cartItem) => (
            <ManageOrder cartItem={cartItem} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default OrderManage;
