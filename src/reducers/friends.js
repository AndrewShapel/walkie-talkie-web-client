import Friends from '../models/friends/friends';
import UsersFactory from '../models/users/users-factory';

import { SET_FRIENDS } from '../action-types/friends';

const initialState = new Friends();

export default function friends(state = initialState, action) {
  switch (action.type) {
    case SET_FRIENDS:
      return state.setFriends(UsersFactory.createUsers(action.payload.friends));
    default:
      return state;
  }
}
