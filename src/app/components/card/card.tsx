// components/Card/Card.tsx
import React, { memo } from "react";
import { EyeIcon, Heart } from "lucide-react";
import Image from "next/image";
import RatingStars from "../ui/RatingStar";

export interface CardProps {
  id: string;
  title: string;
  description?: string;
  image: string;
  price: number;
  discountPrice?: number;
  rating?: number;
  className?: string;
  onClick?: () => void;
}

const Card: React.FC<CardProps> = memo(
  ({
    title,
    description,
    image,
    price,
    discountPrice,
    rating,
    className = "",
    onClick,
  }) => {
    return (
      <div
        className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow hover:-translate-y-1 transition-transform h-full flex flex-col ${className}`}
        onClick={onClick}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="w-[40px] h-[25px] bg-red-500 text-white rounded-md flex items-center justify-center text-xs font-bold">
              -{"40"}%
            </span>

            <div className="flex gap-2">
              <button
                className="text-gray-500 hover:text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add wishlist logic here
                }}
              >
                <Heart className="w-5 h-5" />
              </button>
              <button
                className="text-gray-500 hover:text-blue-500"
                onClick={(e) => {
                  e.stopPropagation();
                  // Add quick view logic here
                }}
              >
                <EyeIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex justify-center items-center h-48">
            <Image
              src={image}
              alt={title}
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
          <h1 className="font-semibold text-lg line-clamp-1 mb-2">{title}</h1>
          {description && (
            <p className="text-gray-600 text-sm line-clamp-2 mb-2">
              {description}
            </p>
          )}
          <div className="flex items-center gap-2 mb-2">
            <p className="font-bold text-gray-900">${price.toFixed(2)}</p>
            {discountPrice && (
              <p className="text-sm text-gray-500 line-through">
                ${(price * (1 + discountPrice / 100)).toFixed(2)}
              </p>
            )}
          </div>
          {rating !== undefined && <RatingStars rating={rating} maxStars={5} />}
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export default Card;
