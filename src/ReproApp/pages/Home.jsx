import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import NotificationBanner from '../components/NotificationBanner';
import Navbar from '../components/Navbar';
import Logo from '../components/Logo';

const Home = () => {
  const navigate = useNavigate();

  const handleAnnouncementClick = () => {
    console.log("Navigating to announcement page");
    navigate('/announcement');
  };

  const handleCarouselItemClick = (link) => {
    if (link) {
      navigate(link);
    }
  };
  
  const carouselItems = [
    { 
      title: '집에서 click한번으로 난임 검사!',
      description: '정자 건강 체크하고 냉동 정자 까지!',
      color: 'bg-blue-500',
      link: '/repro_cryo'
    },
    // Add more items if needed
  ];

  const updatedCarouselItems = carouselItems.map(item => ({
    ...item,
    content: (
      <div 
        className={`h-full ${item.color} text-white p-4 flex flex-col justify-center cursor-pointer`}
        onClick={() => handleCarouselItemClick(item.link)}
      >
        <h2 className="text-2xl font-bold mb-2">{item.title}</h2>
        <p>{item.description}</p>
      </div>
    )
  }));

  return (
    <div className="flex flex-col h-full">
      <div className="flex justify-between items-center p-4">
        <Logo />
        <div className="w-6 h-6 bg-white-300 rounded-full"></div>
      </div>
      <div className="flex-grow overflow-auto">
        <div className="relative bg-orange-100 rounded-3xl m-4 p-6 shadow-lg">
          <motion.div 
            className="absolute top-2 right-2"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xl font-bold mb-2">Click 한번으로 냉동 정자</h2>
            <h1 className="text-2xl font-bold mb-4">미래를 위한<br />우리의 선택!</h1>
          </motion.div>
          
          <motion.button
            className="bg-orange-500 text-white font-bold py-2 px-4 rounded-full text-sm shadow-lg hover:bg-orange-600 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            이용권 구매하기
          </motion.button>

          <motion.div 
            className="absolute bottom-2 left-2 bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold transform -rotate-12"
            animate={{ rotate: [-12, 0, -12] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Home-kit 받아보기
          </motion.div>
        </div>

        <Carousel items={updatedCarouselItems} />
        <NotificationBanner onAnnouncementClick={handleAnnouncementClick} />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2">가까운 난임 병원 알아보기</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">냉동 정자/난자</h3>
              <p className="text-sm text-gray-600">(가장 가까운 병원)</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-medium">난임/불임 클리닉</h3>
              <div className="mt-2 w-6 h-6 bg-yellow-400 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default Home;