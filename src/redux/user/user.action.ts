import UserActionTypes from './user.types'
import { User } from './user.models'
import BaseAction from '../base-action.model'

export const setCurrentUser = (user: User | null): BaseAction<UserActionTypes, User | null> => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
})