import getFriendRequests from './get-friend-requests.gql';
import getFriends from './get-friends.gql';
import getUsers from './get-users.gql';

import userFieldsFragment from '../fragments/user-fields.gql';

export const getFriendRequestsQuery = `${userFieldsFragment}${getFriendRequests}`;
export const getFriendsQuery = `${userFieldsFragment}${getFriends}`;
export const getUsersQuery = `${userFieldsFragment}${getUsers}`;
