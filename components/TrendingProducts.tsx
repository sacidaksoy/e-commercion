import React, { FC } from "react";
import watch from "../images/watch-banner.png";
import buff from "../images/buff-banner.png";
import { Products } from "@/types/products";
import CCTPCards from "./CCTPCards";
import EXTPCards from "./EXTPCards";
import Image from "next/image";

type Props = {
  products: Products[];
}

const TrendingProducts: FC<Props> = ({ products }) => {
  const cantileverChairs = products.filter(
    (product: Products) =>
      product.category === "women's clothing"
  );
  const executiveChairs = products.filter(
    (product: Products) =>
      product.category === "jewelery"
  );

  return (
    <div className="container mx-auto mt-24">
      <h1 className="font-JosefinSans text-center text-[#1A0B5B] text-[42px] font-bold mb-6">
        Trending Products
      </h1>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">
          {cantileverChairs.slice(0, 4).map((product: Products) => (
            <CCTPCards key={product.id} data={product} />
          ))}
        </div>
        <div className="grid grid-cols-8 gap-12">
          <div className="col-span-full md:col-span-4 lg:col-span-3 h-[270px] py-8 px-6 bg-[#fff6fb] relative">
            <h5 className="TP-banner-h5">23% off in all products</h5>
            <p className="TP-banner-p">Coming Soon</p>
            <Image className="TP-banner-img" src={watch} alt="watch" />
          </div>
          <div className="col-span-full md:col-span-4 lg:col-span-3 h-[270px] py-8 px-6 bg-[#eeeffb] relative">
            <h5 className="TP-banner-h5">23% off in all collection</h5>
            <p className="TP-banner-p">Coming Soon</p>
            <Image className="TP-banner-img" src={buff} alt="buff" />
          </div>
          <div className="lg:col-span-2 col-span-full">
            <div className="flex flex-col justify-between h-full">
              {executiveChairs.slice(0, 3).map((product: Products) => (
                <EXTPCards key={product.id} data={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
