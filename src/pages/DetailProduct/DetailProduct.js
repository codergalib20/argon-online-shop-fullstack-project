import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import {
  Box,
  Button,
  Container,
  Grid,
  Rating,
  Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import { useStyles } from "../../styles/Styles";
import CartModal from "./CartModal";
const DetailProduct = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { outlineButton } = useStyles();
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://blooming-plains-44019.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  console.log(typeof product.star);
  const rating = product.star;
  return (
    <Box>
      <Header />
      <Box sx={{ py: "40px" }}>
        <Container>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={5}>
              <img style={{ width: "100%" }} src={product?.img} alt="" />
            </Grid>
            <Grid item xs={12} sm={7}>
              <Typography color="#444" fontWeight="700" variant="h4">
                {product.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  py: 2,
                }}
              >
                <Typography color="#444" variant="h5">
                  ${product.price}
                </Typography>
                <Rating
                  name="half-rating-read"
                  defaultValue={product?.star}
                  precision={0.5}
                  readOnly
                />
              </Box>
              <Typography
                sx={{ textAlign: "justify" }}
                color="#555"
                variant="body2"
              >
                {product.des}
              </Typography>
              <br />
              <Typography
                sx={{ textAlign: "justify" }}
                color="#555"
                variant="body2"
              >
                {product.des2}
              </Typography>
              <Button
                onClick={handleOpen}
                variant="contained"
                color="primary"
                className={outlineButton}
                sx={{ mt: 2 }}
              >
                <ShoppingCartCheckoutIcon sx={{ mr: 1 }} />
                Add to cart
              </Button>
            </Grid>
          </Grid>
        </Container>
        <CartModal
          singleProduct={product}
          handleClose={handleClose}
          handleOpen={handleOpen}
          setOpen={setOpen}
          open={open}
        />
      </Box>
    </Box>
  );
};

export default DetailProduct;
