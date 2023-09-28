import React from 'react';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">By Surya N</Popover.Header>
      <Popover.Body>
        And here's some <strong>amazing</strong> content. It's very engaging.
        right?
      </Popover.Body>
    </Popover>
  );
  
  const User = () => {
    return (<>
        <h1 className="Th1">user page</h1>
      <div className='butn'>
       
        <OverlayTrigger trigger="click" placement="right" overlay={popover}>
          <Button  variant="success">Click me to see</Button>
        </OverlayTrigger>
      </div></>
    );
  };
  
  export default User;
  