import React from "react";
import { PackageDetail } from "../types";
import {
  Clock,
  BedDouble,
  UtensilsCrossed,
  Car,
  Sparkles,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { motion } from "motion/react";
import { ShimmerImage } from "./ShimmerImage";

interface PackageCardProps {
  pkg: PackageDetail;
  currency: "PKR" | "USD" | "SAR" | "GBP";
  onSelect: (pkg: PackageDetail) => void;
  onBookNow: (pkg: PackageDetail) => void;
  index?: number;
}

export const packageCardVariants = {
  hidden: {
    opacity: 0,
    y: 36,
    scale: 0.98,
  },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.12,
    },
  }),
};

export const PackageCard: React.FC<PackageCardProps> = ({
  pkg,
  currency,
  onSelect,
  onBookNow,
  index = 0,
}) => {
  // Format price based on currency
  const formatPrice = () => {
    switch (currency) {
      case "USD":
        return `$${pkg.priceStartingFrom.usd.toLocaleString()}`;
      case "SAR":
        return `SAR ${pkg.priceStartingFrom.sar.toLocaleString()}`;
      case "GBP":
        return `£${Math.round(pkg.priceStartingFrom.usd * 0.79).toLocaleString()}`;
      case "PKR":
      default:
        return `PKR ${pkg.priceStartingFrom.pkr.toLocaleString()}`;
    }
  };

  return (
    <motion.div
      variants={packageCardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      custom={index}
      className={`group relative flex flex-col rounded-3xl overflow-hidden bg-[#121212] border transition-all duration-300 hover:-translate-y-1.5 w-full min-w-0 max-w-full ${
        pkg.isPopular
          ? "border-[#C5FF4A]/80 shadow-[0_0_30px_rgba(197,255,74,0.15)]"
          : "border-white/10 hover:border-[#C5FF4A]/50 shadow-2xl shadow-black/80"
      }`}
      id={`package-card-${pkg.id}`}
    >
      {/* Top Image & Badges */}
      <div className="relative h-56 sm:h-64 md:h-60 lg:h-64 w-full overflow-hidden bg-[#181818] shrink-0">
        <ShimmerImage
          src={pkg.image}
          alt={pkg.name}
          fallbackSrcs={pkg.galleryImages}
          containerClassName="w-full h-full"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-black/60 pointer-events-none"></div>

        {/* Location Tag (Top Left) */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10">
          <span className="inline-flex items-center px-2.5 sm:px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-mono font-bold tracking-wider bg-[#0A0A0A]/90 backdrop-blur-md text-white border border-white/15">
            {pkg.tag}
          </span>
        </div>

        {/* Most Popular Badge (Top Right) */}
        {pkg.isPopular && (
          <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10">
            <span className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider sm:tracking-widest bg-[#C5FF4A] text-black shadow-lg">
              <Sparkles className="w-2.5 sm:w-3 h-2.5 sm:h-3 text-black fill-black shrink-0" />
              CURATED FAVORITE
            </span>
          </div>
        )}

        {/* Price Overlay Banner */}
        <div className="absolute bottom-2.5 sm:bottom-3 left-3 sm:left-4 right-3 sm:right-4 flex items-end justify-between gap-2">
          <div className="min-w-0">
            <span className="text-[9px] sm:text-[10px] uppercase font-mono tracking-widest text-neutral-400 font-medium block">
              ESTIMATED FROM
            </span>
            <div className="text-lg sm:text-xl md:text-2xl font-mono font-black text-white truncate">
              {formatPrice()}
              <span className="text-[11px] sm:text-xs text-neutral-400 font-sans font-normal ml-1">
                / person
              </span>
            </div>
          </div>
          <div className="text-right shrink-0">
            <span className="text-[10px] sm:text-[11px] font-mono text-[#C5FF4A] font-bold flex items-center gap-1 justify-end">
              <ShieldCheck className="w-3.5 h-3.5" /> MOFA Certified
            </span>
          </div>
        </div>
      </div>

      {/* Content Body */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 justify-between min-w-0">
        <div className="min-w-0">
          <h3 className="font-serif-heading text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-[#C5FF4A] transition-colors line-clamp-1">
            {pkg.name}
          </h3>

          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed line-clamp-2 mb-4 sm:mb-5 font-normal">
            {pkg.description}
          </p>

          {/* Key Specs List */}
          <div className="space-y-2 sm:space-y-2.5 border-t border-b border-white/10 py-3 sm:py-4 mb-4 sm:mb-6 text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-2.5 text-neutral-200 min-w-0">
              <Clock className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#C5FF4A] flex-shrink-0" />
              <span className="font-mono font-medium truncate">
                {pkg.duration}
              </span>
              <span className="text-neutral-500 text-[11px] sm:text-xs truncate">
                ({pkg.makkahNights}N Makkah / {pkg.madinahNights}N Madinah)
              </span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 text-neutral-200 min-w-0">
              <BedDouble className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#dfa742] flex-shrink-0" />
              <span className="font-medium truncate">{pkg.hotelRating}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 text-neutral-200 min-w-0">
              <UtensilsCrossed className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#C5FF4A] flex-shrink-0" />
              <span className="font-medium truncate">{pkg.mealPlan}</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-2.5 text-neutral-200 min-w-0">
              <Car className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-[#dfa742] flex-shrink-0" />
              <span className="font-medium text-neutral-300 truncate">
                {pkg.transportType}
              </span>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 pt-1">
          <button
            onClick={() => onSelect(pkg)}
            className={`w-full py-2.5 sm:py-3 px-2 sm:px-3 rounded-full text-[11px] sm:text-xs font-black uppercase tracking-wider sm:tracking-widest transition-all duration-200 flex items-center justify-center gap-1 sm:gap-1.5 active:scale-95 ${
              pkg.isPopular
                ? "bg-white text-black hover:bg-[#C5FF4A] hover:text-black shadow-lg"
                : "bg-[#1C1C1C] hover:bg-white hover:text-black text-white border border-white/15"
            }`}
            id={`btn-details-${pkg.id}`}
          >
            <span>Details</span>
            <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5 shrink-0" />
          </button>

          <button
            onClick={() => onBookNow(pkg)}
            className="w-full py-2.5 sm:py-3 px-2 sm:px-3 rounded-full text-[11px] sm:text-xs font-mono font-bold tracking-wider transition-all duration-200 bg-[#161616] hover:bg-[#252525] text-[#C5FF4A] border border-[#C5FF4A]/40 hover:border-[#C5FF4A] active:scale-95 truncate"
            id={`btn-book-${pkg.id}`}
          >
            Inquire Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};
