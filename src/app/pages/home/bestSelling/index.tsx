/* eslint-disable @typescript-eslint/no-explicit-any */
import Card from "@/app/components/card/card";
import ProductCardSkeleton from "@/app/components/skeleton/skeleton";
import Header from "@/app/components/ui/Header";
import { cardProps } from "@/app/types/Types";
import axiosInstance from "@/lib/AxiosInstance";
import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

const BestSelling = () => {
  //   const queryClient = useQueryClient();
  const [, setTotalProducts] = useState(0);
  const {
    data: products,
    error,
    isFetching,
  } = useQuery<cardProps[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await axiosInstance.get("/products");
      setTotalProducts(res.data.total || res.data.data.length);
      return res.data.data.map((item: any) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
        discountPrice: item.discountPrice,
        rating: item.rating,
        onClick: item.onClick,
        className: item.className,
      }));
    },
  });
  //   queryClient.invalidateQueries({ queryKey: ["products"] });
  if (isFetching) {
    return (
      <div className="py-8 container">
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
    <div className="container py-10">
      <Header title="This Month" />
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
        <h1 className="text-2xl md:text-4xl font-extrabold">Best Selling</h1>
        <button className="px-5 text-white py-2 bg-[#DB4444]">View All</button>
      </div>
      <div className="py-10 w-full max-w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols- gap-4 w-full">
          {products?.map((item, index) => (
            <Card
              key={index}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              discountPrice={item.discountPrice}
              rating={item.rating}
              onClick={item.onClick}
              className={item.className}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BestSelling;
