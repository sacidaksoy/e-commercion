// Featured Products Card

import { Products } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SlMagnifierAdd } from "react-icons/sl";

interface Props {
  data: Products;
}

const LPCards: FC<Props> = ({data}) => {

  return (
    <div className="flex flex-col group">
      <div className="flex justify-center items-center h-[270px] LPCard-hover-image">
        <Image
          className="w-[223px] h-[229px]"
          src={data?.image}
          width={176}
          height={176}
          alt={data.title}
          style={{mixBlendMode: 'darken'}}
        />
        <div className="LPCard-hover-icons">
          <HiOutlineShoppingCart
            className="LPCard-hover-icon cursor-pointer"
          />
          {/* {wishlist.includes(data.id) ? (
            <FaHeart
              onClick={() =>
                dispatch(removeFromWishlist({ productID: data.id }))
              }
              className="LPCard-hover-icon cursor-pointer"
            />
          ) : (
            <FiHeart
              onClick={() => dispatch(addToWishlist({ productID: data.id }))}
              className="LPCard-hover-icon cursor-pointer"
            />
          )} */}
          <Link href={`product-details/${data.id}`}>
            <SlMagnifierAdd className="FPCard-hover-icon" />
          </Link>
        </div>
      </div>
      <div className="w-full flex items-center justify-between mt-3">
        <Link href={`product-details/${data.id}`} className="flex items-center">
          <h5 className="line-clamp-1 w-10/12 font-JosefinSans text-navy-blue">
            {data.title}
          </h5>
        </Link>
        <div className="flex items-center justify-center mr-3">
          {/* <p
            className={`${
              !data.discount && "hidden"
            } font-JosefinSans text-sm text-navy-blue`}
          >
            ${data?.discount}
          </p>
          <p
            className={`${
              data.discount && "line-through text-red-cc text-xs ml-3"
            } text-sm text-navy-blue font-JosefinSans`}
          >
            ${data.price}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default LPCards;
