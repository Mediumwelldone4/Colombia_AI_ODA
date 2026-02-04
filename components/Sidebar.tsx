import React from 'react';
import { MenuItem, SlideType } from '../types';
import { LayoutDashboard, Users, PieChart, List, FileText, Compass } from 'lucide-react';

interface SidebarProps {
  currentSlide: SlideType;
  onSelectSlide: (slide: SlideType) => void;
}

const menuItems: MenuItem[] = [
  { id: SlideType.INTRO, label: '인트로', subLabel: '현지조사 개요', icon: <LayoutDashboard size={18} /> },
  { id: SlideType.INTERVIEW, label: '인터뷰 결과', subLabel: '주요 이해관계자', icon: <Users size={18} /> },
  { id: SlideType.KAIRAT, label: 'KAIRAT 진단', subLabel: '6대 영역 분석', icon: <PieChart size={18} /> },
  { id: SlideType.ODA_STRATEGY, label: 'AI ODA 전략', subLabel: '4대 접근 전략', icon: <Compass size={18} /> },
  { id: SlideType.ODA_LIST, label: '후보 사업', subLabel: 'Long & Short List', icon: <List size={18} /> },
  { id: SlideType.PCP_PLAN, label: 'PCP 작성', subLabel: '향후 계획', icon: <FileText size={18} /> },
];

const Sidebar: React.FC<SidebarProps> = ({ currentSlide, onSelectSlide }) => {
  return (
    <div className="w-64 bg-slate-900 h-screen flex flex-col text-white shadow-2xl shrink-0 z-50 print:hidden">
      {/* Branding Header */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-8 h-5 bg-gradient-to-b from-yellow-400 via-blue-700 to-red-600 rounded-sm"></div> {/* Colombia Flag Hint */}
          <span className="font-bold text-lg tracking-tight">KOICA AI ODA</span>
        </div>
        <p className="text-xs text-slate-400">Colombia Wrap-Up Report</p>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 py-6 px-3 space-y-2">
        {menuItems.map((item) => {
          const isActive = currentSlide === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onSelectSlide(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 text-left group ${
                isActive 
                  ? 'bg-blue-700 text-white shadow-lg shadow-blue-900/50' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              <div className={`${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`}>
                {item.icon}
              </div>
              <div>
                <div className={`text-sm font-medium ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                  {item.label}
                </div>
                {item.subLabel && (
                  <div className={`text-[10px] ${isActive ? 'text-blue-200' : 'text-slate-600 group-hover:text-slate-400'}`}>
                    {item.subLabel}
                  </div>
                )}
              </div>
            </button>
          );
        })}
      </nav>

      {/* Footer / User Info */}
      <div className="p-6 border-t border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-slate-700 flex items-center justify-center text-xs font-bold text-slate-300">
            K
          </div>
          <div>
            <p className="text-xs font-bold text-slate-300">Consultant</p>
            <p className="text-[10px] text-slate-500">Global AI Division</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;