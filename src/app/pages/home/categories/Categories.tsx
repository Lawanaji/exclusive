import Header from "@/app/components/ui/Header";
import {
  Camera,
  Headphones,
  Gamepad,
  Phone,
  Watch,
  Monitor,
  Tv,
} from "lucide-react";
import React from "react";

const Categories = () => {
  const categories = [
    {
      title: "Phone",
      icon: <Phone className="w-5 h-5" />,
    },
    {
      title: "Computer",
      icon: <Monitor className="w-5 h-5" />,
    },
    {
      title: "SmartWatch",
      icon: <Watch className="w-5 h-5" />,
    },
    {
      title: "Camera",
      icon: <Camera className="w-5 h-5" />,
    },
    {
      title: "Headphone",
      icon: <Headphones className="w-5 h-5" />,
    },
    {
      title: "Gaming",
      icon: <Gamepad className="w-20 h-w-20" />,
    },
    {
      title: "Smart TV",
      icon: <Tv className="w-20 h-w-20" />,
    },
  ];

  return (
    <div className="container">
      <Header title="Categories" />
      <h1 className="text-2xl md:text-4xl font-extrabold">
        Browse By Category
      </h1>

      <main className="py-10 w-full max-w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 w-full">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:bg-[#DB4444] hover:text-white gap-2 p-4 border border-gray-400 rounded shadow hover:shadow-lg transition-all duration-300 cursor-pointer h-full w-full"
            >
              {category.icon}
              <h2 className="text-sm md:text-base text-black font-semibold text-center hover:text-white">
                {category.title}
              </h2>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Categories;
