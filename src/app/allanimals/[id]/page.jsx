import React from "react";
import Image from "next/image";
import animals from "../../../data/animal.json";
import { Rocket } from "@gravity-ui/icons";
import { Button, Modal } from "@heroui/react";
import { BookmarkFill } from "@gravity-ui/icons";
import BookingForm from "@/components/BookingForm";

const Detailspage = async ({ params }) => {
  const { id } = await params;

  const animal = animals.find((item) => id == item.id);

  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left - Image */}
        <div className="bg-base-200 rounded-lg overflow-hidden">
          <Image
            src={animal.image}
            alt={animal.name}
            width={600}
            height={400}
            className="w-full h-[400px] object-cover"
          />
        </div>

        {/* Right - Details */}
        <div>
          <h1 className="text-3xl font-bold">{animal.name}</h1>

          <p className="text-gray-500 mt-2">Location: {animal.location}</p>

          <p className="text-xl font-bold text-primary mt-4">
            ৳ {animal.price}
          </p>

          <div className="mt-4 space-y-2 text-sm">
            <p>
              <span className="font-semibold">Type:</span> {animal.type}
            </p>
            <p>
              <span className="font-semibold">Breed:</span> {animal.breed}
            </p>
            <p>
              <span className="font-semibold">Weight:</span> {animal.weight} kg
            </p>
            <p>
              <span className="font-semibold">Age:</span> {animal.age} years
            </p>
          </div>

          <p className="mt-6 text-gray-600 leading-relaxed">
            {animal.description}
          </p>

          {/* Availability */}
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

          {/* Button */}
          <Modal>
            <Button className={`mt-2`} variant="secondary">
              Booking form
            </Button>
            <Modal.Backdrop>
              <Modal.Container>
                <Modal.Dialog className="sm:max-w-[360px]">
                  <Modal.CloseTrigger />
                  <Modal.Header>
                    <Modal.Icon className="bg-default text-foreground">
                      <BookmarkFill className="size-5" />
                    </Modal.Icon>
                    <Modal.Heading className="text-center">
                      Book you animal
                    </Modal.Heading>
                  </Modal.Header>
                  <Modal.Body className="mx-auto">
                    <BookingForm  />
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
