import { StaticImageData } from "next/image"
import { Products } from "./products"

export type FCTypes = {
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