import { getFeature } from "@/lib/animal";
import React from "react";
import Image from "next/image";
const CattleFeature = async () => {
  const features = await getFeature();
  return (
    <section className="py-12 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold">
            What Makes Our Cattle Best?
          </h2>
          <p className="text-gray-500 mt-2">
            We focus on quality, trust, and proper care
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item) => (
            <div key={item.id} className="card bg-base-100 shadow-sm">
              {/* Image */}
              <figure>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-48 object-cover"
                />
              </figure>

              {/* Content */}
              <div className="card-body p-5 text-center">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CattleFeature;
