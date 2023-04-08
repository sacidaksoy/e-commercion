import { CartItem } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex >= 0) {
        state.items[existingItemIndex].quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItemIndex = state.items.findIndex((item) => item.id === id);
      if (existingItemIndex >= 0) {
        const existingItem = state.items[existingItemIndex];
        if (existingItem.quantity === 1) {
          state.items.splice(existingItemIndex, 1);
        } else {
          existingItem.quantity--;
        }
      }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
