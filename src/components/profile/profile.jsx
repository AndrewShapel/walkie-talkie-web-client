import React from 'react';
import classnames from 'classnames';

import { INPUT_TYPES, BUTTON_TYPES, VALIDATIONS } from '../../constants/form';

import Avatar from '../user/user-avatar/user-avatar';
import Form from '../form/form';
import FormInput from '../form/form-input/form-input';
import Button from '../button/button';

import profileClassNames from './profile.css';

export default class Profile extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

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
    const { className } = this.props;

    const profileClassName = classnames(profileClassNames.profile, className);

    return (
      <div className={profileClassName}>
        <Avatar className={profileClassNames.profile__avatar} />
        <Form className={profileClassNames.profile__form} mapping={this.formModel} onValidSubmit={Profile.onValidSubmit}>
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
