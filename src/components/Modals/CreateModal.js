import React, { useState } from 'react';
import './CreateModal.css';


const CreateModal = ({ onClose, onCreate }) => {
  const [projectName, setProjectName] = useState('');
  const [isLoading, setIsLoading] = useState(false); // To manage loading state
  const [error, setError] = useState(''); // To handle error messages

  const handleCreate = async () => {
    if (projectName.trim() === '') {
      alert('Project name cannot be empty!');
      return;
    }

    setIsLoading(true); // Set loading state to true while API request is in progress
    setError(''); // Reset any previous error message

    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('No authentication token found!');
        return;
      }

      const response = await fetch('http://localhost:5000/api/v1/project/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,  // Passing the token in the Authorization header
        },
        body: JSON.stringify({ projectName: projectName }), // Sending the project name in the body
      });

      if (!response.ok) {
        throw new Error('Failed to create project');
      }

      const data = await response.json();
      // If creation is successful, invoke the onCreate callback to update the parent component
      onCreate(data); // Assuming the response returns the new project data
      onClose(); // Close the modal after successful project creation
    } catch (error) {
      setError(error.message); // Show error if any occurs
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className='modal-overlay'>
      <div className='modal'>
        <h2 className='modal-title'>Create Project</h2>
        <input
          type='text'
          className='modal-input'
          placeholder='Enter Project Name'
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        {error && <div className='error-message'>{error}</div>}
        <div className='modal-buttons'>
          <button className='modal-cancel' onClick={onClose} disabled={isLoading}>
            Cancel
          </button>
          <button 
            className='modal-create' 
            onClick={handleCreate} 
            disabled={isLoading}
          >
            {isLoading ? 'Creating...' : 'Create'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateModal;
