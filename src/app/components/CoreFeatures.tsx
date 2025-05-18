import React from "react";
import {
  FaMusic,
  FaLockOpen,
  FaGuitar,
  FaWaveSquare,
} from "react-icons/fa";

const features = [
    {
        icon: <FaMusic className="text-white text-lg" />,
        title: "Songs",
        description: "Create full songs and add your own lyrics",
      },
      {
        icon: <FaGuitar className="text-white text-lg" />,
        title: "Instrumentals",
        description: "Generate instrumental songs without vocals",
      },
      {
        icon: <FaWaveSquare className="text-white text-lg" />,
        title: "Sound Effects",
        description: "Create sound effects and samples",
      },
];

const CoreFeatures: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-12 px-6 flex flex-col items-center text-center">
      <div className="flex items-center text-3xl font-semibold mb-10 gap-2">
        <FaLockOpen className="text-white text-3xl" />
        <span>Core features</span>
      </div>

      <div className="w-full max-w-md space-y-6">
        {features.map((feature, idx) => (
          <div key={idx} className="flex items-start gap-4 text-left">
            <div className="bg-white/20 rounded-full p-3">{feature.icon}</div>
            <div>
              <h4 className="font-semibold">{feature.title}</h4>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoreFeatures;
