import http from '../../http/http';

import api from '../../constants/api/api';

import getFriendsQuery from './queries/get-friends.gql';
import makeFriendRequestMutation from './mutations/make-friend-request.gql';

/**
 * @returns {Promise}
 */
export const getFriends = () => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: getFriendsQuery,
    },
  });
};

/**
 * @param {String} email
 * @returns {Promise}
 */
export const makeFriendRequest = (email) => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: makeFriendRequestMutation,
      variables: {
        email,
      },
    },
  });
};
