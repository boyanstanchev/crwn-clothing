import { combineReducers } from 'redux';
import { UserState } from './user/user.models';
import userReducer from './user/user.reducer';

export interface StoreState {
  user: UserState,
}

export default combineReducers<StoreState>({
  user: userReducer,
})
