import React from 'react';
import Title from '../../Typography/Title';

const NotificationTitle = ({ children }) => (<Title className="notification-title" size="base">{children}</Title>);

export default React.memo(NotificationTitle);
