import { StaticImageData } from "next/image"
import { Products } from "./products"

export type FCTypes = {
  products: Products[]
}

export type IFCTypes = {
  data: Products
}

export type ShopOfferContent = {
  text: string,
  title: string,
  image: string | StaticImageData
}

export type TShopOffer = {
  sectionTitle: React.ReactNode,
  classes: string
}

export type TProductDetailsStars = {
  star: number,
  count: number
}

export type TProductListSort = "regular" | "highest" | "lowest";