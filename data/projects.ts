import { ProjectItem } from '@/types/solar';

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: 'west-bengal-utility-solar',
    name: '50 MW Ground-Mounted Solar Farm',
    category: 'utility',
    location: 'West Bengal',
    capacity: '50 MW',
    annualGeneration: '82.5 GWh',
    co2Reduction: '74,250 Tons/Yr',
    completionYear: '2025',
    imageUrl: '/hero-solar-farm.jpg',
    description: 'Utility-scale solar power project featuring single-axis tracking systems and 132kV grid substation integration.',
    highlights: ['Single-Axis Tracking System', '132kV Grid Substation', 'Completed 3 Weeks Ahead of Schedule']
  },
  {
    id: 'gujarat-textile-industrial-solar',
    name: '12 MW Industrial Park Rooftop Solar',
    category: 'industrial',
    location: 'Gujarat Industrial Belt',
    capacity: '12 MW',
    annualGeneration: '19.8 GWh',
    co2Reduction: '17,820 Tons/Yr',
    completionYear: '2024',
    imageUrl: '/about-solar-team.jpg',
    description: 'Heavy-duty industrial rooftop system across 4 manufacturing units with zero disruption to active textile production.',
    highlights: ['Special Anti-Corrosion Coating', 'SCADA Integration', '38% Energy Cost Reduction']
  },
  {
    id: 'pune-tech-park-commercial-solar',
    name: '2.5 MW Tech Park Solar Carport & Roof',
    category: 'commercial',
    location: 'Pune Tech Park',
    capacity: '2.5 MW',
    annualGeneration: '4.1 GWh',
    co2Reduction: '3,690 Tons/Yr',
    completionYear: '2024',
    imageUrl: '/commercial-solar.jpg',
    description: 'Integrated solar carport and rooftop solution with EV charging stations for corporate headquarters.',
    highlights: ['EV Charging Hub Integration', 'Architectural Glass-Glass Panels', 'LEED Platinum Certification Contribution']
  },
  {
    id: 'bengaluru-luxury-estate-solar',
    name: '150 kW Hybrid Residential Estate',
    category: 'residential',
    location: 'Bengaluru',
    capacity: '150 kW',
    annualGeneration: '240 MWh',
    co2Reduction: '215 Tons/Yr',
    completionYear: '2025',
    imageUrl: '/commercial-solar.jpg',
    description: 'Microgrid residential solar estate with 300 kWh Lithium battery backup and automated smart home energy routing.',
    highlights: ['300 kWh LFP Battery Backup', 'Zero Grid Interruption Guarantee', 'Smart Mobile App Telemetry']
  }
];
