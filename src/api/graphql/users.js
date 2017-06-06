import http from '../../http/http';

import api from '../../constants/api/api';

import getUsersQuery from './queries/get-users.gql';

/**
 * @returns {Promise}
 */
export const getUsers = () => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: getUsersQuery,
    },
  });
};

export const dt = {};
