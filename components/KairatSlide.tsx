import React from 'react';
import SlideLayout from './SlideLayout';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { KairatData } from '../types';
import { ThumbsUp, ThumbsDown, AlertTriangle } from 'lucide-react';

// Data normalized to 10-point scale
const data: KairatData[] = [
  { subject: '인프라', A: 4.8, fullMark: 10 },
  { subject: '인적 자본', A: 6.0, fullMark: 10 },
  { subject: '제도적 기반', A: 7.9, fullMark: 10 },
  { subject: '혁신 생태계', A: 2.9, fullMark: 10 },
  { subject: 'LLM/주권', A: 4.0, fullMark: 10 },
  { subject: '사회적 준비도', A: 6.1, fullMark: 10 },
];

const KairatSlide: React.FC = () => {
  return (
    <SlideLayout title="KAIRAT 2.0 진단 결과" subtitle="Korea AI Readiness Assessment Tool - Colombia">
      <div className="grid grid-cols-12 gap-6 h-full">
        
        {/* Left: Chart Area */}
        <div className="col-span-4 bg-slate-50 rounded-2xl p-4 border border-slate-200 flex flex-col items-center justify-center relative shadow-inner">
          <div className="absolute top-6 left-6">
            <h3 className="text-lg font-bold text-slate-800">종합 진단 점수</h3>
            <span className="text-xs text-slate-500 block mt-1">비대칭 구조 (Asymmetry)</span>
          </div>
          
          {/* Total Score Badge */}
          <div className="absolute top-6 right-6 flex flex-col items-end">
             <div className="text-4xl font-black text-blue-800 tracking-tighter">5.3<span className="text-lg text-slate-400 font-normal">/10</span></div>
             <div className="text-[10px] font-bold bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">보통 (Normal)</div>
          </div>

          <div className="w-full h-full min-h-[300px] mt-8">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
                <PolarGrid stroke="#cbd5e1" strokeDasharray="3 3" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 11, fontWeight: 'bold' }} />
                <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
                <Radar
                  name="Colombia"
                  dataKey="A"
                  stroke="#2563eb"
                  strokeWidth={3}
                  fill="#3b82f6"
                  fillOpacity={0.4}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="absolute bottom-6 px-6 w-full">
             <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-sm text-center">
               <p className="text-xs font-bold text-slate-700">"제도(Soft)는 우수하나, 인프라(Hard)는 취약"</p>
             </div>
          </div>
        </div>

        {/* Right: Analysis Details - 6 Areas Bento Grid */}
        <div className="col-span-8 grid grid-cols-2 grid-rows-3 gap-4">
          
          {/* 3. 제도적 기반 (High) */}
          <div className="bg-white p-3 rounded-xl border-l-4 border-blue-600 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-800 text-sm">3. 제도적 기반 (Institutional)</span>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">7.9 (우수)</span>
            </div>
            <div className="space-y-1.5">
               <div className="flex gap-1.5 items-start">
                  <ThumbsUp size={12} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">최상위 정책(CONPES 4144) 및 강력한 추진 의지</p>
               </div>
               <div className="flex gap-1.5 items-start">
                  <ThumbsDown size={12} className="text-red-400 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">잦은 인력 교체로 인한 실행 조직 불안정성</p>
               </div>
            </div>
          </div>

          {/* 6. 사회적 준비도 (Mid-High) */}
          <div className="bg-white p-3 rounded-xl border-l-4 border-blue-400 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-800 text-sm">6. 사회적 준비도 (Social)</span>
              <span className="text-[10px] font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">6.1 (보통)</span>
            </div>
            <div className="space-y-1.5">
               <div className="flex gap-1.5 items-start">
                  <ThumbsUp size={12} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">높은 시민 참여도 및 윤리 법안(딥페이크 등) 대응</p>
               </div>
               <div className="flex gap-1.5 items-start">
                  <ThumbsDown size={12} className="text-red-400 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">디지털 격차에 따른 불평등 심화 우려</p>
               </div>
            </div>
          </div>

          {/* 2. 인적 자본 (Mid) */}
          <div className="bg-white p-3 rounded-xl border-l-4 border-yellow-400 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-800 text-sm">2. 인적 자본 (Talent)</span>
              <span className="text-[10px] font-bold bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">6.0 (보통)</span>
            </div>
            <div className="space-y-1.5">
               <div className="flex gap-1.5 items-start">
                  <ThumbsUp size={12} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">대규모 리터러시 교육 및 SENA 실무 교육 활발</p>
               </div>
               <div className="flex gap-1.5 items-start">
                  <AlertTriangle size={12} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">자체 모델 개발 가능한 고급 엔지니어링 인력 부족</p>
               </div>
            </div>
          </div>

          {/* 1. 디지털 인프라 (Low) */}
          <div className="bg-white p-3 rounded-xl border-l-4 border-red-400 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-800 text-sm">1. 디지털 인프라 (Infra)</span>
              <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded">4.8 (취약)</span>
            </div>
             <div className="space-y-1.5">
               <div className="flex gap-1.5 items-start">
                  <ThumbsUp size={12} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">높은 전자정부 지수 및 정부 주도 연결성 개선</p>
               </div>
               <div className="flex gap-1.5 items-start">
                  <AlertTriangle size={12} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight font-semibold">GPU/HPC 자원 결핍 및 도농 간 인프라 격차</p>
               </div>
            </div>
          </div>

          {/* 5. LLM 및 주권 (Low) */}
          <div className="bg-white p-3 rounded-xl border-l-4 border-red-500 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-800 text-sm">5. LLM 및 데이터 주권</span>
              <span className="text-[10px] font-bold bg-red-100 text-red-700 px-2 py-0.5 rounded">4.0 (취약)</span>
            </div>
             <div className="space-y-1.5">
               <div className="flex gap-1.5 items-start">
                  <ThumbsUp size={12} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">데이터 주권 확보 로드맵 및 국유 데이터센터 추진</p>
               </div>
               <div className="flex gap-1.5 items-start">
                  <ThumbsDown size={12} className="text-red-400 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">파운데이션 모델 부재 및 통합 데이터 플랫폼 미비</p>
               </div>
            </div>
          </div>

           {/* 4. 혁신 생태계 (Very Low) */}
          <div className="bg-white p-3 rounded-xl border-l-4 border-red-600 shadow-sm hover:shadow-md transition-shadow">
             <div className="flex justify-between items-center mb-2">
              <span className="font-bold text-slate-800 text-sm">4. 혁신 생태계 (Ecosystem)</span>
              <span className="text-[10px] font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded">2.9 (매우 취약)</span>
            </div>
             <div className="space-y-1.5">
               <div className="flex gap-1.5 items-start">
                  <ThumbsUp size={12} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight">규제 샌드박스 및 초기 공공 파일럿 프로젝트</p>
               </div>
               <div className="flex gap-1.5 items-start">
                  <AlertTriangle size={12} className="text-red-600 mt-0.5 shrink-0" />
                  <p className="text-[11px] text-slate-600 leading-tight font-semibold">민간 R&D 투자 저조 및 기술 산출물(특허 등) 부족</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </SlideLayout>
  );
};

export default KairatSlide;