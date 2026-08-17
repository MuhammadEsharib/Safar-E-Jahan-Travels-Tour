import React from 'react';
import { HERITAGE_TOURS } from '../data/packagesData';
import { MapPin, Clock, Check, MessageCircle } from 'lucide-react';
import { ShimmerImage } from '../components/ShimmerImage';

interface HeritageViewProps {
  onOpenContact: () => void;
}


export const HeritageView: React.FC<HeritageViewProps> = ({ onOpenContact }) => {
  const handleInquireTour = (tourTitle: string) => {
    const text = encodeURIComponent(`*Heritage Ziyarat Inquiry - Safar-E-Jahan*\n\nI would like to book or customize the tour: *${tourTitle}*.\nPlease provide availability and guide details.`);
    window.open(`https://wa.me/923458050124?text=${text}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] pt-32 pb-24 text-[#E0E0E0]" id="heritage-view">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.3em] bg-[#141414] text-[#C5FF4A] border border-white/15">
            <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
            SACRED FOOTSTEPS & PROPHETIC HISTORY
          </div>
          <h1 className="font-serif-heading text-4xl sm:text-6xl font-black text-white uppercase tracking-tight">
            Islamic Heritage & Ziyarat
          </h1>
          <p className="text-sm sm:text-base font-editorial-serif italic text-neutral-300 leading-relaxed">
            Walk where the beloved Prophet ﷺ and his noble companions walked. Private and group historical tours guided by certified Islamic historians.
          </p>
        </div>

        {/* Tour Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {HERITAGE_TOURS.map((tour) => (
            <div
              key={tour.id}
              className="rounded-3xl overflow-hidden bg-[#121212] border border-white/10 hover:border-[#C5FF4A]/60 transition-all duration-300 shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#181818]">
                  <ShimmerImage
                    src={tour.image}
                    alt={tour.title}
                    containerClassName="w-full h-full"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/40 pointer-events-none"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] font-mono font-bold bg-black/70 backdrop-blur-md text-white border border-white/15 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-[#C5FF4A]" /> {tour.location}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 text-xs font-mono text-neutral-300 font-semibold flex items-center gap-1.5 bg-black/80 border border-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-[#C5FF4A]" /> {tour.duration}
                  </div>
                </div>

                <div className="p-7 space-y-4">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-white group-hover:text-[#C5FF4A] transition-colors">
                    {tour.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                    {tour.description}
                  </p>

                  <div className="space-y-3 pt-3 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase font-bold text-[#C5FF4A] tracking-wider block">
                      KEY HIGHLIGHTS:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-neutral-200 font-mono">
                      {tour.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3.5 h-3.5 text-[#C5FF4A] flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-7 pt-0">
                <button
                  onClick={() => handleInquireTour(tour.title)}
                  className="w-full py-4 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] hover:text-black transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Book This Heritage Tour</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

