import http from '../../http/http';

import api from '../../constants/api/api';

import { getFriendsQuery, getFriendRequestsQuery } from './queries';
import { makeFriendRequestMutation, acceptFriendRequestMutation, declineFriendRequestMutation } from './mutations';

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
