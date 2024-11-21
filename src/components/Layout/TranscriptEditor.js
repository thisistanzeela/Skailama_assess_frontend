import React, { useEffect, useState } from 'react';
import './TranscriptEditor.css';

const TranscriptEditor = ({setViewEdit,transData,fetchFiles}) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [transcript, setTranscript] = useState(transData.transcript);

  const handleEditClick = () => setIsEditing(true);
  const handleSaveOrDiscard = () => setIsEditing(false);
const testHandle=()=>{
  setViewEdit(false)
}

const handleEdit = async () => {
  try {
    const token = localStorage.getItem('authToken');
    if (!token) {
      alert('No authentication token found!');
      return;
    }

    const payload = {
      "fileName": transData.fileName,
      "transcript": transcript
    };

    const response = await fetch(`http://localhost:5000/api/v1/project/file/${transData._id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) throw new Error('Failed to upload file');
    alert('Updated')
    testHandle()
    fetchFiles()
    // await fetchFiles(); // Refresh file list after upload
    // closeModal();
  } catch (error) {
    console.error(error);
  }
};

  return (
    
    <div className='transcript-editor-container'>
      <div className='header'>
        <button className='back-button' onClick={testHandle}>←</button>
        <h3>Edit Transcript</h3>
        {!isEditing ? (
          <button className='edit-button' onClick={handleEditClick}>
            Edit
          </button>
        ) : (
          <div className='button-group'>
            <button className='discard-button' onClick={handleSaveOrDiscard}>
              Discard
            </button>
            <button className='save-button' onClick={handleEdit}>
              Save
            </button>
          </div>
        )}
      </div>

      <div className='content'>
        <p className='speaker-title'>{transData.fileName}</p>
        {!isEditing ? (
          <div className='transcript-view'>
            <div className='transcript-text'>{transData.transcript}</div>
          </div>
        ) : (
          <textarea
            className='edit-transcript-textarea'
            value={transcript}
            onChange={(e) => setTranscript(e.target.value)}
          />
        )}
      </div>
    </div>
  );
};

export default TranscriptEditor;