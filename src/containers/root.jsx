import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import routes from '../constants/routes/routes';
import { USER_PERMISSION } from '../constants/user';

import { getAccount, setAccountPermission } from '../action-types/users';

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
    getAccountAction: getAccount,
    setAccountPermissionAction: setAccountPermission,
  }, dispatch)
);

@connect(mapStateToProps, mapDispatchToProps)
export default class Root extends React.Component {

  static propTypes = {
    history: React.PropTypes.object,
    accountPermission: React.PropTypes.string,
    getAccountAction: React.PropTypes.func.isRequired,
    setAccountPermissionAction: React.PropTypes.func.isRequired,
  };

  static defaultProps = {
    history: null,
    accountPermission: '',
  };

  componentWillMount() {
    const { accountPermission, getAccountAction, setAccountPermissionAction } = this.props;
    if (accountPermission === USER_PERMISSION.VIEW_ONLY && Token.getToken()) {
      setAccountPermissionAction(USER_PERMISSION.BASIC);
      getAccountAction();
    }
  }

  render() {
    const { history } = this.props;

    return (
      <div className={rootClassNames.root}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path={routes.home.url} component={Home} />
            <Route path={`${routes.conversation.url.base}${routes.conversation.url.specific}`} component={Conversation} />
            <Route path={routes.call.url} component={Call} />
            <Route path={routes.userVerification.url.base} component={UserVerification} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </div>
    );
  }
}
