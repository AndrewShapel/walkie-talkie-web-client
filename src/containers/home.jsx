import React from 'react';

import routes from '../constants/routes/routes';

import Route from '../utils/route';

export default class Home extends React.Component {

  static propTypes = {
    match: React.PropTypes.object,
    history: React.PropTypes.object,
  };

  static defaultProps = {
    match: {},
    history: {},
  };

  componentWillMount() {
    const { match, history } = this.props;

    const redirectToPathName = routes.conversation.url.base;
    Route.redirectIfExactRoute(match.isExact, '', redirectToPathName, history.replace);
  }

  render() {
    return null;
  }
}
