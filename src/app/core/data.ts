/*
 * DUMMY CONTENT — every figure, name, office and vacancy below is placeholder
 * data for layout purposes. Replace with real Captain Manpower content (or
 * swap this file for an HTTP service) before going live.
 */
import { Candidate, EngagementModel, Job, Office, Sector, Stat } from './models';

export const COMPANY = {
  name: 'Captain Manpower',
  parent: 'Captain International Alliance',
  tagline: 'Skilled hands, deployed on time.',
  email: 'hello@captainmanpower.example',
  phone: '+966 11 000 0000',
  whatsapp: '+966 50 000 0000',
  crNumber: '10100XXXXX',
  licence: 'MHRSD recruitment licence #XXXX',
};

export const SECTORS: Sector[] = [
  {
    id: 'construction',
    name: 'Construction & Civil',
    short: 'Construction',
    icon: 'hardhat',
    summary: 'Trade-tested crews for building, infrastructure and giga-project sites, mobilised as full gangs with a foreman.',
    roles: ['Masons', 'Steel fixers', 'Shuttering carpenters', 'Scaffolders', 'Welders', 'Equipment operators'],
    workforce: 5200,
  },
  {
    id: 'mep',
    name: 'MEP & Industrial',
    short: 'MEP',
    icon: 'bolt',
    summary: 'Certified electrical, mechanical and plumbing technicians for fit-out, plant shutdowns and maintenance contracts.',
    roles: ['Electricians', 'HVAC technicians', 'Pipe fitters', 'Plumbers', 'Instrument technicians', 'Duct fabricators'],
    workforce: 2800,
  },
  {
    id: 'hospitality',
    name: 'Hospitality & Facility',
    short: 'Hospitality',
    icon: 'building',
    summary: 'Front- and back-of-house staff for hotels, camps, malls and facility management contracts, trained to brand standard.',
    roles: ['Housekeeping', 'Cleaners', 'Commis & chefs', 'Waiters', 'Security guards', 'Laundry attendants'],
    workforce: 2300,
  },
  {
    id: 'logistics',
    name: 'Logistics & Drivers',
    short: 'Logistics',
    icon: 'truck',
    summary: 'Licensed heavy and light drivers, forklift operators and warehouse teams for 3PL, retail and cargo operations.',
    roles: ['Heavy drivers', 'Light drivers', 'Forklift operators', 'Storekeepers', 'Warehouse helpers', 'Loaders'],
    workforce: 1500,
  },
  {
    id: 'supervision',
    name: 'Engineering & Supervision',
    short: 'Supervision',
    icon: 'clipboard',
    summary: 'Site engineers, foremen and HSE officers who keep supplied crews productive, compliant and reporting daily.',
    roles: ['Site engineers', 'Foremen', 'HSE officers', 'QA/QC inspectors', 'Surveyors', 'Planners'],
    workforce: 600,
  },
];

export const ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    title: 'Outsourced manpower',
    icon: 'users',
    summary: 'Workers stay on our sponsorship and payroll. You pay one monthly invoice per head.',
    points: ['Iqama, GOSI and medical insurance handled', 'Replacements within 72 hours', 'Monthly, quarterly or project terms'],
  },
  {
    title: 'Overseas recruitment',
    icon: 'globe',
    summary: 'We source, trade-test and process visas for workers you hire directly onto your own sponsorship.',
    points: ['Trade tests at our sourcing centres', 'Musaned & Qiwa processing', '90-day free replacement guarantee'],
  },
  {
    title: 'Project crews',
    icon: 'hardhat',
    summary: 'Complete gangs with a foreman and tools, mobilised to a package of work rather than a headcount.',
    points: ['Crew sized to your programme', 'Daily productivity reporting', 'Demobilise cleanly at handover'],
  },
  {
    title: 'Seasonal & peak',
    icon: 'clock',
    summary: 'Short-notice teams for Ramadan, Hajj & Umrah, events and retail peaks, already in the Kingdom.',
    points: ['Mobilise in 5–10 days', 'Minimum 1-month terms', 'Accommodation & transport included'],
  },
];

export const STATS: Stat[] = [
  { value: '12,400+', label: 'Workers deployed since 2014' },
  { value: '21 days', label: 'Average overseas mobilisation' },
  { value: '14', label: 'Source countries' },
  { value: '96%', label: 'Contract renewal rate' },
];

export const PROCESS = [
  { step: '01', title: 'Brief', text: 'Share trades, headcount, site and start date. We confirm rates within 24 hours.' },
  { step: '02', title: 'Shortlist', text: 'Profiles, trade-test videos and certificates from our pool or overseas centres.' },
  { step: '03', title: 'Mobilise', text: 'Visas, medicals, flights, iqama and induction — handled end to end.' },
  { step: '04', title: 'Manage', text: 'Payroll, accommodation, transport and replacements, with one monthly invoice.' },
];

export const CANDIDATES: Candidate[] = [
  { id: 'CM-10421', name: 'Arjun Nair', trade: 'Electrician (Industrial)', sector: 'mep', nationality: 'India', experienceYears: 9, gccExperienceYears: 6, availability: 'In KSA · transferable', languages: ['English', 'Hindi', 'Malayalam'], certifications: ['SCE registered', 'LOTO'] },
  { id: 'CM-10438', name: 'Ramon Dela Cruz', trade: 'HVAC Technician', sector: 'mep', nationality: 'Philippines', experienceYears: 7, gccExperienceYears: 4, availability: 'Available now', languages: ['English', 'Tagalog'], certifications: ['EPA 608', 'Chiller maintenance'] },
  { id: 'CM-10452', name: 'Bishnu Thapa', trade: 'Steel Fixer', sector: 'construction', nationality: 'Nepal', experienceYears: 11, gccExperienceYears: 8, availability: 'Overseas · 30–45 days', languages: ['Nepali', 'Hindi', 'Basic Arabic'], certifications: ['Trade test grade A'] },
  { id: 'CM-10467', name: 'Mohammed Rafiq', trade: 'Heavy Driver', sector: 'logistics', nationality: 'Pakistan', experienceYears: 12, gccExperienceYears: 10, availability: 'In KSA · transferable', languages: ['Urdu', 'Arabic', 'English'], certifications: ['Saudi heavy licence', 'Defensive driving'] },
  { id: 'CM-10473', name: 'Samuel Mensah', trade: 'Security Guard', sector: 'hospitality', nationality: 'Ghana', experienceYears: 5, gccExperienceYears: 2, availability: 'Available now', languages: ['English'], certifications: ['First aid', 'Crowd management'] },
  { id: 'CM-10489', name: 'Kamal Hossain', trade: 'Mason', sector: 'construction', nationality: 'Bangladesh', experienceYears: 8, gccExperienceYears: 5, availability: 'Overseas · 30–45 days', languages: ['Bengali', 'Hindi'], certifications: ['Trade test grade A'] },
  { id: 'CM-10495', name: 'Maria Santos', trade: 'Housekeeping Supervisor', sector: 'hospitality', nationality: 'Philippines', experienceYears: 10, gccExperienceYears: 7, availability: 'Available now', languages: ['English', 'Tagalog'], certifications: ['5-star hotel training'] },
  { id: 'CM-10502', name: 'Ahmed El-Sayed', trade: 'Site Engineer (Civil)', sector: 'supervision', nationality: 'Egypt', experienceYears: 8, gccExperienceYears: 5, availability: 'In KSA · transferable', languages: ['Arabic', 'English'], certifications: ['SCE registered', 'PMP'] },
  { id: 'CM-10516', name: 'Suresh Kumar', trade: 'Pipe Fitter', sector: 'mep', nationality: 'India', experienceYears: 13, gccExperienceYears: 9, availability: 'Overseas · 30–45 days', languages: ['English', 'Tamil', 'Hindi'], certifications: ['Aramco approved', 'Rigging'] },
  { id: 'CM-10528', name: 'Dilip Rai', trade: 'Scaffolder', sector: 'construction', nationality: 'Nepal', experienceYears: 6, gccExperienceYears: 3, availability: 'Available now', languages: ['Nepali', 'Hindi'], certifications: ['CITB scaffolding', 'Working at height'] },
  { id: 'CM-10534', name: 'Joseph Kariuki', trade: 'Forklift Operator', sector: 'logistics', nationality: 'Kenya', experienceYears: 4, gccExperienceYears: 3, availability: 'In KSA · transferable', languages: ['English', 'Swahili'], certifications: ['TÜV forklift', 'Warehouse safety'] },
  { id: 'CM-10547', name: 'Imran Qureshi', trade: 'HSE Officer', sector: 'supervision', nationality: 'Pakistan', experienceYears: 9, gccExperienceYears: 7, availability: 'Available now', languages: ['English', 'Urdu', 'Arabic'], certifications: ['NEBOSH IGC', 'OSHA 30'] },
];

export const JOBS: Job[] = [
  { id: 'J-2091', title: 'Shuttering Carpenter', sector: 'construction', city: 'NEOM', headcount: 40, salary: 'SAR 1,800–2,200', contract: '2 years', postedDaysAgo: 2, perks: ['Accommodation', 'Transport', 'Food allowance'] },
  { id: 'J-2088', title: 'Industrial Electrician', sector: 'mep', city: 'Jubail', headcount: 25, salary: 'SAR 2,500–3,200', contract: '2 years', postedDaysAgo: 3, perks: ['Accommodation', 'Transport', 'Overtime'] },
  { id: 'J-2084', title: 'Hotel Room Attendant', sector: 'hospitality', city: 'Makkah', headcount: 60, salary: 'SAR 1,500–1,700', contract: '1 year', postedDaysAgo: 4, perks: ['Accommodation', 'Meals', 'Uniform'] },
  { id: 'J-2079', title: 'Heavy Trailer Driver', sector: 'logistics', city: 'Dammam', headcount: 15, salary: 'SAR 3,000–3,600', contract: '2 years', postedDaysAgo: 6, perks: ['Accommodation', 'Trip allowance'] },
  { id: 'J-2075', title: 'HVAC Technician', sector: 'mep', city: 'Riyadh', headcount: 12, salary: 'SAR 2,400–3,000', contract: '2 years', postedDaysAgo: 7, perks: ['Accommodation', 'Transport', 'Medical'] },
  { id: 'J-2070', title: 'Steel Fixer', sector: 'construction', city: 'Riyadh', headcount: 50, salary: 'SAR 1,700–2,100', contract: '2 years', postedDaysAgo: 9, perks: ['Accommodation', 'Transport', 'Overtime'] },
  { id: 'J-2066', title: 'HSE Officer', sector: 'supervision', city: 'Jeddah', headcount: 4, salary: 'SAR 6,000–8,000', contract: '2 years', postedDaysAgo: 11, perks: ['Housing allowance', 'Annual ticket'] },
  { id: 'J-2061', title: 'Warehouse Storekeeper', sector: 'logistics', city: 'Jeddah', headcount: 8, salary: 'SAR 2,200–2,600', contract: '1 year', postedDaysAgo: 14, perks: ['Accommodation', 'Transport'] },
];

export const OFFICES: Office[] = [
  { city: 'Riyadh', country: 'Saudi Arabia', role: 'Head office', address: 'King Fahd Road, Al Olaya District', phone: '+966 11 000 0000' },
  { city: 'Jeddah', country: 'Saudi Arabia', role: 'Western region', address: 'Prince Sultan Street, Al Zahra', phone: '+966 12 000 0000' },
  { city: 'Dammam', country: 'Saudi Arabia', role: 'Eastern region', address: 'King Saud Street, Al Faisaliyah', phone: '+966 13 000 0000' },
  { city: 'Manila', country: 'Philippines', role: 'Sourcing centre', address: 'Ermita, Manila', phone: '+63 2 0000 0000' },
  { city: 'Kathmandu', country: 'Nepal', role: 'Sourcing centre', address: 'Putalisadak, Kathmandu', phone: '+977 1 000 0000' },
  { city: 'Kochi', country: 'India', role: 'Trade-test centre', address: 'Edappally, Kochi', phone: '+91 484 000 0000' },
];

export const COMPLIANCE = [
  { title: 'Iqama & visas', text: 'Work visas, iqama issuance and renewals, exit re-entry and final exit.' },
  { title: 'Qiwa & Musaned', text: 'Contract authentication and transfer of sponsorship processed on the platforms.' },
  { title: 'GOSI & WPS', text: 'Social insurance registration and wage protection payroll every month.' },
  { title: 'Saudization mix', text: 'Nitaqat-aware staffing plans so your own quota stays in the green.' },
];

export function sectorName(id: string): string {
  return SECTORS.find((s) => s.id === id)?.short ?? id;
}
