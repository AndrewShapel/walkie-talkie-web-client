import http from '../../http/http';

import api from '../../constants/api/api';

import { createChatMutation } from './mutations';

/**
 * @param {String} title
 * @param {String} type
 * @param {Array} members
 * @returns {Promise}
 */
export const createChat = (title, type, members) => {
  const graphql = api.graphql;

  return http({
    method: graphql.method,
    url: graphql.url,
    data: {
      query: createChatMutation,
      variables: {
        title,
        type,
        members,
      },
    },
  });
};
