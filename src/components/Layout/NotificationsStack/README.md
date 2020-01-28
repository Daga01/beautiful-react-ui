### Basic Usage
A `Notification` component can be used to warn the users about something.

```jsx 
import { Button, NotificationsStack, useNotifications } from 'beautiful-react-ui';

const messages = [{closable:true,position:'top-right'},{closable:true,position:'top-right'}];

const UncontrolledNotificationsStack = (props) => {
  const [notifications, setNotifications] = React.useState();  

  return(
    <>
      <Button color="primary" onClick={()=>setNotifications(messages)}>Show notification</Button>
      <NotificationsStack {...props}  notifications={notifications} onChange={setNotifications}/>
    </>
  );
};

<UncontrolledNotificationsStack notifications={messages}/>
``` 