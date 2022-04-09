import React from "react";
import { NextPage, GetServerSideProps } from "next";
import { AdminProductAdd } from "../../../components";
import { ShippingMethod, Category, Product } from "../../../types/graphql";
import client from "../../../graphql/client";
import { gql } from "@apollo/client";

type props = {
  listShippingMethod: [ShippingMethod];
  listCategory: [Category];
  listProduct:[Product]
};
const add = (props: props) => <AdminProductAdd {...props} />;

export const getServerSideProps: GetServerSideProps = async (context) => {
  type data = {
    listShippingMethod: [ShippingMethod];
    listCategory: [Category];
    listProduct:[Product]
  }
  const query = gql`
        query Query {
          listShippingMethod {
            _id
            name
          }
          listCategory {
            _id
            name
          }
          listProduct {
            _id
            name
          }
        }
    `;
  const {data} = await client.query<data>({
      query
  })

  return  {
      props: {
          ...data
      }
  }
};

export default add;
