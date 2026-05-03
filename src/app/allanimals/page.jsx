"use client";
import { useState } from "react";

import sortedAnimals from "../../data/animal.json";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Allanimalpage = () => {
  const [sortingOrderByPrice, setSortingOrderByPrice] = useState("");
  const [isAvailable, setIsAvailable] = useState(null);
  const [search, setSearch] = useState("");
  let filteredAnimals = sortedAnimals;
  if (sortingOrderByPrice == "low") {
    filteredAnimals = [...sortedAnimals].sort((a, b) => a.price - b.price);
  }
  if (sortingOrderByPrice == "high") {
    filteredAnimals = [...sortedAnimals].sort((a, b) => b.price - a.price);
  }
  if (isAvailable !== null) {
    filteredAnimals = filteredAnimals.filter(
      (item) => item.available == isAvailable,
    );
  }
  if (search !== "") {
    filteredAnimals = filteredAnimals.filter((item) => {
      return item.name.toLowerCase().includes(search.toLowerCase());
    });
  }
  return (
    <section className="py-12 px-3 gap-4 grid grid-cols-12  bg-base-100">
      <div className="col-span-3">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            type="search"
            required
            placeholder="Search your animal"
          />
        </label>
      </div>
      <div className="w-[70vw] col-span-6 mx-auto  px-4">
        {/* Header + Sort */}
        <div className="bg-base-100 p-5 flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
          <h2 className="text-2xl font-bold">All Animals</h2>
          <div className="flex gap-3">
            <button
              onClick={() => {
                setIsAvailable(null);
              }}
              className="btn btn-primary"
            >
              All Animals
            </button>
            <button
              onClick={() => {
                setIsAvailable(false);
              }}
              className="btn btn-primary"
            >
              Sold
            </button>
          </div>
          <select
            className="select select-bordered w-full md:w-56"
            value={sortingOrderByPrice}
            onChange={(e) => setSortingOrderByPrice(e.target.value)}
          >
            <option className="font-bold" value="">
              Sort by price
            </option>
            <option value="low">Low to High</option>
            <option value="high">High to Low</option>
          </select>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAnimals.map((animal) => (
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
