import React from 'react';
import SlideLayout from './SlideLayout';
import { Users, Rocket, Cpu, Network, CheckCircle2 } from 'lucide-react';

const OdaStrategySlide: React.FC = () => {
  return (
    <SlideLayout title="AI ODA 4대 접근 전략" subtitle="Strategic Approach: Soft Power & Efficiency">
      <div className="flex flex-col h-full gap-4">
        
        {/* 2x2 Strategy Grid */}
        <div className="flex-1 grid grid-cols-2 grid-rows-2 gap-4">
          
          {/* Strategy 1: Human Capital */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-blue-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
            <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-blue-100 text-blue-700 rounded-lg">
                 <Users size={20} />
               </div>
               <h3 className="text-sm font-bold text-slate-800">1. 실무형 고급 엔지니어 & 강사(ToT) 인재 육성</h3>
            </div>
            <div className="flex-1 text-xs space-y-2 text-slate-600">
               <div className="flex gap-2">
                 <span className="font-bold text-blue-600 shrink-0">Action:</span>
                 <p>단순 활용(Literacy)을 넘어, sLLM 튜닝 및 MLOps 등 <strong>'개발(Dev)' 역량</strong> 전수</p>
               </div>
               <div className="flex gap-2">
                 <span className="font-bold text-blue-600 shrink-0">Rationale:</span>
                 <p>높은 이직률 대응을 위해 <strong>'강사 양성(ToT)'</strong>으로 자생적 교육 생태계 조성</p>
               </div>
            </div>
            <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
               Target: SENA, MinTIC, MinCiencias, 대학, 시민, 공무원
            </div>
          </div>

          {/* Strategy 2: Ecosystem */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-yellow-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
             <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-yellow-100 text-yellow-700 rounded-lg">
                 <Rocket size={20} />
               </div>
               <h3 className="text-sm font-bold text-slate-800">2. 공공 수요 기반 혁신 생태계 조성 및 창업 지원</h3>
            </div>
            <div className="flex-1 text-xs space-y-2 text-slate-600">
               <div className="flex gap-2">
                 <span className="font-bold text-yellow-600 shrink-0">Action:</span>
                 <p>한국형 TIPS 및 규제 샌드박스 노하우 전수, 공공 프로젝트 연계 해커톤 개최</p>
               </div>
               <div className="flex gap-2">
                 <span className="font-bold text-yellow-600 shrink-0">Rationale:</span>
                 <p>민간 자생력이 부족한 <strong>'정부 주도 시장'</strong>에 정책적 마중물 제공</p>
               </div>
            </div>
             <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
               Target: SENA, MinTIC, MinCiencias, 대학, 민간
            </div>
          </div>

          {/* Strategy 3: Technology */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-red-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
             <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-red-100 text-red-700 rounded-lg">
                 <Cpu size={20} />
               </div>
               <h3 className="text-sm font-bold text-slate-800">3. 특화 데이터 기반 sLLM/RAG 연구 및 AI 서비스 구축</h3>
            </div>
            <div className="flex-1 text-xs space-y-2 text-slate-600">
               <div className="flex gap-2">
                 <span className="font-bold text-red-600 shrink-0">Action:</span>
                 <p>로컬 데이터(농업/바이오) 특화 <strong>sLLM 미세조정</strong> 및 <strong>RAG</strong> 기술 전수</p>
               </div>
               <div className="flex gap-2">
                 <span className="font-bold text-red-600 shrink-0">Rationale:</span>
                 <p>인프라 제약을 <strong>'효율적 기술'</strong>로 극복하며 데이터 주권 확보 지원</p>
               </div>
            </div>
             <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
               Target: MinTIC, MinCiencias, CAR, 각 부처
            </div>
          </div>

          {/* Strategy 4: Governance */}
          <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-400 transition-all flex flex-col relative overflow-hidden">
             <div className="absolute top-0 right-0 w-16 h-16 bg-green-100 rounded-bl-full -mr-8 -mt-8 opacity-50"></div>
             <div className="flex items-center gap-3 mb-3">
               <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                 <Network size={20} />
               </div>
               <h3 className="text-sm font-bold text-slate-800">4. AI 거버넌스, 실행 체계, 통합 플랫폼 구축 컨설팅</h3>
            </div>
            <div className="flex-1 text-xs space-y-2 text-slate-600">
               <div className="flex gap-2">
                 <span className="font-bold text-green-600 shrink-0">Action:</span>
                 <p>데이터 허브 아키텍처 설계, 상호운용성 표준, 가명정보 활용 법제 자문</p>
               </div>
               <div className="flex gap-2">
                 <span className="font-bold text-green-600 shrink-0">Rationale:</span>
                 <p>물리적 서버 도입 전, 데이터 간 <strong>'논리적 연결'</strong> 및 표준화 선행</p>
               </div>
            </div>
             <div className="mt-3 pt-3 border-t border-slate-100 text-[10px] text-slate-400 font-medium">
               Target: DNP, MinTIC, DANE
            </div>
          </div>

        </div>

        {/* Bottom Banner: Strategic Implications */}
        <div className="bg-slate-800 rounded-xl p-4 flex justify-between items-center text-white shadow-lg">
          <div className="text-sm font-bold text-slate-300 mr-4 border-r border-slate-600 pr-4 shrink-0">
            핵심 시사점<br/>(Implications)
          </div>
          <div className="flex-1 grid grid-cols-3 gap-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-yellow-400 shrink-0" />
              <div className="text-xs">
                <span className="block font-bold text-yellow-400">Capacity Building</span>
                <span className="text-slate-300">물고기 대신 낚시법(ToT) 전수</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-blue-400 shrink-0" />
              <div className="text-xs">
                 <span className="block font-bold text-blue-400">Efficiency</span>
                 <span className="text-slate-300">거대 모델 대신 효율적 기술(sLLM)</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-red-400 shrink-0" />
              <div className="text-xs">
                 <span className="block font-bold text-red-400">Connectivity</span>
                 <span className="text-slate-300">단절된 데이터의 논리적 연결</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default OdaStrategySlide;