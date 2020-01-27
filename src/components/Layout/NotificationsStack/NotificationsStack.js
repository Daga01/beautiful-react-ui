import React from 'react';
import Portal from '../../Elements/_Portal';
import Notification from './Notification';

/**
 * The NotificationsStack component shows its children contents positioned over everything else in the document.
 * It wraps all notificatons shown in a document.
 */
const NotificationsStack = (props) => {
  const { notifications, ...rest } = props;

console.log(notifications)
  return (
    <Portal id="bi-notification">
{      <div className="notifications-wrapper">
        {notifications && notifications.map((notification, index) => {
          return (
            <Notification id={index} details={notification} {...rest} />
          );
        })}
      </div>}
    </Portal>
  );
};

export default React.memo(NotificationsStack);
