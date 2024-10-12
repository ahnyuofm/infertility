import React from 'react';
import { ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


const NotificationBanner = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("notificationbanner clicked");
    navigate ('/announcement');
  }

  return (
    <div 
      onClick={handleClick}
      className="flex justify-between items-center mx-4 p-4 bg-white rounded-lg shadow cursor-pointer hover:bg-gray-50 transition-colors duration-200"
    >
      <span className="flex-grow">공지: 임신 사전건강관리 지원</span>
      <ChevronRight className="h-5 w-5 text-blue-600" />
    </div>
  );
};

export default NotificationBanner;