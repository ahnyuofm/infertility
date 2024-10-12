import React from 'react';
import { Scale, Users, Clipboard, MessageSquare } from 'lucide-react';

const Announcement = ({ title, icon, items }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      {icon}
      <h3 className="text-lg font-semibold ml-2">{title}</h3>
    </div>
    <ul className="list-disc list-inside pl-6">
      {items.map((item, index) => (
        <li key={index} className="text-sm mb-1">{item}</li>
      ))}
    </ul>
  </div>
);

const AnnouncementContents = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-6 text-center text-blue-800">임신 사전건강관리 지원 안내</h2>
      
      <Announcement
        title="관련 법령"
        icon={<Scale className="w-5 h-5 text-blue-600" />}
        items={[
          "모자보건법 제3조 (국가와 지방자치단체의 책임)",
          "모자보건법 제11조 (난임극복 지원사업-생식건강 문제 극복 및 에방을 위한 지원)"
        ]}
      />

      <Announcement
        title="신청 대상"
        icon={<Users className="w-5 h-5 text-blue-600" />}
        items={[
          "임신 희망 부부(사실혼, 에비부부 포함)중 가임력 검사 희망자 본인",
          "*1인 1회 지원",
          "*단, 여성이 가임연령(15~49세, WHO기준)인 부부",
          "*서울시는 자체사업(서울시 남녀 임신준비 지원)시행 중으로서울시민은 주소지 관할 보건소 문의",
          "*부부 개별 신청"

        ]}
      />

      <Announcement
        title="검사 항목"
        icon={<Clipboard className="w-5 h-5 text-blue-600" />}
        items={[
          "-여성: 난소기능검사(AMH), 부인과 초음파(자궁,난소 등)",
          "-남성: 정액검사(정자정밀형태검사)"
        ]}
      />

      <Announcement
        title="지원내용"
        icon={<MessageSquare className="w-5 h-5 text-blue-600" />}
        items={[
          "검사비 지원 금액",
          "-여성: 최대 13만원",
          "-남성: 최대5만원"
        ]}
      />
      <p>업데이트: 2024-10-02</p>
    </div>
  );
};

export default AnnouncementContents;