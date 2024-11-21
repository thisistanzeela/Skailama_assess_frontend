import React, { useState, useEffect } from 'react';
import Header from '../../components/Header/Header';
// import CreateButton from './CreateButton';
import CreateModal from '../..//components/Modals/CreateModal';
import './Projects.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


const Projects = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [projects, setProjects] = useState([]);
  console.log(projects, "projects");

  const navigate = useNavigate();

  const goToProjectDetails = (Project) => {
    navigate('/dashboard', {
      state: Project,
    });
  };

  // const handleCreateProject = (newProjectName) => {
  //   setProjects([...projects, newProjectName]);
  //   setIsModalOpen(false);
  // };



  const fetchProjects = async () => {
    try {
      // Retrieve the token from localStorage
      const token = localStorage.getItem('authToken');

      if (!token) {
        console.error('No authentication token found');
        return;
      }

      const response = await fetch('http://localhost:5000/api/v1/project/list', {
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
      console.log(data.projects, "data");

      setProjects(data.projects);  // Assuming the response is an array of projects
    } catch (error) {
      console.error(error);
    }
  };


  const handleCreateProject = async (newProjectName) => {
    // try {
    //   const token = localStorage.getItem('authToken');
    //   if (!token) {
    //     alert('No authentication token found!');
    //     return;
    //   }

    //   const response = await fetch('http://localhost:5000/api/v1/project/create', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       'Authorization': token,  // Passing the token in the Authorization header
    //     },
    //     body: JSON.stringify({ projectName: newProjectName }), // Sending the project name in the body
    //   });

    //   const data = await response.json();
    //   console.log(data, "data111");
    //   fetchProjects();

    // } catch (error) {
    //   // setError(error.message); // Show error if any occurs
    // }
  };




  useEffect(() => {
    fetchProjects();
  }, []);  // Empty dependency array ensures this effect runs only once on mount


  return (
    <div className='projects-page'>
      <Header
      // title='Projects'
      // onButtonClick={() => setIsModalOpen(true)}
      // buttonText='Create New Project'
      />
      <main className='projects-main'>
        <div className='projects-actions'>
          <h2>Projects</h2>
          <button className='create-btn' onClick={() => setIsModalOpen(true)} >
            <span className='button-icon'>➕</span> {'Create New Project'}
          </button>
        </div>
        <div className='project-list'>
          {projects.map((project, index) => (
            <div key={index} className='project-item'>
              <div className='project-icon'>

              </div>
             <div
              onClick={() => goToProjectDetails(project)} >
                <div className='project-details'
                //  onClick={goToProjectDetails(project)}
                 >
                  <h3 className='project-name'>{project.projectName}</h3>
                  <p className='project-info'>4 Files</p>
                  <p className='project-date'>Last edited a week ago</p>
                </div>
              
            </div>
            </div>
          ))}


        </div>
      </main>
      {isModalOpen && (
        <CreateModal
          onClose={() => setIsModalOpen(false)}
          onCreate={handleCreateProject}
        />
      )}
    </div>
  );
};

export default Projects;
