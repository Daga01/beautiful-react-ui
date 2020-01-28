import React, { Children, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useConditionalTimeout, useTimeout } from 'beautiful-react-hooks';
import classNames from 'classnames';
import Portal from '../../Elements/_Portal';
import Button from '../../Elements/Button/Button';
import CloseIcon from '../../Elements/_CloseIcon/CloseIcon';
import NotificationTitle from './NotificationTitle';
import NotificationBody from './NotificationBody';
import { warn } from '../../../shared';

import './notifications.scss';

/**
 * * A NotificationsStack component shows an alert message positioned over everything else in the document.
 */
const Notification = (props) => {
  const { id, onToggle, position, closable, title, message, animation, timeout, type, className } = props;

  const classList = classNames('bi bi-notification', {
    [`bi-notif-${position}`]: !!position,
    'bi-anim-fade-in': animation === 'fade',
    'bi-anim-zoom-in': animation === 'zoom',
    'bi-anim-slide-right': animation === 'slideRight',
    'bi-anim-slide-left': animation === 'slideLeft',
    'bi-anim-slide-bottom': animation === 'slideBottom',
    'bi-anim-slide-top': animation === 'slideTop',
    'default-notification-type': type === 'default',
    'info-notification-type': type === 'info',
    'success-notification-type': type === 'success',
    'warning-notification-type': type === 'warning',
    'danger-notification-type': type === 'danger',
  }, className);

  useTimeout(onToggle, timeout)

  return (
    <div id={id} className={classList}>
      {closable && (
        <Button color="transparent" onClick={onToggle} size="small">
          <CloseIcon />
        </Button>
      )}
      {title && (
        <NotificationTitle>{title}</NotificationTitle>
      )}
      {message && (
        <NotificationBody>{message}</NotificationBody>
      )}
    </div>
  );
};


/*


/!**
 * A NotificationsStack component shows an alert message positioned over everything else in the document.
 *!/
const NotificationsStack = React.memo((props) => {
  const { isOpen, onToggle, position, closable, timeout, animation, type, children, className } = props;

  const classList = classNames('bi bi-notification-wrapper', {
    top: position === 'top',
    bottom: position === 'bottom',
    'top-right': position === 'top-right',
    'top-left': position === 'top-left',
    'bottom-left': position === 'bottom-left',
    'bottom-right': position === 'bottom-right',
    'bi-anim-fade-in': animation === 'fade',
    'bi-anim-zoom-in': animation === 'zoom',
    'bi-anim-slide-right': animation === 'slideRight',
    'bi-anim-slide-left': animation === 'slideLeft',
    'bi-anim-slide-bottom': animation === 'slideBottom',
    'bi-anim-slide-top': animation === 'slideTop',
    'default-notification-type': type === 'default',
    'info-notification-type': type === 'info',
    'success-notification-type': type === 'success',
    'warning-notification-type': type === 'warning',
    'danger-notification-type': type === 'danger',
  }, className);


  useConditionalTimeout(onToggle, timeout, isOpen);

  return (
    <Portal id="bi-notification">
      <div className="notifications-wrapper">
        {isOpen && (
          <div className={classList}>
            {closable && (
              <Button color="transparent" onClick={onToggle} size="small">
                <CloseIcon />
              </Button>
            )}
            {Children.map(children, wipeOutIncorrectChildren)}
          </div>
        )}
      </div>
    </Portal>
  );
});

NotificationsStack.propTypes = {
  /!**
   * @ignore
   *!/
  children: PropTypes.node,
  /!**
   * This prop defines whether the notification is shown or not.
   *!/
  isOpen: PropTypes.bool.isRequired,
  /!**
   * This prop will close the notification after certain time, if timeout is defined, or on button click.
   *!/
  onToggle: PropTypes.func.isRequired,
  /!**
   * This prop defines where the notification will be shonw into the page.
   *!/
  position: PropTypes.oneOf(['top', 'bottom', 'top-right', 'top-left', 'bottom-right', 'bottom-left']),
  /!**
   * If defined, this prop will show a closable button to close the notification.
   *!/
  closable: PropTypes.bool,
  /!**
   * This prop defines after how many second the notification will disappear.
   *!/
  timeout: PropTypes.number,
  /!**
   * This prop defines what kind of animation should be performed
   *!/
  animation: PropTypes.oneOf(['none', 'fade', 'zoom', 'slideRight', 'slideLeft', 'slideBottom', 'slideTop']),
  /!**
   * This prop defines the notification type
   *!/
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'default']),
};

NotificationsStack.defaultProps = {
  children: undefined,
  position: 'top-right',
  closable: false,
  timeout: 2000,
  animation: 'slideRight',
  type: 'default',
};
*/

Notification.Title = NotificationTitle;
Notification.Body = NotificationBody;

export default Notification;
