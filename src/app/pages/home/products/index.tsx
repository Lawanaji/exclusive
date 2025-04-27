"use client";
import Card from "@/app/components/products-card/Card";
import SaleCount from "@/app/components/sale/saleCount";
import React from "react";

const Products = () => {
  return (
    <div className="h-screen container">
      <SaleCount />
      <main>
        <div className="flex flex-col md:flex-row md:items-center gap-4"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
          {/* Product cards will go here */}
          <Card />
        </div>
      </main>
    </div>
  );
};

export default Products;
