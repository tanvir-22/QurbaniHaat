import { getAnimals } from "@/lib/animal";
import React from "react";
import Image from "next/image";
const FeturedSection = async () => {
  const animals = await getAnimals();
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Featured Animals</h2>
          <p className="text-gray-500 mt-2">
            Handpicked healthy animals ready for Qurbani
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {animals.slice(0,4).map((animal) => (
            <div key={animal.id} className="card bg-base-200 shadow-sm">
              {/* Image */}
              <figure>
                <Image
                  src={animal.image}
                  alt={animal.name}
                  width={300}
                  height={200}
                  className="object-cover w-full h-48"
                />
              </figure>

              {/* Content */}
              <div className="card-body p-4">
                <h3 className="font-semibold text-lg">{animal.name}</h3>

                <p className="text-sm text-gray-500">
                  Location: {animal.location}
                </p>

                <p className="font-bold text-primary mt-1">
                  ৳ {animal.price.toLocaleString()}
                </p>

                <div className="card-actions mt-3">
                  <button className="btn btn-primary btn-sm w-full">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeturedSection;
