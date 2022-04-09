import React, { useState } from "react";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import {
  ShoppingCart,
  Heart,
  Search,
  Menu as MenuIcon,
  X,
} from "react-feather";
import { Avatar, Menu, MenuItem } from "../../../global";
import Tippy from "@tippyjs/react";

const index = () => {
  const { data: session } = useSession<any>();
  const { register } = useForm();
  const [isMenu, setIsMenu] = useState(false);
  return (
    <div className="sticky top-0 z-50 w-full h-16 px-5 mb-4 flex justify-center space-x-3 bg-white">
      <div className="flex items-center justify-start">
        <MenuIcon onClick={() => setIsMenu(true)} />
      </div>
      <div className="shrink flex w-2/4 justify-center items-center">
        <span>Logo</span>
      </div>
      <div className="h-full flex justify-end items-center space-x-4">
        <Search>/</Search>
        <Link href="/cart">
          <ShoppingCart className="cursor-pointer" />
        </Link>
        <Link href="/user/wishlist">
          <Heart className="cursor-pointer" />
        </Link>
        <Avatar />
        <div
          className={`fixed  top-0 right-0 z-50 w-screen h-screen p-5  flex flex-col m-0 justify-center items-center space-y-5 bg-gradient-to-b from-green-400 to-blue-500 text-xl font-bold text-white ${
            !isMenu && "hidden"
          }`}
        >
          <>
            <X
              className="absolute top-0 right-0 m-5"
              onClick={() => setIsMenu(false)}
            />
            {session ? (
              <>
                <Link href="/user">
                  <span className="">Account</span>
                </Link>

                {session.user?.type === "admin" && (
                  <Link href="/admin">
                    <span>Dashboard</span>
                  </Link>
                )}

                <Link href="/user/orders">
                  <span>Orders</span>
                </Link>
                <Link href="/user/wishlist">
                  <span>Wish List</span>
                </Link>

                <span onClick={() => signOut()}>Sign Out</span>
              </>
            ) : (
              <>
                <Link href="/signin">
                  <span>Sign in</span>
                </Link>
                <Link href="/signup">
                  <span>Sign up</span>
                </Link>
              </>
            )}
          </>
        </div>
      </div>
    </div>
  );
};

export default index;
