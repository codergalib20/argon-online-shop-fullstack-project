import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { Button, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import * as React from "react";
import swal from "sweetalert";
import { useStyles } from "../Styles";

export default function SingleCart({ cartItem,carts, setCarts }) {
  const { avatarBox } = useStyles();
  console.log(cartItem);
  // Delete Cart Item
  const deleteCartItem = (id) => {
    swal({
      title: "Are you sure for delete?",
      text: "Once deleted, you will not be able to recover this user data",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://blooming-plains-44019.herokuapp.com/cartDel/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = carts.filter((cart) => cart._id !== id);
            setCarts(remaining);
          });
        swal("Poof! Users has been deleted! from user list", {
          icon: "success",
        });
      } else {
        swal("User data is safe!");
      }
    });
  }

  const orderConfirm = (id) => {
    swal({
      title: "Are you sure for Order Confirm?",
      text: "One delete will be permanent",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://blooming-plains-44019.herokuapp.com/cartOrder/${id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = carts.filter((cart) => cart._id !== id);
            setCarts(remaining);
          });
        swal("Poof! Product Order confirm success", {
          icon: "success",
        });
      } else {
        swal("Cart product Product not Order confirm");
      }
    });
  }

  return (
    <Grid item xs={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              className={avatarBox}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            >
              <Typography variant="h5">{cartItem.name[0]}</Typography>
            </Avatar>
          }
          title={cartItem?.name}
          subheader={cartItem?.date}
        />
        <CardMedia component="img" image={cartItem.product.img} alt="Paella dish" />
        <CardActions
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Button sx={{ fontSize: "1.2rem" }} variant="text">
            ${cartItem?.price}
          </Button>
          <Button sx={{ fontSize: "1.2rem" }} variant="text">
            Count - {cartItem?.count}
          </Button>
        </CardActions>
        <CardActions>
          <IconButton onClick={()=>orderConfirm(cartItem?._id)}>
            <RotateRightIcon />
          </IconButton>
          <IconButton onClick={()=>deleteCartItem(cartItem?._id)}>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
