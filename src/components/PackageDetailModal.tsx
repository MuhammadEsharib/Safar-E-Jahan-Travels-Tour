import React, { useState } from 'react';
import { PackageDetail } from '../types';
import { X, Check, Clock, BedDouble, UtensilsCrossed, Car, ShieldCheck, MapPin, Calendar, Users, MessageCircle, Phone, Sparkles } from 'lucide-react';
import { ShimmerImage } from './ShimmerImage';


interface PackageDetailModalProps {
  pkg: PackageDetail | null;
  currency: 'PKR' | 'USD' | 'SAR' | 'GBP';
  onClose: () => void;
  onBookDirect: (pkg: PackageDetail, customDetails: any) => void;
}

export const PackageDetailModal: React.FC<PackageDetailModalProps> = ({
  pkg,
  currency,
  onClose,
  onBookDirect,
}) => {
  if (!pkg) return null;

  const [activeTab, setActiveTab] = useState<'itinerary' | 'hotels' | 'inclusions' | 'book'>('itinerary');
  const [roomType, setRoomType] = useState<'quad' | 'triple' | 'double' | 'single'>('quad');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [departureCity, setDepartureCity] = useState<string>('Karachi');
  const [travelMonth, setTravelMonth] = useState<string>('Upcoming Month / Ramadan');
  const [specialNote, setSpecialNote] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  // Price calculation based on room type
  const roomMultiplier = {
    quad: 1.0,
    triple: 1.15,
    double: 1.35,
    single: 1.85,
  }[roomType];

  const calculatePrice = () => {
    const base = pkg.priceStartingFrom.pkr * roomMultiplier;
    switch (currency) {
      case 'USD':
        return `$${Math.round(pkg.priceStartingFrom.usd * roomMultiplier).toLocaleString()}`;
      case 'SAR':
        return `SAR ${Math.round(pkg.priceStartingFrom.sar * roomMultiplier).toLocaleString()}`;
      case 'GBP':
        return `£${Math.round(pkg.priceStartingFrom.usd * 0.79 * roomMultiplier).toLocaleString()}`;
      case 'PKR':
      default:
        return `PKR ${Math.round(base).toLocaleString()}`;
    }
  };

  const handleWhatsAppBooking = () => {
    const text = `*New Booking Inquiry - Safar-E-Jahan*\n\n` +
      `📦 *Package:* ${pkg.name} (${pkg.duration})\n` +
      `🛏 *Room Sharing:* ${roomType.toUpperCase()}\n` +
      `👥 *Travelers:* ${adults} Adults, ${children} Children\n` +
      `📍 *Departure City:* ${departureCity}\n` +
      `📅 *Preferred Month:* ${travelMonth}\n` +
      `💰 *Estimated Rate:* ${calculatePrice()} per person\n` +
      (specialNote ? `📝 *Notes:* ${specialNote}\n` : '') +
      `\nPlease provide complete availability and customized quotation.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/923458050124?text=${encoded}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto" id="package-detail-modal">
      <div className="relative w-full max-w-4xl bg-[#121212] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="relative h-48 sm:h-56 w-full flex-shrink-0 bg-neutral-900">
          <ShimmerImage
            src={pkg.image}
            alt={pkg.name}
            fallbackSrcs={pkg.galleryImages}
            containerClassName="w-full h-full"
            className="w-full h-full object-cover filter brightness-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent pointer-events-none"></div>


          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2.5 rounded-full bg-[#1C1C1C]/80 text-white hover:bg-[#C5FF4A] hover:text-black border border-white/10 transition-colors"
            id="close-package-modal"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Header Title Info */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-white text-black">
                  {pkg.tag}
                </span>
                <span className="text-xs font-mono text-neutral-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-[#C5FF4A]" /> {pkg.duration}
                </span>
              </div>
              <h2 className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
                {pkg.name}
              </h2>
            </div>

            <div className="text-left sm:text-right">
              <div className="text-[10px] font-mono uppercase text-neutral-400">Estimated from</div>
              <div className="text-xl sm:text-3xl font-black text-white font-mono">
                {calculatePrice()}
                <span className="text-xs text-neutral-400 font-normal"> / person</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex border-b border-white/10 bg-[#161616] px-6 text-xs font-mono font-bold uppercase tracking-wider overflow-x-auto">
          {[
            { id: 'itinerary', label: 'Day-by-Day Itinerary' },
            { id: 'hotels', label: 'Hotels & Transport' },
            { id: 'inclusions', label: 'Inclusions & Exclusions' },
            { id: 'book', label: 'Customize & Inquire' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`py-3.5 px-4 border-b-2 transition-colors whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-[#C5FF4A] text-[#C5FF4A] bg-[#1C1C1C]'
                  : 'border-transparent text-neutral-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 text-[#E0E0E0]">
          {activeTab === 'itinerary' && (
            <div className="space-y-4">
              <div className="text-[10px] uppercase font-mono tracking-[0.3em] text-[#C5FF4A] font-bold">
                PILGRIMAGE SCHEDULE & SPIRITUAL LANDMARKS
              </div>

              <div className="relative border-l-2 border-white/15 ml-3 pl-6 space-y-7">
                {pkg.itinerary.map((item) => (
                  <div key={item.day} className="relative">
                    {/* Timeline Node */}
                    <div className="absolute -left-[31px] top-0 w-4 h-4 rounded-full bg-[#C5FF4A] border-4 border-[#121212]"></div>

                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded bg-[#1C1C1C] text-[#C5FF4A] border border-white/10">
                        Day {item.day}
                      </span>
                      <span className="text-xs font-mono text-neutral-400 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#C5FF4A]" /> {item.location}
                      </span>
                    </div>

                    <h4 className="font-serif-heading font-bold text-white text-lg mb-1">
                      {item.title}
                    </h4>

                    <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-normal">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'hotels' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Makkah Hotel Card */}
                <div className="p-5 rounded-2xl bg-[#181818] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#C5FF4A] font-bold">
                      Makkah Accommodation
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{pkg.makkahNights} Nights</span>
                  </div>
                  <h4 className="font-serif-heading text-xl font-bold text-white">
                    {pkg.makkahHotel}
                  </h4>
                  <div className="space-y-1.5 text-xs text-neutral-300">
                    <p><strong className="text-white">Proximity:</strong> {pkg.distanceMakkah}</p>
                    <p><strong className="text-white">Rating:</strong> {pkg.hotelRating}</p>
                    <p><strong className="text-white">Meal Plan:</strong> {pkg.mealPlan}</p>
                  </div>
                </div>

                {/* Madinah Hotel Card */}
                <div className="p-5 rounded-2xl bg-[#181818] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-white font-bold">
                      Madinah Accommodation
                    </span>
                    <span className="text-xs font-mono text-neutral-400">{pkg.madinahNights} Nights</span>
                  </div>
                  <h4 className="font-serif-heading text-xl font-bold text-white">
                    {pkg.madinahHotel}
                  </h4>
                  <div className="space-y-1.5 text-xs text-neutral-300">
                    <p><strong className="text-white">Proximity:</strong> {pkg.distanceMadinah}</p>
                    <p><strong className="text-white">Rating:</strong> {pkg.hotelRating}</p>
                    <p><strong className="text-white">Meal Plan:</strong> {pkg.mealPlan}</p>
                  </div>
                </div>
              </div>

              {/* Transport Feature */}
              <div className="p-5 rounded-2xl bg-[#181818] border border-white/10 flex items-start gap-4">
                <Car className="w-6 h-6 text-[#C5FF4A] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif-heading font-bold text-white text-base mb-1">
                    Ground Transportation: {pkg.transportType}
                  </h4>
                  <p className="text-xs text-neutral-300 leading-relaxed font-editorial-serif italic">
                    Includes all airport pickups, intercity travel (Jeddah → Makkah → Madinah → Airport), and guided Ziyarat tours in both Holy Cities with multilingual drivers and dedicated coordinators.
                  </p>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inclusions' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inclusions */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold text-[#C5FF4A] uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" /> Package Inclusions
                </h4>
                <ul className="space-y-2.5">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <span className="w-4 h-4 rounded-full bg-[#1C1C1C] border border-[#C5FF4A]/40 text-[#C5FF4A] flex items-center justify-center text-[10px] mt-0.5 flex-shrink-0">
                        ✓
                      </span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Exclusions */}
              <div className="space-y-4">
                <h4 className="font-mono text-xs font-bold text-neutral-400 uppercase tracking-wider flex items-center gap-2">
                  <X className="w-4 h-4" /> Exclusions
                </h4>
                <ul className="space-y-2.5">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-neutral-400">
                      <span className="w-4 h-4 rounded-full bg-[#1C1C1C] border border-white/10 text-neutral-400 flex items-center justify-center text-[10px] mt-0.5 flex-shrink-0">
                        ✕
                      </span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'book' && (
            <div className="space-y-5">
              <div className="p-4 bg-[#181818] rounded-2xl border border-white/10 flex items-center justify-between text-xs font-mono">
                <span>Selected: <strong className="text-white">{pkg.name}</strong></span>
                <span className="text-[#C5FF4A] font-bold">{calculatePrice()} / person ({roomType.toUpperCase()})</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                    Room Sharing Tier
                  </label>
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e.target.value as any)}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
                  >
                    <option value="quad">Quad Sharing (4 beds / room - Standard)</option>
                    <option value="triple">Triple Sharing (3 beds / room)</option>
                    <option value="double">Double / Twin Sharing (2 persons / room)</option>
                    <option value="single">Single Private Room (1 person)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                    Departure City
                  </label>
                  <select
                    value={departureCity}
                    onChange={(e) => setDepartureCity(e.target.value)}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
                  >
                    <option value="Karachi">Karachi (KHI)</option>
                    <option value="Lahore">Lahore (LHE)</option>
                    <option value="Islamabad">Islamabad (ISB)</option>
                    <option value="Peshawar">Peshawar (PEW)</option>
                    <option value="Multan">Multan / Sialkot</option>
                    <option value="International (UK/USA/UAE)">International (UK / USA / Gulf)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                    Number of Adults
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="25"
                    value={adults}
                    onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                    Children / Infants (Optional)
                  </label>
                  <input
                    type="number"
                    min="0"
                    max="10"
                    value={children}
                    onChange={(e) => setChildren(parseInt(e.target.value) || 0)}
                    className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                  Special Notes or Requirements
                </label>
                <textarea
                  rows={2}
                  value={specialNote}
                  onChange={(e) => setSpecialNote(e.target.value)}
                  placeholder="E.g. Wheelchair assistance required, specific airline preference (Saudia/PIA), or Ramadan last 10 days request..."
                  className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
                ></textarea>
              </div>

              {submitted && (
                <div className="p-4 bg-[#181818] border border-[#C5FF4A]/50 rounded-2xl text-neutral-200 text-xs flex items-center gap-2 font-mono">
                  <Check className="w-4 h-4 text-[#C5FF4A]" /> Inquiry initiated! Our consultant is responding via WhatsApp/phone.
                </div>
              )}
            </div>
          )}
        </div>

        {/* Modal Footer Controls */}
        <div className="p-5 sm:p-6 bg-[#0E0E0E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-neutral-400 font-mono">
            <Phone className="w-4 h-4 text-[#C5FF4A]" />
            <span>Need immediate guidance? Call <strong className="text-white">0345-8050124</strong></span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleWhatsAppBooking}
              className="flex-1 sm:flex-initial px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] shadow-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95"
              id="modal-whatsapp-inquire-btn"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>Inquire via WhatsApp</span>
            </button>

            <button
              onClick={onClose}
              className="px-6 py-3.5 rounded-full font-mono text-xs bg-[#1C1C1C] text-neutral-300 hover:text-white border border-white/15"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

