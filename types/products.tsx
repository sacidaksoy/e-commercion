export interface Products {
  id: number,
  title: string,
  price: number,
  category: string,
  description: string,
  rating: {
    rate: number,
    count: number
  },
  image: string
}