import React from "react";
import Image from "next/image";
import animals from "../../../../data/animal.json";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { BookmarkFill } from "@gravity-ui/icons";
import BookingForm from "@/components/BookingForm";
import { CircleInfoFill } from "@gravity-ui/icons";

const Detailspage = async ({ params }) => {
  const { id } = await params;

  const animal = animals.find((item) => id == item.id);

  return (
    <section className="py-12 ">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Image */}
        <div className=" rounded-lg overflow-hidden">
          <Image
            src={animal.image}
            alt={animal.name}
            width={600}
            height={400}
            className="md:w-full w-[90vw] h-[400px] object-contain md:object-cover"
          />
        </div>

        {/* Right - Details */}
        <div className="bg-base-200 p-5 rounded-md">
          <h1 className="text-3xl font-bold">{animal.name}</h1>
          <div className="mt-4">
            <span
              className={`px-3 py-1 rounded text-sm ${
                animal.available
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              {animal.available ? "Available" : "Sold Out"}
            </span>
          </div>
          <p className="text-gray-500 mt-2">Location: {animal.location}</p>

          <p className="text-xl font-bold text-primary mt-4">
            ৳ {animal.price}
          </p>
          <p className="mt-6  leading-relaxed">
            {animal.description}
          </p>
          <div className="mt-4 space-y-2 text-sm  ">
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Type:</span> {animal.type}
            </p>
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Breed:</span> {animal.breed}
            </p>
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Weight:</span> {animal.weight} kg
            </p>
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Age:</span> {animal.age} years
            </p>
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Height:</span> {animal.height}
            </p>
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Health Status:</span>{" "}
              {animal.healthStatus}
            </p>
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Seller Name:</span>{" "}
              {animal.sellerName}
            </p>
            <p className=" p-2 rounded-md flex items-center gap-1">
              <span className="font-semibold flex items-center gap-2 "><CircleInfoFill/> Posted Date: </span>{" "}
              {animal.postedDate}
            </p>
          </div>

          {/* Availability */}

          {/* Button */}
          <Modal>
            <Button className={`mt-2 bg-accent`}>Order</Button>
            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog className="sm:max-w-[360px]">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Icon className="bg-default text-foreground">
                      <BookmarkFill className="size-5" />
                    </Modal.Icon>
                    <Modal.Heading className="text-center">
                      Booking Form
                    </Modal.Heading>
                  </Modal.Header>
                  <Modal.Body className="mx-auto">
                    <BookingForm />
                  </Modal.Body>
                  {/* <Modal.Footer>
                    <Button className="w-full" slot="close">
                      Continue
                    </Button>
                  </Modal.Footer> */}
                </Modal.Dialog>
              </Modal.Container>
            </Modal.Backdrop>
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Detailspage;
