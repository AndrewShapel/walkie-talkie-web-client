import React from 'react';

export default class Svg extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    icon: React.PropTypes.string,
  };

  static defaultProps = {
    className: '',
    icon: '',
  };

  componentDidMount() {
    const { icon } = this.props;

    const svg = this.svg;
    if (svg && icon) {
      svg.innerHTML = icon;

      this.forceUpdate();
    }
  }

  render() {
    const { className } = this.props;

    return (
      <div className={className} ref={(node) => { this.svg = node; }} />
    );
  }
}
