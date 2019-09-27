import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

/**
 * CardFooter component wraps the card's footer
 */
const CardFooter = ({ children, textAlign }) => {
  const classList = classNames('card-footer', {
    [`text-align-${textAlign}`]: !!textAlign,
  });

  return (
    <footer className={classList}>{children}</footer>
  );
};


CardFooter.propTypes = {
  /**
   * Defines how to align footer's content
   */
  textAlign: PropTypes.oneOf(['center', 'left', 'right', 'justify']),
};

CardFooter.defaultProps = {
  textAlign: undefined,
};
export default CardFooter;
