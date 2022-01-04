import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";
import swal from "sweetalert";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductManage({ product, setProducts, products }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleManageDeleteProduct = (id) => {
    /// Functionality to delete product
    swal({
      title: "Are you sure for deleting?",
      text: "Once deleted, you will not be able to recover this Product!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://blooming-plains-44019.herokuapp.com/manageProduct/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            const remaining = products.filter((service) => service._id !== id);
            setProducts(remaining);
          });
        swal("Poof! product has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your product is safe!");
      }
    });
  };

  return (
    <Card>
      <CardMedia component="img" image={product?.img} alt={product.title} />
      <CardContent>
        <Typography variant="h6" fontWeight="600" color="text.secondary">
          {product?.name}
        </Typography>
        <Typography
          variant="body"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: "5px",
          }}
          color="text.secondary"
        >
          <strong>${product?.price}</strong>
          <strong>{product?.category}</strong>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {product?.des.slice(0, 100)}...
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => handleManageDeleteProduct(product?._id)}
          aria-label="products delete"
        >
          <DeleteForeverIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>...{product?.des}</Typography>
          <hr />
          <Typography paragraph>{product?.des2}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
