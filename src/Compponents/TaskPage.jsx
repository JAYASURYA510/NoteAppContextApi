import React from 'react';
import Card from 'react-bootstrap/Card';
import './HomePage.css';
const Task = () => {
    return (
        <div c>
           <h1 className='Th1'>Task Page</h1> 
           
           <Card className='task-card'  style={{ width: '18rem'}}>
      <Card.Body>
        <Card.Title>Create React vite app</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">explore basics of react app</Card.Subtitle>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
};

export default Task;