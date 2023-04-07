import { IFCTypes } from "@/types/types.public";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

const TCCards: FC<IFCTypes> = (props): ReactElement => {
  const { data } = props;
  return (
    <div className="flex flex-col group">
      <div className="bg-[#F6F7FB] rounded-full w-full h-[269px] flex items-center justify-center relative  z-30 overflow-hidden">
        <Image
          className="w-[178px] h-[178px] z-20"
          src={data?.image}
          alt={data.title}
          width={178}
          height={178}
          style={{mixBlendMode: 'darken'}}
        />
        <Link
          href={`/product-details/${data.id}`}
          className="absolute font-JosefinSans w-[88px] h-[29px] text-[12px] left-1/2 -translate-x-1/2 -bottom-8 rounded-sm bg-[#08D15F] text-white group-hover:bottom-5 duration-300 overflow-hidden flex justify-center items-center"
        >
          View Shop
        </Link>
      </div>
      <div className="absolute left-1 top-[0.1px]  rounded-full w-[95%] h-[269px] bg-[#9575e5] z-10 group-hover:-left-1  group-hover:top-[7px] duration-300" />
      <div className="flex flex-col items-center text-center mt-6">
        <Link
          href={`product-details/${data.id}`}
          className="flex items-center justify-center"
        >
          <h5 className="line-clamp-1 w-10/12 font-JosefinSans text-xl text-navy-blue text-center">
            {data.title}
          </h5>
        </Link>
        <p className="text-base text-navy-blue">${data.price}</p>
      </div>
    </div>
  );
};

export default TCCards;
