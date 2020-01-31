import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../../Elements/Button/Button';
import CloseIcon from '../../Elements/_CloseIcon/CloseIcon';


import './notifications.scss';
import Grid from '../Grid';
import GridColumn from '../Grid/GridColumn';
import NotificationLeftSide from './NotificationLeftSide';
import NotificationContent from './NotificationContent';
import {  useTimeout } from 'beautiful-react-hooks';

/**
 * * A NotificationsStack component shows an alert message positioned over everything else in the document.
 */
const Notification = (props) => {
  const { onToggle, position, closable, icon, avatar, title, message, animation, timeout, type, className } = props;

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

  useTimeout(onToggle,timeout)

  return (
    <div className={classList}>
      <Grid itemsAlign="center">
        <GridColumn size="2" selfAlign="stretch"><NotificationLeftSide icon={icon} avatar={avatar} /></GridColumn>
        <GridColumn className="notification-content" selfAlign="stretch">
          <NotificationContent title={title} message={message} />
        </GridColumn>
        {closable && (
          <GridColumn size="2" selfAlign="stretch">
            <Button color="transparent" onClick={onToggle} size="small">
              <CloseIcon />
            </Button>
          </GridColumn>)
        }
      </Grid>
    </div>
  );
};

Notification.propTypes = {
  /**
   * @ignore
   */
  children: PropTypes.node,
  /**
   * This prop will close the notification after certain time, if timeout is defined, or on button click.
   */
  onToggle: PropTypes.func.isRequired,
  /**
   * This prop defines where the notification will be shonw into the page.
   */
  position: PropTypes.oneOf(['top', 'bottom', 'top-right', 'top-left', 'bottom-right', 'bottom-left']),
  /**
   * If defined, this prop will show a closable button to close the notification.
   */
  closable: PropTypes.bool,
  /**
   * This prop defines after how many second the notification will disappear.
   */
  timeout: PropTypes.number,
  /**
   * This prop defines what kind of animation should be performed
   */
  animation: PropTypes.oneOf(['none', 'fade', 'zoom', 'slideRight', 'slideLeft', 'slideBottom', 'slideTop']),
  /**
   * This prop defines the notification type
   */
  type: PropTypes.oneOf(['info', 'success', 'warning', 'danger', 'default']),
};

Notification.defaultProps = {
  children: undefined,
  position: 'top-right',
  closable: false,
  timeout: 2000,
  animation: 'slideRight',
  type: 'default',
};

export default Notification;
