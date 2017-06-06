import Friends from '../models/friends/friends';
import UsersFactory from '../models/users/users-factory';
import FriendRequestsFactory from '../models/friends/friend-requests-factory';

import { SET_FRIENDS, SET_FRIEND_REQUESTS } from '../action-types/friends';

const initialState = new Friends();

export default function friends(state = initialState, action) {
  switch (action.type) {
    case SET_FRIENDS:
      return state.setFriends(UsersFactory.createUsers(action.payload.friends));
    case SET_FRIEND_REQUESTS:
      return state.setFriendRequests(FriendRequestsFactory.createFriendRequests(action.payload.friendRequests));
    default:
      return state;
  }
}
