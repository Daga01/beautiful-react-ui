import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon';
import Spinner from '../Spinner';
import {
  makeIconFromProp,
  makeCallback,
  emptyChildren,
  getLastChild,
  makeSpinnerFromProp,
  BaseProps,
  Size,
  Color,
} from '../../../shared';

import './button.scss';

/**
 * Button components are used to provide a visual indication user actions.
 */
const Button = (props) => {
  const {
    children, type, block, color, rounded, outline, disabled, size, icon, hover, spinner, onClick, className, id, style,
  } = props;

  const lastChild = getLastChild(children);

  const classList = classNames('bi bi-btn', `btn-${color}`, {
    'btn-block': block,
    'btn-outline': outline,
    'btn-rounded': rounded,
    'btn-he-zoom': hover === 'zoom',
    'btn-he-float': hover === 'float' || hover === true,
    'btn-he-shrink': hover === 'shrink',
    'btn-he-refl': hover === 'reflection',
    'btn-he-rnd': hover === 'round',
    'btn-sm': size === 'small',
    'btn-lg': size === 'large',
    'btn-icon-only': emptyChildren(children),
    'btn-lci': lastChild && typeof lastChild !== 'string',
  }, className);

  return (
    /* eslint-disable-next-line react/button-has-type */
    <button id={id} disabled={disabled} type={type} onClick={makeCallback(onClick)} className={classList} style={style}>
      {/* Generate icon if exists */}
      {!!icon && makeIconFromProp(icon)}
      {/* Generate spinner if exists */}
      {!!spinner && makeSpinnerFromProp(spinner, { size })}
      {children}
    </button>
  );
};

Button.propTypes = {
  ...BaseProps,
  /**
   * Defines the button color, can be `default`, `primary`, `secondary`, `info`, `warning`, `success`, `error`
   * or `transparent`
   * @default "default"
   */
  color: Color,
  /**
   * Defines the button's size, can be `small`, `default`, `large`
   * @default "default"
   */
  size: Size,
  /**
   * Shows the outlines only
   * @default false
   */
  outline: PropTypes.bool,
  /**
   * Makes the button rounded
   * @default false
   */
  rounded: PropTypes.bool,
  /**
   * Defines the button's type
   * @default 'button'
   */
  type: PropTypes.oneOf(['submit', 'button', 'reset']),
  /**
   * Disables the button
   * @default false
   */
  disabled: PropTypes.bool,
  /**
   * Makes the button completely fluid (full width)
   * @default false
   */
  block: PropTypes.bool,
  /**
   * Defines the hover effect, can be `round`, `zoom`,  `shrink`,  `float`, `reflection`
   * @default undefined
   */
  hover: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['round', 'zoom', 'shrink', 'float', 'reflection']),
  ]),
  /**
   * Attaches a callback on the 'click' event
   * @default (event) => undefined
   */
  onClick: PropTypes.func,
  /**
   * Shows an icon, you can pass both a valid Icon component name prop or the instance of an Icon component
   * @default undefined
   */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
    PropTypes.instanceOf(Icon),
  ]),
  /**
   * Shows a spinner icon within the button. The prop value can be "true" to show a standard <Spinner />
   * or the actual instance of a <Spinner /> component.
   * If the prop value is "false" or any falsy value (undefined or null) the spinner won't show.
   * @default false
   */
  spinner: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.instanceOf(Spinner),
  ]),
  /**
   * @ignore
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  color: 'default',
  size: 'default',
  rounded: false,
  outline: false,
  block: false,
  type: 'button',
  disabled: false,
  hover: undefined,
  icon: undefined,
  spinner: false,
  onClick: null,
  children: null,
};

export default React.memo(Button);
