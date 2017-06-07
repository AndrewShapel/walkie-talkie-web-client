import http from '../../http/http';

import api from '../../constants/api/api';

import { getFriendsQuery, getFriendRequestsQuery } from './queries';

import makeFriendRequestMutation from './mutations/make-friend-request.gql';
import acceptFriendRequestMutation from './mutations/accept-friend-request.gql';
import declineFriendRequestMutation from './mutations/decline-friend-request.gql';

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
 * @returns {Promise}
 */
export const getFriendRequests = () => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: getFriendRequestsQuery,
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

/**
 * @param {String} email
 * @returns {Promise}
 */
export const acceptFriendRequest = (email) => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: acceptFriendRequestMutation,
      variables: {
        email,
      },
    },
  });
};

/**
 * @param {String} email
 * @returns {Object}
 */
export const declineFriendRequest = (email) => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: declineFriendRequestMutation,
      variables: {
        email,
      },
    },
  });
};
