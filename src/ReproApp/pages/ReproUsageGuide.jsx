import React from 'react';
import { LightBulb, CreditCard } from 'lucide-react';

const ReproUsageGuide = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-3">슬기로운 젠톡 사용법</h2>
      <div className="grid grid-cols-2 gap-4">
        <UsageCard
          icon={<CreditCard className="text-blue-500" size={24} />}
          title="젠톡 이용권 사용방법"
          subtitle="(네이버, GS25 외)"
        />
        <UsageCard
          icon={<LightBulb className="text-yellow-400" size={24} />}
          title="이용 가이드"
          isHighlighted
        />
      </div>
    </div>
  );
};

const UsageCard = ({ icon, title, subtitle, isHighlighted }) => {
  return (
    <div className={`bg-white p-4 rounded-lg shadow ${isHighlighted ? 'border-2 border-yellow-400' : ''}`}>
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          {subtitle && <p className="text-xs text-gray-500 mt-1">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default ReproUsageGuide;