import { List } from 'immutable';

import FriendRequest from '../../models/friends/friend-request';
import UsersFactory from '../../models/users/users-factory';

export default class FriendRequestsFactory {

  /**
   * @param {Object} from
   * @param {String} status
   * @returns {Object}
   */
  static createFriendRequest(from, status) {
    return new FriendRequest({
      from,
      status,
    });
  }

  /**
   * @param {Object} friendRequests
   * @returns {Object}
   */
  static createFriendRequests(friendRequests) {
    return List().withMutations((context) => {
      friendRequests.forEach((friendRequest) => {
        const { from, status } = friendRequest;

        const newUser = UsersFactory.createUser(from);
        const newFriendRequest = FriendRequestsFactory.createFriendRequest(newUser, status);
        context.push(newFriendRequest);
      });
    });
  }
}
