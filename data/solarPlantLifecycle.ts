import { LifecycleStage } from '@/types/solar';

export const SOLAR_PLANT_LIFECYCLE: LifecycleStage[] = [
  {
    step: '01',
    title: 'Site Assessment',
    shortDesc: 'Topographic, irradiation, solar resource, and geotechnical evaluation of target land area.',
    detailedDesc: 'Conducting high-precision drone mapping, solar irradiance analysis, soil resistivity tests, and grid capacity assessment to determine optimal plant layout and ROI.',
    deliverables: ['Irradiance Report', 'Topographic Contour Maps', 'Grid Feasibility Analysis']
  },
  {
    step: '02',
    title: 'Engineering & Design',
    shortDesc: 'Custom electrical, civil, and structural engineering optimized for maximum yield.',
    detailedDesc: 'Designing high-efficiency electrical layouts, string configurations, structural mounting systems, and high-voltage transmission lines using PVSyst and AutoCAD.',
    deliverables: ['Detailed Single-Line Diagram (SLD)', '3D Shadow Analysis', 'PVSyst Yield Simulation']
  },
  {
    step: '03',
    title: 'Procurement',
    shortDesc: 'Sourcing Tier-1 BloombergNEF rated solar modules, inverters, and transformers.',
    detailedDesc: 'Leveraging global supply chain partnerships to procure IEC-certified modules, central/string inverters, SCADA systems, and galvanized steel mounting structures at competitive costs.',
    deliverables: ['Tier-1 Bill of Materials (BOM)', 'Quality Assurance Certificates', 'Factory Inspection Reports']
  },
  {
    step: '04',
    title: 'Installation',
    shortDesc: 'Civil foundation work, piling, module mounting, and cabling by certified engineers.',
    detailedDesc: 'Executing pile driving, structural mounting, solar module stringing, DC/AC cabling, and inverter station installation following rigorous safety and quality standards.',
    deliverables: ['Civil & Structural Sign-off', 'Cable Insulation Test Reports', 'Safety Audit Compliance']
  },
  {
    step: '05',
    title: 'Commissioning',
    shortDesc: 'Pre-commissioning testing, grid synchronisation, and utility inspection approval.',
    detailedDesc: 'Performing insulation resistance testing, thermal imaging, relay calibration, and seamless synchronization with local transmission utilities for commercial operation.',
    deliverables: ['Grid Interconnection Approval', 'COD (Commercial Operation Date) Certificate', 'Yield Baseline Validation']
  },
  {
    step: '06',
    title: 'Operations & Maintenance',
    shortDesc: '24/7 SCADA telemetry, robotic panel cleaning, and preventive field maintenance.',
    detailedDesc: 'Providing round-the-clock remote plant monitoring, regular robotic panel washing, thermographic drone inspections, and guaranteed 99%+ plant uptime contracts.',
    deliverables: ['24/7 SCADA Dashboard Access', 'Monthly Yield Analytics', 'Guaranteed PR (Performance Ratio)']
  }
];

export const SOLAR_PLANT_FEATURED_METRICS = {
  capacity: '50 MW',
  annualGeneration: '82.5 GWh',
  co2Reduction: '74,250 Tons',
  homesPowered: '45,000+',
  location: 'West Bengal Solar Energy Hub'
};
