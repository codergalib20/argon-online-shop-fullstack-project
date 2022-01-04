import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import AdminImage from "../../../assets/adminImage.png";
import { useStyles } from "../../../styles/Styles";

const AdminCreate = () => {
  const { outlineButton } = useStyles();
  const stylesheet = makeStyles({
    createAdminContentBox: {
      background: `linear-gradient(to right, #1f155c, #1f155e) !important`,
      padding: "1rem !important",
      boxShadow: "0px 0px 10px #000 !important",
      width: "100%",
      maxWidth: "500px",
      borderRadius: "15px",
    },
  });
  const { createAdminContentBox } = stylesheet();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://blooming-plains-44019.herokuapp.com/users/admin/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount === 0) {
          swal("Something wrong please try another id", "", "error");
        } else {
          swal("Success", "Admin Create", "success");
        }
      });
      reset();
  };

  return (
    <div>
      <Container
        sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
      >
        <Box className={createAdminContentBox}>
          <Box sx={{ textAlign: "center" }}>
            <Typography
              variant="h4"
              sx={{ py: 2 , textTransform: "uppercase"}}
              color="#fff"
              fontWeight="600"
            >
              Admin an Create
            </Typography>
            <img
              style={{ width: "100%", maxWidth: "200px", mx: "auto" }}
              src={AdminImage}
              alt=""
            />
          </Box>
          <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
              sx={{ mt: 2, background: "#fff" }}
              id="filled-multiline-static"
              label="E-mail"
              {...register("email", { required: true })}
              multiline
              fullWidth
              rows={4}
              variant="filled"
            />
            <Button
              className={outlineButton}
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
            >
              Create
            </Button>
          </form>
        </Box>
      </Container>
    </div>
  );
};

export default AdminCreate;
