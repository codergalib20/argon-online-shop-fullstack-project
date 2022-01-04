import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useStyles } from "../../styles/Styles";

const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { userCollectionsFormPage, userCollectionsForm, outlineButton } =
    useStyles();
  const { register, handleSubmit } = useForm();
  const { loginUser } = useAuth();
  const onSubmit = (data) => {
      loginUser(data.email, data.password, history,location);
  };
  return (
    <Box className={userCollectionsFormPage}>
      <Container>
        <Grid
          container
          spacing={3}
          sx={{ minHeight: "105vh", alignItems: "center" }}
        >
          <Grid
            item
            xs={{ display: { sx: "none", md: "block" } }}
            md={6}
          ></Grid>
          <Grid item xs={12} md={6}>
            <Paper className={userCollectionsForm}>
              <Typography
                align="center"
                variant="h4"
                fontWeight="600"
                sx={{ mb: "10px" }}
                component="h3"
              >
                Login Here
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <TextField
                  required
                  sx={{ mb: "10px" }}
                  {...register("email", { required: true })}
                  fullWidth
                  id="filled-basic"
                  label="E-mail"
                  variant="filled"
                />
                <TextField
                  required
                  sx={{ mb: "10px" }}
                  {...register("password", { required: true })}
                  fullWidth
                  id="filled-basic"
                  label="Password"
                  variant="filled"
                />
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    variant="contained"
                    type="submit"
                    color="primary"
                    sx={{ mt: "10px" }}
                    className={outlineButton}
                  >
                    Login
                  </Button>
                  <Link to="/register">
                    <Button color="warning" size="small" sx={{ mt: "10px" }}>
                      Are you a new user?
                    </Button>
                  </Link>
                </Box>
              </form>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Login;
