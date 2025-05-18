import React from "react";
import {
  FaTiktok,
  FaTwitch,
  FaInstagram,
  FaHeart,
  FaRing,
  FaFilm,
  FaBullhorn,
  FaBlog
} from "react-icons/fa";
import { MdOutlineScreenShare } from "react-icons/md";

const badges = [
  { label: "TikTok", icon: <FaTiktok className="text-white" /> },
  { label: "Twitch", icon: <FaTwitch className="text-purple-400" /> },
  { label: "Instagram", icon: <FaInstagram className="text-pink-400" /> },
  { label: "Weddings", icon: <FaRing className="text-gray-300" /> },
  { label: "Non-Profits", icon: <FaHeart className="text-orange-300" /> },
  { label: "Presentations", icon: <MdOutlineScreenShare className="text-gray-300" /> },
  { label: "Movies", icon: <FaFilm className="text-red-400" /> },
  { label: "Online Ads", icon: <FaBullhorn className="text-pink-400" /> },
  { label: "Blogs", icon: <FaBlog className="text-gray-300" /> }
];

const CommercialUse: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-blue-900 to-indigo-900 text-white py-12 px-6 flex flex-col items-center text-center">
      <h2 className="text-3xl font-semibold mb-2">Commercial use</h2>
      <p className="text-gray-300 mb-10 text-md">
        Use your downloads anywhere
      </p>

      <div className="flex flex-wrap justify-center gap-3 w-[450px]">
        {badges.map((badge, idx) => (
          <div
            key={idx}
            className="flex items-center gap-2 px-4 py-3.5 rounded-xl bg-white/6 backdrop-blur-md text-white text-sm font-medium shadow-sm transition-all"
          >
            <span className="text-lg">{badge.icon}</span>
            <span className="whitespace-nowrap">{badge.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommercialUse;
