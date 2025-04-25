import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-md">
      <form action="search" className="relative">
        <input
          type="text"
          placeholder="Search..."
          className="w-full border border-gray-300 rounded-md py-2 pl-4 pr-10 outline-none"
        />
        <Search className="absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
      </form>
    </div>
  );
};

export default SearchBar;
