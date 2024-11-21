import React, { useState } from 'react';
import './FileUpload.css';
import UploadModal from '../../components/Modals/UploadModal';

const FileUpload = ({ onUpload,ProjectId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className='file-upload'>
      <div className='upload-icon'>⬆</div>
      <p>Select a file or drag and drop here</p>
      <p className='file-types'>MP4, MOV, MP3, WAV, PDF, DOCX, or TXT file</p>
      <button onClick={openModal}>Select File</button>
      {isModalOpen && (
        <UploadModal
        ProjectId={ProjectId}
          onClose={closeModal}
          onUpload={(newFile) => {
            onUpload(newFile); // Pass data to parent component
            closeModal(); // Close modal after upload
          }}
        />
      )}
    </div>
  );
};

export default FileUpload;
