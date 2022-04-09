import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { TextField, TextArea, Button } from "../global";
import { Image as ImageIcon } from "react-feather";
import { Paper, Switch } from "@mui/material";
import { useMutation, gql } from "@apollo/client";
import type {
  ShippingMethod,
  Category,
  MutationCreateProductArgs,
  Product,
} from "../../types/graphql";

const Section = ({ children }) => (
  <Paper elevation={4}>
    <div className="flex flex-col space-y-2 p-3">{children}</div>
  </Paper>
);
const SectionTitle = ({ children }) => (
  <span className="text-xs font-bold order-b-2">{children}</span>
);

const CREATE_PRODUCT = gql`
  mutation createProduct(
    $name: String!
    $price: Float!
    $inventory: inventoryInput!
    $shippingMethods: [ID!]!
    $conditionals: conditionalsInput!
    $description: String
    $image: String
    $assets: [String]
    $categories: [ID]
    $relatedProducts: [ID]
  ) {
    createProduct(
      name: $name
      price: $price
      inventory: $inventory
      conditionals: $conditionals
      shippingMethods: $shippingMethods
      description: $description
      image: $image
      assets: $assets
      categories: $categories
      relatedProducts: $relatedProducts
    ) {
      _id
    }
  }
`;

type props = {
  listShippingMethod: [ShippingMethod];
  listCategory: [Category];
  listProduct: [Product];
};

const index = ({ listShippingMethod, listCategory, listProduct }: props) => {
  const router = useRouter();
  const [createProduct, { error }] = useMutation<
    Product,
    MutationCreateProductArgs,
    { errorPolicy: "all" }
  >(CREATE_PRODUCT);
  console.log(error?.graphQLErrors);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<MutationCreateProductArgs>({
    defaultValues: {
      inventory: {
        managed: false,
      },
      conditionals: {
        isActive: true,
      },
    },
  });
  const [inventoryManaged, isActive] = watch([
    "inventory.managed",
    "conditionals.isActive",
  ]);
  const [loading, setLoading] = useState(false);

  const onSubmit = async ({
    price,
    inventory,
    shippingMethods,
    categories,
    relatedProducts,
    ...formData
  }: MutationCreateProductArgs) => {
    console.log(formData);
    setLoading(true);
    await createProduct({
      variables: {
        price: parseFloat(price as any),
        inventory: {
          ...inventory,
          avaible: parseInt(inventory.avaible as any, 10),
        },
        shippingMethods: shippingMethods ? [shippingMethods].flat() : [],
        categories: categories ? [categories].flat() : [],
        relatedProducts: relatedProducts ? [relatedProducts].flat() : [],
        ...formData,
      },
    });
    setLoading(false);
    router.replace("/admin/products");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="text-3xl font-bold mb-10">Add Product</div>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
        <div className="w-full md:w-2/3  flex flex-col space-y-4">
          <Section>
            <SectionTitle>Details</SectionTitle>
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-3">
              <TextField
                placeholder="Name (required)"
                error={errors.name?.message}
                {...register("name", { required: "Required" })}
              />
              <TextField
                placeholder="Price (required)"
                error={errors.price?.message}
                {...register("price", {
                  required: "Required",
                  pattern: {
                    value: /^(?=.)([+-]?([0-9]*)(\.([0-9]+))?)$/,
                    message: "Incorrect number",
                  },
                })}
              />
            </div>

            <div className="w-full flex space-x-2">
              <TextField
                disabled={!inventoryManaged}
                placeholder="Inventory"
                error={errors.inventory?.avaible?.message}
                {...register("inventory.avaible", {
                  pattern: {
                    value: /^[0-9]+$/,
                    message: "Incorrect number",
                  },
                })}
              />
              <div className="flex items-center space-x-2">
                <Controller
                  name="inventory.managed"
                  control={control}
                  render={({ field }) => (
                    <Switch defaultChecked={inventoryManaged} {...field} />
                  )}
                />
                <span className="text-sm font-bold">Managed</span>
              </div>
            </div>
            <TextArea
              placeholder="Description"
              rows={5}
              {...register("description")}
            />
          </Section>
          <Section>
            <SectionTitle>Shipping options</SectionTitle>
            <span className="font-bold text-xs text-red-400">
              {errors.shippingMethods?.message}
            </span>
            {listShippingMethod.map((shippingMethod, idx) => (
              <div className="p-3 flex justify-between items-center" key={idx}>
                <span className="text-md">
                  {shippingMethod.name[0].toUpperCase() +
                    shippingMethod.name.slice(1)}
                </span>
                <input
                  className="w-4 h-4"
                  type="checkbox"
                  value={shippingMethod._id}
                  {...register("shippingMethods", { required: "Required" })}
                />
              </div>
            ))}
          </Section>
          <Section>
            <SectionTitle>Gallery</SectionTitle>
            <div className="h-36 p3 flex justify-center items-center rounded-md bg-white shadow-inner">
              <div className="w-36 h-12 p-2 shadow-lg flex justify-center items-center text-gray-800 border border-gray-200 rounded-md bg-white">
                <ImageIcon />
                <span>Upload</span>
              </div>
            </div>
          </Section>
        </div>

        <div className="w-full md:w-1/3 flex flex-col space-y-5">
          <div className="w-full order-last md:order-none mt-5 md:mt-0">
            <Section>
              <Button
                type="submit"
                name="Save changes"
                color="bg-green-500"
                xs="w-full"
                loading={loading}
              />
              <div className="flex items-center space-x-3">
                <Controller
                  name="conditionals.isActive"
                  control={control}
                  render={({ field }) => (
                    <Switch defaultChecked={isActive} {...field} />
                  )}
                />
                <span className="text-sm font-bold">Active</span>
              </div>
            </Section>
          </div>
          <Section>
            <SectionTitle>Categories</SectionTitle>
            <div className="max-h-36 flex flex-col space-y-2 overflow-y-scroll">
              {listCategory.map((category, idx) => (
                <div className="flex space-x-4 items-center" key={idx}>
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    value={category._id}
                    {...register("categories")}
                  />
                  <span className="text-sm">{category.name}</span>
                </div>
              ))}
            </div>
          </Section>
          <Section>
            <SectionTitle>Related Products</SectionTitle>
            <div className="max-h-36 flex flex-col space-y-2 overflow-y-scroll">
              {listProduct.map((product, idx) => (
                <div className="flex space-x-4 items-center" key={idx}>
                  <input
                    className="w-4 h-4"
                    type="checkbox"
                    value={product._id}
                    defaultChecked={false}
                    {...register("relatedProducts")}
                  />
                  <span className="text-sm">{product.name}</span>
                </div>
              ))}
            </div>
          </Section>
        </div>
      </div>
    </form>
  );
};

export default index;

const x = <Paper elevation={2}></Paper>;
