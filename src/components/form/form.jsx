import React from 'react';
import autobind from 'autobind-decorator';
import { Form as FormsyForm } from 'formsy-react';

import formClassNames from './form.css';

export default class Form extends React.PureComponent {

  static propTypes = {
    className: React.PropTypes.string,
    children: React.PropTypes.oneOfType([
      React.PropTypes.element,
      React.PropTypes.array,
    ]),
    mapping: React.PropTypes.func,
    errorMessages: React.PropTypes.array,
    onSubmit: React.PropTypes.func,
    onValidSubmit: React.PropTypes.func,
  };

  static defaultProps = {
    className: '',
    children: null,
    mapping: null,
    errorMessages: [],
    onSubmit: null,
    onValidSubmit: null,
  };

  /**
   * @param {Array} errorMessages
   */
  static renderErrorMessages(errorMessages) {
    return errorMessages.map(errorMessage => (
      <span className={formClassNames['form__error-message']} key={errorMessage}>
        {errorMessage}
      </span>
    ));
  }

  /**
   * @param {Array} children
   */
  static validateChildren(children) {
    children.forEach((child) => {
      if (child && child.validate) {
        child.validate();
      }
    });
  }

  /**
   * @return {Element}
   */
  static getRef() {
    return this.form;
  }

  /**
   * @param {Object} child
   */
  @autobind
  onMount(child) {
    if (child) {
      this.children.push(child);
    }
  }

  /**
   * @param {Object} model
   */
  @autobind
  onSubmit(model) {
    const { onSubmit } = this.props;

    if (onSubmit) {
      onSubmit(model);
    }
  }

  /**
   * @param {Object} model
   */
  @autobind
  onValidSubmit(model) {
    const { onValidSubmit } = this.props;

    const children = this.children;
    if (children && children.length > 0) {
      Form.validateChildren(this.children);
    }

    if (onValidSubmit) {
      onValidSubmit(model);
    }
  }

  @autobind
  onInvalidSubmit() {
    const children = this.children;
    if (children && children.length > 0) {
      Form.validateChildren(children);
    }
  }

  /**
   * @type {Array}
   */
  children = [];

  /**
   * @param {Object} children
   * @param {Object} index
   * @return {Object|Null}
   */
  @autobind
  renderChildren(children, index) {
    if (children) {
      return React.cloneElement(children, {
        onMount: this.onMount,
        key: index,
      });
    }

    return null;
  }

  render() {
    const { className, children, mapping, errorMessages } = this.props;

    return (
      <FormsyForm
        className={className}
        mapping={mapping}
        onSubmit={this.onSubmit}
        onValidSubmit={this.onValidSubmit}
        onInvalidSubmit={this.onInvalidSubmit}
        ref={(node) => { this.form = node; }}
      >
        {Form.renderErrorMessages(errorMessages)}
        {React.Children.map(children, this.renderChildren)}
      </FormsyForm>
    );
  }
}
