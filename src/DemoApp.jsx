import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DemoNavBar from './components/DemoNavBar/DemoNavBar';
import DemoHome from './components/DemoHome/DemoHome';
import DemoAbout from './components/DemoAbout/DemoAbout';
import ReproApp from './ReproApp/ReproApp';
import AnnouncementContents from './ReproApp/pages/Announcement';
import Repro_Cryo from './ReproApp/pages/repro_cryo';

const DemoApp = () => {
  console.log('DemoApp is rendering');
  return (
    
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <DemoNavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<DemoHome />} />
            <Route path="/about" element={<DemoAbout />} />
            <Route path="/reproapp/*" element={<ReproApp />} />
            <Route path="/announcement" element={<AnnouncementContents />} />
            <Route path="/repro_cryo" element={<Repro_Cryo />} />
          </Routes>
          
        </div>
      </div>
    
  );
};

export default DemoApp;