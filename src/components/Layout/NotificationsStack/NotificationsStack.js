import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../Elements/_Portal';
import Notification from './Notification';
import removeByIndex from './utils/removeById';


/**
 * The NotificationsStack component shows its children contents positioned over everything else in the document.
 * It wraps all notificatons shown in a document.
 */
const NotificationsStack = (props) => {
  const { notifications, onChange, NotificationRender } = props;

  // onClose function will be run on timeout or when closing the notification
  const onClose = (id) => {
    const newNotificationsArray = removeByIndex(id, notifications);

    onChange(newNotificationsArray);
  };

  return (
    <Portal id="bi-notification">
      <div className="notifications-wrapper">
        {notifications && notifications.map((item, index) =>
          <NotificationRender {...item} onToggle={() => onClose(index)} />)}
      </div>
    </Portal>
  );
};

NotificationsStack.propTypes = {
  /**
   * This prop could be use to render a different notification from the default one.
   */
  NotificationRender: PropTypes.elementType,
};

NotificationsStack.defaultProps = {
  NotificationRender: Notification,
};

export default React.memo(NotificationsStack);
