import React from 'react';
import { Home, ShoppingBag, User, Menu } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-lg mx-auto px-4">
        <div className="flex justify-between">
          <NavItem icon={<Home size={24} />} label="홈" onClick={() => navigate('/')} />
          <NavItem icon={<ShoppingBag size={24} />} label="스토어" onClick={() => navigate('/store')} />
          <NavItem icon={<User size={24} />} label="마이페이지" onClick={() => navigate('/mypage')} />
          <NavItem icon={<Menu size={24} />} label="메뉴" onClick={() => navigate('/menu')} />
        </div>
      </div>
    </nav>
  );
};

const NavItem = ({ icon, label, onClick }) => (
  <button className="flex flex-col items-center py-2" onClick={onClick}>
    {icon}
    <span className="mt-1 text-xs">{label}</span>
  </button>
);

export default Navbar;