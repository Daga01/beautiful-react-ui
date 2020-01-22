import React from 'react';

const NotificationBody = ({ children }) => (<div className="notification-body">{children}</div>);

export default React.memo(NotificationBody);