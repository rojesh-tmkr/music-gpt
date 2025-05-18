"use client";

import React, { useState, useEffect } from 'react';
import CommercialUse from './CommercialUse';
import UnlockAllFeatures from './UnlockAllFeatures';
import CoreFeatures from './CoreFeatures';
import { PlanData, PlanType } from '../types/plans';

const DynamicPricingModal: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<PlanType>('Pro');
  const [isYearly, setIsYearly] = useState<boolean>(true);
  const [plans, setPlans] = useState<Record<PlanType, PlanData> | null>(null);
  const [selectedFeature, setSelectedFeature] = useState<string>('');

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('/api/plans');
        const data = await response.json();
        setPlans(data);
        setSelectedFeature(data.Pro.features[0]); // Set initial feature
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  if (!plans) {
    return <div className='text-white text-6xl text-center'>Loading...</div>;
  }

  const data = plans[selectedPlan];
  const left = data.featureDescriptions[selectedFeature];

  const handleFeatureClick = (feature: string) => {
    setSelectedFeature(feature);
  };

  return (
    <div className="flex flex-col md:flex-row bg-zinc-900 text-white rounded-3xl overflow-hidden w-full h-[600px] shadow-2xl">
      {/* Left */}
      <div className="bg-gradient-to-b from-blue-900 to-indigo-900 w-full md:w-1/2 flex flex-col justify-center items-center p-8 text-center gap-[80px]">
        {left?.title === 'Commercial use' ? (
          <CommercialUse />
        ) : left?.title === 'Unlock all features' ? (
          <UnlockAllFeatures />
        ) : left?.title === 'Core features' ? (
          <CoreFeatures />
        ) : (
          <>
            <div className="flex flex-col gap-1">
              <h2 className="text-3xl font-semibold mb-2">{left?.title}</h2>
              <p className="text-md text-gray-300 mb-6 max-w-xs tracking-wide">{left?.description}</p>
            </div>
            {left?.title === 'Get 25K credits /month' || left?.title === 'Get 5K credits /month' || left?.title === 'Unlimited credits' ? (
              <input
                type="text"
                placeholder="Create anything"
                className="bg-black/50 text-white px-6 py-3 rounded-3xl w-[500px] h-[80px] ml-[150px] border-2"
              />
            ) : null}
          </>
        )}
      </div>

      {/* Right */}
      <div className="w-full md:w-1/2 p-8 bg-zinc-900 flex flex-col justify-between">
        <h2 className="text-2xl font-semibold mb-6">Unlock the future of music.</h2>

        <div className="flex gap-4 mb-6 w-full justify-center">
          {(['Plus', 'Pro', 'Ultra'] as const).map((plan) => (
            <div key={plan} className="relative w-full flex justify-center">
              {plan === 'Pro' && (
                <div className="absolute -top-3 bg-white text-black text-xs px-3 py-1 rounded-full shadow">
                  Popular
                </div>
              )}

              <button
                onClick={() => {
                  setSelectedPlan(plan);
                  setSelectedFeature(plans[plan].features[0]);
                }}
                className={`w-30 h-15 px-4 py-2 border rounded-2xl text-white transition ${selectedPlan === plan
                    ? 'bg-gray-600 border-white border-4'
                    : 'border border-gray-400'
                  }`}
              >
                {plan}
              </button>
            </div>
          ))}
        </div>

        <ul className="space-y-3 text-sm text-gray-300 mb-8">
          {data.features.map((feature, index) => (
            <li
              key={index}
              onMouseOver={() => handleFeatureClick(feature)}
              className={`flex items-center gap-2 cursor-pointer ${feature === selectedFeature ? 'text-white font-semibold' : ''}`}
            >
              ✔ {feature}
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

        <button 
          onClick={() => window.location.href = 'https://musicgpt.com'}
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition cursor-pointer"
        >
          {data.buttonText}
        </button>
      </div>
    </div>
  );
};

export default DynamicPricingModal;