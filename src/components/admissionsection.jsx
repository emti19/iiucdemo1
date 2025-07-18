import React, { useState } from "react";
import campusImg from "../assets/heroCarousel/c1.jpg";
import { LuMoveRight } from "react-icons/lu";
import backPattern from "../assets/backpattern.png";

const menuTabs = [
  "Admission Menu",
  "Video Guide",
  "Admission Contact",
  "Admission FAQ",
];

const admissionLinks = [
  { label: "Apply Online", active: true },
  { label: "Admission Advertisement" },
  { label: "Instructions for Applicant" },
  { label: "Print Admit Card" },
  { label: "Print Admission Form" },
  { label: "Print Offer Letter & Undertakings" },
  { label: "Result of Admission Test" },
];

export default function AdmissionSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Background Image with 5% Opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center opacity-5 z-0"
        style={{ backgroundImage: `url(${backPattern})` }}
      ></div>

      {/* Foreground Content */}
      <div className="container mx-auto">
        <div className="relative z-10 w-full flex flex-col items-center px-2 md:px-0">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center mb-8">Admission</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-[#F0F7F2] rounded-full px-2 py-1">
            {menuTabs.map((tab, idx) => (
              <button
                key={tab}
                onClick={() => setActiveTab(idx)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 text-base ${
                  activeTab === idx
                    ? "bg-[#005C25] text-white shadow"
                    : "bg-transparent text-[#222]"
                }`}
                style={{ minWidth: 120 }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Main Card */}
        <div className="bg-[#F7FAF7] rounded-2xl flex flex-col md:flex-row w-full shadow border border-[#E6F0E6] p-8 items-stretch">
          {/* Image Section */}
          <div className="flex-1 flex items-center justify-center mb-8 md:mb-0 md:mr-8">
            <img
              src={campusImg}
              alt="IIUC Campus"
              className="rounded-xl object-cover w-full h-[28rem] md:w-[600px] md:h-[420px]"
              style={{ maxWidth: "640px" }}
            />
          </div>

          {/* Links or Coming Soon Section */}
          <div className="flex-1 flex flex-col justify-center">
            {activeTab === 0 ? (
              admissionLinks.map((link, idx) => (
                <a
                  key={link.label}
                  href="#"
                  className={`flex items-center justify-between py-4 px-2 border-b border-[#D9E5DD] text-base font-medium transition-all duration-300 group ${
                    link.active
                      ? "text-[#005C25] font-semibold"
                      : "text-[#222] hover:text-[#005C25]"
                  } ${idx === 0 ? "border-t-0" : ""}`}
                >
                  <span>{link.label}</span>
                  <LuMoveRight
                    className={`w-5 h-5 ml-2 transition-opacity duration-300 ${
                      link.active
                        ? "opacity-100 text-[#005C25]"
                        : "opacity-60 group-hover:opacity-100 group-hover:text-[#005C25]"
                    }`}
                  />
                </a>
              ))
            ) : (
              <div className="flex items-center justify-center h-full text-xl text-[#005C25] font-semibold">
                Coming soon
              </div>
            )}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
