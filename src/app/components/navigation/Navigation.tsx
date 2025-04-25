/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Button from "../ui/Button";
import { HeartIcon, ShoppingCart } from "lucide-react";
import Link from "next/link";
import SearchBar from "../search/SearchBar";

const Navigation = () => {
  const [activeLink, setActiveLink] = useState("/home");
  const navItem = [
    { name: "Home", link: "/home" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
    { name: "Sign up", link: "/signup" },
  ];

  const NavLink = (item: any) => {
    return (
      <li className="mx-4 relative">
        <Link
          href={item.link}
          className={`text-black hover:text-gray-500 transition-colors ${
            activeLink === item.link
              ? "text-gray-800 border-b-2  font-medium"
              : ""
          }`}
          onClick={() => setActiveLink(item.link)}
        >
          {item.name}
        </Link>
      </li>
    );
  };

  return (
    <div className="border-b border-gray-300">
      <div className="bg-black flex justify-center gap-4 items-center text-white text-center p-4">
        Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{" "}
        <Button text="ShopNow" />
      </div>
      <nav className="flex container justify-between items-center p-2">
        <h1 className="text-xl font-bold text-black">Exclusive</h1>
        <ul className="flex justify-between text-[#000000] items-center p-4">
          {navItem.map((item) => (
            <NavLink key={item.link} name={item.name} link={item.link} />
          ))}
        </ul>

        <ul className="flex justify-between items-center p-4 gap-3">
          <SearchBar />
          <HeartIcon className="w-6 h-6 text-black hover:text-gray-500 cursor-pointer" />
          <ShoppingCart className="w-6 h-6 text-black hover:text-gray-500 cursor-pointer" />
        </ul>
      </nav>
      <main></main>
    </div>
  );
};

export default Navigation;
