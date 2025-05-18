import React, { useState } from 'react';
import CommercialUse from './CommercialUse';
import UnlockAllFeatures from './UnlockAllFeatures';
import CoreFeatures from './CoreFeatures';
interface PlanData {
  featureDescriptions: Record<string, { title: string; description: string }>;
  features: string[];
  monthlyPrice: string;
  yearlyPrice: string;
  buttonText: string;
  selectedTab: 'Plus' | 'Pro' | 'Ultra';
}

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
        title: 'Fastlane queue',
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
        title: 'Fast Generation',
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
        title: 'Fast Generation',
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

const DynamicPricingModal: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<'Plus' | 'Pro' | 'Ultra'>('Pro');
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const data = plans[selectedPlan];
  const [selectedFeature, setSelectedFeature] = useState<string>(data.features[0]);

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  const left = data.featureDescriptions[selectedFeature];

  return (
    <div className="flex flex-col md:flex-row bg-zinc-900 text-white rounded-3xl overflow-hidden max-w-5xl w-full shadow-2xl">
      {/* Left */}
      <div className="bg-gradient-to-b from-blue-900 to-indigo-900 w-full md:w-1/2 flex flex-col justify-center items-center p-8 text-center">
        {left?.title === 'Commercial use' ? (
          <CommercialUse />
        ) : left?.title === 'Unlock all features' ? (
          <UnlockAllFeatures />
        ) : left?.title === 'Core features' ? (
          <CoreFeatures />
        ) : (
          <>
            <h2 className="text-xl font-semibold mb-2">{left?.title}</h2>
            <p className="text-sm text-gray-300 mb-6 max-w-xs">{left?.description}</p>
            <input
              type="text"
              placeholder="Create anything"
              className="bg-black/50 text-white px-6 py-3 rounded-full w-full max-w-sm"
            />
          </>
        )}
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 p-8 bg-zinc-900 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold mb-6">Unlock the future of music.</h2>

        <div className="flex gap-4 mb-6">
          {(['Plus', 'Pro', 'Ultra'] as const).map((plan) => (
            <button
              key={plan}
              onClick={() => {
                setSelectedPlan(plan);
                setSelectedFeature(plans[plan].features[0]);
              }}
              className={`px-4 py-2 border rounded-lg ${selectedPlan === plan ? 'bg-white text-black border-white' : 'border-white text-white'}`}
            >
              {plan}
              {selectedPlan === plan && plan === 'Pro' && (
                <span className="text-xs bg-white text-black px-2 py-0.5 rounded-full ml-2">Popular</span>
              )}
            </button>
          ))}
        </div>

        <ul className="space-y-3 text-sm text-gray-300 mb-8">
          {data.features.map((feature, index) => (
            <li
              key={index}
              onMouseOver={() => handleFeatureClick(feature)}
              className={`flex items-center gap-2 cursor-pointer ${feature === selectedFeature ? 'text-white font-semibold' : ''}`}
            >
              {index === 0 ? '✔' : '•'} {feature}
            </li>
          ))}
        </ul>

        <div className="mb-6 cursor-pointer" onClick={() => setIsYearly(!isYearly)}>
          <div className="text-2xl font-semibold mb-1">
            {isYearly ? data.yearlyPrice : data.monthlyPrice}
          </div>
          <div className="text-sm text-gray-400">
            {isYearly ? 'USD per month' : 'USD per month, billed yearly'}
          </div>
        </div>

        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default DynamicPricingModal;