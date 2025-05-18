import { NextResponse } from "next/server";
import { PlanData } from "@/app/types/plans";

export const revalidate = 3600; // Revalidate every hour

const plans: Record<'Plus' | 'Pro' | 'Ultra', PlanData> = {
  Plus: {
    featureDescriptions: {
      'Generate 1200 songs /year': {
        title: 'Get 5K credits /month',
        description: 'That equals to 100 full songs or instrumentals, and 40 sound effects generations.',
      },
      'Unlimited downloads': {
        title: '∞ Unlimited downloads',
        description: 'Download your own creations, and anything from our library in best quality at no cost.',
      },
      'Standard tool': {
        title: 'Core features',
        description: 'Access the basic toolset for music generation and editing.',
      },
      'Fast generation': {
        title: '⚡Fastlane queue',
        description: 'Get prioritized in the queue and enjoy lower waiting times.',
      },
      'Commercial use': {
        title: 'Commercial use',
        description: 'Use your creations in monetized projects or for business purposes.',
      },
    },
    features: [
      'Generate 1200 songs /year',
      'Unlimited downloads',
      'Standard tool',
      'Fast generation',
      'Commercial use'
    ],
    monthlyPrice: '$9.99',
    yearlyPrice: '$11.99',
    buttonText: 'Unlock Plus features →',
    selectedTab: 'Plus',
  },
  Pro: {
    featureDescriptions: {
      'Generate 6000 songs /year': {
        title: 'Get 25K credits /month',
        description: 'That equals to 500 full songs or instrumentals, and 200 sound effects generations.',
      },
      'Unlimited downloads': {
        title: '∞ Unlimited downloads',
        description: 'Download your own creations, and anything from our library in best quality at no cost.',
      },
      'Unlock all features': {
        title: 'Unlock all features',
        description: 'Gain access to all creative tools and advanced controls.',
      },
      'Fast generation': {
        title: '⚡Fast Generation',
        description: 'Skip the queue and get exclusive access our premium server infrastructure for faster generations.',
      },
      'Commercial use': {
        title: 'Commercial use',
        description: 'Use your creations in monetized projects or for business purposes.',
      },
    },
    features: [
      'Generate 6000 songs /year',
      'Unlimited downloads',
      'Unlock all features',
      'Fast generation',
      'Commercial use'
    ],
    monthlyPrice: '$16.99',
    yearlyPrice: '$21.99',
    buttonText: 'Unlock Pro features →',
    selectedTab: 'Pro',
  },
  Ultra: {
    featureDescriptions: {
      'Unlimited generations': {
        title: 'Unlimited credits',
        description: 'That equals to unlimited full songs or instrumentals, and unlimited sound effects generations.',
      },
      'Unlimited downloads': {
        title: '∞ Unlimited downloads',
        description: 'Download your own creations, and anything from our library in best quality at no cost.',
      },
      'Unlock all features': {
        title: 'Unlock all features',
        description: 'Gain access to all creative tools and advanced controls.',
      },
      'Fast generation': {
        title: '⚡Fast Generation',
        description: 'Skip the queue and get exclusive access our premium server infrastructure for faster generations.',
      },
      'Commercial use': {
        title: 'Commercial use',
        description: 'Use your creations in monetized projects or for business purposes.',
      },
    },
    features: [
      'Unlimited generations',
      'Unlimited downloads',
      'Unlock all features',
      'Fast generation',
      'Commercial use'
    ],
    monthlyPrice: '$32.99',
    yearlyPrice: '$49.99',
    buttonText: 'Unlock Ultra features →',
    selectedTab: 'Ultra',
  },
};

export async function GET() {
  return NextResponse.json(plans);
} 