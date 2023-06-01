import React from 'react';

const NoteItem = (props) => {
  const { note } = props;

  return (
    <div className="col-md-3">
      <div className="card-body my-3" style={{ border: '1px solid grey', borderRadius: '10px' }}>
        <h5 className="card-title"><i class="fa-regular fa-note-sticky mx-2"></i>{note.title}</h5>
        <p className="card-text">-  {note.description}</p>
        <i class="fa-solid fa-trash-can mx-2"></i>
        <i class="fa-regular fa-pen-to-square mx-2"></i>
        
      </div>
    </div>
  );
};

export default NoteItem;
