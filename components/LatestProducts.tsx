import React, { FC, ReactElement, useEffect, useState } from "react";
import { ELatestSection } from "@/enums/public.enum";
import { Products } from "@/types/products";
import LPCards from "./LPCards";

type Props = {
  latestProducts: Products[];
}

const LatestProducts: FC<Props> = ({ latestProducts }): ReactElement | null => {
  const [section, setSection] = useState<ELatestSection>(
    ELatestSection.electronics
  );
  const [filteredLatestProducts, setfilteredLatestProducts] = useState<Products[]>([]);

  console.log("latestProducts", latestProducts);
  console.log("section", section);
  console.log("filteredLatestProducts", filteredLatestProducts);

  useEffect(() => {
    const products: Products[] = latestProducts.filter((product: Products) => product.category === section);
    setfilteredLatestProducts(products);
  }, [section, latestProducts]);

  if (latestProducts.length === 0) return null;
  return (
    <div className="container mx-auto">
      <h1 className="font-JosefinSans text-center text-[#1A0B5B] text-[42px] font-bold mb-10">
        Latest Products
      </h1>
      <div className="flex justify-center flex-wrap">
        {Object.values(ELatestSection).map((item: any, index: number) => (
          <p
            onClick={() => setSection(item)}
            className={`${item === section && "!text-pink-cc border-b-[1px] border-pink-cc"
              } mr-14 text-navy-blue last:mr-0 cursor-pointer `}
            key={index}
          >
            {item}
          </p>
        ))}
      </div>
      <div className="mt-7 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-10 gap-y-20">
        {filteredLatestProducts.map((product: Products) => (
          <LPCards data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
