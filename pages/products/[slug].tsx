import React, { FC, ReactElement, useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { AiFillInstagram, AiFillStar, AiOutlineStar } from "react-icons/ai";
import { GrFacebookOption, GrTwitter } from "react-icons/gr";
import axios from "axios";
import { GetServerSideProps } from "next";
import { Products } from "@/types/products";
import { TProductDetailsStars } from "@/types/types.public";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import { cartActions } from "@/store/slices";
import { HiOutlineShoppingCart } from "react-icons/hi";

type ProductPageProps = {
  productDetails: Products;
};

export const getServerSideProps: GetServerSideProps<ProductPageProps> = async ({ params }) => {
  try {
    const slug = params?.slug || '';
    // Send HTTP GET request to fetch data from an API
    const response = await axios.get(`https://fakestoreapi.com/products/${slug}`);

    // Extract the data from the response
    const productDetails = response.data;

    // Return the data as props
    return { props: { productDetails } };
  } catch (error) {
    console.error(error);
    return { props: { productDetails: [] } };
  }
};

const Stars: FC<any> = ({ numb }: { numb: any }): React.ReactElement => {
  let star = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= numb) {
      star.push(<AiFillStar fontSize={20} />);
    } else {
      star.push(<AiOutlineStar fontSize={20} />);
    }
  }
  return (
    <div className="flex items-center ml-2">
      {star.map((item: any, index: number) => (
        <div className="text-orange-300" key={index}>
          {item}
        </div>
      ))}
    </div>
  );
};

const ProductDetails: FC<ProductPageProps> = ({ productDetails }): ReactElement => {
  const dispatch = useAppDispatch();
  const [stars, setStars] = useState<TProductDetailsStars>({
    star: productDetails.rating.rate || 0,
    count: productDetails.rating.count || 0,
  });

  return (
    <div>
      <Head>
        <title>E-commercion - Page Not Found</title>
      </Head>
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto">
          <h1 className="font-JosefinSans font-bold text-3xl text-[#101750]">
            Product Details
          </h1>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="mt-24 mb-28">
          <div className="w-full shadow-[0_0_25px_10px_#f6f4fd] flex px-3 py-3 rounded-sm flex-col lg:flex-row">
            <div className="w-full flex items-center gap-4 flex-col-reverse md:flex-row">
              <div className="w-full">
                <Image
                  className="rounded-sm mx-auto py-4"
                  src={
                    productDetails?.image
                  }
                  alt={productDetails?.title}
                  width={400}
                  height={400}
                />
              </div>
            </div>
            <div className="w-full py-16 px-4">
              <h2 className="text-3xl font-JosefinSans text-[#0D134E] font-bold mb-5">
                {productDetails?.title}
              </h2>
              <div>
                <div className="flex items-center">
                  <div>
                    <Stars numb={stars.star} />
                  </div>
                  <p className="ml-2 font-Lato">({stars.count})</p>
                </div>
              </div>
              <p className="font-JosefinSans text-base font-semibold text-[#A9ACC6] mb-2 last:mb-0 flex items-center group mt-4">
                {productDetails?.description}
              </p>
              <div className="flex mt-10">
                <p
                  className={`font-JosefinSans text-lg text-navy-blue font-semibold `}
                >
                  ${productDetails?.price}
                </p>
              </div>
              <div className="flex items-center mt-10">
                <HiOutlineShoppingCart
                  className="text-[#535399]"
                  fontSize={24}
                />
                <h5
                  onClick={() =>
                    dispatch(cartActions.addToCart(productDetails))
                  }
                  className="font-JosefinSans text-lg font-bold text-navy-blue px-4 pt-2 cursor-pointer"
                >
                  Add To Cart
                </h5>
                {/* <HiOutlineShoppingCart
                  onClick={() =>
                    dispatch(cartActions.addToCart(productDetails))
                  }
                  className="mr-7 text-[#535399] cursor-pointer"
                  fontSize={20}
                /> */}
                {/* {wishlist.includes(productDetails.id) ? (
                  <AiFillHeart
                    onClick={() =>
                      dispatch(
                        removeFromWishlist({ productID: productDetails.id })
                      )
                    }
                    className="ml-4 font-bold text-red-600 cursor-pointer"
                    size={30}
                  />
                ) : (
                  <AiOutlineHeart
                    onClick={() =>
                      dispatch(addToWishlist({ productID: productDetails.id }))
                    }
                    className="ml-4 font-bold text-red-600 cursor-pointer"
                    size={30}
                  />
                )} */}
              </div>
              <div className="flex mt-10">
                <p className="mr-2 font-JosefinSans text-lg font-bold text-navy-blue">
                  Categories :
                </p>
                <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  {productDetails.category}
                </span>
              </div>
              <div className="flex mt-10">
                <p className="mr-7 font-JosefinSans text-lg font-bold text-navy-blue">
                  Share :
                </p>
                <AiFillInstagram className="bg-navy-blue p-1 text-white text-2xl rounded-full mr-4" />
                <GrFacebookOption className="bg-pink-cc p-1 text-white text-2xl rounded-full mr-4" />
                <GrTwitter className="bg-navy-blue p-1 text-white text-2xl rounded-full mr-4" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
