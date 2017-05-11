import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import routes from '../constants/routes/routes';
import { USER_PERMISSION } from '../constants/user';

import { setAccountPermission } from '../action-types/users';

import Token from '../utils/token';

import rootClassNames from '../assets/css/containers/root/root.css';

import Home from '../containers/home';
import Conversation from '../containers/conversation';
import Call from '../containers/call';
import UserVerification from '../containers/user-verification';
import NotFound from '../containers/not-found';

/**
 * @param {Object} Users
 * @returns {Object}
 */
const mapStateToProps = ({ Users }) => ({
  accountPermission: Users.getAccount().getPermission(),
});

/**
 * @param {Function} dispatch
 * @returns {Object}
 */
const mapDispatchToProps = dispatch => (
  bindActionCreators({
    setAccountPermissionAction: setAccountPermission,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class Root extends React.Component {

  static propTypes = {
    accountPermission: React.PropTypes.string,
    setAccountPermissionAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    accountPermission: '',
  };

  componentWillMount() {
    const { accountPermission, setAccountPermissionAction } = this.props;
    if (accountPermission === USER_PERMISSION.VIEW_ONLY && Token.getToken()) {
      setAccountPermissionAction(USER_PERMISSION.BASIC);
    }
  }

  render() {
    return (
      <div className={rootClassNames.root}>
        <BrowserRouter>
          <Switch>
            <Route exact path={routes.home.url} component={Home} />
            <Route path={routes.conversation.url} component={Conversation} />
            <Route path={routes.call.url} component={Call} />
            <Route path={routes.userVerification.url.base} component={UserVerification} />
            <Route component={NotFound} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
