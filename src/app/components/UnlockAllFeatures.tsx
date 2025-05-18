import React from "react";
import {
  FaMusic,
  FaLockOpen,
  FaTextHeight,
  FaRetweet,
  FaExchangeAlt,
  FaArrowRight
} from "react-icons/fa";
import { TbWaveSawTool } from "react-icons/tb";

const features = [
  {
    icon: <FaMusic className="text-white text-lg" />,
    title: "Song generation",
    description: "Create songs, instrumentals, sound effects",
  },
  {
    icon: <FaTextHeight className="text-white text-lg" />,
    title: "Text to Speech",
    description: "Speak text in any voice",
  },
  {
    icon: <FaRetweet className="text-white text-lg" />,
    title: "Remix",
    description: "Remix a song with custom style or lyrics",
  },
  {
    icon: <FaExchangeAlt className="text-white text-lg" />,
    title: "Replace",
    description: "Replace a part of a song with something new",
  },
  {
    icon: <FaArrowRight className="text-white text-lg" />,
    title: "Extend",
    description: "Continue a track beyond the original",
  },
  {
    icon: <TbWaveSawTool className="text-white text-lg" />,
    title: "Stem download",
    description: "Download instrumental and vocals individually",
  },
];

const UnlockAllFeatures: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-12 px-6 flex flex-col items-center text-center">
      <div className="flex items-center text-xl font-semibold mb-10 gap-2">
        <FaLockOpen className="text-white text-2xl" />
        <span>Unlock all features</span>
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

export default UnlockAllFeatures;
