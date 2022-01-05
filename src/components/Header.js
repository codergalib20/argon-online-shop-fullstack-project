import MenuIcon from "@mui/icons-material/Menu";
import { Button } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import AppLogo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import { useStyles } from "../styles/Styles";
// Start Main Function Work___________
export default function Header() {
  const { user, logOutUser } = useAuth();
  const { headerAppBar, appBarLogo, badgeMenuIcon } = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      {user.email ? (
              <Box>
                <Button variant="text" onClick={logOutUser}>
                  Logout
                </Button>
                <Link to="/dashboard">
                  <Button variant="text">Dashboard</Button>
                </Link>
              </Box>
            ) : (
              <Box>
                <Link to="/login">
                  <Button variant="text">Login</Button>
                </Link>
              </Box>
            )}
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={headerAppBar} sx={{background: '#fff'}} position="static">
        <Toolbar>
          <Typography
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, color: "#333" }}
          >
            <img className={appBarLogo} src={AppLogo} alt="" />
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {user.email ? (
              <Box>
                <Button variant="text" onClick={logOutUser}>
                  Logout
                </Button>
                <Link to="/dashboard">
                  <Button variant="text">Dashboard</Button>
                </Link>
              </Box>
            ) : (
              <Box>
                <Link to="/login">
                  <Button variant="text">Login</Button>
                </Link>
              </Box>
            )}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon className={badgeMenuIcon} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

// Header
