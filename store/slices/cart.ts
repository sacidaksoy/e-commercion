import { Products } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface CartState {
  cartItems: Products[];
}

const initialState: CartState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      const { id } = action.payload;
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === id);
      if (existingItemIndex >= 0) {
        state.cartItems[existingItemIndex].quantity++;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
      toast.success('Added to cart!');
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItemIndex = state.cartItems.findIndex((item) => item.id === id);
      if (existingItemIndex >= 0) {
        const existingItem = state.cartItems[existingItemIndex];
        if (existingItem.quantity === 1) {
          state.cartItems.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity--;
        }
      }
      toast.error('Removed from cart!')
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
