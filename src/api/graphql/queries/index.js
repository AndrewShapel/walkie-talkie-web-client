import getChats from './get-chats.gql';
import getFriendRequests from './get-friend-requests.gql';
import getFriends from './get-friends.gql';
import getMe from './get-me.gql';
import getUsers from './get-users.gql';

import { chatFieldsFragment, userFieldsFragment } from '../fragments';

export const getChatsQuery = `${chatFieldsFragment}${userFieldsFragment}${getChats}`;
export const getFriendRequestsQuery = `${userFieldsFragment}${getFriendRequests}`;
export const getFriendsQuery = `${userFieldsFragment}${getFriends}`;
export const getMeQuery = getMe;
export const getUsersQuery = `${userFieldsFragment}${getUsers}`;
