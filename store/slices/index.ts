import { combineReducers } from "redux";
import list from "./list";
import cart from "./cart";
import wishlist from "./wishList";
import { listActions } from './list'
import { cartActions } from "./cart";
import { wishListActions } from "./wishList";

const rootReducer = combineReducers({ list, cart, wishlist });

export {
    rootReducer,
    listActions,
    cartActions,
    wishListActions
}