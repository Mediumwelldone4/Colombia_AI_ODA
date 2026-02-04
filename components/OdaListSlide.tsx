import React from 'react';
import SlideLayout from './SlideLayout';
import { Star, CheckCircle2 } from 'lucide-react';

interface Project {
  id: number;
  category: string;
  title: string;
  desc: string;
  budget?: string;
}

const projects: Project[] = [
  {
    id: 1,
    category: "인적 자본 & 고용 (SENA)",
    title: "SENA 연계 산업 수요 기반 실무형 AI 엔지니어 양성",
    desc: "고급 엔지니어링 커리큘럼(S/W) 개발, 교관(ToT) 양성 및 클라우드 실습 플랫폼 구축",
  },
  {
    id: 2,
    category: "농업 & 지역 개발",
    title: "소농(Smallholder) 생산성 향상 데이터 기반 정밀농업 AI",
    desc: "토양/기상 데이터 분석 최적 파종 시기 추천 앱 개발 및 농민 디지털 리터러시 교육",
  },
  {
    id: 3,
    category: "환경 & 생물다양성",
    title: "아마존 및 생태계 보호 위성 데이터 분석/산림훼손 예측",
    desc: "위성/드론 데이터 기반 불법 벌채 실시간 탐지 시스템 및 탄소배출권 정책 자문",
  },
  {
    id: 4,
    category: "보건 & 의료",
    title: "의료 소외 지역 접근성 강화 AI 원격진료 및 판독 보조",
    desc: "X-ray/안저 영상 AI 1차 판독 지원 시스템(CDSS) 보급 및 의료 데이터 표준화",
  },
  {
    id: 5,
    category: "공공 행정 (거버넌스)",
    title: "범정부 데이터 상호운용성 확보 '데이터 허브' 및 DPG 컨설팅",
    desc: "부처 간 데이터 연계 API Gateway 구축 및 디지털플랫폼정부(DPG) ISP 수립",
  },
  {
    id: 6,
    category: "교통 & 도시",
    title: "주요 도시 교통 체증 완화 AI 지능형 교통 체계(ITS)",
    desc: "CCTV/교통량 분석 신호 최적화 시스템 시범 구축 및 대중교통 정책 자문",
  },
  {
    id: 7,
    category: "혁신 생태계 & 스타트업",
    title: "AI 스타트업 육성 한-콜 오픈 이노베이션 및 테스트베드",
    desc: "가상 실증 랩(Virtual Sandbox) 구축 및 한국형 팁스(TIPS) 벤치마킹 액셀러레이팅",
  },
  {
    id: 8,
    category: "교육 (공교육)",
    title: "공교육 격차 해소 AI 맞춤형 학습 분석 및 에듀테크 플랫폼",
    desc: "학생별 수준 진단 및 맞춤형 콘텐츠 추천 플랫폼, 교사 AI 활용 연수",
  },
  {
    id: 9,
    category: "수자원 & 환경 (CAR)",
    title: "쿤디나마르카 수자원 통합 관리 'AI 수지 분석' 시스템",
    desc: "1,200만 건 데이터 통합 플랫폼 및 물 공급/수요 예측(Water Balance) 모델 개발",
  },
  {
    id: 10,
    category: "사법 & 치안",
    title: "신속한 사법 처리를 위한 법률 문서 자동 분류/판례 검색",
    desc: "소송 서류 OCR 디지털화 및 유사 판례 추천 검색 시스템, 사법 데이터 보안 자문",
  },
];

const OdaListSlide: React.FC = () => {
  const shortListIds = [1, 7, 9];

  return (
    <SlideLayout title="콜롬비아 맞춤형 AI ODA 후보 사업 (Long-list)" subtitle="Priority Selection: Short List (Blue Highlighted)">
      <div className="grid grid-cols-2 grid-rows-5 gap-x-6 gap-y-3 h-full">
        {projects.map((project) => {
          const isShortList = shortListIds.includes(project.id);
          
          return (
            <div 
              key={project.id}
              className={`relative flex flex-col justify-center px-5 py-2.5 rounded-xl border transition-all ${
                isShortList 
                  ? 'bg-blue-50 border-blue-500 shadow-sm z-10' 
                  : 'bg-white border-slate-200 opacity-90 hover:opacity-100'
              }`}
            >
              {/* Short List Badge */}
              {isShortList && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-bl-lg flex items-center gap-1">
                  <Star size={10} fill="currentColor" />
                  Short List
                </div>
              )}

              <div className="flex items-center gap-2 mb-1">
                <div className={`flex items-center justify-center w-5 h-5 rounded-full text-[10px] font-bold shrink-0 ${
                  isShortList ? 'bg-blue-600 text-white' : 'bg-slate-200 text-slate-500'
                }`}>
                  {project.id}
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-tight ${
                  isShortList ? 'text-blue-600' : 'text-slate-400'
                }`}>
                  {project.category}
                </span>
              </div>

              <h3 className={`text-sm font-bold leading-tight mb-1 ${
                isShortList ? 'text-blue-900' : 'text-slate-700'
              }`}>
                {project.title}
              </h3>
              
              <p className="text-[11px] text-slate-500 leading-snug break-keep">
                {project.desc}
              </p>

              {isShortList && (
                 <div className="absolute bottom-2 right-3">
                    <CheckCircle2 size={14} className="text-blue-400 opacity-50" />
                 </div>
              )}
            </div>
          );
        })}
      </div>
    </SlideLayout>
  );
};

export default OdaListSlide;