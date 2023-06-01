import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';
import Noteitem from './Noteitem';

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, addNote} = context;

  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <i className="fa-regular fa-file" style={{ marginRight: '10px' }}></i>
        <h2>Your Notes</h2>
      </div>
      <div className='row my-3'>
        {notes.map((note) => {
          return <Noteitem key={note._id} note={note} />;
        })}
      </div>
    </div>
  );
};

export default Notes;
