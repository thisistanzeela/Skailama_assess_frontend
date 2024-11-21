import React ,{useState}from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import CreateModal from '../../components/Modals/CreateModal';
import { useNavigate } from 'react-router-dom';  // Ensure you have this import



const Home = ({}) => {
    const navigate = useNavigate();  // Initialize navigate hook

    const [showModal, setShowModal] = useState(false);
    const [project, setProject] = useState(null);
  
    const handleCreateNewProject = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
  
    const handleCreateProject = (projectName) => {
      setProject(projectName);
      setShowModal(false);
      navigate("/projects"); // This should work now

    };
  
  return (
    <div className='home-container'>
      <Header />
      <main className='main'>
        <h1 className='title'>Create a New Project</h1>
        <div className='image-container'>
          <img
            src='https://sigosoft.com/wp-content/uploads/2023/12/How-to-Develop-a-Nursing-Job-Platform-like-ShiftMed-2.png'
            alt='Illustration of a meeting'
            className='image'
          />
        </div>
        <p className='description'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <button className='button' 
        onClick={handleCreateNewProject}
        >
          <span className='button-icon'>➕</span> Create New Project
        </button>
      </main>
      {showModal && (
            <CreateModal
              onClose={handleCloseModal}
              onCreate={handleCreateProject}
            />
          )}

    </div>
  );
};

export default Home;
