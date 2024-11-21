import React, { useEffect, useState } from 'react';
import './FilesTable.css';

const FilesTable = ({ProjectId}) => {
  console.log(ProjectId,"ProjectId")

  const [projectFileData,setProjectFileData]=useState([])


  const fetchFileData = async () => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('authToken');

      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const response = await fetch(`http://localhost:5000/api/v1/project/file/${ProjectId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token,  // Passing the token in the Authorization header
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch projects');
      }

      const data = await response.json();
      console.log(data.files, "data");

      setProjectFileData(data.files);  // Assuming the response is an array of projects
    } catch (error) {
      console.error(error);
    }
  };


  useEffect(()=>{
    fetchFileData()
  },[])

  return (
    <div className='files-table-container'>
      <h3>Your Files</h3>
      <table className='files-table'>
        <thead>
          <tr>
            <th>No.</th>
            <th>Name</th>
            <th>Upload Date & Time</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {projectFileData.length !==0 ? projectFileData.map((file,index) => (
            <tr key={file._id}>
              <td>{index+1}</td>
              <td>{file.fileName}</td>
              <td>{file.createdAt}</td>
              <td>
                <button className='view-btn'>View</button>
                <button className='delete-btn'>Delete</button>
              </td>
            </tr>
          ))
        :
        <>File Not found</>
        }
        </tbody>
      </table>
    </div>
  );
};

export default FilesTable;
