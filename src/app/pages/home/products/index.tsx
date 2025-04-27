"use client";
import SaleCount from "@/app/components/sale/saleCount";
import React from "react";

const Products = () => {
  return (
    <div className="h-screen container">
      <SaleCount days={0} hours={0} minutes={0} seconds={0} />
    </div>
  );
};

export default Products;
