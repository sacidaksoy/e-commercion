import { Products } from '@/types/products';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

interface WishListState {
  wishlistProducts: Products[];
}

const initialState: WishListState = {
  wishlistProducts: [],
};

export const wishListSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishList: (state, action: PayloadAction<Products>) => {
      state.wishlistProducts.push(action.payload);
      toast.success('Added to wishlist!');
    },
    removeFromWishList: (state, action: PayloadAction<Products>) => {
      const w_productId = action.payload.id;
      state.wishlistProducts = state.wishlistProducts.filter((product) => product.id !== w_productId);
      toast.warning('Removed from wishlist!');
    },
  },
});

export const wishListActions = {
  addToWishList: wishListSlice.actions.addToWishList,
  removeFromWishList: wishListSlice.actions.removeFromWishList,
};
export default wishListSlice.reducer;
