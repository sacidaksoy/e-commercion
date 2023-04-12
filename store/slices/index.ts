import { combineReducers } from "redux";
import cart from "./cart";
import wishlist from "./wishList";
import { cartActions } from "./cart";
import { wishListActions } from "./wishList";

const rootReducer = combineReducers({ cart, wishlist });

export {
    rootReducer,
    cartActions,
    wishListActions
}