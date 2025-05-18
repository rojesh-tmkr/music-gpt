import React from "react";

interface TopNavBarProps {
  onUpgradeClick: () => void;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ onUpgradeClick }) => {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-transparent text-white w-full">

      <div className="flex items-center space-x-2">
        <img src="/logo.svg" alt="MusicGPT Logo" className="w-6 h-6" />
        <span className="text-lg font-semibold">MusicGPT</span>
        <span className="text-xs border border-white rounded px-2 py-0.5">Beta</span>
      </div>

      {/* Right: Upgrade Block */}
      <div className="flex items-center space-x-4 bg-zinc-800 rounded-xl px-4 py-2 shadow text-sm">
        <div className="text-gray-300">
          <div className="text-xs">Get unlimited AI Music</div>
          <div className="text-xs opacity-70">100 free credits left</div>
        </div>
        <button
          onClick={onUpgradeClick}
          className="bg-white text-black font-medium px-4 py-1.5 rounded-md hover:bg-gray-200 transition"
        >
          Upgrade
        </button>
        <div className="relative">
          <div className="w-8 h-8 bg-zinc-700 rounded-full flex items-center justify-center text-white font-semibold">
            J
          </div>
          <span className="absolute top-0 right-0 text-xs bg-green-500 text-black rounded-full px-1 text-center transform translate-x-1/2 -translate-y-1/2">
            2
          </span>
        </div>
      </div>
    </header>
  );
};

export default TopNavBar;
