import React from 'react';
import SlideLayout from './SlideLayout';
import { FileText, ArrowRight, Target, PenTool, CheckSquare, Layers } from 'lucide-react';

const PcpPlanSlide: React.FC = () => {
  return (
    <SlideLayout title="PCP 작성 방안" subtitle="Project Concept Paper Roadmap">
       <div className="h-full flex flex-col justify-between">
         
         {/* Introduction */}
         <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 mb-4 flex items-center gap-6">
           <div className="bg-white p-3 rounded-full border border-slate-100 shadow-sm">
             <FileText size={32} className="text-blue-600"/>
           </div>
           <div>
             <h3 className="font-bold text-slate-800 text-lg">전략적 PCP 수립 방향</h3>
             <p className="text-slate-600">Short list 후보군에서 선정된 1개 사업에 대해 PCP 작성</p>
           </div>
         </div>

         {/* Timeline / Process Flow */}
         <div className="flex-1 grid grid-cols-4 gap-4">
           
           {/* Step 1: Component Definition */}
           <div className="bg-white rounded-xl border border-slate-200 p-5 relative group hover:border-blue-400 transition-all shadow-sm">
             <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-800 text-white rounded-lg flex items-center justify-center font-bold">1</div>
             <div className="mb-4 text-blue-600"><Layers size={28}/></div>
             <h4 className="font-bold text-slate-800 mb-2">사업 구성 요소 정의</h4>
             <p className="text-xs text-slate-500 leading-relaxed">
               • 사업 범위 및 대상 지역 선정<br/>
               • H/W, S/W 및 컨설팅 요소 정의<br/>
               • 수혜 그룹(Beneficiary) 분석
             </p>
             <ArrowRight className="absolute top-1/2 -right-6 text-slate-300 z-10 hidden md:block" />
           </div>

           {/* Step 2: PDM Design */}
           <div className="bg-white rounded-xl border border-slate-200 p-5 relative group hover:border-blue-400 transition-all shadow-sm">
             <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-700 text-white rounded-lg flex items-center justify-center font-bold">2</div>
             <div className="mb-4 text-blue-600"><Target size={28}/></div>
             <h4 className="font-bold text-slate-800 mb-2">논리 모형(PDM) 설계</h4>
             <p className="text-xs text-slate-500 leading-relaxed">
               • 성과 지표(Outcome) 구체화<br/>
               • 수원기관(DNP) R&R 명확화<br/>
               • 리스크 요인 및 가정 분석
             </p>
             <ArrowRight className="absolute top-1/2 -right-6 text-slate-300 z-10 hidden md:block" />
           </div>

           {/* Step 3: Feasibility Study */}
           <div className="bg-white rounded-xl border border-slate-200 p-5 relative group hover:border-blue-400 transition-all shadow-sm">
             <div className="absolute -top-3 -left-3 w-8 h-8 bg-slate-600 text-white rounded-lg flex items-center justify-center font-bold">3</div>
             <div className="mb-4 text-blue-600"><CheckSquare size={28}/></div>
             <h4 className="font-bold text-slate-800 mb-2">사전 타당성 검토</h4>
             <p className="text-xs text-slate-500 leading-relaxed">
               • 기술적 실현 가능성 검증<br/>
               • 환경/사회/젠더 영향 평가<br/>
               • 지속가능성 전략 수립
             </p>
             <ArrowRight className="absolute top-1/2 -right-6 text-slate-300 z-10 hidden md:block" />
           </div>

           {/* Step 4: Submission */}
           <div className="bg-blue-600 rounded-xl border border-blue-700 p-5 relative shadow-md text-white">
             <div className="absolute -top-3 -left-3 w-8 h-8 bg-yellow-400 text-slate-900 rounded-lg flex items-center justify-center font-bold">4</div>
             <div className="mb-4 text-yellow-400"><FileText size={28}/></div>
             <h4 className="font-bold text-white mb-2">PCP 제출 (26년 2월)</h4>
             <p className="text-xs text-blue-100 leading-relaxed">
               최종 PCP 및 예산 산출 근거서 제출<br/>
               <br/>
               <span className="font-bold text-yellow-300 opacity-80">KOICA 본부 송부</span>
             </p>
           </div>

         </div>

         <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-sm text-yellow-800 font-medium text-center">
           Action Plan: PCP 초안을 2026년 2월말까지 작성하여, 콜롬비아 사무소와 공유
         </div>
       </div>
    </SlideLayout>
  );
};

export default PcpPlanSlide;