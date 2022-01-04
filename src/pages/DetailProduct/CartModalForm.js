import { Button, TextField } from "@mui/material";
import React from "react";
import useAuth from "../../hooks/useAuth";
import { useStyles } from "../../styles/Styles";


const CartModalForm = ({handleSubmit, onSubmit, register}) => {
  const { user } = useAuth();
  const { outlineButton } = useStyles();

  return (
    <div style={{ padding: "20px 0" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("name", { required: true })}
          label="Full Name"
          variant="filled"
          defaultValue={user?.displayName}
        />
        <TextField
          fullWidth
          defaultValue={user?.email}
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("email", { required: true })}
          label="E-mail"
          variant="filled"
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("country", { required: true })}
          label="Country"
          variant="filled"
        />
        <TextField
          fullWidth
          sx={{ marginBottom: 1 }}
          id="filled-basic"
          {...register("city", { required: true })}
          label="City"
          variant="filled"
        />
        <Button
          className={outlineButton}
          variant="contained"
          color="primary"
          type="submit"
        >
          Confirm
        </Button>
      </form>
    </div>
  );
};

export default CartModalForm;
