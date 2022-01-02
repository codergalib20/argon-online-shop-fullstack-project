import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import AddProduct from "./Admin/AddProduct";
import AdminCreate from "./Admin/AdminCreate";
import ManageProduct from "./Admin/ManageProduct";
import Message from "./Admin/Message";
import OrderManage from "./Admin/OrderManage";
import UserManage from "./Admin/UserManage";
import Dashboard from "./Dashboard";
import AllCart from "./User/AllCart";
import Favorite from "./User/Favorite";
import MyOrders from "./User/MyOrders";
import SendMessage from "./User/SendMessage";

const Pages = () => {
  let { path, url } = useRouteMatch();
  return (
    <>
      <Route exact path={`${path}`}>
        <Dashboard />
      </Route>
      <Route path={`${path}/productManage`}>
        <ManageProduct />
      </Route>
      <Route path={`${path}/addProduct`}>
        <AddProduct />
      </Route>
      <Route path={`${path}/usersManage`}>
        <UserManage />
      </Route>
      <Route path={`${path}/allCart`}>
        <AllCart />
      </Route>
      <Route path={`${path}/myOrders`}>
        <MyOrders />
      </Route>
      <Route path={`${path}/favorite`}>
        <Favorite />
      </Route>
      <Route path={`${path}/sendMessage`}>
        <SendMessage />
      </Route>
      <Route path={`${path}/message`}>
        <Message />
      </Route>
      <Route path={`${path}/adminCreate`}>
        <AdminCreate />
      </Route>
      <Route path={`${path}/orderManage`}>
        <OrderManage />
      </Route>
    </>
  );
};

export default Pages;
