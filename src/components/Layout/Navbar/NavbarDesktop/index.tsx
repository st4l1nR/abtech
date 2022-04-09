import React from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { ShoppingCart, Heart } from "react-feather";
import { Avatar, Menu, MenuItem, SearchBar } from "../../../global";
import Tippy from "@tippyjs/react";

const index = () => {
  const { data: session } = useSession<any>();
  const { register } = useForm();
  return (
    <div className="sticky top-0 z-50 w-full h-16 px-10 mb-4 flex justify-center space-x-3 bg-white">
      <div className="flex w-1/3 justify-center items-center">
        <span>Logo</span>
      </div>
      <div className="shrink w-2/3  flex items-center">
        <SearchBar {...register("query")} />
      </div>
      <div className="justify-self-end h-full flex justify-end items-center space-x-4">
        <Link href="/cart">
          <ShoppingCart className="cursor-pointer" />
        </Link>
        <Link href="/user/wishlist">
          <Heart className="cursor-pointer" />
        </Link>
        <Tippy
          content={
            <Menu>
              {session ? (
                <>
                  <MenuItem href="/user">Account</MenuItem>
                  {session.user?.type === "admin" && (
                    <MenuItem href="/admin">Dashboard</MenuItem>
                  )}
                  <MenuItem href="/user/orders">Orders</MenuItem>
                  <MenuItem href="/use/wishlistr">Wish List</MenuItem>
                  <MenuItem onClick={() => signOut()}>Sign Out</MenuItem>
                </>
              ) : (
                <>
                  <MenuItem href="/signin">Sign in</MenuItem>
                  <MenuItem href="/signup">Sign up</MenuItem>
                </>
              )}
            </Menu>
          }
          animateFill={true}
          arrow={true}
          interactive={true}
        >
          <Avatar />
        </Tippy>
      </div>
    </div>
  );
};

export default index;
