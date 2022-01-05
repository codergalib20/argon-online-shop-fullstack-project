import AddLinkOutlinedIcon from "@mui/icons-material/AddLinkOutlined";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import BookmarkBorderOutlinedIcon from "@mui/icons-material/BookmarkBorderOutlined";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import PrecisionManufacturingOutlinedIcon from "@mui/icons-material/PrecisionManufacturingOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import { Box, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React from "react";
import { NavLink, useRouteMatch } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useStyles } from "./Styles";
const Menus = () => {
  const { navlinkActiveStyle } = useStyles();
  let { path, url } = useRouteMatch();
  const { dashboardMenuIcon, dashboardMenuItem, dashboardMenuItems } =
    useStyles();
  const addActiveStyle = {
    backgroundColor: "#f5f5f5 !important",
    color: "#000 !important",
    fontWeight: "bold",
  };
  const { admin } = useAuth();
  return (
    <List className={dashboardMenuItems}>
      <NavLink
        activeStyle={{ background: "yellow" }}
        activeClassName={navlinkActiveStyle}
        to={`/home`}
      >
        <ListItem button className={dashboardMenuItem}>
          <ListItemIcon className={dashboardMenuIcon}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Website</ListItemText>
        </ListItem>
      </NavLink>
      <NavLink
        activeStyle={{ background: "yellow" }}
        activeClassName={navlinkActiveStyle}
        to={`${url}`}
      >
        <ListItem button className={dashboardMenuItem}>
          <ListItemIcon className={dashboardMenuIcon}>
            <HomeOutlinedIcon />
          </ListItemIcon>
          <ListItemText>Home</ListItemText>
        </ListItem>
      </NavLink>

      {admin ? (
        <Box>
          <NavLink style={{ color: "#fff" }} to={`${url}/productManage`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <PrecisionManufacturingOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Products manage</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink
            style={{ color: "#fff" }}
            activeClassName={navlinkActiveStyle}
            to={`${url}/addProduct`}
          >
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <AddLinkOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Add Product</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{ color: "#fff" }} to={`${url}/usersManage`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <ManageAccountsOutlinedIcon />
              </ListItemIcon>
              <ListItemText>User Mange</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{ color: "#fff" }} to={`${url}/orderManage`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <BorderColorOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Orders Mange</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{ color: "#fff" }} to={`${url}/adminCreate`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <PersonAddAltOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Admin Create</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{ color: "#fff" }} to={`${url}/message`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <CommentOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Message</ListItemText>
            </ListItem>
          </NavLink>
        </Box>
      ) : (
        <Box>
          <NavLink style={{ color: "#fff" }} to={`${url}/allCart`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <AddShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText>All Cart</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink
            activeStyle={addActiveStyle}
            style={{ color: "#fff" }}
            to={`${url}/myOrders`}
          >
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <BookmarkBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText>My Orders</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{ color: "#fff" }} to={`${url}/favorite`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <FavoriteBorderOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Favorite</ListItemText>
            </ListItem>
          </NavLink>
          <NavLink style={{ color: "#fff" }} to={`${url}/sendMessage`}>
            <ListItem button className={dashboardMenuItem}>
              <ListItemIcon className={dashboardMenuIcon}>
                <SendOutlinedIcon />
              </ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItem>
          </NavLink>
        </Box>
      )}
    </List>
  );
};

export default Menus;
