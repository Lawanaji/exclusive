"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "@/lib/AxiosInstance";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const ImageCarousel = () => {
  const { data, isLoading, error } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: async () => {
      const response = await axiosInstance.get("/products");
      return response.data;
    },
    staleTime: 1000 * 60 * 5, // 5 minutes
    gcTime: 1000 * 60 * 10, // 10 minutes
  });

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const fallbackImages = [
    { src: "/Frame 560.png", alt: "Fallback Image 1" },
    { src: "/Frame 561.png", alt: "Fallback Image 2" },
  ];

  const imagesToShow =
    data?.slice(0, 5).map((product) => ({
      src: product.image,
      alt: product.title,
    })) || fallbackImages;

  if (isLoading)
    return <div className="text-center py-8">Loading carousel...</div>;
  if (error)
    return (
      <div className="text-center py-8 text-red-500">Error loading images</div>
    );

  return (
    <div className="max-w-[800px] mx-auto mt-4">
      <div>
        <h1 className="text-white">hello world</h1>
      </div>
      <Slider {...settings}>
        {imagesToShow.map((image, index) => (
          <div key={index} className="px-2">
            <div className="relative rounded-lg overflow-hidden h-[400px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-contain w-full h-full"
                sizes=""
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageCarousel;
