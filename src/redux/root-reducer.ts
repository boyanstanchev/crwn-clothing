import { combineReducers } from 'redux';
import { UserState } from './user/user.models';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import { CartState } from './cart/cart.models';

export interface StoreState {
  user: UserState,
  cart: CartState
}

export default combineReducers<StoreState>({
  user: userReducer,
  cart: cartReducer
})
