import { getAnimals } from "@/lib/animal";
import React from "react";
import Image from "next/image";
import Link from "next/link";
const Allanimalpage = async() => {
    const sortedAnimals = await getAnimals()
  return (
    <section className="py-12 bg-base-100">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header + Sort */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">All Animals</h2>

          <select
            className="select select-bordered w-full md:w-56"
            // value={sortOrder}
            // onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by price</option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedAnimals.map((animal) => (
            <div key={animal.id} className="card bg-base-200 shadow-sm">
              {/* Image */}
              <figure>
                <Image
                  src={animal.image}
                  alt={animal.name}
                  width={300}
                  height={200}
                  className="w-full h-40 object-fit"
                />
              </figure>

              {/* Content */}
              <div className="card-body p-4">
                <h3 className="font-semibold text-lg">{animal.name}</h3>

                <p className="text-sm text-gray-500">{animal.location}</p>

                <p className="font-bold text-primary">
                  ৳ {animal.price.toLocaleString()}
                </p>

                {/* Availability */}
                <p
                  className={`text-sm font-medium ${
                    animal.available ? "text-green-600" : "text-red-500"
                  }`}
                >
                  {animal.available ? "Available" : "Sold Out"}
                </p>

                <div className="card-actions mt-2">
                  <Link href={`/allanimals/${animal.id}`}>
                    <button className="btn btn-primary btn-sm w-full">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Allanimalpage;