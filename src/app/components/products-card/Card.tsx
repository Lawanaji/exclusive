/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useQuery } from "@tanstack/react-query";
import { EyeIcon, Heart } from "lucide-react";
import React, { useState, memo } from "react";
import RatingStars from "../ui/RatingStar";
import axiosInstance from "@/lib/AxiosInstance";
import { cardProps } from "@/app/types/Types";
import Image from "next/image";
import ProductCardSkeleton from "../skeleton/skeleton";

// 1. Implement React.memo for ProductCard component
const ProductCard = memo(({ product }: { product: cardProps }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:-translate-y-1  h-full flex flex-col">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          {product.discountPrice && (
            <span className="w-[40px] h-[25px] bg-red-500 text-white rounded-md flex items-center justify-center text-xs font-bold">
              -{product.discountPrice}%
            </span>
          )}
          <div className="flex gap-2">
            <button className="text-gray-500 hover:text-red-500">
              <Heart className="w-5 h-5" />
            </button>
            <button className="text-gray-500 hover:text-blue-500">
              <EyeIcon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex justify-center items-center h-48">
          <Image
            src={product.image}
            alt={product.title}
            width={150}
            height={150}
            className="object-contain h-full"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder-product.png";
            }}
          />
        </div>
      </div>

      <div className="p-4 flex-grow">
        <h1 className="font-semibold text-lg line-clamp-1 mb-2">
          {product.title}
        </h1>
        <div className="flex items-center gap-2 mb-2">
          <p className="font-bold text-gray-900">${product.price.toFixed(2)}</p>
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
});

ProductCard.displayName = "ProductCard"; // Add display name for better debugging

// 2. Create Skeleton Loading component

const Card = () => {
  const [visibleCount, setVisibleCount] = useState(5);
  const [, setTotalProducts] = useState(0);

  const {
    data: products,
    isLoading,
    error,
    isFetching,
  } = useQuery<cardProps[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      setTotalProducts(response.data.total || response.data.data.length);
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

  const visibleProducts = products?.slice(0, visibleCount) || [];
  const handleShowMore = () => setVisibleCount((prev) => prev + 5);

  // 3. Enhanced loading state with skeletons
  if (isLoading) {
    return (
      <div className=" py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {[...Array(5)].map((_, index) => (
            <ProductCardSkeleton key={`skeleton-${index}`} />
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8 text-red-500">
        Error loading products
        <button
          onClick={() => window.location.reload()}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!products || products.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">No products found</div>
    );
  }

  return (
    <div className=" py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {visibleProducts.map((product) => (
          <ProductCard key={product.title} product={product} />
        ))}

        {/* Show skeletons while fetching more data */}
        {isFetching &&
          [...Array(Math.min(5, products.length - visibleCount))].map(
            (_, index) => <ProductCardSkeleton key={`fetching-${index}`} />
          )}
      </div>

      {visibleCount < products.length && (
        <div className="text-center mt-8">
          <button
            onClick={handleShowMore}
            disabled={isFetching}
            className={`px-6 py-2 rounded-lg transition-colors ${
              isFetching
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-[#DB4444] text-white"
            }`}
          >
            {isFetching ? "Loading..." : "View All Products"}
          </button>
          <p className="text-gray-500 mt-2">
            Showing {Math.min(visibleCount, products.length)}
            {products.length} products
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
export { ProductCard };
export type { cardProps };
