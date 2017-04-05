import React from 'react';

import Avatar from '../user/user-avatar/user-avatar';
import Button from '../button/button';

import avatarUploadClassNames from './avatar-upload.css';

export default () => (
  <div className={avatarUploadClassNames['avatar-upload']}>
    <Avatar className={avatarUploadClassNames['avatar-upload__avatar']} />
    <Button className={avatarUploadClassNames['avatar-upload__button']} title="Upload" />
  </div>
);
