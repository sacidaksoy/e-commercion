import { IFCTypes } from "@/types/types.public";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

const CCTPCards: FC<IFCTypes> = (props): ReactElement => {
  const { data } = props;

  return (
    <div className="flex flex-col p-4 bg-white drop-shadow-[0_-12px_5px_rgba(49,32,138,0.05)] sm:drop-shadow-[0_8px_40px_rgba(49,32,138,0.05)]">
      <div className="w-full h-[244px] flex items-center justify-center bg-[#F5F6F8]">
        <Image
          src={data.image}
          alt={String(data.id)}
          className="w-[171px] h-[171px]"
          width={171}
          height={171}
          style={{ mixBlendMode: 'darken' }}
        />
      </div>
      <div className="flex flex-col justify-center items-center mt-2">
        <Link
          href={`products/${data.id}`}
          className="flex items-center justify-center"
        >
          <h5 className="line-clamp-1 font-Lato text-base text-center font-bold text-navy-blue w-11/12 mb-2">
            {data.title}
          </h5>
        </Link>
        <div>
          <p className="font-JosefinSans text-sm text-navy-blue">
            ${data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CCTPCards;
