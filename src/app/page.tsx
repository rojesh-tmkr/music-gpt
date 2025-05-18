"use client";

import React, { useState, useEffect } from "react";
import TopNavBar from "./components/TopNavBar";
import DynamicPricingModal from "./components/DynamicPricingModal";

const Home: React.FC = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPopup(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <TopNavBar onUpgradeClick={() => setShowPopup(true)} />

      {/* Hero Content */}
      <div
        className="min-h-[calc(100vh-80px)] flex flex-col items-center justify-center bg-cover bg-center px-4"
        style={{ backgroundImage: "url('/bg.png')" }}
      >
        <h1 className="text-4xl font-bold mb-6 text-center">
          What song to create?
        </h1>
      </div>

      {/* Modal Popup */}
      {showPopup && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)} // Close when clicking the backdrop
        >
          <div
            className="relative w-full max-w-5xl"
            onClick={(e) => e.stopPropagation()} // Prevent close when clicking inside modal
          >
            <DynamicPricingModal />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
