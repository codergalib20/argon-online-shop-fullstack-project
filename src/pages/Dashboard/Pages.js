import React from "react";
import { Route, useRouteMatch } from "react-router-dom";
import AdminRoute from '../Login/Private/AdminRoute';
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
      <AdminRoute path={`${path}/productManage`}>
        <ManageProduct />
      </AdminRoute>
      <AdminRoute path={`${path}/addProduct`}>
        <AddProduct />
      </AdminRoute>
      <AdminRoute path={`${path}/usersManage`}>
        <UserManage />
      </AdminRoute>
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
      <AdminRoute path={`${path}/message`}>
        <Message />
      </AdminRoute>
      <AdminRoute path={`${path}/adminCreate`}>
        <AdminCreate />
      </AdminRoute>
      <AdminRoute path={`${path}/orderManage`}>
        <OrderManage />
      </AdminRoute>
    </>
  );
};

export default Pages;
