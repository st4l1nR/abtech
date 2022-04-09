import { gql } from "@apollo/client";

//Product
export const LIST_PRODUCT = gql`
    query listProduct {

    }
`;
//User
export const LIST_USER = gql`
  query listUser {
    listUser {
      _id
      firstName
      lastName
      email
      password
      image
      type
      provider
    }
  }
`;
export const UPDATE_USER = gql`
  mutation updateUser($_id: ID!, $password: String) {
    updateUser(_id: $_id, password: $password) {
      _id
      firstName
      lastName
      email
      password
      image
      type
      provider
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: String!) {
    deleteUser
  }
`;
