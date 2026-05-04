"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";
import Image from "next/image";

const Profilepage = () => {
  const { data: session } = authClient.useSession();
  console.log(session?.user);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const updatedData = Object.fromEntries(formData.entries());
    try {
      await authClient.updateUser({
        image: updatedData.photo_url,
        name: updatedData.name,
      });
      toast.success("Profile updated successfully!");
    } catch (error) {
      toast("Failed to update profile");
    }
  };

  return (
    <div className="min-h-[70vh] md:h-[50vh] flex flex-col items-center justify-center">
      <ToastContainer position="top-center" />

     
      {session?.user && (
        <>
          <h1 className="my-4 md:text-3xl text-sky-400">Welcome! {session?.user?.name}</h1>
        <Image
          src={session?.user?.image}
          width={100}
          height={100}
          alt="user profile image "
        />  
        </>
       
      )}

      <form
        onSubmit={handleSubmit}
        className="flex mt-2 w-98 bg-base-200 rounded-2xl  p-10 flex-col gap-3"
      >
        <label className="font-semibold"> username</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          defaultValue={session?.user?.name}
          className="border p-2"
        />
        <label className="font-semibold"> Photo url</label>
        <input
          type="=text"
          name="photo_url"
          placeholder="photo url"
          defaultValue={session?.user?.image}
          className="border p-2"
        />

        <button type="submit" className="bg-blue-500 text-white p-2">
          update
        </button>
      </form>
    </div>
  );
};

export default Profilepage;
