import React from 'react';
import { Gift } from 'lucide-react';

const CarouselItem = ({ title, description, color }) => (
  <div className={`bg-${color}-100 p-6 rounded-lg shadow-md`}>
    <div className="flex justify-between items-center mb-4">
      <div className={`bg-${color}-500 text-white p-2 rounded`}>{title}</div>
      
    </div>
    <p className="text-lg font-semibold">{title}</p>
    <p className="mt-2">{description}</p>
  </div>
);

export default CarouselItem;