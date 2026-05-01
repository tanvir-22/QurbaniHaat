"use client";
import React from "react";
import { toast, ToastContainer } from "react-toastify";
import {
  Button,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";
const BookingForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();

    toast.success("your animal booked successfully!");
    e.target.reset();
  };
  return (
    <>
      <ToastContainer />
      <Form onSubmit={submitHandler} className="flex w-50 flex-col gap-4">
        <TextField isRequired name="name" type="text">
          <Label>Name</Label>
          <Input placeholder="john doe" />
          <FieldError />
        </TextField>
        <TextField isRequired name="email" type="email">
          <Label>Email</Label>
          <Input placeholder="john@example.com" />
          <FieldError />
        </TextField>
        <TextField isRequired minLength={8} name="phone" type="text">
          <Label>Phone</Label>
          <Input placeholder="Enter your phone" />

          <FieldError />
        </TextField>
        <TextField isRequired name="name" type="text">
          <Label>Address</Label>
          <Input placeholder="1/23 ms street,NY" />
          <FieldError />
        </TextField>
        <div className="flex gap-2">
          <Button type="submit">Submit</Button>
          <Button type="reset" variant="secondary">
            Reset
          </Button>
        </div>
      </Form>
    </>
  );
};

export default BookingForm;
