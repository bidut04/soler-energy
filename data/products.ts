import { ProductCategory } from '@/types/solar';

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  {
    id: 'solar-panels',
    title: 'Solar Panels',
    description: 'High-efficiency TOPCon and Bifacial N-Type solar photovoltaic modules engineered for maximum yield.',
    iconName: 'Sun',
    imageUrl: '/hero-solar-farm.jpg',
    specs: [
      { label: 'Module Efficiency', value: 'Up to 22.8%' },
      { label: 'Power Output Range', value: '450W - 700W+' },
      { label: 'Degradation', value: '< 0.4% Annual' }
    ],
    keyBrands: ['JinkoSolar', 'Trina Solar', 'LONGi Solar', 'Canadian Solar']
  },
  {
    id: 'inverters',
    title: 'Inverters',
    description: 'Advanced string and central inverters delivering 99%+ conversion efficiency with grid-forming support.',
    iconName: 'Cpu',
    imageUrl: '/about-solar-team.jpg',
    specs: [
      { label: 'Peak Efficiency', value: '98.9%' },
      { label: 'Protection Rating', value: 'IP66 Waterproof' },
      { label: 'MPPT Tracking', value: 'Up to 12 Channels' }
    ],
    keyBrands: ['Huawei', 'Sungrow', 'SMA Solar', 'Fronius']
  },
  {
    id: 'battery-storage',
    title: 'Battery Storage',
    description: 'Modular LFP (Lithium Iron Phosphate) Energy Storage Systems (ESS) for commercial & utility resilience.',
    iconName: 'Battery',
    imageUrl: '/commercial-solar.jpg',
    specs: [
      { label: 'Chemistry', value: 'Safe LiFePO4 (LFP)' },
      { label: 'Cycle Life', value: '6,000+ Cycles @ 90% DOD' },
      { label: 'Scalability', value: '10 kWh to 50 MWh+' }
    ],
    keyBrands: ['BYD', 'CATL', 'Tesla Megapack', 'Sungrow ESS']
  },
  {
    id: 'mounting-structures',
    title: 'Mounting Structures',
    description: 'Hot-dip galvanized steel & aluminum mounting systems with optional single-axis solar trackers.',
    iconName: 'Layers',
    imageUrl: '/hero-solar-farm.jpg',
    specs: [
      { label: 'Wind Speed Resistance', value: 'Up to 180 km/h' },
      { label: 'Coating Protection', value: '80µm Hot-Dip Zinc' },
      { label: 'Tilt Options', value: 'Fixed / Single-Axis Tracker' }
    ],
    keyBrands: ['Nextracker', 'Array Technologies', 'Schletter', 'Unirac']
  },
  {
    id: 'monitoring-systems',
    title: 'Monitoring Systems',
    description: 'IoT-enabled SCADA telemetry and cloud dashboards for real-time generation and fault alerts.',
    iconName: 'BarChart3',
    imageUrl: '/commercial-solar.jpg',
    specs: [
      { label: 'Sampling Rate', value: 'Real-time (5 sec data)' },
      { label: 'Protocol Support', value: 'Modbus / IEC 61850' },
      { label: 'Alerting', value: 'SMS, Email, App Push' }
    ],
    keyBrands: ['SolarEdge', 'Schneider Electric', 'ABB Ability', 'PlantOps AI']
  },
  {
    id: 'electrical-equipment',
    title: 'Electrical Equipment',
    description: 'High-voltage switchgear, transformers, combiner boxes, and surge protection safety devices.',
    iconName: 'Zap',
    imageUrl: '/about-solar-team.jpg',
    specs: [
      { label: 'Voltage Range', value: '415V to 33kV Switchgear' },
      { label: 'Isolation', value: 'Class H Transformer' },
      { label: 'Safety Compliance', value: 'IEC 61439-1 Certified' }
    ],
    keyBrands: ['Siemens', 'Schneider Electric', 'ABB', 'Eaton']
  }
];
