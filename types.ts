import React from 'react';

export enum SlideType {
  INTRO = 'INTRO',
  INTERVIEW = 'INTERVIEW',
  KAIRAT = 'KAIRAT',
  ODA_STRATEGY = 'ODA_STRATEGY',
  ODA_LIST = 'ODA_LIST',
  PCP_PLAN = 'PCP_PLAN',
}

export interface MenuItem {
  id: SlideType;
  label: string;
  subLabel?: string;
  icon?: React.ReactNode;
}

export interface KairatData {
  subject: string;
  A: number;
  fullMark: number;
}