import Categories from "./pages/home/categories/Categories";
import HeroSection from "./pages/home/HeroSection";
import Products from "./pages/home/products";

const Home = () => {
  return (
    <div className="main-container">
      <HeroSection />
      <Products />
      <Categories />
    </div>
  );
};

export default Home;
