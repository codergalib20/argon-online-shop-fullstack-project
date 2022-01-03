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
function App() {
  
  return (
    <>
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
            <Route path="/product/:id">
              <DetailProduct />
            </Route>
            <PrivateRoute path="/dashboard">
              <ResponsiveDrawer />
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
