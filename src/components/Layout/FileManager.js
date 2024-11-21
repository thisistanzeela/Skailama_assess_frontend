import React, { useEffect, useState } from 'react';
import './FileManager.css';
import TranscriptEditor from './TranscriptEditor';

const FileManager = ({ ProjectId }) => {
  const [projectFiles, setProjectFiles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newFileName, setNewFileName] = useState('');
  const [newFileTranscript, setNewFileTranscript] = useState('');
  const [transData, setTransData]= useState(null)

  const [ViewEdit, setViewEdit]=useState(false)

  const fetchFiles = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('No authentication token found!');
        return;
      }

      const response = await fetch(`http://localhost:5000/api/v1/project/file/${ProjectId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
      });

      if (!response.ok) throw new Error('Failed to fetch files');
      const data = await response.json();
    
      setProjectFiles(data.files);
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpload = async () => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('No authentication token found!');
        return;
      }

      const payload = {
        projectId: ProjectId,
        fileName: newFileName,
        transcript: newFileTranscript,
      };

      const response = await fetch('http://localhost:5000/api/v1/project/file/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw new Error('Failed to upload file');
      await fetchFiles(); // Refresh file list after upload
      closeModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (fileId) => {
    try {
      const token = localStorage.getItem('authToken');
      if (!token) {
        alert('No authentication token found!');
        return;
      }

      const response = await fetch(`http://localhost:5000/api/v1/project/file/${fileId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': token,
        },
      });

      if (!response.ok) throw new Error('Failed to delete file');
      await fetchFiles(); // Refresh file list after deletion
      alert("record deleted")
    } catch (error) {
      console.error(error);
    }
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setNewFileName('');
    setNewFileTranscript('');
  };

  useEffect(() => {
    fetchFiles();
  }, [ProjectId]);

const transcriptData = (file)=>{
  setTransData(file)
  setViewEdit(true)
}


  return (
    <div className="file-manager-container">
      <h3>Your Files</h3>

      <div className="upload-container">
        <label htmlFor="file-upload">
          Select a file or drag and drop here (MP4, MOV, MP3, WAV, PDF, DOCX, or TXT)
        </label>
        <button className="upload-btn" onClick={openModal}>Select</button>
      </div>

     
{
ViewEdit?
<TranscriptEditor setViewEdit={setViewEdit} transData = {transData} fetchFiles={fetchFiles}/>

:

<table className="files-table">
<thead>
  <tr>
    <th>No.</th>
    <th>Name</th>
    <th>Upload Date & Time</th>
    <th>Action</th>
  </tr>
</thead>
<tbody>
  {projectFiles.length > 0 ? (
    projectFiles.map((file, index) => (
      <tr key={file._id}>
        <td>{index + 1}</td>
        <td>{file.fileName}</td>
        <td>{file.createdAt}</td>
        <td>
          <button className="view-btn" onClick={()=>{transcriptData(file)}}>View</button>
          <button
            className="delete-btn"
            onClick={() => handleDelete(file._id)}
          >
            Delete
          </button>
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="4">No files found.</td>
    </tr>
  )}
</tbody>
</table>

}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Upload File</h2>
            <input
              type="text"
              placeholder="Enter File Name"
              value={newFileName}
              onChange={(e) => setNewFileName(e.target.value)}
            />
            <textarea
              rows="8"
              placeholder="Enter Transcript"
              value={newFileTranscript}
              onChange={(e) => setNewFileTranscript(e.target.value)}
            />
            <div className="modal-buttons">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={handleUpload}>Upload</button>
            </div>
          </div>
        </div>
      )}
             

    </div>
  );
};

export default FileManager;
