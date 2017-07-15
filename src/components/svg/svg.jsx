import React from 'react';
import autobind from 'autobind-decorator';

export default class Svg extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    icon: '',
    onClick: null,
  };

  componentDidMount() {
    const { icon } = this.props;

    const svg = this.svg;
    if (svg && icon) {
      svg.innerHTML = icon;

      this.forceUpdate();
    }
  }

  @autobind
  onClick() {
    const { onClick } = this.props;

    if (onClick) {
      onClick();
    }
  }

  render() {
    const { className } = this.props;

    return (
      <div
        className={className}
        onClick={this.onClick}
        ref={(node) => { this.svg = node; }}
      />
    );
  }
}
