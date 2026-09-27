import { IconName } from '../shared/icon';

export type SectorId = 'construction' | 'mep' | 'hospitality' | 'logistics' | 'supervision';

export interface Sector {
  id: SectorId;
  name: string;
  short: string;
  icon: IconName;
  summary: string;
  roles: string[];
  workforce: number;
}

export interface EngagementModel {
  title: string;
  icon: IconName;
  summary: string;
  points: string[];
}

export type Availability = 'Available now' | 'In KSA · transferable' | 'Overseas · 30–45 days';

export interface Candidate {
  id: string;
  name: string;
  trade: string;
  sector: SectorId;
  nationality: string;
  experienceYears: number;
  gccExperienceYears: number;
  availability: Availability;
  languages: string[];
  certifications: string[];
}

export interface Job {
  id: string;
  title: string;
  sector: SectorId;
  city: string;
  headcount: number;
  salary: string;
  contract: string;
  postedDaysAgo: number;
  perks: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Office {
  city: string;
  country: string;
  role: string;
  address: string;
  phone: string;
}
