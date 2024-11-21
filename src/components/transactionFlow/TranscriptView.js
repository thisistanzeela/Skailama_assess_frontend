import React from 'react';
import './TranscriptView.css';

const TranscriptView = ({ onEdit }) => {
  return (
    <div className='transcript-container'>
      <p className='transcript-text'>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium...
      </p>
      <button className='edit-button' onClick={onEdit}>
        Edit
      </button>
    </div>
  );
};

export default TranscriptView;
