import React from 'react';

interface SlideLayoutProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  bgImage?: string;
}

const SlideLayout: React.FC<SlideLayoutProps> = ({ title, subtitle, children, bgImage }) => {
  return (
    <div className="w-full h-full flex flex-col relative overflow-hidden bg-white shadow-2xl rounded-sm print:shadow-none">
      {/* Background Layer */}
      {bgImage && (
        <div 
          className="absolute inset-0 z-0 opacity-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}
      
      {/* Header */}
      <div className="relative z-10 w-full px-12 pt-10 pb-4 border-b border-gray-100 bg-white/90 backdrop-blur-sm flex justify-between items-end">
        <div>
          <h2 className="text-sm font-bold text-blue-800 uppercase tracking-widest mb-1">
            KOICA AI ODA Cooperation - Colombia
          </h2>
          <h1 className="text-3xl font-black text-slate-900">{title}</h1>
        </div>
        {subtitle && (
          <div className="text-right">
            <span className="text-slate-500 font-medium text-sm block">{subtitle}</span>
          </div>
        )}
      </div>

      {/* Content Area - 16:9 Content */}
      <div className="relative z-10 flex-1 p-8 overflow-hidden">
        {children}
      </div>

      {/* Footer */}
      <div className="relative z-10 px-12 py-3 bg-slate-50 border-t border-gray-200 flex justify-between items-center text-xs text-slate-400">
        <span>AI ODA Consulting Report</span>
        <div className="flex gap-2 items-center">
           <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
           <div className="w-2 h-2 rounded-full bg-blue-700"></div>
           <div className="w-2 h-2 rounded-full bg-red-600"></div>
           <span className="ml-2">Republic of Korea & Colombia</span>
        </div>
      </div>
    </div>
  );
};

export default SlideLayout;