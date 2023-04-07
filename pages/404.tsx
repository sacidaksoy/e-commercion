import React, { FC, ReactElement } from "react";
import NotFoundIMG from "../images/404.png";
import Logos from "@/components/Logos";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";

const NotFound: FC = (): ReactElement => {
  return (
    <div>
      <Head>
        <title>E-commercion - Page Not Found</title>
      </Head>
      <div className="bg-[#F6F5FF] py-16">
        <div className="container mx-auto">
          <h1 className="font-JosefinSans font-bold text-3xl text-[#101750]">
            404 Not Found
          </h1>
        </div>
      </div>
      <div className="container mx-auto mt-28">
        <Image src={NotFoundIMG} alt="404" className="mx-auto" />
        <p className="text-center text-[#152970] font-bold text-2xl font-JosefinSans mt-10">
          oops! The page you requested was not found!
        </p>
        <div className="mt-20 flex items-center justify-center mb-20">
          <Link
            href="/"
            className="font-JosefinSans rounded-md text-white px-5 py-3 bg-pink-cc"
          >
            Back To Home
          </Link>
        </div>
        <Logos />
      </div>
    </div>
  );
};

export default NotFound;
