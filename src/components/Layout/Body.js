import React from 'react';
import './Body.css';
import Sidebar from './Sidebar';
import Nav from './Nav';
import FileManager from './FileManager';
import { useLocation } from 'react-router-dom';
import PodcastOptions from './PodcastOptions'
import TranscriptEditor from './TranscriptEditor';

const LayoutBody = () => {
  const location = useLocation();
  console.log(location, "location");

  return (
    <div className='app'>
      <Sidebar />
      <main className='body-main'>
        <Nav projectName={location?.state?.projectName} />
        <PodcastOptions/>
        <FileManager ProjectId={location?.state?._id} />
      </main>
    </div>
  );
};

export default LayoutBody;
