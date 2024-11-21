import React, { useState } from 'react';
import './UploadModal.css';

const UploadModal = ({ onClose, onUpload,ProjectId }) => {
  console.log(ProjectId,"ProjectId1312");
  
  const [name, setName] = useState('');
  const [transcript, setTranscript]= useState('')

  // const handleUpload = () => {
    const handleUpload = async () => {
   

      try {
        const token = localStorage.getItem('authToken');
        if (!token) {
          alert('No authentication token found!');
          return;
        }
  
        const PayLoad={
          "projectId": ProjectId,
          "fileName": name,
          "transcript":transcript
        }
        const response = await fetch('http://localhost:5000/api/v1/project/file/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': token,  // Passing the token in the Authorization header
          },
          body: JSON.stringify(PayLoad), // Sending the project name in the body
        });
  
        if (!response.ok) {
          throw new Error('Failed to create project');
        }
  
        const data = await response.json();
        // If creation is successful, invoke the onCreate callback to update the parent component
        // onCreate(data); // Assuming the response returns the new project data
        onClose(); // Close the modal after successful project creation
      } catch (error) {
        // setError(error.message); // Show error if any occurs
      } finally {
        // setIsLoading(false); // Reset loading state
      }
    };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2 className='modal-title'>Upload File</h2>
        <input
          type='text'
          className='modal-input'
          placeholder='Enter File Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
         <textarea
          type='text'
          rows="8" 
          className='modal-input'
          placeholder='Transcript'
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />
        <div className='modal-buttons'>
          <button className='modal-cancel' onClick={onClose}>
            Cancel
          </button>
          <button className='modal-create' onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadModal;
