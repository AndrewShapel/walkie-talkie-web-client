import { Record } from 'immutable';

import User from '../../models/users/user';

const Structure = Record({
  from: new User(),
  status: '',
});

export default class FriendRequest extends Structure {

  /**
   * @returns {Object}
   */
  getFrom() {
    return this.get('from');
  }

  /**
   * @param {Object} from
   * @returns {Object}
   */
  setFrom(from) {
    return this.set('from', from);
  }

  /**
   * @returns {String}
   */
  getStatus() {
    return this.get('status');
  }

  /**
   * @param {String} status
   * @returns {Object}
   */
  setStatus(status) {
    return this.set('status', status);
  }
}
