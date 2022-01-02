import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import * as React from "react";

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

export default function ProductManage({ product }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardMedia component="img" image={product?.img} alt={product.title} />
        <CardContent>
          <Typography variant="h6" fontWeight="600" color="text.secondary">
            {product?.title}
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
            {product?.info.slice(0, 100)}...
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="products delete">
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
            <Typography paragraph>...{product?.info}</Typography>
            <hr />
            <Typography paragraph>{product?.info}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </Grid>
  );
}
