import React from 'react';
import SlideLayout from './SlideLayout';
import { Building2, Globe, GraduationCap, Factory, Leaf, Server, FileBarChart, Handshake, Lightbulb } from 'lucide-react';

interface InterviewCardProps {
  icon: React.ReactNode;
  title: string;
  date: string;
  points: string[];
  colorClass: string;
}

const InterviewCard: React.FC<InterviewCardProps> = ({ icon, title, date, points, colorClass }) => (
  <div className={`p-4 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col h-full ${colorClass}`}>
    <div className="flex justify-between items-start mb-2">
      <div className="flex items-center gap-2">
        <div className="p-1.5 rounded-lg bg-slate-100 text-slate-600">
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-bold text-slate-800 leading-tight">{title}</h3>
          <span className="text-[10px] text-slate-400 font-medium">{date}</span>
        </div>
      </div>
    </div>
    <ul className="flex-1 space-y-2 overflow-hidden">
      {points.map((point, idx) => (
        <li key={idx} className="flex gap-1.5 items-start text-[10px] text-slate-600 leading-snug">
          <span className="mt-0.5 w-1 h-1 rounded-full bg-slate-400 shrink-0"></span>
          <span className="break-keep">{point}</span>
        </li>
      ))}
    </ul>
  </div>
);

const InterviewSlide: React.FC = () => {
  const interviews = [
    {
      title: "MinTIC (정보통신부)",
      date: "2026.01.28",
      icon: <Server size={16} />,
      points: [
        "Cloud to Physical: 2027년까지 우스메/지파키라에 자체 물리 데이터센터 구축 추진 (데이터 주권 확보)",
        "단순 활용 교육을 넘어, 자체 모델 개발(Develop)을 위한 엔지니어링 역량 및 H/W 인프라 지원 요청"
      ]
    },
    {
      title: "DNP (국가기획청)",
      date: "2026.01.29",
      icon: <FileBarChart size={16} />,
      points: [
        "SISCONPES를 통한 정책 이행의 정량적 모니터링 수행하나 담당자 잦은 교체가 리스크",
        "범정부 단일 빅데이터 플랫폼 부재, 부처 간 데이터 공유가 시스템이 아닌 협약 기반으로 진행됨"
      ]
    },
    {
      title: "IDB (미주개발은행)",
      date: "2026.01.29",
      icon: <Globe size={16} />,
      points: [
        "잦은 인력 교체(High Turnover)로 인한 정책 연속성 부족, 생태계 전반을 아우르는 접근 필요",
        "거대 LLM 자체 개발보다는 기존 기술을 도입하여 공공 서비스에 적용하는 '활용' 역량 우선"
      ]
    },
    {
      title: "APC (국제협력청)",
      date: "2026.01.30",
      icon: <Handshake size={16} />,
      points: [
        "도농 간 극심한 디지털 격차 고려, 소외 지역에 대한 접근성 강화 필수",
        "ICT 협력 시 법무 검토 장기화 경향, 데이터 주권이 명확한 소규모 과제부터 단계적 확장 필요"
      ]
    },
    {
      title: "MinCiencias (과기부)",
      date: "2026.02.02",
      icon: <Factory size={16} />,
      points: [
        "'Colombia Inteligente'를 통해 환경/농업 등 지역 문제 해결을 위한 응용 연구 집중",
        "HPC 인프라 구축 및 여성 과학자 등 포용적 AI 인재 양성(Orquídeas) 주력"
      ]
    },
    {
      title: "SENA (직업훈련원)",
      date: "2026.02.03",
      icon: <GraduationCap size={16} />,
      points: [
        "연간 수만 명의 실무 인력 배출, 노동 시장과 기술 교육을 연결하는 핵심 파이프라인",
        "교육 질적 고도화를 위한 강사 양성(ToT) 및 GPU 서버 기반 실습 센터 구축 희망"
      ]
    },
    {
      title: "CAR (지역자율공사)",
      date: "2026.02.03",
      icon: <Leaf size={16} />,
      points: [
        "1,200만 건 환경 데이터 보유, 사후 대응에서 AI 기반 사전 예측/예방 시스템으로 전환 목표",
        "신규 하드웨어보다 기존 데이터를 통합한 '수지 분석(Water Balance) AI 모델' 개발 최우선"
      ]
    },
  ];

  return (
    <SlideLayout title="인터뷰 주요 결과" subtitle="Stakeholder In-depth Interviews Summary">
      <div className="grid grid-cols-4 grid-rows-2 gap-4 h-full">
        
        {interviews.map((interview, index) => (
          <InterviewCard 
            key={index}
            {...interview}
            colorClass="hover:border-blue-400"
          />
        ))}

        {/* 8th Box: Synthesis / Summary */}
        <div className="bg-slate-800 p-5 rounded-xl border border-slate-700 shadow-md flex flex-col justify-center relative overflow-hidden group">
           <div className="absolute right-0 top-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
           
           <div className="flex items-center gap-2 mb-3 z-10">
             <div className="p-1.5 bg-yellow-400 rounded-lg text-slate-900">
               <Lightbulb size={18} fill="currentColor" />
             </div>
             <h3 className="text-sm font-bold text-white">종합 시사점</h3>
           </div>
           
           <div className="space-y-3 z-10">
             <div>
               <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Key Challenge</div>
               <p className="text-xs text-slate-200 leading-snug">
                 강력한 정책 의지 대비 <span className="text-red-300 font-medium">인프라/데이터 부족</span> 및 <span className="text-red-300 font-medium">실무 역량(Dev) 결핍</span>
               </p>
             </div>
             <div>
               <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold mb-0.5">Strategic Fit</div>
               <p className="text-xs text-slate-200 leading-snug">
                 한국의 <span className="text-yellow-300 font-medium">데이터 댐 구축 경험</span>과 <span className="text-yellow-300 font-medium">공공 AI 레퍼런스</span> 전수
               </p>
             </div>
           </div>
        </div>

      </div>
    </SlideLayout>
  );
};

export default InterviewSlide;