import React from 'react';
import autobind from 'autobind-decorator';

import { uniqueId } from 'lodash';
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
   * @param {Object} errorMessages
   * @return {Object|Null}
   */
  static renderErrorMessages(errorMessages) {
    return (errorMessages)
      ? Object.keys(errorMessages).map((errorMessageKey) => {
        const errorMessage = errorMessages[errorMessageKey];
        const message = errorMessage.message;
        const key = uniqueId('message_');

        return (
          <span className={formClassNames['form__error-message']} key={key}>
            {message}
          </span>
        );
      })
      : null;
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
   * @param {Array} children
   */
  static resetChildren(children) {
    children.forEach((child) => {
      if (child && child.reset) {
        child.reset();
      }
    });
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

  @autobind
  reset() {
    if (this.form) {
      const form = this.form;
      const children = this.children;
      if (form && children.length > 0) {
        form.reset();
        Form.resetChildren(children);
      }
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
