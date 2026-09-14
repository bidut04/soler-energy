import { ProcessStep } from '@/types/solar';

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Tell Us Your Requirement',
    description: 'Share your property type, current monthly electricity bill, and energy targets through our online form or direct consultation.',
    detail: 'Initial phone consultation within 2 business hours to understand your specific energy needs.'
  },
  {
    stepNumber: '02',
    title: 'Site Survey & Engineering Assessment',
    description: 'Our engineers conduct on-site solar irradiance analysis, structural roof/land audit, and electrical load profiling.',
    detail: '3D drone scanning and precise shadow mapping for maximum solar yield.'
  },
  {
    stepNumber: '03',
    title: 'Custom System Design',
    description: 'We generate an optimal system engineering blueprint, PVSyst generation yield forecast, and ROI financial model.',
    detail: 'Choosing the right module efficiency, inverter sizing, and mounting tilt for your geography.'
  },
  {
    stepNumber: '04',
    title: 'Transparent Quotation & Agreement',
    description: 'Receive an itemized technical proposal detailing component specifications, warranties, payback period, and clear pricing.',
    detail: 'No hidden fees. Turnkey pricing includes all permits, net-metering, and utility paperwork.'
  },
  {
    stepNumber: '05',
    title: 'Professional Installation',
    description: 'Certified technicians execute mechanical mounting, module wiring, electrical safety interlocks, and inverter installation.',
    detail: 'Strict safety standards and rapid installation with minimal disruption to your daily operations.'
  },
  {
    stepNumber: '06',
    title: 'Testing & Grid Commissioning',
    description: 'Pre-commissioning quality checks, net-metering inspection, and utility grid sync to start generating clean energy.',
    detail: 'Comprehensive electrical testing and final utility inspection sign-off.'
  },
  {
    stepNumber: '07',
    title: '24/7 Monitoring & Maintenance',
    description: 'Instant mobile app telemetry, periodic preventive maintenance visits, and ongoing performance optimization.',
    detail: 'Real-time alerts and guaranteed uptime contracts to protect your long-term investment.'
  }
];
