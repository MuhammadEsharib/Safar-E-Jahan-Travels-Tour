import React from "react";
import { NavScreen, PackageDetail } from "../types";
import { APP_IMAGES, PACKAGES_DATA } from "../data/packagesData";
import { PackageCard } from "../components/PackageCard";
import { SanctuarySection } from "../components/SanctuarySection";
import { AnimatedTrustStats } from "../components/AnimatedTrustStats";
import { Testimonials } from "../components/Testimonials";
import { ShimmerImage } from "../components/ShimmerImage";
import { Headset, Plane, SlidersHorizontal, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

interface HomeViewProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenPlanner: () => void;
  onOpenContact: () => void;
  onSelectPackage: (pkg: PackageDetail) => void;
  currency: "PKR" | "USD" | "SAR" | "GBP";
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenPlanner,
  onOpenContact,
  onSelectPackage,
  currency,
}) => {
  const featuredPackages = PACKAGES_DATA.slice(0, 3);

  return (
    <div
      className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] overflow-x-hidden w-full"
      id="home-view"
    >
      {/* 1. HERO SECTION - Editorial Symmetry Atmosphere */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 sm:pt-28 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden w-full">
        {/* Background Image: Makkah Haram Golden Hour */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <ShimmerImage
            src={APP_IMAGES.heroMakkah}
            alt="Makkah al-Mukarramah Kaaba Golden Hour"
            loading="eager"
            fetchPriority="high"
            containerClassName="w-full h-full"
            className="w-full h-full object-cover object-center filter brightness-75 contrast-110"
          />
          {/* Gradients Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-black/70 pointer-events-none"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#0A0A0A]/40 to-[#0A0A0A]/90 pointer-events-none"></div>
        </div>

        {/* Artistic Vertical Side Rails (Desktop >= 1440px 2xl) */}
        <div className="hidden 2xl:flex absolute left-8 top-1/2 -translate-y-1/2 flex-col items-center gap-12 z-20 pointer-events-none">
          <div
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-white/30 rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            SACRED HORIZONS
          </div>
          <div className="w-px h-20 bg-white/20"></div>
          <div
            className="text-[9px] font-mono text-[#C5FF4A]/60 rotate-180"
            style={{ writingMode: "vertical-rl" }}
          >
            EST. 2024
          </div>
        </div>

        <div className="hidden 2xl:flex absolute right-8 top-1/2 -translate-y-1/2 flex-col items-center gap-12 z-20 pointer-events-none">
          <div
            className="text-[9px] font-mono text-white/30"
            style={{ writingMode: "vertical-rl" }}
          >
            REF. MOFA_SAUDI
          </div>
          <div className="w-px h-20 bg-[#C5FF4A]/40"></div>
          <div
            className="text-[10px] font-mono uppercase tracking-[0.4em] text-[#C5FF4A]"
            style={{ writingMode: "vertical-rl" }}
          >
            V.2.5.0
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center space-y-4 sm:space-y-6 w-full">
          {/* Main Titles with Responsive Fluid Sizing */}
          <div className="space-y-1 sm:space-y-2">
            <h1 className="font-serif-heading heading-hero-fluid font-black tracking-tight text-white uppercase drop-shadow-2xl">
              SAFAR-E-JAHAN
            </h1>
            <div className="font-serif-heading heading-sub-fluid font-bold text-[#dfa742] tracking-[0.12em] sm:tracking-[0.15em] drop-shadow-lg">
              TRAVEL & TOURS
            </div>
          </div>

          {/* Subtitle with Editorial Flair */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 max-w-xl mx-auto px-2">
            <div className="h-[1px] w-6 sm:w-16 bg-white/20 shrink-0"></div>
            <p className="text-xs sm:text-sm md:text-base font-serif italic text-neutral-300 tracking-wide text-center">
              "Your Journey. Carefully Arranged with Uncompromising Devotion."
            </p>
            <div className="h-[1px] w-6 sm:w-16 bg-white/20 shrink-0"></div>
          </div>

          {/* Urdu Calligraphy Callout */}
          <div className="pt-1 pb-1 sm:pb-2">
            <div className="font-urdu text-2xl sm:text-4xl md:text-5xl text-[#f3cf7a] drop-shadow-[0_2px_20px_rgba(223,167,66,0.6)]">
              آؤ سفر کریں جہاں کا
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-3 sm:pt-4 max-w-xl mx-auto px-4 w-full">
            <button
              onClick={onOpenPlanner}
              className="group w-full sm:w-auto px-8 sm:px-9 py-3.5 sm:py-4 rounded-full font-black text-xs sm:text-sm uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] hover:text-black transition-all transform hover:scale-105 shadow-2xl flex items-center justify-center gap-2 active:scale-95"
              id="hero-plan-btn"
            >
              <span>PLAN YOUR JOURNEY</span>
              <span className="text-base font-sans transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              onClick={onOpenContact}
              className="w-full sm:w-auto px-7 sm:px-8 py-3.5 sm:py-4 rounded-full font-mono font-bold text-xs sm:text-sm tracking-wider text-white bg-[#141414]/90 hover:bg-[#202020] border border-white/20 hover:border-[#C5FF4A] backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2.5 transform hover:scale-105 active:scale-95"
              id="hero-talk-btn"
            >
              <Headset className="w-4 h-4 text-[#C5FF4A] shrink-0" />
              <span>0345-8050124</span>
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 text-neutral-400 text-xs flex flex-col items-center gap-1.5 pointer-events-none">
          <span className="text-[8px] sm:text-[9px] font-mono uppercase tracking-[0.3em] text-neutral-400">
            EXPLORE
          </span>
          <div className="w-3.5 h-5 sm:h-6 rounded-full border border-white/20 flex items-start justify-center p-0.5 sm:p-1">
            <div className="w-1 h-1.5 bg-[#C5FF4A] rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* 2. ANIMATED TRUST STATS BAR */}
      <AnimatedTrustStats />

      {/* 3. ARCHITECTURAL SECTION: "YOUR JOURNEY. OUR ATTENTION TO DETAIL." */}
      <section
        className="bg-[#0D0D0D] text-[#E0E0E0] py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 border-t border-b border-white/10 relative overflow-hidden"
        id="attention-to-detail-section"
      >
        {/* Subtle background glow contained */}
        <div className="absolute top-0 right-0 w-80 sm:w-96 h-80 sm:h-96 bg-[#C5FF4A]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left Column: Heading & Paragraph */}
            <div className="lg:col-span-5 space-y-5 sm:space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-[#C5FF4A]"></div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold">
                  PHILOSOPHY & PRECISION
                </span>
              </div>

              <div>
                <h2 className="font-serif-heading text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-tight uppercase text-white">
                  <span className="text-[#dfa742] block">YOUR JOURNEY.</span>
                  <span className="block">OUR ATTENTION</span>
                  <span className="block text-white/90">TO DETAIL.</span>
                </h2>
              </div>

              <div className="flex gap-4 sm:gap-6 items-start">
                <div className="w-px h-20 sm:h-24 bg-[#C5FF4A] flex-shrink-0 mt-1"></div>
                <p className="text-xs sm:text-sm md:text-base font-editorial-serif italic text-neutral-300 leading-relaxed">
                  We specialize in providing comprehensive travel arrangements,
                  ensuring a serene experience for your spiritual journeys and
                  sacred memories. From meticulous Umrah planning to VIP
                  front-row Haram allocations, every detail is managed with
                  reverence.
                </p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate("services")}
                  className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#141414] hover:bg-white hover:text-black text-xs font-mono font-bold uppercase tracking-widest text-white border border-white/15 transition-all duration-300 active:scale-95"
                  id="explore-services-link"
                >
                  <span>EXPLORE OUR SERVICES</span>
                  <ArrowRight className="w-4 h-4 text-[#C5FF4A] group-hover:text-black transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right Column: 3 Architectural Monolith Cards with Watermarks */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5">
              {/* Card 1: Personal Assistance */}
              <div className="relative p-5 sm:p-7 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C5FF4A]/50 transition-all duration-300 hover:translate-x-1.5 shadow-2xl overflow-hidden group">
                <div className="absolute top-2 right-4 text-[42px] sm:text-[48px] font-black text-white/[0.03] select-none pointer-events-none font-mono">
                  01
                </div>
                <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                  <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center text-[#C5FF4A] flex-shrink-0 group-hover:border-[#C5FF4A]/60 transition-colors">
                    <Headset className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="space-y-1 sm:space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif-heading text-base sm:text-xl font-bold text-white">
                        Personal Assistance
                      </h3>
                      <span className="text-[9px] font-mono text-[#C5FF4A] uppercase tracking-wider">
                        24/7 Concierge
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      Dedicated pilgrim advisors stationed in Makkah & Madinah
                      supporting every step of your travel.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2: Travel Services */}
              <div className="relative p-5 sm:p-7 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C5FF4A]/50 transition-all duration-300 hover:translate-x-1.5 shadow-2xl overflow-hidden group">
                <div className="absolute top-2 right-4 text-[42px] sm:text-[48px] font-black text-white/[0.03] select-none pointer-events-none font-mono">
                  02
                </div>
                <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                  <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center text-[#dfa742] flex-shrink-0 group-hover:border-[#dfa742]/60 transition-colors">
                    <Plane className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="space-y-1 sm:space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif-heading text-base sm:text-xl font-bold text-white">
                        Travel Services
                      </h3>
                      <span className="text-[9px] font-mono text-[#dfa742] uppercase tracking-wider">
                        End-to-End
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      Direct MOFA electronic visa approvals, luxury GMC fleets,
                      and Haramain bullet train bookings.
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3: Customized Options */}
              <div className="relative p-5 sm:p-7 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C5FF4A]/50 transition-all duration-300 hover:translate-x-1.5 shadow-2xl overflow-hidden group">
                <div className="absolute top-2 right-4 text-[42px] sm:text-[48px] font-black text-white/[0.03] select-none pointer-events-none font-mono">
                  03
                </div>
                <div className="flex items-start gap-4 sm:gap-5 relative z-10">
                  <div className="w-11 sm:w-12 h-11 sm:h-12 rounded-xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center text-[#C5FF4A] flex-shrink-0 group-hover:border-[#C5FF4A]/60 transition-colors">
                    <SlidersHorizontal className="w-5 sm:w-6 h-5 sm:h-6" />
                  </div>
                  <div className="space-y-1 sm:space-y-1.5 min-w-0">
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif-heading text-base sm:text-xl font-bold text-white">
                        Customized Options
                      </h3>
                      <span className="text-[9px] font-mono text-[#C5FF4A] uppercase tracking-wider">
                        Tailored Plans
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      Bespoke family durations, private Kaaba-view suites, and
                      scholar-guided heritage Ziyarat tours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED CURATED ITINERARIES PREVIEW WITH STAGGERING REVEAL */}
      <section
        className="py-16 sm:py-24 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#0A0A0A] relative overflow-hidden"
        id="featured-packages-section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4 pb-6 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold mb-2">
                <span className="w-2 h-2 rounded-full bg-[#C5FF4A]"></span>
                CURATED ARCHIVE 2025/2026
              </div>
              <h2 className="font-serif-heading text-2xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
                Featured Umrah Itineraries
              </h2>
            </div>
            <button
              onClick={() => onNavigate("umrah")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#141414] hover:bg-[#202020] text-xs font-mono font-bold text-[#C5FF4A] border border-white/15 hover:border-[#C5FF4A] transition-all w-fit"
            >
              <span>VIEW ALL PACKAGES</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Staggered Package Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {featuredPackages.map((pkg, idx) => (
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
        </div>
      </section>

      {/* 5. LUXURY SANCTUARY SECTION */}
      <SanctuarySection onExploreHotels={() => onNavigate("services")} />

      {/* 6. TESTIMONIALS OF DEVOTION */}
      <Testimonials onOpenContact={onOpenContact} />
    </div>
  );
};
