import React, { FC, useEffect, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { SlMagnifierAdd } from "react-icons/sl";
import Loader from "../../helper/Loader";
import { motion } from "framer-motion";
import { Products } from "@/types/products";
import { FCTypes, TProductListSort } from "@/types/types.public";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { listActions } from "@/store/slices";
import Link from "next/link";
import Image from "next/image";
import { cartActions } from "@/store/slices/cart";

export type Props = {
  products: Products[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    // Send HTTP GET request to fetch data from an API
    const response = await axios.get<Products[]>('https://fakestoreapi.com/products');

    // Extract the data from the response
    const products = response.data;

    // Return the data as props
    return { props: { products } };
  } catch (error) {
    console.error(error);
    return { props: { products: [] } };
  }
};

const ProductsList: FC<FCTypes> = ({ products }) => {
  const [searchText, setSearchText] = useState<string>("");
  const [sort, setSort] = useState<TProductListSort>("regular");

  const isMount1 = useRef(false);
  const isMount2 = useRef(false);

  const dispatch = useAppDispatch();
  const { loading: listedLoading, listedProduct } = useAppSelector(
    (state) => state.list
  );
  const { cartItems } = useAppSelector(
    (state) => state.cart
  );

  useEffect(() => {
    if (isMount1.current) {
      const getData = setTimeout(() => {
        dispatch(listActions.regular({ products, search: searchText }));
        setSort("regular");
      }, 450);

      return () => clearTimeout(getData);
    } else {
      isMount1.current = true;
    }
  }, [searchText]);

  useEffect(() => {
    if (isMount2.current) {
      if (sort === "lowest") {
        dispatch(listActions.lowest(listedProduct));
      } else if (sort === "highest") {
        dispatch(listActions.highest(listedProduct));
      } else if (sort === "regular") {
        dispatch(listActions.regular({ products, search: "" }));
      }
    } else {
      isMount2.current = true;
    }
  }, [sort]);

  const changeHandler = (query: TProductListSort) => {
    setSort(() => query);
  };

  // console.log("products", products);
  // console.log("cartItems", cartItems);

  if (!!!products?.length) return <Loader />;
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: "100%",
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto">
          <h1 className="font-JosefinSans font-bold text-3xl text-[#101750]">
            Product List
          </h1>
        </div>
      </div>
      <div className="container mx-auto mt-20">
        <div>
          <div className="flex items-center justify-between mb-20 flex-col md:flex-row">
            <h5 className="font-JosefinSans font-bold text-2xl text-navy-blue">
              Furniture Ecommerce
            </h5>
            <div className="flex items-center">
              <p className="text-[#3F509E] font-Lato text-base mr-2 whitespace-pre">
                Sort By:
              </p>
              <select
                value={sort}
                className="bg-white border-2 border-[#E7E6EF] text-[#8A8FB9] focus:ring-[#bcbbc1] focus:border-[#bcbbc1] block w-full px-1 h-[35px] outline-none text-sm"
                onChange={(e: any) => changeHandler(e.target.value)}
              >
                <option value="regular">Best Match</option>
                <option value="lowest">Lowest First</option>
                <option value="highest">Highest First</option>
              </select>
              <input
                className="px-4 py-2.5 outline-none border-2 border-[#E7E6EF] h-[35px] ml-4"
                type="search"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
              />
            </div>
          </div>
          <div className="w-full">
            {listedLoading ? (
              <Loader />
            ) : !listedLoading && listedProduct?.length === 0 ? (
              <p className="text-center text-2xl font-Lato text-navy-blue mb-10 font-bold">
                Nothing Found
              </p>
            ) : (
              listedProduct?.map((product: Products) => (
                <div
                  key={product.id}
                  className="flex items-center mb-10 p-4 gap-6 flex-col sm:flex-row"
                >
                  <div className="w-3/6 sm:w-1/6">
                    <div>
                      <Image
                        className="w-full bg-gray-50 rounded-sm p-2"
                        src={product.image}
                        alt=""
                        width={300}
                        height={300}
                      />
                    </div>
                  </div>
                  <div className="w-5/6">
                    <div className="flex flex-col sm:flex-row">
                      <Link
                        href={`/products/${product.id}`}
                        className="font-JosefinSans font-bold text-xl text-[#111C85] mr-6"
                      >
                        {product.title}
                      </Link>
                    </div>
                    <div className="flex mt-2">
                      <p
                        className={`font-JosefinSans text-lg text-navy-blue font-semibold `}
                      >
                        ${product.price}
                      </p>
                    </div>
                    <div className="flex mt-2">
                      <HiOutlineShoppingCart
                        onClick={() =>
                          dispatch(cartActions.addToCart(product))
                        }
                        className="mr-7 text-[#535399] cursor-pointer"
                        fontSize={20}
                      />
                      {/* {wishlist.includes(product.id) ? (
                        <FaHeart
                          onClick={() =>
                            dispatch(
                              removeFromWishlist({ productID: product.id })
                            )
                          }
                          className="mr-7 text-[#535399] cursor-pointer"
                          fontSize={20}
                        />
                      ) : (
                        <FiHeart
                          onClick={() =>
                            dispatch(addToWishlist({ productID: product.id }))
                          }
                          className="mr-7 text-[#535399] cursor-pointer"
                          fontSize={20}
                        />
                      )} */}
                      <Link href={`/products/${product.id}`}>
                        <SlMagnifierAdd
                          className="text-[#535399]"
                          fontSize={20}
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductsList;
