import { HeaderProps } from "@/app/types/Types";
import React from "react";

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="bg-[#DB4444] w-3 h-10 md:w-4 md:h-12 flex-shrink-0"></div>
      <h1 className="text-2xl md:text-3xl text-[#DB4444] font-extrabold">
        {title}
      </h1>
    </div>
  );
};

export default Header;
