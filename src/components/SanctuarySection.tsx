import React from 'react';
import { SANCTUARY_FEATURES } from '../data/packagesData';
import { Check, Sparkles } from 'lucide-react';
import { ShimmerImage } from './ShimmerImage';

interface SanctuarySectionProps {
  onExploreHotels?: () => void;
}

export const SanctuarySection: React.FC<SanctuarySectionProps> = ({ onExploreHotels }) => {
  return (
    <section className="py-20 sm:py-28 bg-[#0A0A0A] relative overflow-hidden border-t border-b border-white/10" id="sanctuary-section">
      {/* Background subtle ambient accents */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C5FF4A]/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.3em] bg-[#141414] text-[#C5FF4A] border border-white/15 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#C5FF4A]" />
            HOSPITALITY OF DIVINE STANDARDS
          </div>
          
          <h2 className="font-serif-heading text-3xl sm:text-5xl font-black text-white tracking-tight uppercase mb-4">
            A Sanctuary in the Holy Cities
          </h2>
          
          <p className="text-sm sm:text-base font-editorial-serif italic text-neutral-300 leading-relaxed font-normal">
            Experience serene comfort and unmatched spiritual proximity with our curated selection of 5-star front-row hotels in Makkah and Madinah.
          </p>
        </div>

        {/* 3 Luxury Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SANCTUARY_FEATURES.map((item, idx) => (
            <div
              key={item.id}
              className="group flex flex-col rounded-3xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#C5FF4A]/60 transition-all duration-300 hover:-translate-y-1.5 shadow-2xl"
              id={`sanctuary-card-${idx}`}
            >
              {/* Image with subtle zoom */}
              <div className="relative h-60 sm:h-64 w-full overflow-hidden bg-[#181818]">
                <ShimmerImage
                  src={item.image}
                  alt={item.title}
                  containerClassName="w-full h-full"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40 pointer-events-none"></div>
                <div className="absolute top-4 right-4 text-[10px] font-mono font-bold px-2.5 py-1 rounded-full bg-black/70 text-[#C5FF4A] border border-white/15 backdrop-blur-md">
                  0{idx + 1}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white mb-5 group-hover:text-[#C5FF4A] transition-colors">
                    {item.title}
                  </h3>

                  {/* Checkmark points */}
                  <ul className="space-y-3.5">
                    {item.points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-3 text-xs sm:text-sm text-neutral-200">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#1C1C1C] border border-[#C5FF4A]/50 flex items-center justify-center text-[#C5FF4A]">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


