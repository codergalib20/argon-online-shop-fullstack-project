import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography
} from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";
import Stack from "@mui/material/Stack";
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../hooks/useAuth";
import { useStyles } from "../../styles/Styles";
const Register = () => {
  const { userCollectionsFormPage, userCollectionsForm, outlineButton } =
    useStyles();
  const { registerNewUser, isLoading } = useAuth();
  console.log(useAuth());
  const history = useHistory();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    if (data?.password !== data?.password2) {
      swal("Something Wrong", "Password Did't match", "error");
      return;
    }
    console.log(data);
    console.log(registerNewUser);
    registerNewUser(data.email, data.password, data.firstName + " " + data.lastName, history);
  };
  console.log(registerNewUser, isLoading);
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
              {isLoading && (
                <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
                  <LinearProgress color="secondary" />
                  <LinearProgress color="success" />
                  <LinearProgress color="inherit" />
                </Stack>
              )}
              {!isLoading && (
                <Typography
                  align="center"
                  variant="h4"
                  fontWeight="600"
                  sx={{ mb: "10px" }}
                  component="h3"
                >
                  Register Here
                </Typography>
              )}
              {!isLoading && (
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    required
                    sx={{ mb: "10px" }}
                    {...register("firstName", { required: true })}
                    fullWidth
                    id="filled-basic"
                    label="First Name"
                    variant="filled"
                  />
                  <TextField
                    required
                    sx={{ mb: "10px" }}
                    {...register("lastName", { required: true })}
                    fullWidth
                    id="filled-basic"
                    label="Last Name"
                    variant="filled"
                  />
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
                  <TextField
                    required
                    sx={{ mb: "10px" }}
                    {...register("password2", { required: true })}
                    fullWidth
                    id="filled-basic"
                    label="Confirm Password"
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
                      size="small"
                      sx={{ mt: "10px" }}
                      className={outlineButton}
                    >
                      Register
                    </Button>
                    <Link to="/login">
                      <Button color="warning" sx={{ mt: "10px" }}>
                        Already have an account?
                      </Button>
                    </Link>
                  </Box>
                </form>
              )}
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Register;
