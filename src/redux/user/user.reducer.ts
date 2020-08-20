import UserActionTypes from './user.types'
import { User, UserState } from './user.models'
import BaseAction from '../base-action.model'

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (
  state: UserState = INITIAL_STATE,
  action: BaseAction<UserActionTypes, User>
) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
