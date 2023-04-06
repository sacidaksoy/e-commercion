import { FCTypes } from "@/types/types.public";
import Image from "next/image";
import Link from "next/link";
import React, { FC, ReactElement } from "react";

const EXTPCards: FC<FCTypes> = (props): ReactElement => {
  const { data } = props;

  return (
    <div className="flex">
      <div className="bg-[#f5f6f8] min-w-[107px] min-h-[74px] flex items-center justify-center">
        <Image
          src={data.image}
          alt=""
          className="w-[64px] h-[71px] object-contain"
          width={64}
          height={71}
          style={{ mixBlendMode: 'darken' }}
        />
      </div>
      <div className="flex flex-col ml-2 justify-center h-full">
        <Link href={`product-details/${data.id}`}>
          <h5 className="line-clamp-1 leading-4 text-base mb-2 w-12/12 text-navy-blue font-semibold">
            {data.title}
          </h5>
        </Link>
        <p className="leading-3 font-JosefinSans text-sm text-navy-blue">
          ${data.price}
        </p>
      </div>
    </div>
  );
};

export default EXTPCards;
