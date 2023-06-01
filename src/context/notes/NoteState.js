import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      _id: "645a8d5671e44903f684750d",
      user: "6457e0375683d8aaff75a09c",
      title: "My Da Roubnewnwctine",
      description: "Wake up early and go for a new run",
      tag: "Personal",
      date: "2023-05-09T18:13:42.814Z",
      __v: 0,
    },
    // Add more initial notes here if needed
  ];

  const [notes, setNotes] = useState(notesInitial);

  // Function to add a new note
  const addNote = (title, description, tag) => {
    const newNote = {
      _id: "645a8d5671e44903f684750d", // Generate a unique ID for the new note
      user: "6457e0375683d8aaff75a09c",
      title,
      description,
      tag,
      date: new Date().toISOString(), // Use the current date and time
      __v: 0,
    };

    setNotes([...notes, newNote]); // Add the new note to the existing notes array
  };

  // Function to delete a note
  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note._id !== noteId);
    setNotes(updatedNotes);
  };

  // Function to edit a note
  const editNote = (noteId, updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note._id === noteId ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
