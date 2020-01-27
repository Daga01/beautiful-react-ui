### Basic Usage
A `Notification` component can be used to warn the users about something.

```jsx 
import { Button, NotificationsStack } from 'beautiful-react-ui';

const messages = [{closable:true,position:'top-right'},{closable:true,position:'top-right'}];

const UncontrolledNotificationsStack = (props) => {
  const [notifications, sendNotification] = React.useState();  
console.log(notifications);
  return(
    <>
      <Button color="primary" onClick={()=>sendNotification(messages)}>Show notification</Button>
      <NotificationsStack {...props}  notifications={notifications} onToggle={()=>setIsOpen(false)} />
    </>
  );
};

<UncontrolledNotificationsStack notifications={messages}/>
``` 