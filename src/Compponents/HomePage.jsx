import React, { useContext, useState } from 'react';
import {  Modal, Form, Row, Col } from 'react-bootstrap';
import { NoteContext } from '../NoteContext';
import './HomePage.css';
import Button from 'react-bootstrap/Button';


const HomePage = () => {
  const { notes, addNote, deleteNote, editNote } = useContext(NoteContext);
  const [showModal, setShowModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddNote = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    const trimmedTitle = title.trim();
    const trimmedDescription = description.trim();
    if (!trimmedTitle && !trimmedDescription) {
      return;
    }
    addNote(trimmedTitle, trimmedDescription);
    setTitle('');
    setDescription('');
    setShowModal(false);
  };

  const handleEditNote = () => {
    editNote(editIndex, title, description);
    setTitle('');
    setDescription('');
    setEditIndex(null);
    setShowModal(false);
  };

  const handleDeleteNote = (index) => {
    deleteNote(index);
  };

  const handleEditClick = (index) => {
    const note = notes[index];
    setTitle(note.title);
    setDescription(note.description);
    setEditIndex(index);
    setShowModal(true);
  };

  return (
    <div>
     
    <Row>
      <Col xs={{ span: 12, order: 2 }} md={{ span: 4, order: 1 }}>
        <div className="Container">
          <div className="form-container">
          <h3> Note</h3>
  <Form onSubmit={handleAddNote}>
    <Form.Group  controlId="title">
      <Form.Label>Title</Form.Label>
      <Form.Control
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        maxLength={120}
      />
    </Form.Group>
    <Form.Group controlId="description">
      <Form.Label>Description</Form.Label>
      <Form.Control
        as="textarea"
        rows={3}
        placeholder="Write your note..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        maxLength={2000}
      />
    </Form.Group>
    <Button style={{color:'black'}} variant="primary" type="submit" disabled={!title.trim() && !description.trim()}>
      Add Note
    </Button>
  </Form>
</div>
        </div>
      </Col>
      <Col xs={{ span: 12, order: 1 }} md={{ span: 8, order: 2 }}>
  <div className="notes">
    
    <div className="row">
      {notes.map((note, index) => (
        <div key={index} className="col-md-4">
          <div className="custom-card">
            <div className="custom-card-body">
              <h1 className="custom-card-title">{note.title}</h1>
              <p className="custom-card-text">{note.description}</p>
              <Button className="custom-button edit-button"  variant="outline-light" onClick={() => handleEditClick(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="black" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
</svg>
              </Button>
              <Button  className="custom-button delete-button"  variant="outline-light" onClick={() => handleDeleteNote(index)}>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" class="bi bi-trash3-fill" viewBox="0 0 16 16">
  <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
</svg>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</Col>


      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex !== null ? 'Edit Note' : 'Add Note'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={editIndex !== null ? handleEditNote : handleAddNote}>
            {editIndex !== null ? 'Save Changes' : 'Add'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
    
    </div>
  );
};

export default HomePage;
