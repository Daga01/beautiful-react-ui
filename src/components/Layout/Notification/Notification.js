import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useTimeout } from 'beautiful-react-hooks';
import classNames from 'classnames';
import Portal from '../../Elements/_Portal';
import { warn } from '../../../shared';
import Button from '../../Elements/Button/Button';
import CloseIcon from '../../Elements/_CloseIcon/CloseIcon';

import './notifications.scss';


/**
 * A Notification component shows an alert message positioned over everything else in the document.
 */
const Notification = (props) => {
  const { isOpen, onToggle, position, closable, timeout, children, className } = props;

  const classList = classNames('bi-notification-wrapper', {
    'top-right': position === 'top-right',
    'top-left': position === 'top-left',
    'bottom-left': position === 'bottom-left',
    'bottom-right': position === 'bottom-right',
  }, className);

  const timeoutRef = useRef();
  // this effect is used to start the timeout only when notification is already open
  useEffect(() => {
    if (isOpen && typeof (timeout) === 'number') {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = setTimeout(onToggle, timeout);
    }
    return () => clearTimeout(timeoutRef.current);
  }, [isOpen]);

  return (
    <Portal id="bi-notification">
      {isOpen && (
        <div className={classList}>
          <div className="notification-body">
            {closable && (
              <Button color="transparent">
                <CloseIcon />
              </Button>
            )}
            {children}
          </div>
        </div>
      )}
    </Portal>
  );
};

Notification.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * This prop defines whether the notification is shown or not.
   */
  isOpen: PropTypes.bool.isRequired,
  /**
   * If defined, this prop will close the notification after certain time.
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * This prop defines where the notification will be shonw into the page.
   */
  position: PropTypes.string,
  /**
   * If defined, this prop will show a closable button to close the notification.
   */
  closable: PropTypes.bool,
  /**
   * This prop defines after how many second the notification will disappear
   */
  timeout: PropTypes.number,
};

Notification.defaultProps = {
  children: undefined,
  position: 'top-right',
  closable: false,
  timeout: 2000,
};


export default Notification;
