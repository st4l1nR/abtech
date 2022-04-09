import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { withAdminAuth } from "../../../components";
import type { Category } from "../../../graphql/types";
import { gql } from "@apollo/client";
import client from "../../../graphql/client";
import { MoreHorizontal, Image as ImageIcon } from "react-feather";
import Tippy from "@tippyjs/react";
import { Menu, MenuItem, Button, SearchBar } from "../../../components/global";
import { useRouter } from "next/router";

type props = {
  listCategory: [Category];
};

const index = ({ listCategory }: props) => {
  return (
    <div>
      <div className="w-full flex justify-between mb-5">
        <span className="text-3xl font-bold">Categories</span>
        <Link href="/admin/categories/add" passHref>
          <Button value="Add" />
        </Link>
      </div>
      <div className="w-full rounded-md drop-shadow-lg">
        <div className="w-full mb-3">
          <SearchBar />
        </div>

        <table className="table-auto w-full rounded-md">
          <thead>
            <tr className="text-xs font-bold text-gray-300">
              <th className="text-left">NAME</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {listCategory.map((category, idx) => (
              <tr className="w-full p-4" key={idx}>
                <td className="w-1/2 relative flex items-center space-x-4">
                  {category.name}
                </td>
                <td>
                  <div className="w-full h-full flex justify-center items-center">
                    <Tippy
                      content={
                        <Menu>
                          <MenuItem href={`/admin/products/${category._id}`}>
                            Edit
                          </MenuItem>
                          <MenuItem>Delete</MenuItem>
                        </Menu>
                      }
                      placement="bottom"
                      arrow={true}
                      interactive={true}
                      trigger="click"
                    >
                      <MoreHorizontal className="cursor-pointer" />
                    </Tippy>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  type data = {
    listCategory: [Category];
  };

  const query = gql`
    query listCategory {
      listCategory {
        _id
        name
      }
    }
  `;
  const {
    data: { listCategory },
  } = await client.query<data>({ query });

  return {
    props: {
      listCategory,
    },
  };
};

export default withAdminAuth(index);
