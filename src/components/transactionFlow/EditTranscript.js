import React from 'react';
import './EditTranscript.css';

const EditTranscript = ({ onSaveOrDiscard }) => {
  return (
    <div className='edit-transcript-container'>
      <textarea className='edit-transcript-textarea'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium...
      </textarea>
      <div className='button-group'>
        <button className='discard-button' onClick={onSaveOrDiscard}>
          Discard
        </button>
        <button className='save-button' onClick={onSaveOrDiscard}>
          Save
        </button>
      </div>
    </div>
  );
};

export default EditTranscript;
