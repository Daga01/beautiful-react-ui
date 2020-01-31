import Title from '../../Typography/Title/Title';
import React from 'react';

const NotificationContent = ({ title, message }) => {
  return (
    <>
      {title && <Title size="base" wordBreak="all">{title}</Title>}
      {message && <div className="notification-message">{message}</div>}
    </>
  );
};

export default NotificationContent;