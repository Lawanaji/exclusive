import ImageCarousel from "@/app/components/slider/Carousel";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container flex justify-between items-center p-4">
      {" "}
      <aside className="w-[200px]">
        <div className=" border-r border-gray-300 space-y-4">
          <ul className="list-disc pl-5">
            <li className="mb-1">Woman’s Fashion</li>
            <li className="mb-1">Men’s Fashion</li>
            <li className="mb-1">Home & Lifestyle</li>
            <li className="mb-1">Medicine</li>
            <li className="mb-1">Sports & Outdoor</li>
            <li className="mb-1">Baby’s & Toys</li>
            <li className="mb-1">Groceries & Pets</li>
            <li className="mb-1">Health & Beauty</li>
          </ul>
        </div>
      </aside>
      <main className="bg-black flex-1 h-[500px] rounded-lg overflow-hidden relative">
        <ImageCarousel />
      </main>
    </div>
  );
};

export default HeroSection;
