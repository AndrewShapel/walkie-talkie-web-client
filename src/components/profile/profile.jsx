import React from 'react';

import { INPUT_TYPES, BUTTON_TYPES, VALIDATIONS } from '../../constants/form';

import Avatar from '../user/user-avatar/user-avatar';
import Form from '../form/form';
import FormInput from '../form/form-input/form-input';
import Button from '../button/button';

import profileClassNames from './profile.css';

export default class Profile extends React.PureComponent {

  static onValidSubmit() {
    // Submit
  }

  /**
   * @param {Object} model
   */
  formModel = model => ({
    email: model.email,
    password: model.password,
  });

  render() {
    return (
      <div className={profileClassNames.profile}>
        <Avatar className={profileClassNames.profile__avatar} />
        <Form mapping={this.formModel} onValidSubmit={Profile.onValidSubmit}>
          <FormInput
            className={profileClassNames['profile__form-input']}
            name="email"
            placeholder="EMail"
            validations={VALIDATIONS.email.types}
            validationErrors={VALIDATIONS.email.errors}
            required
          />
          <FormInput
            className={profileClassNames['profile__form-input']}
            name="password"
            placeholder="password"
            type={INPUT_TYPES.password}
            required
          />
          <Button
            className={profileClassNames.profile__button}
            title="Save"
            type={BUTTON_TYPES.submit}
          />
        </Form>
      </div>
    );
  }
}
