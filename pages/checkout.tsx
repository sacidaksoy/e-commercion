import { useFormik } from "formik";
import React, { FC } from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { motion } from "framer-motion";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { OrderCompleteSchema } from "@/Validation/order";
import { useRouter } from "next/router";
import { cartActions } from "@/store/slices";
import { Products } from "@/types/products";
import Image from "next/image";
import { totalCartPrice } from "@/helper/utility-functions";
import Head from "next/head";

const Checkout: FC = (): React.ReactElement => {
  const { cartItems: cartProducts } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { values, handleChange, handleSubmit, errors, isValid } = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      address: "",
      apt: "",
      city: "",
      state: "",
      postalCode: 0,
    },
    validationSchema: OrderCompleteSchema,
    onSubmit,
  });

  function onSubmit() {
    dispatch(cartActions.clearCart());
    router.push('/order-complete')
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: "100%",
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
    >
      <Head>
        <title>E-commercion - Checkout</title>
      </Head>
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto flex flex-col">
          <h1 className="font-JosefinSans font-bold text-3xl text-[#101750]">
            Checkout
          </h1>
          <button
            className="text-sm font-Lato flex items-center text-[#101750] mt-3"
            onClick={() => router.push('/cart')}
          >
            <HiOutlineArrowNarrowLeft className="mr-2" /> Back To Cart
          </button>
        </div>
      </div>

      <div className="container mx-auto mt-24 mb-28">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 xl:col-span-9">
            <div className="w-full bg-[#F8F8FD] py-20 px-8">
              <h5 className="font-JosefinSans text-xl text-navy-blue font-bold mb-7">
                Shipping Address
              </h5>
              <form id="form1" onSubmit={handleSubmit} className="gap-6">
                <div className="w-full gap-6 flex">
                  <input
                    type="text"
                    className={`w-1/2 py-3 bg-[#F8F8FD] border-b-2 border-[#BFC6E0] px-2 focus:bg-[#fff] outline-none duration-300 ease-in-out ${errors.firstName ? "border-red-500" : "border-[#BFC6E0]"
                      }`}
                    placeholder="First name (optional)"
                    title={`${errors.firstName || ""}`}
                    id="firstName"
                    value={values.firstName}
                    onChange={handleChange}
                  />
                  <input
                    type="text"
                    className={`w-1/2 py-3 bg-[#F8F8FD] border-b-2 border-[#BFC6E0] px-2 focus:bg-[#fff] outline-none duration-300 ease-in-out ${errors.lastName ? "border-red-500" : "border-[#BFC6E0]"
                      }`}
                    placeholder="Last name"
                    title={`${errors.lastName || ""}`}
                    id="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Address"
                  className={`w-full my-4 py-3 bg-[#F8F8FD] border-b-2 border-[#BFC6E0] px-2 focus:bg-[#fff] outline-none duration-300 ease-in-out ${errors.address ? "border-red-500" : "border-[#BFC6E0]"
                    }`}
                  title={`${errors.address || ""}`}
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="Apartment,suite,e.t.c (optional)"
                  className={`w-full my-4 py-3 bg-[#F8F8FD] border-b-2 border-[#BFC6E0] px-2 focus:bg-[#fff] outline-none duration-300 ease-in-out ${errors.apt ? "border-red-500" : "border-[#BFC6E0]"
                    }`}
                  title={`${errors.apt || ""}`}
                  id="apt"
                  value={values.apt}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  placeholder="City"
                  className={`w-full py-3 bg-[#F8F8FD] border-b-2 border-[#BFC6E0] px-2 focus:bg-[#fff] outline-none duration-300  ease-in-out my-4 ${errors.city ? "border-red-500" : "border-[#BFC6E0]"
                    }`}
                  id="city"
                  title={`${errors.city || ""}`}
                  value={values.city}
                  onChange={handleChange}
                />
                <div className="w-full gap-6 flex my-4">
                  <input
                    type="text"
                    className={`w-1/2 py-3 bg-[#F8F8FD] border-b-2 border-[#BFC6E0] px-2 focus:bg-[#fff] outline-none duration-300 ease-in-out ${errors.state ? "border-red-500" : "border-[#BFC6E0]"
                      }`}
                    placeholder="State"
                    id="state"
                    title={`${errors.state || ""}`}
                    value={values.state}
                    onChange={handleChange}
                  />
                  <input
                    type="number"
                    className={`w-1/2 py-3 bg-[#F8F8FD] border-b-2 border-[#BFC6E0] px-2 focus:bg-[#fff] outline-none duration-300 ease-in-out ${errors.postalCode ? "border-red-500" : "border-[#BFC6E0]"
                      }`}
                    placeholder="Postal code"
                    id="postalCode"
                    title={`${errors.postalCode || ""}`}
                    value={values.postalCode}
                    onChange={handleChange}
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-3 flex flex-col justify-between h-full xl:h-[356px]">
            <div className="relative w-full h-full">
              <div className="overflow-y-auto h-full w-full">
                {cartProducts.map((product: Products) => (
                  <div
                    className="flex py-3 border-b border-[#E1E1E4]"
                    key={product.id}
                  >
                    <div className="max-w-[150px]">
                      <Image
                        className="w-full rounded-sm"
                        src={product.image}
                        alt={product.title}
                        width={150}
                        height={150}
                      />
                    </div>
                    <div className="ml-2 flex items-center justify-between w-full">
                      <div>
                        <h5 className="line-clamp-1 font-JosefinSans text-sm w-[170px]">
                          {product.title}
                        </h5>
                        <p className="font-JosefinSans text-xs text-[#A1A8C1]">
                          Qt:
                          <span className="text-sm ml-1">
                            {product.quantity}
                          </span>
                        </p>
                      </div>
                      <p className="font-JosefinSans text-navy-blue text-sm">
                        $
                        {(product.quantity * product.price).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="py-10 px-5 bg-[#F4F4FC] w-full rounded-sm mt-5">
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
                disabled={!isValid}
                type="submit"
                form="form1"
              >
                Complete Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Checkout;
