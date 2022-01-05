import { Box, LinearProgress, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import CategoryResults from "./pages/CategoryResult/CategoryResults";
import ResponsiveDrawer from "./pages/Dashboard/ResponsiveDrawer";
import DetailProduct from "./pages/DetailProduct/DetailProduct";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import PrivateRoute from "./pages/Login/Private/PrivateRoute";
import Register from "./pages/Login/Register";
import NoPage from "./pages/NoPage";
import AllProducts from "./pages/Products/AllProducts";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Box
          sx={{
            minHeight: "100vh",
            background: "#561c22",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
            <LinearProgress color="secondary" />
            <LinearProgress color="success" />
            <LinearProgress color="inherit" />
          </Stack>
        </Box>
      ) : (
        <AuthProvider>
          <Router>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/products/:category">
                <CategoryResults />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/allProducts">
                <AllProducts />
              </Route>
              <PrivateRoute path="/product/:id">
                <DetailProduct />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <ResponsiveDrawer />
              </PrivateRoute>
              <Route path="*">
                <NoPage />
              </Route>
            </Switch>
          </Router>
        </AuthProvider>
      )}
    </>
  );
}

export default App;
