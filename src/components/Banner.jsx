import React from "react";
import Image from "next/image";
import cowImg from "../../public/oricow.jpg";
const Banner = () => {
  return (
    <section className="bg-base-100 py-12 md:py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Find the Best Cow for Your Qurbani
          </h1>

          <p className="mt-4 text-gray-600 max-w-md mx-auto md:mx-0">
            Browse a wide range of healthy cows from trusted sellers across
            Bangladesh. Choose the right one for your Qurbani with confidence.
          </p>

          <button className="btn btn-primary mt-6">Explore Now</button>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <Image
            src={cowImg}
            alt="Cow"
            className="rounded-lg object-cover"
            width={400}
            height={300}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
