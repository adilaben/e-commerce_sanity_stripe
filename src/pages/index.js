import { HeroBanner } from "@/components";
import React from "react";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <div className="products-heading">
        <h2>Best Selling Products</h2>
        <p>Speaker of many variations</p>
      </div>
      <div className="products-container">
        {["Product 1", "Product 1"].map((product) => product)}
      </div>
      Footer
    </>
  );
};

export default Home;
