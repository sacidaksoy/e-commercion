import React, { FC, ReactElement } from "react";
import { HiMinusSm, HiPlusSm } from "react-icons/hi";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { ECartSituation } from "../../enums/public.enum";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { Products } from "@/types/products";
import { cartActions } from "@/store/slices";
import Link from "next/link";
import Head from "next/head";
import { totalCartPrice } from "@/helper/utility-functions";
import Loader from "@/helper/Loader";
import Image from "next/image";
import EmptyCart from "../../images/cart.jpg";
import { useRouter } from "next/router";

const Cart: FC = (): ReactElement => {
  const { cartItems: cartProducts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const clearCart = async (e: any) => {
    e.currentTarget.disabled = true;
    if (window.confirm("Are you sure?")) {
      dispatch(cartActions.clearCart());
    }
  };

  const productTotalPrice = (id: number, price: number): number => {
    const cartItem: any = cartProducts.find((item) => item.id === id);
    if (cartItem) {
      return Number((cartItem.quantity * price).toFixed(2));
    } else return price;
  };

  if (cartProducts === undefined) return <Loader />;
  if (cartProducts.length === 0)
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
          className="md:w-1/3 sm:w-full rounded-full"
          src={EmptyCart}
          alt="wishlist empty"
        />
        <h2 className="font-JosefinSans text-4xl mt-10 font-bold text-navy-blue">
          Your Cart Are Empty!
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
    <motion.div>
      <Head>
        <title>E-commercion - Cart Page</title>
      </Head>
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto flex">
          <h1 className="font-JosefinSans font-bold text-3xl text-[#101750]">
            Product Details
          </h1>
        </div>
      </div>
      <div className="container mx-auto my-24">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-9">
            <div className="overflow-x-auto">
              <table className="text-left">
                <thead className="mb-2">
                  <tr className="mb-2">
                    <th scope="col" className="cart-product-th">
                      Product
                    </th>
                    <th scope="col" className="cart-product-th">
                      Price
                    </th>
                    <th scope="col" className="cart-product-th">
                      Quantity
                    </th>
                    <th scope="col" className="cart-product-th">
                      Total Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {cartProducts.map((product: Products) => (
                    <tr key={product.id} className="border-b border-gray-300">
                      <td className="py-4 px-6 font-medium text-gray-900 flex w-full">
                        <div className="relative w-[87px]">
                          <img
                            src={product.image}
                            alt={product.title}
                          />
                          <div
                            className="absolute -top-[7px] -right-[7px] cursor-pointer"
                            onClick={() => dispatch(cartActions.removeFromCart(product.id))}
                          >
                            <RiCloseCircleFill size={16} />
                          </div>
                        </div>
                        <div className="flex flex-col my-auto ml-2">
                          <Link href={`/products/${product.id}`}>
                            <h2 className="font-JosefinSans text-sm font-semibold whitespace-nowrap">
                              {product.title}
                            </h2>
                          </Link>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <h2 className="text-navy-blue font-JosefinSans">
                          ${product.price}
                        </h2>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex">
                          <button
                            className="w-full bg-[#E7E7EF]"
                            onClick={() =>
                              dispatch(
                                cartActions.changeQuantity({ id: product.id, quantity: -1 })
                              )
                            }
                          >
                            <HiMinusSm className="m-auto" color="#BEBFC2" />
                          </button>
                          <input
                            type="text"
                            min={1}
                            className="outline-none w-10 text-center text-[#BEBFC2] bg-[#f5f5f6]"
                            value={product.quantity}
                            readOnly
                          />
                          <button
                            className="w-full bg-[#E7E7EF]"
                            onClick={() =>
                              dispatch(
                                cartActions.changeQuantity({ id: product.id, quantity: 1 }))
                            }
                          >
                            <HiPlusSm className="m-auto" color="#BEBFC2" />
                          </button>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <h2
                          className={`${product.price ? "text-navy-blue" : "text-pink-cc"
                            } font-JosefinSans`}
                        >
                          ${productTotalPrice(product.id, product.price)}
                        </h2>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-5">
              <button
                className="px-4 py-2 bg-pink-cc rounded-sm text-white font-JosefinSans"
                onClick={(e) => clearCart(e)}
              >
                Clear Cart
              </button>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-3">
            <div className="w-full">
              <h5 className="py-3 px-6 font-JosefinSans text-xl text-navy-blue font-bold text-center mb-2">
                Cart Total
              </h5>
              <div className="py-10 px-5 bg-[#F4F4FC] w-full rounded-sm">
                <div className="flex items-center justify-between font-JosefinSans border-b border-gray-300 pb-2">
                  <p className="font-semibold text-lg font-Lato text-navy-blue">
                    Totals:
                  </p>
                  <p className="text-base font-Lato text-navy-blue">
                    ${totalCartPrice(cartProducts)}
                  </p>
                </div>
                <p className="flex font-Lato text-xs text-[#8A91AB] items-center mt-4">
                  <IoIosCheckmarkCircle className="text-green-600 mr-2" />
                  Shipping & taxes calculated at checkout
                </p>
                <button
                  className="bg-green-500 text-white font-bold font-Lato text-sm mt-6 w-full rounded-sm py-3 disabled:opacity-75"
                  // disabled={true}
                  onClick={() => router.push('/signup')}
                >
                  {"You should sign in first."}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Cart;
