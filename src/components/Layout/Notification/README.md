### Basic Usage
A `Notification` component can be used to warn the users about something.

```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show notification</Button>
      <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)} {...props}> 
        <Notification.Body> Notification</Notification.Body>
       </Notification>
    </>
  );
};

<UncontrolledNotification />

``` 

### Title
By using the `Notification.Title` components it's possible to define the notification's title.

```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>Show notification</Button>
      <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)} {...props}> 
        <Notification.Title>Messages</Notification.Title>
        <Notification.Body>You got 3 new message</Notification.Body>
       </Notification>
    </>
  );
};

<UncontrolledNotification />

``` 

### Position
The `position` prop defines where the notification should appear on screen.
Could be `top`, `top-left`, `top-right`, `bottom`, `bottom-left`, `bottom-right`.

```jsx 
import { Button, Notification } from 'beautiful-react-ui';
  
const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

    return(
      <>
        <Button color="primary" onClick={() => setIsOpen(true)}>{props.position}</Button>
        <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)} {...props}>
          <Notification.Body> Notification</Notification.Body>
        </Notification>
      </>
    );  
};

<> 
  <UncontrolledNotification position='top'/>
  <UncontrolledNotification position='top-right'/>
  <UncontrolledNotification position='top-left'/>
  <UncontrolledNotification position='bottom'/>
  <UncontrolledNotification position='bottom-right'/>
  <UncontrolledNotification position='bottom-left'/>
</>
``` 

### Timeout
The `timeout` prop defines after how many millisecond the notification will disappear.
To turn off the `timeout` it is required to set it to `false`.

```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonLabel = typeof(props.timeout) === 'number'? 'with Timeout' : 'without Timeout';   

  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>{buttonLabel}</Button>
      <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)} {...props}>
        <Notification.Body> Notification</Notification.Body>
      </Notification>
    </>
  );
};

<> 
  <UncontrolledNotification timeout={3000}/>
  <UncontrolledNotification timeout={false}/>
</>
```

### Closable
The `closable` prop defines if the notification should be closable by clickin on button.
The Notification component could be closable both if there's `timeout` set or not.


```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const buttonLabel = typeof(props.timeout) === 'number'? 'with Timeout' : 'without Timeout';   

  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>{buttonLabel}</Button>
      <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)} {...props}>
        <Notification.Body> Notification</Notification.Body>
      </Notification>
    </>
  );
};

<> 
  <UncontrolledNotification closable timeout={3000}/>
  <UncontrolledNotification closable timeout={false}/>
</>
``` 

### Animation
By default, the notification pop-in performing a `slideRight` animation, it's possible to change 
this behaviour by changing the value of the `animation` prop.


```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>{props.animation}</Button>
      <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)} {...props}>
        <Notification.Body> Notification</Notification.Body>
      </Notification>
    </>
  );
};

<> 
  <UncontrolledNotification animation='none' />
  <UncontrolledNotification animation='fade' />
  <UncontrolledNotification animation='zoom' />
  <UncontrolledNotification animation='slideTop' />
  <UncontrolledNotification animation='slideBottom' />
  <UncontrolledNotification animation='slideRight' />
  <UncontrolledNotification animation='slideLeft' />

</>
``` 


### Type
The `type` prop is useful to let the user understand quickly what kind of notification is showing.

```jsx 
import { Button, Notification } from 'beautiful-react-ui';

const UncontrolledNotification = (props) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return(
    <>
      <Button color="primary" onClick={() => setIsOpen(true)}>{props.type}</Button>
      <Notification isOpen={isOpen} onToggle={()=>setIsOpen(!isOpen)} {...props}>
        <Notification.Title>Messages</Notification.Title>
        <Notification.Body> Notification</Notification.Body>
       </Notification>
    </>
  );
};

<> 
  <UncontrolledNotification type='default' />
  <UncontrolledNotification type='info' />
  <UncontrolledNotification type='success' />
  <UncontrolledNotification type='warning' />
  <UncontrolledNotification type='danger' />
</>
``` 