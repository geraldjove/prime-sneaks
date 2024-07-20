import React from "react";
import FeaturedProductsComponent from "../components/FeaturedProductsComponent";
import BestSellersComponent from "../components/BestSellersComponent";
import SectionComponent from "../components/SectionComponent";
import ViewAllProductsComponent from "../components/ViewAllProductsComponent";
import HeroComponent from "../components/HeroComponent";

const HomePage = () => {
  return (
    <>
      <SectionComponent>
        <HeroComponent />
      </SectionComponent>
      <SectionComponent>
        <div className="flex justify-center items-center font-bold uppercase my-5">
          <div className="flex flex-col justify-center items-center leading-none p-5">
            <h1 className="text-3xl z-10 font-black">Featured</h1>
            <p className="z-10">Product</p>
          </div>
          <h1 className="text-[7rem] text-gray-200 absolute font-black">
            Sneakers
          </h1>
        </div>
        <FeaturedProductsComponent />
      </SectionComponent>
      <SectionComponent>
        <div className="flex justify-center items-center font-bold uppercase my-5">
          <div className="flex flex-col justify-center items-center leading-none p-5">
            <h1 className="text-3xl z-10 font-black">Best Seller</h1>
            <p className="z-10">Products</p>
          </div>
          <h1 className="text-[7rem] text-gray-200 absolute font-black">
            Sneakers
          </h1>
        </div>
        <BestSellersComponent />
      </SectionComponent>
      <section>
        <ViewAllProductsComponent />
      </section>
    </>
  );
};

export default HomePage;
