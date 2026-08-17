import React, { useState, useEffect } from 'react';
import { Testimonial } from '../types';
import { TESTIMONIALS_DATA } from '../data/packagesData';
import { Star, CheckCircle, ChevronLeft, ChevronRight, LayoutGrid, SlidersHorizontal, Quote, Sparkles, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface TestimonialsProps {
  onOpenContact?: () => void;
  className?: string;
}

export const Testimonials: React.FC<TestimonialsProps> = ({
  onOpenContact,
  className = '',
}) => {
  const [viewMode, setViewMode] = useState<'carousel' | 'grid'>('carousel');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);

  const testimonials = TESTIMONIALS_DATA;

  // Filtered testimonials for grid mode
  const filteredTestimonials = testimonials.filter((t) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'umrah') return t.packageType.toLowerCase().includes('umrah');
    if (selectedFilter === 'hajj') return t.packageType.toLowerCase().includes('hajj');
    if (selectedFilter === 'family') return t.badge?.toLowerCase().includes('family') || t.badge?.toLowerCase().includes('group');
    if (selectedFilter === 'ramadan') return t.packageType.toLowerCase().includes('ramadan');
    return true;
  });

  // Carousel auto-play
  useEffect(() => {
    if (viewMode !== 'carousel' || !isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [viewMode, isAutoPlaying, testimonials.length]);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section
      className={`py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B0B0B] text-[#E0E0E0] border-t border-b border-white/10 relative overflow-hidden ${className}`}
      id="testimonials-section"
    >
      {/* Subtle background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#C5FF4A]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16 pb-6 border-b border-white/10">
          <div className="space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-white/15">
              <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-neutral-300 font-bold">
                PILGRIM EXPERIENCES & VOICES
              </span>
            </div>
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight">
              Testimonials of Devotion
            </h2>
            <p className="text-xs sm:text-sm font-editorial-serif italic text-neutral-400 max-w-2xl">
              "Honored to serve thousands of pilgrims from across Pakistan, UK, UAE, and beyond with uncompromising dedication."
            </p>
          </div>

          {/* Controls: Rating Badge & View Mode Toggle */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Rating pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#141414] border border-white/15">
              <div className="flex text-[#dfa742]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#dfa742]" />
                ))}
              </div>
              <span className="font-mono text-xs font-bold text-white">4.95 / 5.0</span>
              <span className="text-[10px] font-mono text-neutral-400 border-l border-white/10 pl-2">
                (1,840+ Pilgrims)
              </span>
            </div>

            {/* Layout switch buttons */}
            <div className="flex items-center bg-[#141414] p-1 rounded-2xl border border-white/15">
              <button
                onClick={() => setViewMode('carousel')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'carousel'
                    ? 'bg-white text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Carousel View"
                aria-label="Carousel View"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Carousel</span>
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono font-bold transition-all flex items-center gap-1.5 ${
                  viewMode === 'grid'
                    ? 'bg-white text-black shadow-md'
                    : 'text-neutral-400 hover:text-white'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">All Reviews</span>
              </button>
            </div>
          </div>
        </div>

        {/* CAROUSEL VIEW */}
        {viewMode === 'carousel' && (
          <div className="relative">
            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: 'easeOut' }}
                  className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-[#141414] border border-white/15 shadow-2xl overflow-hidden"
                >
                  {/* Decorative Watermark Quote */}
                  <Quote className="absolute -top-4 -right-4 w-32 h-32 text-white/[0.03] select-none pointer-events-none rotate-12" />

                  <div className="relative z-10 space-y-6">
                    {/* Top Metadata Line */}
                    <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-white/10">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-2xl bg-[#1F1F1F] border border-white/20 flex items-center justify-center font-mono font-black text-sm text-[#C5FF4A] shadow-inner">
                          {currentTestimonial.avatarInitials}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white">
                              {currentTestimonial.name}
                            </h3>
                            {currentTestimonial.verified && (
                              <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#C5FF4A] bg-[#C5FF4A]/10 px-2 py-0.5 rounded-full border border-[#C5FF4A]/30">
                                <CheckCircle className="w-3 h-3" /> Verified
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-mono text-neutral-400">
                            {currentTestimonial.location} • <span className="text-[#dfa742]">{currentTestimonial.travelDate}</span>
                          </div>
                        </div>
                      </div>

                      {/* Rating & Badge */}
                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-1 text-[#dfa742]">
                          {[...Array(currentTestimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#dfa742]" />
                          ))}
                        </div>
                        {currentTestimonial.badge && (
                          <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-300 bg-[#1F1F1F] px-2.5 py-0.5 rounded-md border border-white/10">
                            {currentTestimonial.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Testimonial Title */}
                    <h4 className="font-serif-heading text-xl sm:text-2xl font-bold text-white text-balance leading-snug">
                      "{currentTestimonial.title}"
                    </h4>

                    {/* Testimonial Body */}
                    <p className="text-sm sm:text-base text-neutral-300 font-editorial-serif italic leading-relaxed">
                      "{currentTestimonial.comment}"
                    </p>

                    {/* Footer Package & Hotel Mention */}
                    <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-neutral-400 border-t border-white/10">
                      <div className="flex items-center gap-2">
                        <span className="text-neutral-500">PACKAGE:</span>
                        <span className="text-[#C5FF4A] font-bold">{currentTestimonial.packageType}</span>
                      </div>
                      {currentTestimonial.hotelMention && (
                        <div className="flex items-center gap-2">
                          <span className="text-neutral-500">STAY:</span>
                          <span className="text-neutral-200">{currentTestimonial.hotelMention}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel Controls */}
              <div className="flex items-center justify-between mt-8 pt-4">
                {/* Dots indicator */}
                <div className="flex items-center gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setIsAutoPlaying(false);
                        setCurrentIndex(idx);
                      }}
                      className={`transition-all rounded-full ${
                        currentIndex === idx
                          ? 'w-8 h-2 bg-[#C5FF4A]'
                          : 'w-2 h-2 bg-white/20 hover:bg-white/40'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow navigation buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    onClick={handlePrev}
                    className="p-3 rounded-full bg-[#141414] hover:bg-white hover:text-black text-white border border-white/20 transition-all active:scale-95 shadow-lg"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={handleNext}
                    className="p-3 rounded-full bg-[#141414] hover:bg-[#C5FF4A] hover:text-black text-white border border-white/20 transition-all active:scale-95 shadow-lg"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* GRID VIEW */}
        {viewMode === 'grid' && (
          <div className="space-y-8">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono text-neutral-500 mr-2">FILTER BY:</span>
              {[
                { id: 'all', label: 'All Reviews' },
                { id: 'umrah', label: 'Umrah' },
                { id: 'hajj', label: 'VIP Hajj' },
                { id: 'family', label: 'Family & Groups' },
                { id: 'ramadan', label: 'Ramadan Packages' },
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all ${
                    selectedFilter === filter.id
                      ? 'bg-[#C5FF4A] text-black font-bold shadow-md'
                      : 'bg-[#141414] text-neutral-400 hover:text-white border border-white/10 hover:border-white/20'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTestimonials.map((t) => (
                <motion.div
                  key={t.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative p-6 rounded-2xl bg-[#141414] border border-white/10 hover:border-[#C5FF4A]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center font-mono font-black text-xs text-[#C5FF4A]">
                          {t.avatarInitials}
                        </div>
                        <div>
                          <h3 className="font-serif-heading text-base font-bold text-white group-hover:text-[#C5FF4A] transition-colors">
                            {t.name}
                          </h3>
                          <div className="text-[11px] font-mono text-neutral-400">{t.location}</div>
                        </div>
                      </div>
                      <div className="flex text-[#dfa742]">
                        {[...Array(t.rating)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 fill-[#dfa742]" />
                        ))}
                      </div>
                    </div>

                    {/* Title & Comment */}
                    <div className="space-y-2">
                      <h4 className="font-serif-heading text-sm font-bold text-white leading-snug">
                        "{t.title}"
                      </h4>
                      <p className="text-xs text-neutral-300 font-editorial-serif italic leading-relaxed line-clamp-4">
                        "{t.comment}"
                      </p>
                    </div>
                  </div>

                  {/* Card Bottom Meta */}
                  <div className="pt-4 mt-4 border-t border-white/10 flex flex-col gap-1.5 text-[11px] font-mono">
                    <div className="flex items-center justify-between text-neutral-400">
                      <span className="text-[#C5FF4A] font-semibold truncate max-w-[200px]">{t.packageType}</span>
                      <span className="text-neutral-500 text-[10px]">{t.travelDate}</span>
                    </div>
                    {t.hotelMention && (
                      <span className="text-[10px] text-neutral-500 truncate">{t.hotelMention}</span>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Direct CTA banner */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-[#121212] via-[#181818] to-[#121212] border border-white/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-serif-heading text-lg sm:text-xl font-bold text-white">
              Ready to embark on your blessed pilgrimage?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 font-editorial-serif italic">
              Speak with our senior pilgrimage advisors or request a custom itinerary tailored to your family.
            </p>
          </div>
          {onOpenContact && (
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-full bg-white hover:bg-[#C5FF4A] text-black font-mono font-bold text-xs uppercase tracking-wider transition-all transform hover:scale-105 active:scale-95 shadow-xl flex items-center gap-2 whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Inquire & Consult Advisor</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
