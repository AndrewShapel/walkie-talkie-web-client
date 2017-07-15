import { uniqueId } from 'lodash';

import Message from './message';

export default class MessagesFactory {

  /**
   * @param {String} target
   * @param {String} text
   * @param {String} type
   * @return {Object}
   */
  static createMessage = (target, text, type) => (
    new Message({
      id: uniqueId('message_'),
      target,
      type,
      text,
    })
  );
}
