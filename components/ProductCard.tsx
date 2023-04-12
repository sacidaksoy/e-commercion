import { useAppDispatch, useAppSelector } from '@/store/hook'
import { cartActions, wishListActions } from '@/store/slices'
import { IFCTypes } from '@/types/types.public'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'
import { FaHeart } from 'react-icons/fa'
import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import { SlMagnifierAdd } from 'react-icons/sl'

const ProductCard: FC<IFCTypes> = ({ data: product }) => {
  const dispatch = useAppDispatch();
  const { wishlistProducts } = useAppSelector(
    (state) => state.wishlist
  );

  return (
    <div className="group relative">
      <div className="h-80 aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md group-hover:opacity-75">
        <Link href={`/products/${product.id}`}>
          <Image
            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
            src={product.image}
            alt=""
            width={300}
            height={300}
          />
        </Link>
      </div>
      <div className="flex mt-4 gap-4">
        <HiOutlineShoppingCart
          onClick={() =>
            dispatch(cartActions.addToCart(product))
          }
          className="text-[#535399] cursor-pointer"
          fontSize={20}
        />
        {wishlistProducts?.filter((item) => item.id === product.id).length > 0 ? (
          <FaHeart
            onClick={() =>
              dispatch(wishListActions.removeFromWishList(product))
            }
            className="text-[#535399] cursor-pointer"
            fontSize={20}
          />
        ) : (
          <FiHeart
            onClick={() => dispatch(wishListActions.addToWishList(product))}
            className="text-[#535399] cursor-pointer"
            fontSize={20}
          />
        )}
        {/* <Link href={`/products/${product.id}`}>
          <SlMagnifierAdd
            className="text-[#535399]"
            fontSize={20}
          />
        </Link> */}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href="#">
              <span aria-hidden="true" className=""></span>
              Basic Tee
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">{product.title}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${product.price}</p>
      </div>
    </div>
  )
}

export default ProductCard