### Basic Usage
A `Notification` component can be used to warn the users about something.

```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show notification</Button>
      <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)}> Notification </Notification>
    </>
  );
};

<UncontrolledNotification />

``` 


### Position

```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>{props.position}</Button>
      <Notification isOpen={isOpen} {...props}> Notification </Notification>
    </>
  );
};
``` 
