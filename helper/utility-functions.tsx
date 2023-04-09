import { Products } from "@/types/products";

export const totalCartPrice = (cartProducts: Products[]): string => {
  const pricesArray: any = [];
  cartProducts.forEach((item: any) => {
    pricesArray.push(
      (item.price) * item.quantity
    );
  })
  const totalPrice = pricesArray.reduce(
    (x: number, y: number) => Number(x) + Number(y),
    0
  );
  return String(Number(totalPrice).toFixed(2));
};