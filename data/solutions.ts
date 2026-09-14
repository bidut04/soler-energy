import { SolarSolution } from '@/types/solar';

export const SOLAR_SOLUTIONS: SolarSolution[] = [
  {
    id: 'residential-solar',
    title: 'Residential Solar',
    shortDescription: 'Clean and reliable solar energy for homes.',
    fullDescription: 'Custom-designed rooftop solar panel systems built to power modern homes reliably while slashing monthly electricity bills by up to 90%. Includes grid-tied and hybrid battery backup options.',
    category: 'residential',
    capacityRange: '3 kW - 15 kW',
    iconName: 'Home',
    imageUrl: '/commercial-solar.jpg',
    keyBenefits: [
      'Save up to 90% on monthly electric bills',
      '25-year linear performance warranty',
      'Smart app monitoring for real-time generation insights',
      'Net-metering setup with local utility provider'
    ],
    idealFor: 'Single family homes, villas, housing societies, and residential estates.'
  },
  {
    id: 'commercial-solar',
    title: 'Commercial Solar',
    shortDescription: 'Reduce operating costs with intelligent solar solutions.',
    fullDescription: 'High-efficiency rooftop and carport solar installations tailored for commercial buildings, retail centers, offices, and educational institutions looking to lower OPEX and achieve ESG targets.',
    category: 'commercial',
    capacityRange: '20 kW - 500 kW',
    iconName: 'Building2',
    imageUrl: '/commercial-solar.jpg',
    keyBenefits: [
      'Rapid ROI within 3 to 4 years',
      'Accelerated depreciation & tax benefits',
      'Peak load shaving & demand charge reduction',
      'Zero-downtime rooftop installation process'
    ],
    idealFor: 'Commercial offices, shopping malls, hospitals, hotels, and schools.'
  },
  {
    id: 'industrial-solar',
    title: 'Industrial Solar',
    shortDescription: 'High-capacity systems designed for industrial energy requirements.',
    fullDescription: 'Heavy-duty solar energy infrastructure engineered for manufacturing plants, warehouses, cold storage facilities, and textile mills demanding continuous high-voltage power.',
    category: 'industrial',
    capacityRange: '500 kW - 10 MW',
    iconName: 'Factory',
    imageUrl: '/about-solar-team.jpg',
    keyBenefits: [
      'High-durability structures for aggressive industrial environments',
      'Harmonic mitigation & power factor stabilization',
      'Custom PPA (Power Purchase Agreement) options available',
      '24/7 telemetry monitoring & preventive maintenance'
    ],
    idealFor: 'Factories, warehouses, cold storages, chemical processing & heavy machinery plants.'
  },
  {
    id: 'utility-solar-plants',
    title: 'Solar Power Plants',
    shortDescription: 'End-to-end engineering and implementation of large-scale solar projects.',
    fullDescription: 'Turnkey Utility-Scale EPC (Engineering, Procurement, and Construction) services for ground-mounted solar farms and megawatt-scale solar installations connected directly to high-voltage grids.',
    category: 'utility',
    capacityRange: '10 MW - 250 MW+',
    iconName: 'Zap',
    imageUrl: '/hero-solar-farm.jpg',
    keyBenefits: [
      'Full land acquisition, civil, and grid integration EPC',
      'Bifacial solar panels & single-axis tracking systems',
      'Substation construction & high-voltage grid interconnection',
      'Comprehensive SCADA & predictive analytics platform'
    ],
    idealFor: 'Independent Power Producers (IPPs), government tenders, and utility companies.'
  }
];
