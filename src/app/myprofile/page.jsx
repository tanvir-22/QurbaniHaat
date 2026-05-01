"use client";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { toast, ToastContainer } from "react-toastify";

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
    <div className="h-[50vh] flex items-center justify-center">
      <ToastContainer position="top-center" />
      <form
        onSubmit={handleSubmit}
        className="flex w-98 bg-slate-100 rounded-2xl  p-10 flex-col gap-3"
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
