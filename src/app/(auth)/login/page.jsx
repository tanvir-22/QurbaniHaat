"use client";
import { FaGoogle } from "react-icons/fa";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { EyeSlash, Eye } from "@gravity-ui/icons";
import { Zoom } from "react-toastify";
import Link from "next/link";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  InputGroup,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";
import { Alert } from "@heroui/react";
import { redirect } from "next/navigation";

const Loginpage = () => {
  const [isVisible, setIsVisible] = useState();
  const [loginerror, setloginerror] = useState("");
  const loginHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const loginData = Object.fromEntries(formData.entries());
    const { data, error } = await authClient.signIn.email({
      email: loginData.email, // required
      password: loginData.password, // required
      //   callbackURL: "/",
    });
    if (data) {
      toast.success(`welcome! ${loginData.email}`, {
        autoClose: 2000,
      });
      setTimeout(() => redirect("/"), 2000);
    } else {
      toast.error("Invalid Id or Password");
    }
  };
  return (
    <div className="flex h-[90vh]  justify-center items-center">
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Zoom}
      />
      <Form
        onSubmit={loginHandler}
        className="bg-slate-100 p-10 flex w-[30vw] flex-col gap-4 rounded-md"
      >
        <p className="font-semibold text-xl text-center">Login your account</p>
        <hr />
        <TextField
          isRequired
          name="email"
          type="email"
          validate={(value) => {
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
              return "Please enter a valid email address";
            }
            return null;
          }}
        >
          <Label>Email address</Label>
          <Input className={`w-full `} placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField
          isRequired
          minLength={8}
          name="password"
          type="password"
          validate={(value) => {
            if (value.length < 8) {
              return "Password must be at least 8 characters";
            }
            if (!/[A-Z]/.test(value)) {
              return "Password must contain at least one uppercase letter";
            }
            if (!/[0-9]/.test(value)) {
              return "Password must contain at least one number";
            }
            return null;
          }}
        >
          <Label>Password</Label>
          <div className="relative">
            <Input
              className="w-full "
              type={isVisible ? "text" : "password"}
              placeholder="Enter your password"
            />

            <Button
              className={`absolute right-2 top-1`}
              isIconOnly
              aria-label={isVisible ? "Hide password" : "Show password"}
              size="sm"
              variant="ghost"
              onPress={() => setIsVisible(!isVisible)}
            >
              {isVisible ? (
                <Eye className="size-4" />
              ) : (
                <EyeSlash className="size-4" />
              )}
            </Button>
          </div>

          <FieldError />
        </TextField>
        <div className=" ">
          <button
            className={`w-full bg-[#403e3e] px-4 py-2 text-white`}
            type="submit"
          >
            Login
          </button>

          <button
            onClick={async () => {
              const data = await authClient.signIn.social({
                provider: "google",
              });
            }}
            className={`w-full mt-2 flex items-center justify-center gap-2 bg-[#403e3e] px-4 py-2 text-white`}
            type="submit"
          >
            <FaGoogle />
            Login in with Google
          </button>

          {/* <Button type="reset" variant="secondary">
            Reset
          </Button> */}
          <hr />
          <p className="text-center py-1">
            Don’t Have An Account ?{" "}
            <Link className="text-red-500" href={`/register`}>
              {" "}
              Register
            </Link>{" "}
          </p>
        </div>
      </Form>
    </div>
  );
};

export default Loginpage;
