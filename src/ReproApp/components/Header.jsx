import React from 'react';
import { Bell } from 'lucide-react';
import Logo from './Logo';

const Header = () => (
  <header className="flex justify-between items-center p-4 bg-blue-600">
    <Logo />
    <Bell className="text-white" />
  </header>
);

export default Header;