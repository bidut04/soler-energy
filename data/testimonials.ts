import { Testimonial, Certification } from '@/types/solar';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    clientName: 'Rajesh Sharma',
    role: 'VP Infrastructure & Operations',
    company: 'Vanguard Logistics & Warehousing',
    projectType: '3.5 MW Industrial Rooftop Solar',
    quote: 'SolarNext engineered and commissioned our 3.5 MW rooftop plant with precision. Our factory monthly power bill dropped by 42% in the first quarter alone, and their SCADA monitoring is outstanding.',
    rating: 5,
    location: 'Gujarat, India',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    impactMetric: '42%',
    impactLabel: 'Energy Cost Reduction',
    verified: true
  },
  {
    id: '2',
    clientName: 'Dr. Ananya Roy',
    role: 'Director of Facilities',
    company: 'Apex Healthcare & Research Campus',
    projectType: '800 kW Commercial Solar System',
    quote: 'Executing an 800 kW solar installation above an operational multi-specialty hospital requires zero margin for error. SolarNext delivered flawless execution without disrupting medical equipment power.',
    rating: 5,
    location: 'Kolkata, India',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    impactMetric: '100%',
    impactLabel: 'Uptime Maintained',
    verified: true
  },
  {
    id: '3',
    clientName: 'Sunita Deshmukh',
    role: 'Head of Operations',
    company: 'Apex Auto Ancillaries Pvt Ltd',
    projectType: '1.8 MW On-Grid Industrial Solar',
    quote: 'The financial return was clear from day one. Their turnkey EPC service handled everything from CEIG approvals to grid synchronization seamlessly, achieving a 3.1 year ROI payback period.',
    rating: 5,
    location: 'Pune, Maharashtra',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200',
    impactMetric: '3.1 Yrs',
    impactLabel: 'Complete ROI Payback',
    verified: true
  },
  {
    id: '4',
    clientName: 'Arvind Kothari',
    role: 'Managing Director',
    company: 'Heritage Textiles & Garments',
    projectType: '2.2 MW Solar Power Plant',
    quote: 'Power quality and voltage stability are critical for automated textile looms. SolarNext’s high-efficiency Tier-1 panels and inverter array have eliminated generator dependency during peak shifts.',
    rating: 5,
    location: 'Surat, Gujarat',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    impactMetric: '₹1.4 Cr',
    impactLabel: 'Annual Power Savings',
    verified: true
  },
  {
    id: '5',
    clientName: 'Vikram & Meera Singhania',
    role: 'Homeowners & Estate Owners',
    company: 'Green Valley Villas',
    projectType: '15 kW Hybrid Residential Solar',
    quote: 'From net-metering permits to mobile app setup, SolarNext made our transition to solar effortless. Our electricity bills are virtually zero, and our power backup during storms is seamless.',
    rating: 5,
    location: 'Bengaluru, Karnataka',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200',
    impactMetric: '99%',
    impactLabel: 'Grid Bill Offset',
    verified: true
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: 'iso-9001',
    name: 'ISO 9001:2015',
    issuer: 'International Organization for Standardization',
    description: 'Certified Quality Management System for Solar Engineering & Construction.',
    badgeText: 'Quality System Certified'
  },
  {
    id: 'iec-61215',
    name: 'IEC 61215 / IEC 61730',
    issuer: 'TÜV Rheinland / International Electrotechnical Commission',
    description: 'Design qualification, safety, and durability certification for PV modules.',
    badgeText: 'International PV Safety'
  },
  {
    id: 'tier-1-manufacturer',
    name: 'Tier-1 Component Partner',
    issuer: 'BloombergNEF Rated Manufacturers',
    description: 'Direct procurement partnerships with BloombergNEF Tier-1 solar panel manufacturers.',
    badgeText: 'Tier-1 Direct Supply'
  },
  {
    id: 'clean-energy-council',
    name: 'Certified Solar Engineering EPC',
    issuer: 'National Electrical & Renewable Council',
    description: 'Licensed utility-scale electrical contractor and engineering provider.',
    badgeText: 'Licensed EPC Contractor'
  }
];

export const COMPANY_HERO_STATS = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Projects Completed', value: '50+' },
  { label: 'Installed Capacity', value: '25 MW+' },
  { label: 'Customer Satisfaction', value: '98%' }
];

export const ENVIRONMENTAL_IMPACT_STATS = [
  { label: 'Clean Energy Capacity', value: '25+ MW', subtext: 'Installed across commercial & utility sites' },
  { label: 'Clean Energy Generated', value: '110+ GWh', subtext: 'Total cumulative power delivered' },
  { label: 'CO₂ Emissions Avoided', value: '95,000+ Tons', subtext: 'Equivalent to planting 1.5 million trees' }
];
