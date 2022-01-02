import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import RotateRightIcon from "@mui/icons-material/RotateRight";
import { Button, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { red } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";
import * as React from "react";
import { useStyles } from "../Styles";

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

export default function SingleCart({ cartItem }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const { avatarBox } = useStyles();

  return (
    <Grid item sx={12} md={6} lg={4}>
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader
          avatar={
            <Avatar
              className={avatarBox}
              sx={{ bgcolor: red[500] }}
              aria-label="recipe"
            >
              <img
                style={{ maxWidth: "100%" }}
                src={cartItem?.userImg}
                alt=""
              />
            </Avatar>
          }
          title={cartItem?.name}
          subheader={cartItem?.date}
        />
        <CardMedia component="img" image={cartItem?.img} alt="Paella dish" />
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
          <IconButton>
            <RotateRightIcon />
          </IconButton>
          <IconButton>
            <DeleteForeverIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
}
