// NoteContext.js
import React, { createContext, useState } from 'react';

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  const addNote = (title, description) => {
    setNotes([...notes, { title, description }]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const editNote = (index, newTitle, newDescription) => {
    const updatedNotes = [...notes];
    updatedNotes[index] = { title: newTitle, description: newDescription };
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {children}
    </NoteContext.Provider>
  );
};

