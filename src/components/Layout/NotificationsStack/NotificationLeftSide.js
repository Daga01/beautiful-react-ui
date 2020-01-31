import React from 'react';
import Icon from '../../Elements/Icon';
import Avatar from '../../Elements/Avatar';

const NotificationLeftSide = ({ icon, avatar }) => {
  return (
    <div>
      {icon && <Icon name={icon} size="large" />}
      {avatar && <Avatar src={avatar} />}
    </div>
  )
};

export default NotificationLeftSide;
