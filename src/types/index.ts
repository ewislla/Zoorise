export interface RoadmapPhase {
  id: number;
  title: string;
  subtitle: string;
  description: string[];
  icon: string;
  completed: boolean;
}

export interface TokenomicsData {
  label: string;
  value: number;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
  count?: string;
}

export interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}