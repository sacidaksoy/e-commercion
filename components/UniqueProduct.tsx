import React, { FC } from "react";
import BGImg from "../images/ellipse-unique-furniture.png";
import { Products } from "@/types/products";
import Image from "next/image";
import Link from "next/link";

type Props = {
  products: Products[];
}

const UniqueFurniture: FC<Props> = ({ products }) => {
  const uniqueFurniture: Products | undefined = products.find((product: Products) => product.id === 1);

  const uniqueDescription = uniqueFurniture?.description.split(/[,.]\s*/);

  if (uniqueFurniture === undefined) return null;
  return (
    <div className="bg-[#f1f0ff] pb-7 lg:pb-0">
      <div className="container mx-auto">
        <div className="flex items-center flex-wrap lg:flex-nowrap">
          <div className="flex items-center justify-center w-full relative">
            <Image
              src={BGImg}
              alt=""
              className="absolute h-5/6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-5/6"
            />
            <Image
              className="z-20 m-4"
              src={
                uniqueFurniture?.image
              }
              width={300}
              height={300}
              alt={uniqueFurniture.title}
              style={{mixBlendMode: "darken"}}
            />
          </div>
          <div className="w-full ml-10">
            <p className="text-navy-blue text-[35px] font-bold mb-4">
              Unique Features Of leatest & Trending Poducts
            </p>
            <ul className="mb-4">
              <li className="before:bg-[#F52B70] UF-list-marker">
                {uniqueDescription![0]}
              </li>
              <li className="before:bg-[#2B2BF5] UF-list-marker">
                {uniqueDescription![1]}
              </li>
              <li className="before:bg-[#2BF5CC] UF-list-marker">
                {uniqueDescription![2]}
              </li>
            </ul>
            <div className="mt-4 flex items-center">
              <button
                className="font-JosefinSans text-base rounded-sm bg-pink-cc px-6 py-2 text-white"
              >
                Add To Cart
              </button>
              <div className="flex flex-col ml-4">
                <Link href={`/product-details/${uniqueFurniture.id}`}>
                  <p className="text-[14px] font-semibold font-JosefinSans text-navy-blue leading-4">
                    {uniqueFurniture.title}
                  </p>
                </Link>
                <p className="font-Lato text-[14px] text-navy-blue leading-4">
                  ${uniqueFurniture.price}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UniqueFurniture;
