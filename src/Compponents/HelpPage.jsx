import React from 'react';
import './HomePage.css';
import ListGroup from 'react-bootstrap/ListGroup';
const HelpPage = () => {
    return (
        <div className="group">
            <h1 className='Th1'>help Page</h1>
            <ListGroup variant="flush">
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
    </ListGroup>
        </div>
    );
};

export default HelpPage;