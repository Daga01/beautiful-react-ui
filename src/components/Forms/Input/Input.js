import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import HelpText from '../_HelpText';
import { Color, IconProp, Size, makeIconFromProp, makeCallback } from '../../../shared';

import './input.scss';

/**
 * Input component
 */
const Input = (props) => {
  const {
    value, onChange, color, placeholder, disabled, size, helpText, icon, iconPosition, className, ...rest
  } = props;

  const classList = classNames('bi bi-input', `input-${color}`, {
    disabled,
    'has-icon': !!icon,
    'icon-left': iconPosition === 'left',
    'input-sm': size === 'small',
    'input-lg': size === 'large',
  }, className);

  return (
    <div className={classList}>
      <input
        value={value}
        onChange={makeCallback(onChange)}
        placeholder={placeholder}
        disabled={disabled}
        className={classList}
        {...rest}
      />
      {icon && makeIconFromProp(icon, { size })}
      {helpText && <HelpText text={helpText} color={color} />}
    </div>
  );
};

Input.propTypes = {
  /**
   * The input value
   */
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  /**
   * The on change handler
   */
  onChange: PropTypes.func.isRequired,
  /**
   * Defines the input placeholder
   */
  placeholder: PropTypes.string,
  /**
   * Defines input type
   */
  disabled: PropTypes.bool,
  /**
   * Displays a help text right under the component
   */
  helpText: PropTypes.string,
  /**
   * Defines the input color
   */
  color: Color,
  /**
   * Defines the input size,
   */
  size: Size,
  /**
   * Shows the possible icon
   */
  icon: IconProp,
  /**
   * Defines the icon position
   */
  iconPosition: PropTypes.oneOf(['right', 'left']),
};

Input.defaultProps = {
  placeholder: 'Input',
  disabled: false,
  helpText: undefined,
  color: 'default',
  size: 'default',
  icon: undefined,
  iconPosition: 'right',
};

export default Input;
