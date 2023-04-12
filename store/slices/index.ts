import { combineReducers } from "redux";
import cart from "./cart";
import wishlist from "./wishlistSlice";
import { cartActions } from "./cart";
import { wishListActions } from "./wishlistSlice";

const rootReducer = combineReducers({ cart, wishlist });

export {
    rootReducer,
    cartActions,
    wishListActions
}