import ImageCarousel from "@/app/components/slider/Carousel";
import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <div className="container">
      {" "}
      <div className=" flex justify-between ">
        <aside className="w-[200px] h-[]">
          <div className=" border-r border-gray-300 ">
            <ul className="list-disc pl-5 py-3">
              <li className="mb-4 ">
                <Link href="" className="text-black hover:text-gray-500">
                  Woman’s Fashion
                </Link>
              </li>
              <li className="mb-4 ">Men’s Fashion</li>
              <li className="mb-4 ">Home & Lifestyle</li>
              <li className="mb-4 ">Medicine</li>
              <li className="mb-4 ">Sports & Outdoor</li>
              <li className="mb-4 ">Baby’s & Toys</li>
              <li className="mb-4 ">Groceries & Pets</li>
              <li className="mb-4 ">Health & Beauty</li>
            </ul>
          </div>
        </aside>
        <main className="w-[cal(100%-200px)] flex-1 h-[500px] rounded-lg overflow-hidden relative">
          <ImageCarousel />
        </main>
      </div>
    </div>
  );
};

export default HeroSection;
