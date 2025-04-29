import React from "react";
import Image from "next/image";

const Explore = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center py-4 bg-[#000000] min-h-[500px]">
        <div className="px-4 md:px-10 py-10 space-y-6 md:space-y-10 w-full md:w-1/2">
          <h1 className="text-xl text-[#00FF66]">Categories</h1>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold py-2">
            Enhance Your Music Experience
          </h1>
          <button className="bg-[#00FF66] px-6 py-3 text-white font-medium hover:bg-[#00e65c] transition duration-300 ease-in-out rounded">
            Buy Now!
          </button>
        </div>

        <div className="w-full md:w-1/2 flex justify-center items-center perspective-1000">
          {/* Flip container */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] transition-all duration-700 ease-in-out transform-style-preserve-3d group hover:rotate-y-180">
            {/* Front side - Image */}
            <div className="w-full h-full backface-hidden">
              <Image
                src="/speaker.png"
                alt="Speaker"
                width={500}
                height={500}
                className="object-contain w-full h-full"
                priority
                style={{ boxShadow: "0 0 30px rgba(255, 255, 255, 0.6)" }}
              />
            </div>

            {/* Back side - Content */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#111] p-8 flex flex-col justify-center items-center text-white">
              <h3 className="text-2xl font-bold mb-4">Special Offer!</h3>
              <p className="text-center mb-6">
                Get 20% off on all audio equipment this week only!
              </p>
              <button className="bg-[#00FF66] px-6 py-2 text-white font-medium hover:bg-[#00e65c] transition duration-300 ease-in-out rounded">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
