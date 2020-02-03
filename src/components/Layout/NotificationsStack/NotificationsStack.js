import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../../Elements/_Portal';
import Notification from './Notification';
import NotificationsWrapper from './NotificationsWrapper';


/**
 * The NotificationsStack component shows its children contents positioned over everything else in the document.
 * It wraps all notificatons shown in a document.
 */
const NotificationsStack = (props) => {
  const { notifications, onChange, NotificationRender } = props;

  return (
    <Portal id="bi-notification">
      {notifications && (
        <NotificationsWrapper NotificationRender={NotificationRender} onChange={onChange}>
          {notifications}
        </NotificationsWrapper>
      )}
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
