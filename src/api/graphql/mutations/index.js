import userFieldsFragment from '../fragments/user-fields.gql';
import chatFieldsFragment from '../fragments/chat-fields.gql';

import createChat from './create-chat.gql';

export { default as acceptFriendRequestMutation } from './accept-friend-request.gql';
export { default as declineFriendRequestMutation } from './decline-friend-request.gql';
export { default as makeFriendRequestMutation } from './make-friend-request.gql';

export const createChatMutation = `${chatFieldsFragment}${userFieldsFragment}${createChat}`;
