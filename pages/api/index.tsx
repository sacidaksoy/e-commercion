import { Products } from '@/types/products';
import axios from 'axios';

export async function fetchProductData() {
  const { data } = await axios.get<Products[]>('https://fakestoreapi.com/products');
  return data;
}

export async function fetchProductDetail(slug: string) {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${slug}`);
  return data;
}
