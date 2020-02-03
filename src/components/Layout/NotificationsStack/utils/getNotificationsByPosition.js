/**
 * getNotificationsByPosition function re-groups notifications based on their position.
 * Returns an object with arrays for each notifications position
 */

const getNotificationsByPosition = (notifications) => {
  const notificationsObject = {};
  const trNotificationsArray = [];
  const brNotificationsArray = [];
  const topNotificationsArray = [];
  const bottomNotificationsArray = [];
  const tlNotificationsArray = [];
  const blNotificationsArray = [];
  notifications.forEach((item) => {
    if (item.position === 'top-right') {
      trNotificationsArray.push(item)
      notificationsObject.trNotifications = trNotificationsArray;
    } else if (item.position === 'bottom-right') {
      brNotificationsArray.push(item)
      notificationsObject.brNotifications = brNotificationsArray;
    } else if (item.position === 'top') {
      topNotificationsArray.push(item)
      notificationsObject.topNotifications = topNotificationsArray;
    } else if (item.position === 'bottom') {
      bottomNotificationsArray.push(item)
      notificationsObject.bottomNotifications = bottomNotificationsArray;
    } else if (item.position === 'top-left') {
      tlNotificationsArray.push(item)
      notificationsObject.tlNotifications = tlNotificationsArray;
    } else if (item.position === 'bottom-left') {
      blNotificationsArray.push(item)
      notificationsObject.blNotifications = blNotificationsArray;
    }
  })
  return notificationsObject;
}
export default getNotificationsByPosition;