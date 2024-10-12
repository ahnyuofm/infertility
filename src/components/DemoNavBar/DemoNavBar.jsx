import React from 'react';
import { Link } from 'react-router-dom';

const DemoNavBar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <ul className="flex justify-center space-x-4">
        <li><Link to="/" className="text-blue-500 hover:text-blue-700">Home</Link></li>
        <li><Link to="/about" className="text-blue-500 hover:text-blue-700">About</Link></li>
        <li><Link to="/reproapp" className="text-blue-500 hover:text-blue-700">ReproApp</Link></li>
      </ul>
    </nav>
  );
};

export default DemoNavBar;