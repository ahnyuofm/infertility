import React from 'react';
import { ChevronLeft, Home, Heart, Share } from 'lucide-react';
import reproLandingImage from '../../assets/Reprolanding_2.webp';  // Adjust the path if necessary

const Repro_Cryo = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-[768px] h-[1024px] bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
        {/* Header */}
        <header className="flex justify-between items-center p-4 bg-blue-600 text-white">
          <div className="flex items-center">
            <ChevronLeft className="mr-2" />
            <span className="font-semibold">All 페이지 129</span>
          </div>
          <Home />
        </header>

        {/* Main content - Scrollable */}
        <main className="flex-1 overflow-y-auto">
          <img 
            src={reproLandingImage} 
            alt="Repro Cryo Landing"
            className="w-full h-auto"
          />
        </main>

        {/* Footer */}
        <footer className="bg-white p-4 flex justify-between items-center">
          <button className="text-gray-600">
            <Heart />
          </button>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full">구매하기</button>
          <button className="text-gray-600">
            <Share />
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Repro_Cryo;