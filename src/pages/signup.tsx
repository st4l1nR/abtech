import * as types from "../types";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { TextField, Button } from "../components/global";
import { GoogleLoginButton } from "react-social-login-buttons";
import Link from "next/link";
import Image from "next/image";
import { signIn } from "next-auth/react";
import { CREATE_USER } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { Alert } from "../components/global";
import { User, MutationCreateUserArgs } from "../types/graphql";

type formData = MutationCreateUserArgs & {
  repeatPassword: string;
};

const signup: NextPage = () => {
  const router = useRouter();
  const [createUser, { data, loading, error }] = useMutation<
    User,
    MutationCreateUserArgs
  >(CREATE_USER);

  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });

  const {
    register,
    formState: { errors },
    setError,
    handleSubmit,
  } = useForm<formData>();

  const onSubmit = async ({ repeatPassword, ...data }: formData) => {
    if (data.password !== repeatPassword) {
      setError("repeatPassword", {
        message: "Passwords dont' match",
      });
      return;
    }
    await createUser({ variables: data });
    router.push("/signin");
  };

  useEffect(() => {
    if (error)
      setAlert({
        open: true,
        severity: "error",
        message: error.graphQLErrors[0].message,
      });
  }, [error]);

  return (
    <>
      <Alert
        open={alert.open}
        onClose={() => setAlert((prv) => ({ open: false, ...prv }))}
        severity={alert.severity as any}
        message={alert.message}
      />

      <form className="h-screen flex" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-lg  p-5 flex flex-col space-y-5">
            <div className="flex flex-col space-y-3">
              <span className="text-3xl font-bold">Sign up</span>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
                <TextField
                  label="First name"
                  placeholder="First name"
                  error={errors.firstName?.message}
                  {...register("firstName", { required: "Required" })}
                />
                <TextField
                  label="Last name"
                  placeholder="Last Name"
                  error={errors.lastName?.message}
                  {...register("lastName", {
                    required: "Required",
                  })}
                />
              </div>
              <TextField
                label="Email"
                placeholder="Email"
                error={errors.email?.message}
                {...register("email", {
                  required: "Required",
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Invalid emial",
                  },
                })}
              />
              <TextField
                type="password"
                label="Password"
                placeholder="Password"
                error={errors.password?.message}
                {...register("password", {
                  required: "Required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Minimum 8 characters, 1 letter and 1 number",
                  },
                })}
              />
              <TextField
                type="password"
                label="Repeat password"
                placeholder="Repeat password"
                error={errors.repeatPassword?.message}
                {...register("repeatPassword", {
                  required: "Required",
                  pattern: {
                    value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
                    message: "Minimum 8 characters, 1 letter and 1 number",
                  },
                })}
              />
            </div>

            <Button
              name="Sign Up"
              type="submit"
              xs="w-full"
              loading={loading}
            />
            <div className="w-full flex justify-center">
              <GoogleLoginButton onClick={() => signIn("google")}>
                Sign up with Google
              </GoogleLoginButton>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2">
              <span className="text-sm text-gray-400">
                Already have an account?
              </span>
              <Link href="/signin">
                <span className="text-sm font-bold cursor-pointer">
                  Sign in
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative w-1/2">
          <Image
            className="rounded-md"
            src="/surface-8HPLpr3hebU-unsplash.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </form>
    </>
  );
};

export default signup;
