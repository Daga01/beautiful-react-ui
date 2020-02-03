import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Notification from './Notification';
import removeByIndex from './utils/removeById';
import getNotificationsByPosition from './utils/getNotificationsByPosition';

//styles
import './notificationsWrapper.scss';

const NotificationsWrapper = (props) => {
  const { children, NotificationRender, onChange } = props;
  const { trNotifications, brNotifications, topNotifications, bottomNotifications, tlNotifications, blNotifications } = children && getNotificationsByPosition(children);

  // onClose function will be run on timeout or when closing the notification
  const onClose = (id, notificationsArray) => {
    const newNotificationsArray = removeByIndex(id, notificationsArray);

    onChange(newNotificationsArray);
  };

  return (
    <>
      {trNotifications && (
        <div className={classNames('notifications-wrapper', 'wrapper-tr')}>
          {trNotifications.map((item, index) => (
            <NotificationRender {...item} onToggle={() => onClose(index, trNotifications)} />
          ))}
        </div>
      )}
      {brNotifications && (
        <div className={classNames('notifications-wrapper', 'wrapper-br')}>
          {brNotifications.map((item, index) => (
            <NotificationRender {...item} onToggle={() => onClose(index, brNotifications)} />
          ))}
        </div>
      )}
      {topNotifications && (
        <div className={classNames('notifications-wrapper', 'wrapper-top')}>
          {topNotifications.map((item, index) => (
            <NotificationRender {...item} onToggle={() => onClose(index, topNotifications)} />
          ))}
        </div>
      )}
      {bottomNotifications && (
        <div className={classNames('notifications-wrapper', 'wrapper-bottom')}>
          {bottomNotifications.map((item, index) => (
            <NotificationRender {...item} onToggle={() => onClose(index, bottomNotifications)} />
          ))}
        </div>
      )}
      {tlNotifications && (
        <div className={classNames('notifications-wrapper', 'wrapper-tl')}>
          {tlNotifications.map((item, index) => (
            <NotificationRender {...item} onToggle={() => onClose(index, tlNotifications)} />
          ))}
        </div>
      )}
      {blNotifications && (
        <div className={classNames('notifications-wrapper', 'wrapper-bl')}>
          {blNotifications.map((item, index) => (
            <NotificationRender {...item} onToggle={() => onClose(index, blNotifications)} />
          ))}
        </div>
      )}
    </>
  )
};


NotificationsWrapper.propTypes = {

  /**
   * This prop could be use to render a different notification from the default one.
   */
  NotificationRender: PropTypes.elementType,
};

NotificationsWrapper.defaultProps = {
  NotificationRender: Notification,
};


export default NotificationsWrapper;