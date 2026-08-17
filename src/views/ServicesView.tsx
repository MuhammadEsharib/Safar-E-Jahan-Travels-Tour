import React from 'react';
import { SERVICES_LIST, APP_IMAGES } from '../data/packagesData';
import { Headset, Plane, SlidersHorizontal, ShieldCheck, Car, Building2, MapPin, Compass, ArrowRight, Check } from 'lucide-react';

interface ServicesViewProps {
  onOpenPlanner: () => void;
  onOpenContact: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({ onOpenPlanner, onOpenContact }) => {
  const iconMap: Record<string, any> = {
    Headset: Headset,
    Plane: Plane,
    SlidersHorizontal: SlidersHorizontal,
  };

  const detailedServices = [
    {
      title: 'Saudi Umrah & Tourist Electronic Visa',
      icon: ShieldCheck,
      desc: 'Authorized direct API processing with Saudi Ministry of Foreign Affairs (MOFA). Instant approvals with valid medical insurance included.',
      features: ['24-48 Hour expedited processing', 'Multiple & Single entry options', 'Includes mandatory comprehensive medical coverage', 'Full Nusuk app registration support']
    },
    {
      title: 'VIP Chauffeur & Ground Fleet Transport',
      icon: Car,
      desc: 'Travel in supreme tranquility between Jeddah, Makkah, and Madinah. Choose from our luxury fleet of GMC Yukon XL, Toyota HiAce, and VIP luxury coaches.',
      features: ['Private airport meet & greet with placard', '24/7 dedicated chauffeur', 'Haramain High-Speed Train First-Class ticketing', 'Luggage transfer directly to hotel suites']
    },
    {
      title: '5-Star Haram Front-Row Accommodations',
      icon: Building2,
      desc: 'Direct reservations with leading luxury chains at guaranteed wholesale rates. Kaaba View suites, Haram plaza access, and private elevators to prayer halls.',
      features: ['Fairmont Clock Tower, Raffles, Swissôtel', 'The Oberoi & Dar Al Taqwa Madinah', 'Guaranteed floor & view allocations', 'Full board gourmet dining packages']
    },
    {
      title: 'Scholarly Guided Ziyarat & Heritage Tours',
      icon: Compass,
      desc: 'Enrich your spiritual understanding through guided historical tours led by knowledgeable, English & Urdu speaking Islamic historians.',
      features: ['Makkah: Cave Hira, Thawr, Arafat, Mina', 'Madinah: Quba, Uhud, Qiblatayn, Khandaq', 'Scenic day trip to Taif and rose distilleries', 'Battlefield of Badr memorial journey']
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 text-[#E0E0E0]" id="services-view">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.3em] bg-[#141414] text-[#C5FF4A] border border-white/15 mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
          HOSPITALITY PROTOCOL
        </div>
        <h1 className="font-serif-heading text-4xl sm:text-6xl font-black text-white uppercase tracking-tight mb-4">
          Our Premium Services
        </h1>
        <p className="text-sm sm:text-base font-editorial-serif italic text-neutral-300 max-w-2xl mx-auto leading-relaxed">
          From precise flight bookings and fast-track visas to luxury front-row Haram suites and private VIP ground fleets, every detail is orchestrated with reverence.
        </p>
      </div>

      {/* 3 Core Services Highlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES_LIST.map((srv) => {
            const IconComp = iconMap[srv.icon] || Headset;
            return (
              <div
                key={srv.id}
                className="p-8 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl flex flex-col justify-between space-y-6 hover:border-[#C5FF4A]/60 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center text-[#C5FF4A]">
                    <IconComp className="w-7 h-7" />
                  </div>
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {srv.fullDesc}
                  </p>

                  <ul className="space-y-2.5 pt-3 border-t border-white/10 font-mono text-xs text-neutral-200">
                    {srv.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C5FF4A] flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={onOpenPlanner}
                  className="w-full py-3.5 rounded-full font-black text-xs uppercase tracking-widest bg-[#1C1C1C] hover:bg-white hover:text-black text-white border border-white/15 transition-all duration-200"
                >
                  Customize This Service
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold mb-2">
            INFRASTRUCTURE
          </div>
          <h2 className="font-serif-heading text-3xl sm:text-4xl font-black text-white uppercase tracking-tight mb-2">
            End-to-End Pilgrimage Solutions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 font-editorial-serif italic">Everything you need for an uncompromised spiritual experience.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {detailedServices.map((ds, idx) => {
            const Icon = ds.icon;
            return (
              <div key={idx} className="p-7 sm:p-9 rounded-3xl bg-[#121212] border border-white/10 space-y-4 hover:border-white/30 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center text-[#C5FF4A]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white">
                    {ds.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                  {ds.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3 border-t border-white/10">
                  {ds.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A]"></span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 p-10 rounded-3xl bg-[#121212] border border-white/10 text-center space-y-5 shadow-2xl">
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold">DIRECT CONCIERGE</div>
          <h3 className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase">
            Have a custom travel or visa request?
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 max-w-xl mx-auto font-editorial-serif italic">
            Our corporate and individual travel desks are available 24/7. Contact us directly to tailor your arrangements.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <button
              onClick={onOpenPlanner}
              className="px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] hover:text-black shadow-2xl transition-all transform hover:scale-105 active:scale-95"
            >
              Start Custom Plan
            </button>
            <button
              onClick={onOpenContact}
              className="px-7 py-4 rounded-full font-mono font-bold text-xs bg-[#1C1C1C] text-white border border-white/20 hover:border-[#C5FF4A] transition-all"
            >
              Call 0345-8050124
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

