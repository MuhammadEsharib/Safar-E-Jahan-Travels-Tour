import React from "react";
import { PackageDetail } from "../types";
import { PACKAGES_DATA, APP_IMAGES } from "../data/packagesData";
import { PackageCard } from "../components/PackageCard";

interface HajjViewProps {
  onSelectPackage: (pkg: PackageDetail) => void;
  onOpenPlanner: () => void;
  onOpenContact: () => void;
  currency: "PKR" | "USD" | "SAR" | "GBP";
}

export const HajjView: React.FC<HajjViewProps> = ({
  onSelectPackage,
  onOpenPlanner,
  onOpenContact,
  currency,
}) => {
  const hajjPackages = PACKAGES_DATA.filter((p) => p.category === "hajj");

  const hajjPillars = [
    {
      day: "8 Dhul Hijjah",
      title: "Day of Tarwiyah",
      desc: "Departure to Mina VIP European camps, beginning of sacred Manasik in complete state of Ihram.",
    },
    {
      day: "9 Dhul Hijjah",
      title: "Day of Arafat (Wuquf)",
      desc: "The spiritual climax of Hajj on the plains of Arafat, followed by night under the stars in Muzdalifah.",
    },
    {
      day: "10 Dhul Hijjah",
      title: "Yawm an-Nahr",
      desc: "Rami Jamarat al-Aqaba, supervised Qurbani (Hady), Halq/Taqseer, and Tawaf al-Ifadah in the Haram.",
    },
    {
      day: "11-13 Dhul Hijjah",
      title: "Ayyam at-Tashreeq",
      desc: "Stay in Mina, daily Rami at all three Jamarat, collective du’as, and concluding Tawaf al-Wada.",
    },
  ];

  return (
    <div
      className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] overflow-x-hidden w-full"
      id="hajj-view"
    >
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center pt-28 sm:pt-32 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <img
            src={APP_IMAGES.heroMakkah}
            alt="Hajj Pilgrimage Kaaba"
            className="w-full h-full object-cover filter brightness-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/80"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/90"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] bg-[#141414]/90 text-[#C5FF4A] border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
            OFFICIAL NUSUK & MINISTRY COMPLIANT
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-7xl font-black text-white uppercase tracking-tight">
            The Journey of a Lifetime: Hajj
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-editorial-serif italic text-neutral-300 max-w-2xl mx-auto leading-relaxed px-2">
            Experience the fifth pillar of Islam with uncompromising executive
            service, category-A air-conditioned Mina European tents, front-row
            5-star hotels, and authentic scholarly accompaniment.
          </p>

          <div className="pt-3 sm:pt-4 flex flex-wrap justify-center gap-4 px-4">
            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-8 py-3.5 sm:py-4 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] hover:text-black shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              Inquire Hajj 2025/2026 Registration
            </button>
          </div>
        </div>
      </section>

      {/* Packages Section with Staggered Grid */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold mb-2">
            <span className="w-2 h-2 rounded-full bg-[#C5FF4A]"></span>
            EXECUTIVE HAJJ DOSSIER
          </div>
          <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 sm:mb-4">
            Curated Executive Hajj Itineraries
          </h2>
          <p className="text-xs sm:text-sm text-neutral-300">
            Engineered for physical ease, spiritual absorption, and swift
            logistics throughout the five sacred days of Manasik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {hajjPackages.map((pkg, idx) => (
            <PackageCard
              key={pkg.id}
              pkg={pkg}
              currency={currency}
              onSelect={onSelectPackage}
              onBookNow={onSelectPackage}
              index={idx}
            />
          ))}

          {/* Shifting Package Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#121212] border border-white/10 flex flex-col justify-between space-y-6 shadow-2xl hover:border-white/30 transition-colors">
            <div>
              <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#1C1C1C] text-neutral-300 border border-white/10">
                Makkah, Azizia & Madinah
              </span>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white mt-4 mb-3">
                Executive Shifting Hajj (18-24 Days)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                Strategically structured with pre-Hajj stay in Azizia private
                building near Jamarat for swift access, followed by 5-star
                Swissôtel / Fairmont stay post-Hajj.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-200 border-t border-b border-white/10 py-4 font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Category-A
                  Air-Conditioned Mina Camps
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Mashaaer High-Speed
                  Electric Train
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Daily Scholarly
                  Religious Classes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Supervised Qurbani
                  with live confirmation
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenContact}
              className="w-full py-3.5 rounded-full font-black text-xs uppercase tracking-widest bg-[#1C1C1C] hover:bg-white hover:text-black text-white border border-white/15 transition-all"
            >
              Request Shifting Itinerary
            </button>
          </div>

          {/* Non-Shifting VIP Package Card */}
          <div className="p-6 sm:p-7 rounded-3xl bg-[#121212] border border-[#C5FF4A]/70 shadow-[0_0_30px_rgba(197,255,74,0.15)] flex flex-col justify-between space-y-6">
            <div>
              <span className="px-3.5 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#C5FF4A] text-black">
                Pure Non-Shifting VIP
              </span>
              <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white mt-4 mb-3">
                Royal Non-Shifting Hajj (14-18 Days)
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-5">
                Your 5-star Clock Tower suite remains reserved and accessible
                throughout the days of Mina, offering unmatched luxury and peace
                of mind.
              </p>
              <ul className="space-y-2.5 text-xs text-neutral-200 border-t border-b border-white/10 py-4 font-mono">
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Continuous 5-Star
                  Hotel Access during Mina
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Private GMC Yukon XL
                  Chauffeur Transfers
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Private European
                  Mina Tents with Ensuite Bath
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#C5FF4A]">✓</span> Dedicated Personal
                  Logistics Butler
                </li>
              </ul>
            </div>
            <button
              onClick={onOpenContact}
              className="w-full py-3.5 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] transition-all"
            >
              Request Royal VIP Details
            </button>
          </div>
        </div>
      </section>

      {/* Manasik Timeline */}
      <section className="py-16 sm:py-20 bg-[#070707] border-t border-white/10 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12 sm:mb-14">
            <span className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#C5FF4A] font-bold">
              SACRED RITES OF HAJJ
            </span>
            <h3 className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase mt-2">
              Step-by-Step Manasik Roadmap
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {hajjPillars.map((p, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 space-y-3 relative overflow-hidden group hover:border-[#C5FF4A]/50 transition-colors"
              >
                <div className="text-[10px] font-mono font-bold text-[#C5FF4A] uppercase tracking-wider">
                  {p.day}
                </div>
                <h4 className="font-serif-heading font-bold text-white text-sm sm:text-base">
                  {p.title}
                </h4>
                <p className="text-xs text-neutral-300 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
