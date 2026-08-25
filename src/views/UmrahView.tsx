import React from "react";
import { PackageDetail } from "../types";
import { APP_IMAGES, PACKAGES_DATA } from "../data/packagesData";
import { PackageCard } from "../components/PackageCard";
import { SanctuarySection } from "../components/SanctuarySection";
import { ShimmerImage } from "../components/ShimmerImage";
import { ArrowDown, Phone } from "lucide-react";

interface UmrahViewProps {
  onSelectPackage: (pkg: PackageDetail) => void;
  onOpenPlanner: () => void;
  onOpenContact: () => void;
  currency: "PKR" | "USD" | "SAR" | "GBP";
}

export const UmrahView: React.FC<UmrahViewProps> = ({
  onSelectPackage,
  onOpenPlanner,
  onOpenContact,
  currency,
}) => {
  const umrahPackages = PACKAGES_DATA.filter((p) => p.category === "umrah");

  const scrollToPackages = () => {
    const el = document.getElementById("curated-itineraries");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] overflow-x-hidden w-full"
      id="umrah-view"
    >
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[85vh] lg:min-h-[92vh] flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <ShimmerImage
            src={APP_IMAGES.heroMakkah}
            alt="Makkah al-Mukarramah Kaaba Sanctuary"
            loading="eager"
            fetchPriority="high"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/90"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6 w-full">
          <div className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-1.5 rounded-full text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] bg-[#141414]/90 text-[#C5FF4A] border border-white/15 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
            SAFAR-E-JAHAN SIGNATURE UMRAH
          </div>

          <h1 className="font-serif-heading text-3xl sm:text-5xl md:text-7xl font-black tracking-tight text-white uppercase drop-shadow-2xl">
            BLESSED JOURNEYS
          </h1>

          <p className="text-xs sm:text-sm md:text-base lg:text-lg font-editorial-serif italic text-neutral-300 max-w-2xl mx-auto leading-relaxed drop-shadow-md font-normal px-2">
            Curated Umrah experiences designed for spiritual serenity, front-row
            Haram proximity, and impeccable hospitality.
          </p>

          <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 max-w-md mx-auto w-full px-4">
            <button
              onClick={scrollToPackages}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-mono font-bold uppercase tracking-widest bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-[#C5FF4A] backdrop-blur-sm transition-all transform hover:scale-105 active:scale-95"
              id="hero-explore-packages-btn"
            >
              <span>EXPLORE PACKAGES</span>
              <ArrowDown className="w-4 h-4 text-[#C5FF4A]" />
            </button>

            <button
              onClick={onOpenPlanner}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full text-xs font-black uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] hover:text-black shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              <span>PLAN CUSTOM UMRAH</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. CURATED ITINERARIES SECTION WITH STAGGERED REVEAL */}
      <section
        className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] relative overflow-hidden"
        id="curated-itineraries"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
            <div className="flex items-center justify-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#C5FF4A]"></span>
              COLLECTION 2025/2026
            </div>
            <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-3 sm:mb-4">
              Curated Itineraries
            </h2>
            <p className="text-xs sm:text-sm md:text-base font-editorial-serif italic text-neutral-300 leading-relaxed px-2">
              Select from our meticulously planned packages, each offering a
              distinct balance of proximity, luxury, and spiritual focus.
            </p>
          </div>

          {/* Staggered Package Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {umrahPackages.map((pkg, idx) => (
              <PackageCard
                key={pkg.id}
                pkg={pkg}
                currency={currency}
                onSelect={onSelectPackage}
                onBookNow={onSelectPackage}
                index={idx}
              />
            ))}
          </div>

          {/* Custom Package CTA Bar */}
          <div className="mt-12 sm:mt-16 p-6 sm:p-8 md:p-10 rounded-3xl bg-[#121212] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold mb-1">
                TAILORED HOSPITALITY
              </div>
              <h3 className="font-serif-heading text-lg sm:text-2xl md:text-3xl font-bold text-white mb-2">
                Need a tailored duration or specific hotel?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300">
                Design your custom itinerary with our interactive planner or
                talk directly with our pilgrimage advisors.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
              <button
                onClick={onOpenPlanner}
                className="flex-1 md:flex-initial px-6 sm:px-7 py-3 sm:py-3.5 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] transition-all transform hover:scale-105 shadow-xl active:scale-95 text-center"
              >
                Custom Planner
              </button>
              <button
                onClick={onOpenContact}
                className="flex-1 md:flex-initial px-5 sm:px-6 py-3 sm:py-3.5 rounded-full font-mono font-bold text-xs bg-[#1A1A1A] text-white hover:bg-[#252525] border border-white/15 flex items-center justify-center gap-2 active:scale-95"
              >
                <Phone className="w-4 h-4 text-[#C5FF4A]" />
                0345-8050124
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. A SANCTUARY IN THE HOLY CITIES SECTION */}
      <SanctuarySection onExploreHotels={onOpenPlanner} />
    </div>
  );
};
