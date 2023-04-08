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
  image: string,
  quantity: number
}

export interface IListSliceInitialState {
  loading: false | true;
  products?: Products[],
  error: any,
  listedProduct?: Products[],
}

export interface CartItem {
  id: number;
  title: string;
  price: number;
  quantity: number;
}