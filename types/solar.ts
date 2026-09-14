export type SolutionCategory = 'residential' | 'commercial' | 'industrial' | 'utility';

export interface SolarSolution {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: SolutionCategory;
  capacityRange: string;
  iconName: string;
  imageUrl: string;
  keyBenefits: string[];
  idealFor: string;
}

export interface LifecycleStage {
  step: string;
  title: string;
  shortDesc: string;
  detailedDesc: string;
  deliverables: string[];
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl: string;
  specs: { label: string; value: string }[];
  keyBrands: string[];
}

export interface ProjectItem {
  id: string;
  name: string;
  category: SolutionCategory;
  location: string;
  capacity: string;
  annualGeneration: string;
  co2Reduction: string;
  completionYear: string;
  imageUrl: string;
  description: string;
  highlights: string[];
}

export interface TrustBenefit {
  id: string;
  title: string;
  description: string;
  iconName: string;
  imageUrl?: string;
  colorVariant?: 'emerald' | 'blue';
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  description: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  company: string;
  projectType: string;
  quote: string;
  rating: number;
  location: string;
  avatarUrl?: string;
  companyLogo?: string;
  impactMetric?: string;
  impactLabel?: string;
  verified?: boolean;
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  description: string;
  badgeText: string;
}

export interface CalculatorInput {
  propertyType: SolutionCategory;
  monthlyBill: number;
  roofAreaSqFt: number;
  sunlightHours: number;
  locationState: string;
}

export interface CalculatorResult {
  recommendedCapacityKw: number;
  estimatedPanelsCount: number;
  estimatedAnnualSavings: number;
  estimatedCO2AvoidedTons: number;
  estimatedInvestmentRange: string;
  paybackPeriodYears: number;
}

export interface QuoteFormData {
  fullName: string;
  email: string;
  phone: string;
  projectType: SolutionCategory;
  propertyAddress: string;
  estimatedMonthlyBill: string;
  timeline: 'immediate' | '1-3-months' | '3-6-months' | 'exploring';
  additionalDetails?: string;
}
