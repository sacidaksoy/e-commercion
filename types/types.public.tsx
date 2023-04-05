import { StaticImageData } from "next/image"

export type ShopOfferContent = {
  text: string,
  title: string,
  image: string | StaticImageData
}

export type TShopOffer = {
  sectionTitle: React.ReactNode,
  classes: string
}