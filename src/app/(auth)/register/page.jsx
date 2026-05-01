"use client"
import React from "react";
import { toast, ToastContainer,Zoom } from "react-toastify";
import { authClient } from "@/lib/auth-client";

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
import { redirect } from "next/navigation";
const Registerpage = () => {
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const registerData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signUp.email({
      name: registerData.username, // required
      email: registerData.email, // required
      password: registerData.password, // required
      image: registerData.photo_url,
      
    });
    if(data){
        
          toast.success(`successfully signed up! ${registerData.username}`,{autoClose:2000});
          setTimeout(()=>{
             redirect("/login");
          },2000)
         
    }else{
          toast.error(error.message);
          console.log(error);

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
        onSubmit={handleRegisterSubmit}
        className="bg-slate-100 p-10 flex w-[30vw] flex-col gap-4 rounded-md"
      >
        <p className="font-semibold text-xl text-center">
          Register your account
        </p>
        <hr />
        <TextField
            isRequired
          name="username"
          type="text"
          validate={(value) => {
            if (value == "") {
              return "Please enter your name";
            }
            return null;
          }}
        >
          <Label className="font-semibold">Your Name</Label>
          <Input className={`w-full`} placeholder="Enter your name" />
          <FieldError />
        </TextField>
        <TextField
        isRequired
          name="photo_url"
          type="text"
          validate={(value) => {
            if (value == "") {
              return "Please enter your name";
            }
            return null;
          }}
        >
          <Label className="font-semibold">Photo URL</Label>
          <Input className={`w-full`} placeholder="Enter your URL" />
          <FieldError />
        </TextField>
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
          <Label className="font-semibold">Email address</Label>
          <Input className={`w-full`} placeholder="john@example.com" />
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
          <Label className="font-semibold">Password</Label>
          <Input className={`w-full`} placeholder="Enter your password" />
          <Description>
            Must be at least 8 characters with 1 uppercase and 1 number
          </Description>
          <FieldError />
        </TextField>
        <div className=" ">
          <button
            className={`w-full bg-[#403e3e] px-4 py-2 text-white`}
            type="submit"
          >
            Register
          </button>
          <button
            className={`w-full bg-[#403e3e] mt-3 px-4 py-2 text-white`}
            type="reset"
            variant="secondary"
          >
            Reset
          </button>
        </div>
      </Form>
    </div>
  );
};

export default Registerpage;
