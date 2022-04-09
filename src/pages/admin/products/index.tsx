import React from "react";
import { GetServerSideProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { withAdminAuth } from "../../../components";
import type {
  Product,
  MutationDeleteProductArgs,
} from "../../../graphql/types";
import { gql, useMutation } from "@apollo/client";
import client from "../../../graphql/client";
import { MoreHorizontal, Image as ImageIcon } from "react-feather";
import Tippy from "@tippyjs/react";
import { Menu, MenuItem, Button, SearchBar } from "../../../components/global";


const DELETE_PRODUCT = gql`
  mutation deleteProduct(_id:ID!) {
    deleteProduct(_id:$_id) {
      _id
    }
  }
`;
type props = {
  listProduct: [Product];
};

const index = ({ listProduct }: props) => {
  const [deleteProduct] = useMutation<Product, MutationDeleteProductArgs>(
    DELETE_PRODUCT
  );

  return (
    <div>
      <div className="w-full flex justify-between mb-5">
        <span className="text-3xl font-bold">Products</span>
        <Link href="/admin/products/add" passHref>
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
              <th className="text-left">PRODUCT</th>
              <th>RAMAINING</th>
              <th>ORDERS</th>
              <th>SALES</th>
              <th>OPTIONS</th>
            </tr>
          </thead>
          <tbody className="text-center">
            {listProduct.map((product, idx) => (
              <tr className="w-full p-4" key={idx}>
                <td className="w-1/2 relative flex items-center space-x-4">
                  {product.image ? (
                    <div className="w-24 h-24 rounded-md">
                      <Image
                        src={product.image}
                        layout="fill"
                        objectFit="contain"
                      ></Image>
                    </div>
                  ) : (
                    <ImageIcon className="w-24 h-24 text-gray-300" />
                  )}
                  <div className="shrink">{product.name}</div>
                </td>
                <td>
                  {product.inventory.managed ? product.inventory.avaible : "-"}
                </td>
                <td>0</td>
                <td>{product.sales}</td>
                <td>
                  <div className="w-full h-full flex justify-center items-center">
                    <Tippy
                      content={
                        <Menu>
                          <MenuItem href={`/admin/products/${product._id}`}>
                            Edit
                          </MenuItem>
                          <MenuItem
                            onClick={async () =>
                              await deleteProduct({
                                variables: {
                                  _id: product._id,
                                },
                              })
                            }
                          >
                            Delete
                          </MenuItem>
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
    listProduct: [Product];
  };

  const query = gql`
    query listProduct {
      listProduct {
        _id
        name
        price
        inventory {
          managed
          avaible
        }
        conditionals {
          isActive
          isInventoryManaged
          isSoldOut
          hasImages
        }
        image
        sales
        createdAt
        updatedAt
      }
    }
  `;
  const {
    data: { listProduct },
  } = await client.query<data>({ query });

  return {
    props: {
      listProduct,
    },
  };
};

export default withAdminAuth(index);
