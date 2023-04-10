import React, { FC, ReactElement } from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FaTelegram } from "react-icons/fa";
import { BsFillPersonFill, BsFillSuitHeartFill } from "react-icons/bs";
import { MdOutlineShoppingCart } from "react-icons/md";
import { SlMagnifier } from "react-icons/sl";
import { BounceLoader } from "react-spinners";
import Link from "next/link";
import { useRouter } from 'next/router';
// import { useAppSelector } from "@/redux/hook";
import { useUser } from '@auth0/nextjs-auth0/client';

const Navbar: FC = (): ReactElement => {
  // const { isLoggedIn, guest, userName } = useAppSelector((state) => state.user);
  const router = useRouter();
  const { user, error, isLoading } = useUser();

  // console.log("user", user);

  return (
    <nav>
      <div className="w-100 bg-[#7E33E0] py-2 font-JosefinSans">
        <div className="container mx-auto">
          <div className="flex justify-center sm:justify-between items-center text-[#F1F1F1] text-base flex-wrap ">
            <div className="flex items-center flex-wrap justify-center sm:justify-start">
              <p className="flex items-center">
                <HiOutlineMail className="font-bold" />
                <span className="ml-2 font-semibold">
                  e-commercion@info.com
                </span>
              </p>
              <p className="flex items-center ml-5">
                <FaTelegram className="font-bold" />
                <a
                  href="https://t.me/eCommercion"
                  rel="noreferrer"
                  target="_blank"
                  className="ml-2 font-semibold text-base"
                >
                  @eCommercion
                </a>
              </p>
            </div>
            <div className="flex items-center mt-4 sm:mt-0">
              <div>
                {!user ? (
                  <Link className="flex items-center" href={'/api/auth/login'}>
                    <p>Login</p>
                    <span>
                      <BsFillPersonFill className="ml-2" />
                    </span>
                  </Link>
                ) : (
                  <Link href={'/api/auth/logout'}>
                    <p>{user?.name || user?.nickname}</p>
                  </Link>
                )}
              </div>
              <div className="flex items-center ml-3">
                <Link href={"/wishlist"} className="flex items-center">
                  <p>Wishlist</p>
                  <BsFillSuitHeartFill className="ml-2 text-base" />
                </Link>
              </div>
              <div className="flex items-center ml-3">
                <Link href={"/cart"} className="flex items-center">
                  <MdOutlineShoppingCart className="ml-2 text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto">
          <div className="items-center py-[13.5px] grid grid-cols-12">
            <h1 className="font-JosefinSans text-[#0D0E43] font-bold text-[34px] sm:col-span-4 md:col-span-3 col-span-12 text-center sm:text-left cursor-pointer" onClick={() => router.push('/')}>
              Commercion
            </h1>
            <ul className="flex font-Lato text-[#0D0E43] items-center sm:col-span-8 md:col-span-6  sm:justify-self-end md:justify-self-start flex-wrap col-span-12 mb-4 sm:mb-0 justify-center sm:justify-start">
              <li className="mr-9">
                <Link href="/" className={router.pathname === '/' ? 'active-nav-link' : ''}>Home</Link>
              </li>
              <li className="mr-9">
                <Link href="/products" className={router.pathname === '/products' ? 'active-nav-link' : ''}>Shop</Link>
              </li>
              <li className="mr-9">
                <Link href="/contacts" className={router.pathname === '/contacts' ? 'active-nav-link' : ''}>Contact Us</Link>
              </li>
              <li>
                <Link href="/about" className={router.pathname === '/about' ? 'active-nav-link' : ''}>About Us</Link>
              </li>
            </ul>
            <div className="relative flex items-center md:col-span-3 col-span-12">
              <input
                type="text"
                className="border border-[#E7E6EF] focus:outline-none h-10 pl-5 pr-16 focus:border-[#7c7a7a] ease-in transition-[border] w-full duration-200"
              />
              <div className="absolute inset-y-0 right-0 flex items-center top-1/2 -translate-y-1/2 h-full bg-pink-cc px-5">
                <SlMagnifier className="text-white text-lg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
