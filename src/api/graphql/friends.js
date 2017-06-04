import http from '../../http/http';

import api from '../../constants/api/api';

import getFriendsQuery from './queries/get-friends.gql';

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

export const get = () => {};
