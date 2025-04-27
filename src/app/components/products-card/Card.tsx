/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import { EyeIcon, Heart } from "lucide-react";
import React from "react";
import RatingStars from "../ui/RatingStar";
import axiosInstance from "@/lib/AxiosInstance";
import { cardProps } from "@/app/types/Types";

import Image from "next/image";

const Card = () => {
  const {
    data: products,
    isLoading,
    error,
  } = useQuery<cardProps[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products"); // fixed typo here
      return response.data.data.map((item: any) => ({
        title: item.title,
        description: item.description,
        image: item.image,
        price: item.price,
        discountPrice: item.discountPrice,
        rating: item.rating,
        onClick: item.onClick,
        className: item.className,
      }));
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading products</div>;
  if (!products || products.length === 0) return <div>No products found</div>;

  const product = products[0];
  return (
    <div>
      <div className="bg-[#FFFF] p-2">
        <div className="flex justify-between items-center">
          <span className="w-[40px] h-[25px] bg-red-500 text-white rounded-md flex items-center justify-center text-xs font-bold">
            -40%
          </span>
          <div>
            <Heart className="w-[20px] h-[20px]" />
            <EyeIcon className="w-[20px] h-[20px]" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain h-full"
          />
        </div>
      </div>
      <div className="p-4">
        <h1 className="font-semibold text-lg line-clamp-1">{product.title}</h1>
        <div className="flex items-center gap-2 mt-1">
          <p className="font-bold text-gray-900">${product.price}</p>
          {product.discountPrice && (
            <p className="text-sm text-gray-500 line-through">
              ${(product.price * (1 + product.discountPrice / 100)).toFixed(2)}
            </p>
          )}
        </div>

        <RatingStars rating={product.rating} maxStars={5} />
      </div>
    </div>
  );
};

export default Card;
