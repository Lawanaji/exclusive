"use client";
import BestSelling from "./pages/home/bestSelling";
import Categories from "./pages/home/categories/Categories";
import Explore from "./pages/home/explore";
import HeroSection from "./pages/home/HeroSection";
import Products from "./pages/home/products";

const Home = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <Products />
      <Categories />
      <BestSelling />
      <Explore />
    </div>
  );
};

export default Home;
