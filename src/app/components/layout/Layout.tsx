import React from "react";
import Navigation from "../navigation/Navigation";
import Footer from "../footer/Footer";

interface LayoutProps {
  children: React.ReactNode;
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <Navigation />
      <main className="container">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
