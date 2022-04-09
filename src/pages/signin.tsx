import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import { useForm } from "react-hook-form";
import { TextField, Button, Alert } from "../components/global";
import { GoogleLoginButton } from "react-social-login-buttons";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn } from "next-auth/react";

type formData = {
  email: string;
  password: string;
};

const signin: NextPage = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<formData>({});
  const [alert, setAlert] = useState({
    open: false,
    severity: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: formData) => {
    const { email, password } = data;

    setLoading(true);
    const { error } = await signIn("credentials", {
      redirect: false,
      email: email,
      password: password,
    });
    setLoading(false);

    if (error) {
      setAlert({ open: true, severity: "error", message: error });
      return;
    }
  };
  useEffect(() => {
    if (router.query.error)
      setAlert({ open: true, severity: "error", message: "something wrong" });
  }, [router.query]);

  if (session) {
    router.replace("/");
    return null;
  }

  return (
    <>
      <Alert
        open={alert.open}
        severity={alert.severity as any}
        message={alert.message}
        onClose={() =>
          setAlert((prv) => ({ open: false, message: "", severity: "" }))
        }
      />
      <form className="h-screen flex" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <div className="w-full max-w-md p-5 flex flex-col space-y-5">
            <div className="flex flex-col space-y-3">
              <span className="text-3xl font-bold">Sign in</span>
              <span className="text-sm text-gray-400">
                Please enter your credentials.
              </span>
            </div>
            <div className="flex flex-col space-y-2">
              <TextField
                label="Email"
                placeholder="Enter your email"
                error={errors.email?.message}
                {...register("email", { required: "Required" })}
              />
              <TextField
                type="password"
                label="Password"
                placeholder="Enter your password"
                error={errors.password?.message}
                {...register("password", { required: "Required" })}
              />
            </div>
            <div className="flex justify-end">
              <span className="text-sm font-bold">Forgot password?</span>
            </div>
            <Button
              name="Sign in"
              xs="w-full"
              type="submit"
              loading={loading}
            />
            <div className="w-full flex justify-center">
              <GoogleLoginButton
                onClick={() => {
                  signIn("google");
                }}
              >
                Sign in with Google
              </GoogleLoginButton>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-2">
              <span className="text-sm text-gray-400">Don't have account?</span>
              <Link href="/signup">
                <span className="text-sm font-bold cursor-pointer">
                  Sign up
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block relative w-1/2 ">
          <Image
            className="rounded-md"
            src="/signInPhoto.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </form>
    </>
  );
};

export default signin;
