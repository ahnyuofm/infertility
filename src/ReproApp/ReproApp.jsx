import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AnnouncementContents from './pages/Announcement';
import About from './pages/About'; 
import Repro_Cryo from './pages/repro_cryo';

const ReproApp = () => {
  const carouselItems = [
    { 
      title: '집에서 click한번으로 난임 검사!', 
      description: '정자 건강 체크하고 냉동 정자 까지!', 
      color: 'bg-blue-500',
      link: '/repro_cryo' 
    },
    { title: '난임 병원 오픈런?', description: '대부분의 진료는 비대면으로!', color: 'bg-indigo-500' },
  
    ];

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 p-4">
      <div className="w-full max-w-[800px] h-[1000px] bg-white shadow-2xl overflow-hidden rounded-3xl">
     
        <Routes>
          <Route path="/" element={<Home carouselItems={carouselItems} />} />
          <Route path="/announcement" element ={<AnnouncementContents />}/>
          <Route path="/about" element={<About />} />
          <Route path="/repro_cryo" element={<Repro_Cryo />} />
        </Routes>
      </div>
    </div>
  );
};

export default ReproApp;
