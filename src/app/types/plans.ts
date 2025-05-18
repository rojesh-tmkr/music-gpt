export interface PlanData {
  featureDescriptions: Record<string, { title: string; description: string }>;
  features: string[];
  monthlyPrice: string;
  yearlyPrice: string;
  buttonText: string;
  selectedTab: 'Plus' | 'Pro' | 'Ultra';
}

export type PlanType = 'Plus' | 'Pro' | 'Ultra'; 