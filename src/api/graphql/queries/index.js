import getChats from './get-chats.gql';
import getFriendRequests from './get-friend-requests.gql';
import getFriends from './get-friends.gql';
import getUsers from './get-users.gql';

import { chatFieldsFragment, userFieldsFragment } from '../fragments';

export const getChatsQuery = `${chatFieldsFragment}${getChats}`;
export const getFriendRequestsQuery = `${userFieldsFragment}${getFriendRequests}`;
export const getFriendsQuery = `${userFieldsFragment}${getFriends}`;
export const getUsersQuery = `${userFieldsFragment}${getUsers}`;
