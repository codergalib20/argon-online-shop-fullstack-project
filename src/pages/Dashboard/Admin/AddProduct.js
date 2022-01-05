import {
  Box,
  Button,
  Container,
  Rating,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import { useStyles } from "../../../styles/Styles";
const AddProduct = () => {
  const { outlineButton, categorySelect } = useStyles();
  const [productRating, setProductRating] = React.useState(3.5);
  const { register, handleSubmit,reset } = useForm();
  const onSubmit = (data) => {
    data.rating = productRating;
    fetch("https://blooming-plains-44019.herokuapp.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
    .then((result) => {
      if (result.insertedId) {
        swal("Complete", "Product added to Database!", "success");
        reset();
      }
    })
    .catch((err) => console.log(err));
  };
  return (
    <Box>
      <Typography variant="h4" sx={{ ml: 3, color: "#f5841a" }} gutterBottom>
        Add Product to Store
      </Typography>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box className={categorySelect}>
            <select
              style={{
                width: "100%",
                padding: "0.5rem 1rem",
                marginBottom: "1rem",
                color: "#f5841a",
                fontSize: "1.2rem",
                fontWeight: "bold",
                border: "1px solid #f5841a",
                borderRadius: "5px",
                outline: "none",
                background: "transparent",
              }}
              className="selectStyle"
              {...register("category", { required: true })}
            >
              <option value="man">Man</option>
              <option value="woman">Woman</option>
              <option value="children">Children</option>
            </select>
          </Box>
          <Rating
            onChange={(e) => setProductRating(e.target.value)}
            defaultValue={3.5}
            name="half-rating"
            precision={0.5}
          />
          <TextField
            required
            sx={{ mb: "10px" }}
            {...register("img", { required: true })}
            fullWidth
            id="filled-basic"
            label="Image URL"
            variant="filled"
          />
          <TextField
            required
            sx={{ mb: "10px" }}
            {...register("title", { required: true })}
            fullWidth
            id="filled-basic"
            label="Product Title"
            variant="filled"
          />
          <TextField
            required
            sx={{ mb: "10px" }}
            {...register("price", { required: true })}
            fullWidth
            type="number"
            id="filled-basic"
            label="Price"
            variant="filled"
          />
          <TextField
            id="filled-multiline-static"
            label="Description"
            {...register("des", { required: true })}
            multiline
            fullWidth
            rows={4}
            variant="filled"
          />
          <TextField
            sx={{ mt: 2 }}
            id="filled-multiline-static"
            label="Second Description"
            {...register("des2", { required: true })}
            multiline
            fullWidth
            rows={4}
            variant="filled"
          />
          <Button
            className={outlineButton}
            sx={{ mt: 2 }}
            type="submit"
            variant="contained"
            color="primary"
          >
            Add Product
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default AddProduct;
