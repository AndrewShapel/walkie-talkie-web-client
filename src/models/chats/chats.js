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
   * @param {String} id
   * @param {Object} chat
   * @returns {Object}
   */
  updateChat(id, chat) {
    const chats = this.getChats();

    const chatKey = chats.findKey(currentChat => currentChat.getId() === id);
    if (chatKey >= 0) {
      const updatedChat = chats.set(chatKey, chat);
      return this.setChats(updatedChat);
    }

    return this;
  }

  /**
   * @param {String} id
   * @returns {Object}
   */
  getChatById(id) {
    return this.getChats().find(chat => chat.getId() === id);
  }

  /**
   * @param {String} email
   * @returns {Object}
   */
  getChatsByMemberEmail(email) {
    return this.getChats().filter(chat => chat.getMembers().find(member => member.getEmail() === email));
  }
}
