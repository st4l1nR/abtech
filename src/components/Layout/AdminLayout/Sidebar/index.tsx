import React, { useState } from "react";
import { useRouter } from "next/router";
import Item from "./Item";
import {
  Home,
  Copy,
  Book,
  Clipboard,
  Power,
  Settings,
  Tag,
  Users
} from "react-feather";

const index = () => {
  const router = useRouter();
  const path = router.pathname.split("/")[2];

  return (
    <div className="sticky w-full h-screen flex flex-col space-y-5">
      <Item href="/admin" selected={!path}>
        <Home />
        <span>Dashboard</span>
      </Item>
      <Item href="/admin/products" selected={path === "products"}>
        <Book />
        <span>Products</span>
      </Item>
      <Item href="/admin/categories" selected={path === "categories"}>
        <Copy />
        <span>Categories</span>
      </Item>
      <Item href="/admin/orders" selected={path === "orders"}>
        <Clipboard />
        <span>Orders</span>
      </Item>
      <Item href="/admin/discount" selected={path === "discount"}>
        <Tag />
        <span>Discount</span>
      </Item>
      <Item href="/admin/customers" selected={path === "customers"}>
        <Users />
        <span>Customers</span>
      </Item>
      <div className="w-full h-0.5 bg-gray-300"></div>
      <Item href="/admin/settings" selected={path === "settings"}>
        <Settings />
        <span>Settings</span>
      </Item>
      <Item className="hover:text-red-500 cursor-pointer">
        <Power />
        <span>Sign Out</span>
      </Item>
    </div>
  );
};

export default index;
