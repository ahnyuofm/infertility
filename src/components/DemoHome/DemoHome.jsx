import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { Link } from 'react-router-dom';

const DemoHome = () => {
  const [isHovered, setIsHovered] = useState(false);

  const titleAnimation = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(50px)' },
  });

  const cardAnimation = useSpring({
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    boxShadow: isHovered ? '0 20px 30px rgba(0,0,0,0.2)' : '0 10px 20px rgba(0,0,0,0.1)',
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 text-center p-4">
      <animated.h1 style={titleAnimation} className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 mb-8">
        Welcome to Repro!
      </animated.h1>

      <animated.div
        style={cardAnimation}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="bg-white rounded-xl p-8 max-w-md w-full backdrop-filter backdrop-blur-lg bg-opacity-30 border border-gray-200"
      >
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">아시아 최초 냉동 정자 배달 플랫폼</h2>
        <p className="text-lg mb-6 text-gray-700">이제 집에서 클릭 한번으로 여러분의 미래를 맡겨주세요!</p>
        
        <Link 
          to="/reproapp" 
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition duration-300 transform hover:scale-105"
        >
          Launch ReproApp
        </Link>
      </animated.div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {['Innovative', 'Efficient', 'User-Friendly'].map((feature, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 transform hover:-translate-y-1">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature}</h3>
            <p className="text-gray-600">Experience the power of {feature.toLowerCase()} design and functionality.</p>
          </div>
        ))}
      </div>

      <footer className="mt-16 text-gray-600">
        <p>© 2023 ReproApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DemoHome;