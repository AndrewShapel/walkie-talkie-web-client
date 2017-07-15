import { List } from 'immutable';

import ChatMessage from './chat-message';
import Chat from './chat';
import UsersFactory from '../users/users-factory';

export default class ChatsFactory {

  /**
   * @param {String} body
   * @param {String} timestamp
   * @param {Object} senderEmail
   * @returns {Object}
   */
  static createChatMessage(body, timestamp, senderEmail) {
    return new ChatMessage({
      body,
      timestamp,
      senderEmail,
    });
  }

  /**
   * @param {String} id
   * @param {String} type
   * @param {String} title
   * @param {Object} owner
   * @param {Object} members
   * @returns {Object}
   */
  static createChat(id, type, title, owner, members) {
    return new Chat({
      id,
      type,
      title,
      owner,
      members,
    });
  }

  /**
   * @param {Object} chats
   * @returns {Object}
   */
  static createChats(chats) {
    return List().withMutations((context) => {
      chats.forEach((chat) => {
        const { id, type, title, owner, users } = chat;

        const newOwner = UsersFactory.createUser(owner);
        const newUsers = UsersFactory.createUsers(users);
        const newChat = ChatsFactory.createChat(id, type, title, newOwner, newUsers);
        context.push(newChat);
      });
    });
  }
}
