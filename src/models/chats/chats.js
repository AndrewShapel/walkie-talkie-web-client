import { Record, List } from 'immutable';

const Structure = Record({

  /**
   * @type {Object}
   */
  chats: List(),
});

export default class Chats extends Structure {

  /**
   * @returns {Object}
   */
  getChats() {
    return this.get('chats');
  }

  /**
   * @param {Object} chats
   * @returns {Object}
   */
  setChats(chats) {
    return this.set('chats', chats);
  }

  /**
   * @param {String} email
   * @returns {Object}
   */
  getChatsByMemberEmail(email) {
    return this.getChats().filter(chat => chat.getMembers().find(member => member.getEmail() === email));
  }
}
