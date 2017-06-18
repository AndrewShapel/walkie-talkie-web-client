export default class RTC {

  /**
   * @returns {Object}
   */
  static getRTCPeerConnection() {
    return window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
  }

  /**
   * @returns {Object}
   */
  static getICECandidate() {
    return window.mozRTCIceCandidate || window.RTCIceCandidater;
  }

  /**
   * @returns {Object}
   */
  static getSessionDescription() {
    return window.mozRTCSessionDescription || window.RTCSessionDescription;
  }

  /**
   * @returns {Object}
   */
  static setUserMedia() {
    navigator.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
  }

  /**
   * @returns {Array}
   */
  static getICEServers() {
    return [{
      url: 'stun:23.21.150.121',
    }, {
      url: 'stun:stun.l.google.com:19302',
    }, {
      url: 'turn:numb.viagenie.ca',
      credential: 'webrtcdemo',
      username: 'louis%40mozilla.com',
    }];
  }
}
