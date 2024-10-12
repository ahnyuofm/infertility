import React from 'react';

const NavItem = ({ icon, label }) => (
  <div className="flex flex-col items-center">
    {icon}
    <span className="mt-1 text-xs">{label}</span>
  </div>
);

export default NavItem;