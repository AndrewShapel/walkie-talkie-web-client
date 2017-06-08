import http from '../../http/http';

import api from '../../constants/api/api';

import { getMeQuery, getUsersQuery } from './queries';

/**
 * @returns {Promise}
 */
export const getAccount = () => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: getMeQuery,
    },
  });
};

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
