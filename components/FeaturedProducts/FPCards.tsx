// Featured Products Card

import React, { FC, ReactElement } from "react";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SlMagnifierAdd } from "react-icons/sl";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Products } from "@/types/products";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { cartActions, wishListActions } from "@/store/slices";

interface Props {
  data: Products;
}

const FPCards: FC<Props> = ({ data }): ReactElement => {
  const { wishlistProducts } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();
  return (
    <div className="w-[95%] group overflow-hidden">
      <div className="w-full h-[236px] flex items-center justify-center FPCard-hover-image relative">
        <Image
          className="w-[176px] h-[176px]"
          src={data?.image}
          width={176}
          height={176}
          alt={data?.title}
          style={{ mixBlendMode: 'darken' }}
        />
        <div className="FPCard-hover-icons">
          <HiOutlineShoppingCart
            className="FPCard-hover-icon cursor-pointer"
            onClick={() => dispatch(cartActions.addToCart(data))}
          />
          {wishlistProducts?.filter((item) => item.id === data.id).length > 0 ? (
            <FaHeart
              onClick={() =>
                dispatch(wishListActions.removeFromWishList(data))
              }
              className="FPCard-hover-icon cursor-pointer"
            />
          ) : (
            <FiHeart
              onClick={() => dispatch(wishListActions.addToWishList(data))}
              className="FPCard-hover-icon cursor-pointer"
            />
          )}
          <Link href={`products/${data.id}`}>
            <SlMagnifierAdd className="FPCard-hover-icon" />
          </Link>
        </div>
        <Link href={`products/${data.id}`} className="FPCard-hover-button">
          View Details
        </Link>
      </div>
      <div className="flex items-center flex-col p-4 text-center FPCard-hover-body">
        <Link
          href={`products/${data.id}`}
          className="flex items-center justify-center"
        >
          <h5 className="line-clamp-1 text-pink-cc text-[18px] font-bold FPCard-hover-text">
            {data.title}
          </h5>
        </Link>
        {/* <div className="flex mt-3 h-1">
          {data.colors &&
            data.colors?.map((color: any) => (
              <div
                key={color.code}
                className={`w-[14px] h-[4px] mr-2 rounded-lg`}
                style={{ backgroundColor: color.code }}
              />
            ))}
        </div> */}
        <p className="font-JosefinSans text-[14px] text-navy-blue mt-3 FPCard-hover-text">
          Code - {data.id}
        </p>
        <div className="mt-3 text-center w-full">
          <p className="text-[14px] text-navy-blue FPCard-hover-text">
            ${data.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FPCards;
