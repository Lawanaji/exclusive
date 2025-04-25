import React from "react";
import { buttonProps } from "@/app/types/Types";

const Button: React.FC<buttonProps> = ({
  variant = "primary",
  size = "md",
  text,
  onClick,
  className = "",
  disabled = false,
  type = "button",
}) => {
  const variantClasses: Record<string, string> = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    tertiary: "bg-green-500 text-white hover:bg-green-600",
    ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
    link: "bg-transparent text-blue-500 underline hover:text-blue-700",
  };

  const sizeClasses: Record<string, string> = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
    xl: "text-xl px-8 py-4",
    "2xl": "text-2xl px-10 py-5",
  };

  const variantClass = variantClasses[variant] || "";
  const sizeClass = sizeClasses[size] || "";

  return (
    <button
      className={`rounded-md transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${variantClass} ${sizeClass} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default Button;
