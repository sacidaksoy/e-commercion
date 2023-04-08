import React from "react";
import Loader from "../helper/Loader";
import EmptyWishlist from "../images/wishlist.png";
import { TbShoppingCartPlus } from "react-icons/tb";
import { HiMinus } from "react-icons/hi";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Products } from "@/types/products";
import Image from "next/image";
import Link from "next/link";
import { cartActions, wishListActions } from "@/store/slices";

const Wishlist = () => {
  const { wishlistProducts } = useAppSelector((state) => state.wishlist)
  const dispatch = useAppDispatch();

  console.log("wishlistProducts", wishlistProducts);

  if (wishlistProducts === undefined) return <Loader />;
  if (wishlistProducts.length === 0)
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: "100%",
          transition: { duration: 0.3 },
        }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
        className=" container mx-auto flex flex-col items-center justify-center py-20"
      >
        <Image
          className="md:w-1/3 sm:w-full"
          src={EmptyWishlist}
          alt="wishlist empty"
        />
        <h2 className="font-JosefinSans text-4xl mt-10 font-bold text-navy-blue">
          Your Wishlist Are Empty!
        </h2>
        <Link href={'/products'}>
          <button
            className="font-JosefinSans text-base rounded-sm bg-pink-cc px-6 py-2 text-white mt-10"
          >
            See Products
          </button>
        </Link>
      </motion.div>
    );
  return (
    <div>
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto">
          <h1 className="font-JosefinSans font-bold text-3xl text-[#101750]">
            Wishlist
          </h1>
        </div>
      </div>
      <div className="container mx-auto my-24">
        <div className="overflow-x-auto">
          <table className="w-full text-left table-auto">
            <thead className="border-b-2 border-gray-300 mb-2">
              <tr className="mb-2">
                <th scope="col" className="wishlist-product-th">
                  Product
                </th>
                <th scope="col" className="wishlist-product-th">
                  Name
                </th>
                <th scope="col" className="wishlist-product-th"></th>
                <th scope="col" className="wishlist-product-th"></th>
              </tr>
            </thead>
            <tbody>
              {wishlistProducts.map((product: Products) => (
                <tr key={product.id}>
                  <td className="py-4 px-6">
                    <Image
                      className="w-[150px]"
                      src={product.image}
                      alt={product.title}
                      width={150}
                      height={150}
                    />
                  </td>
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 "
                  >
                    <Link href={`/products/${product.id}`}>
                      <h2 className="font-JosefinSans text-lg font-semibold whitespace-nowrap">
                        {product.title}
                      </h2>
                    </Link>
                  </th>
                  <td className="py-4 px-6">
                    <button
                      className="w-full h-7 flex items-center justify-center bg-green-600 rounded-sm"
                      onClick={() =>
                        dispatch(cartActions.addToCart(product))
                      }
                    >
                      <TbShoppingCartPlus size={20} className="text-white" />
                    </button>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => dispatch(wishListActions.removeFromWishList(product))}
                      className="w-full h-7 flex items-center justify-center bg-red-600 rounded-sm disabled:opacity-75 ease-in-out duration-150"
                    >
                      <HiMinus className="text-white" size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
