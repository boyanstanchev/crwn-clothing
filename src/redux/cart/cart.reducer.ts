import BaseAction from "../base-action.model"
import { CartState, Cart } from "./cart.models"
import CartActionTypes from "./cart.types"

const INITIAL_STATE = {
  hidden: true
}

const cartReducer = (
  state: CartState = INITIAL_STATE,
  action: BaseAction<CartActionTypes, Cart>
) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      }
    default:
      return state
  }
}

export default cartReducer
