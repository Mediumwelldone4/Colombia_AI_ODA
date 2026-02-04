import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import IntroSlide from './components/IntroSlide';
import InterviewSlide from './components/InterviewSlide';
import KairatSlide from './components/KairatSlide';
import OdaStrategySlide from './components/OdaStrategySlide';
import OdaListSlide from './components/OdaListSlide';
import PcpPlanSlide from './components/PcpPlanSlide';
import { SlideType } from './types';
import { GoogleGenAI } from "@google/genai";

// Ensure API key is available (Note: Not strictly used for the static slides but set up for future dynamic content)
const API_KEY = process.env.API_KEY || '';

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<SlideType>(SlideType.INTRO);

  const renderSlide = () => {
    switch (currentSlide) {
      case SlideType.INTRO:
        return <IntroSlide />;
      case SlideType.INTERVIEW:
        return <InterviewSlide />;
      case SlideType.KAIRAT:
        return <KairatSlide />;
      case SlideType.ODA_STRATEGY:
        return <OdaStrategySlide />;
      case SlideType.ODA_LIST:
        return <OdaListSlide />;
      case SlideType.PCP_PLAN:
        return <PcpPlanSlide />;
      default:
        return <IntroSlide />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-slate-100 overflow-hidden">
      <Sidebar currentSlide={currentSlide} onSelectSlide={setCurrentSlide} />
      
      {/* Main Content Area - Enforcing 16:9 Aspect Ratio Center Stage */}
      <main className="flex-1 h-full flex items-center justify-center p-8 bg-slate-200 overflow-hidden">
        <div className="w-full max-w-[1600px] aspect-video shadow-2xl rounded-sm bg-white print:w-full print:h-screen print:max-w-none print:shadow-none print:aspect-auto">
          {renderSlide()}
        </div>
      </main>
    </div>
  );
};

export default App;