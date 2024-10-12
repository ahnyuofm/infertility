import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const BackButton = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <button 
      onClick={goBack} 
      className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md"
    >
      <ChevronLeft size={24} />
    </button>
  );
};

export default BackButton;