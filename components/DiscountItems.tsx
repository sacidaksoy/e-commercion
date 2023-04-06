import { discountSection } from "@/enums/public.enum";
import { Products } from "@/types/products";
import { FCTypes } from "@/types/types.public";
import Image from "next/image";
import Link from "next/link";
import React, { FC, useEffect, useState } from "react";
import { BiCheck } from "react-icons/bi";

const DiscountItems: FC<FCTypes> = ({ products }) => {
  const [section, setSection] = useState<discountSection>(
    discountSection.electronics
  );
  const [discountItem, setDiscountItem] = useState<Products>();

  const discountItemDescription = discountItem?.description.split(/[,.]\s*/);

  function changeItem(section: string): any {
    return products.find(
      (product: Products) =>
        product.category === section
    );
  }

  useEffect(() => {
    setDiscountItem(changeItem(section));
  }, [section, products]);

  if (!discountItem) return null;
  return (
    <div className="container mx-auto mt-10">
      <h1 className="font-JosefinSans text-center text-[#1A0B5B] text-[42px] font-bold mb-10">
        Discount Item
      </h1>
      <div className="text-center mb-10">
        {Object.values(discountSection).map((item, index) => (
          <span
            onClick={() => setSection(item)}
            key={item}
            className={`mr-10 last:mr-0 text-lg font-Lato text-navy-blue cursor-pointer ${item === section && "DI-selected"
              }`}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="flex gap-12 md:flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row">
        <div className="w-full flex flex-col justify-center">
          <h5 className="font-JosefinSans text-navy-blue text-[35px] font-bold">
            20% Discount Of All Products
          </h5>
          <h4 className="font-JosefinSans text-[21px] text-pink-cc mt-2 mb-7">
            {discountItem.title}
          </h4>
          <p className="font-Lato text-[17px] text-[#B7BACB] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget
            feugiat habitasse nec, bibendum condimentum.
          </p>
          <div className="grid grid-cols-2 gap-5">
            {discountItemDescription?.slice(0, 4).map((item: string) => (
              <div className="flex" key={item}>
                <BiCheck className=" text-2xl text-[#7569B2]" />
                <p className="w-full ml-2 text-[#B8B8DC]">{item}</p>
              </div>
            ))}
          </div>
          <Link
            href={`product-details/${discountItem.id}`}
            className="px-14 py-3 bg-pink-cc w-fit font-JosefinSans text-[17px] text-white rounded-sm mt-7 cursor-pointer"
          >
            Shop Now
          </Link>
        </div>
        <div className="w-full relative">
          <div className="absolute w-[95%] h-[95%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#fcecf1] z-10 rounded-full" />
          <Image
            className="relative z-20"
            src={discountItem?.image}
            alt={discountItem.title}
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountItems;
