import React, { useState } from 'react';
import { X, Sparkles, BedDouble, Calendar, Users, Car, Plane, CheckCircle2, MessageCircle, Phone } from 'lucide-react';

interface JourneyPlannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'PKR' | 'USD' | 'SAR' | 'GBP';
}

export const JourneyPlannerModal: React.FC<JourneyPlannerModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  if (!isOpen) return null;

  const [journeyType, setJourneyType] = useState<'umrah' | 'hajj' | 'heritage'>('umrah');
  const [makkahNights, setMakkahNights] = useState<number>(7);
  const [madinahNights, setMadinahNights] = useState<number>(5);
  const [hotelTier, setHotelTier] = useState<'3star' | '4star' | '5starFrontRow'>('4star');
  const [roomType, setRoomType] = useState<'quad' | 'triple' | 'double' | 'single'>('double');
  const [transport, setTransport] = useState<'coach' | 'hiace' | 'gmcYukon'>('hiace');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(0);
  const [departureCity, setDepartureCity] = useState<string>('Karachi');
  const [travelMonth, setTravelMonth] = useState<string>('Next 30 Days');
  const [includeFlights, setIncludeFlights] = useState<boolean>(true);
  const [includeZiyarat, setIncludeZiyarat] = useState<boolean>(true);

  // Dynamic cost calculation algorithm
  const calculateTotalCost = () => {
    let basePerNight = 0;
    if (hotelTier === '3star') basePerNight = 12000;
    else if (hotelTier === '4star') basePerNight = 24000;
    else basePerNight = 58000; // 5starFrontRow

    const totalNights = makkahNights + madinahNights;
    let roomFactor = 1.0;
    if (roomType === 'single') roomFactor = 1.8;
    else if (roomType === 'double') roomFactor = 1.3;
    else if (roomType === 'triple') roomFactor = 1.1;

    let transportCost = 35000;
    if (transport === 'hiace') transportCost = 75000;
    if (transport === 'gmcYukon') transportCost = 160000;

    let flightCost = includeFlights ? 145000 * adults + (includeFlights ? 120000 * children : 0) : 0;
    let visaAndInsurance = 45000 * (adults + children);
    let ziyaratCost = includeZiyarat ? 15000 * (adults + children) : 0;

    const accommodationCost = basePerNight * totalNights * roomFactor * adults;
    const totalPkr = accommodationCost + transportCost + flightCost + visaAndInsurance + ziyaratCost;

    switch (currency) {
      case 'USD':
        return `$${Math.round(totalPkr / 278).toLocaleString()}`;
      case 'SAR':
        return `SAR ${Math.round(totalPkr / 74).toLocaleString()}`;
      case 'GBP':
        return `£${Math.round(totalPkr / 355).toLocaleString()}`;
      case 'PKR':
      default:
        return `PKR ${Math.round(totalPkr).toLocaleString()}`;
    }
  };

  const handleLaunchWhatsApp = () => {
    const hotelTierLabel = hotelTier === '3star' ? '3-Star Economy' : hotelTier === '4star' ? '4-Star Premium Walk' : '5-Star Haram Front-Row (Fairmont/Raffles/Oberoi)';
    const transportLabel = transport === 'coach' ? 'Luxury AC Coach' : transport === 'hiace' ? 'Private HiAce Van' : 'VIP Chauffeur GMC Yukon XL';

    const text = `*🌟 Bespoke Pilgrimage Request - Safar-E-Jahan*\n\n` +
      `🕋 *Pilgrimage:* ${journeyType.toUpperCase()}\n` +
      `📅 *Duration:* ${makkahNights + madinahNights} Nights (${makkahNights}N Makkah + ${madinahNights}N Madinah)\n` +
      `🏨 *Hotel Class:* ${hotelTierLabel}\n` +
      `🛏 *Room Type:* ${roomType.toUpperCase()}\n` +
      `🚘 *Transport:* ${transportLabel}\n` +
      `👥 *Travelers:* ${adults} Adults, ${children} Children\n` +
      `✈️ *Departure:* ${departureCity} (Flights: ${includeFlights ? 'Yes' : 'Own arrangements'})\n` +
      `🕌 *Ziyarat Included:* ${includeZiyarat ? 'Yes' : 'No'}\n` +
      `🗓 *Travel Timeline:* ${travelMonth}\n` +
      `💰 *Estimated Total:* ${calculateTotalCost()}\n\n` +
      `Please provide final quotation and confirm availability.`;

    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/923458050124?text=${encoded}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto" id="journey-planner-modal">
      <div className="relative w-full max-w-4xl bg-[#121212] border border-white/15 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-[#181818] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center text-[#C5FF4A]">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold mb-0.5">
                CUSTOM ITINERARY
              </div>
              <h2 className="font-serif-heading text-xl sm:text-2xl font-bold text-white">
                Plan Your Sacred Journey
              </h2>
              <p className="text-xs font-editorial-serif italic text-neutral-300">
                Customize nights, hotels, flights, and VIP ground transport tailored to your devotion.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2.5 rounded-full bg-[#1C1C1C] text-neutral-300 hover:text-white hover:border-[#C5FF4A] border border-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-7 flex-1 text-[#E0E0E0]">
          {/* Pilgrimage Type */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5FF4A] font-bold mb-3">
              01. Select Pilgrimage Category
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'umrah', label: 'Umrah Pilgrimage', sub: 'Flexible Year-Round' },
                { id: 'hajj', label: 'Hajj 2025/2026', sub: 'Executive VIP Maktab' },
                { id: 'heritage', label: 'Islamic Heritage', sub: 'Taif, Badr & Holy Sites' },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setJourneyType(item.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    journeyType === item.id
                      ? 'bg-[#1C1C1C] border-[#C5FF4A] text-white shadow-lg'
                      : 'bg-[#181818] border-white/10 text-neutral-300 hover:border-white/25'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold">{item.label}</div>
                  <div className="text-[10px] font-mono text-neutral-400 mt-1">{item.sub}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Nights in Makkah & Madinah */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#181818] border border-white/10 space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-white font-mono">Nights in Makkah al-Mukarramah</span>
                <span className="text-[#C5FF4A] font-mono font-bold text-sm">{makkahNights} Nights</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                value={makkahNights}
                onChange={(e) => setMakkahNights(parseInt(e.target.value))}
                className="w-full accent-[#C5FF4A] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                <span>3 Nights (Min)</span>
                <span>20 Nights</span>
              </div>
            </div>

            <div className="p-5 rounded-2xl bg-[#181818] border border-white/10 space-y-3">
              <div className="flex justify-between items-center text-xs font-semibold">
                <span className="text-white font-mono">Nights in Madinah al-Munawwarah</span>
                <span className="text-white font-mono font-bold text-sm">{madinahNights} Nights</span>
              </div>
              <input
                type="range"
                min="3"
                max="20"
                value={madinahNights}
                onChange={(e) => setMadinahNights(parseInt(e.target.value))}
                className="w-full accent-white cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-neutral-500">
                <span>3 Nights (Min)</span>
                <span>20 Nights</span>
              </div>
            </div>
          </div>

          {/* Hotel Star Rating */}
          <div>
            <label className="block text-[11px] font-mono uppercase tracking-[0.2em] text-[#C5FF4A] font-bold mb-3">
              02. Preferred Accommodation Standard
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: '3star', title: '3-Star Economy', desc: '500-800m with shuttle service' },
                { id: '4star', title: '4-Star Premium', desc: '100-250m direct walking to Haram' },
                { id: '5starFrontRow', title: '5-Star Front Row', desc: 'Clock Tower / Fairmont / Oberoi / Raffles' },
              ].map((tier) => (
                <button
                  key={tier.id}
                  onClick={() => setHotelTier(tier.id as any)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    hotelTier === tier.id
                      ? 'bg-[#1C1C1C] border-[#C5FF4A] text-white shadow-lg'
                      : 'bg-[#181818] border-white/10 text-neutral-300 hover:border-white/25'
                  }`}
                >
                  <div className="text-xs sm:text-sm font-bold flex items-center justify-between">
                    <span>{tier.title}</span>
                    {hotelTier === tier.id && <CheckCircle2 className="w-4 h-4 text-[#C5FF4A]" />}
                  </div>
                  <div className="text-[11px] font-editorial-serif italic text-neutral-400 mt-1">{tier.desc}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Transport and Room Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                Ground Transportation Preference
              </label>
              <select
                value={transport}
                onChange={(e) => setTransport(e.target.value as any)}
                className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
              >
                <option value="coach">Air-Conditioned Luxury Bus (Standard)</option>
                <option value="hiace">Private Toyota HiAce Grand Cabin Van</option>
                <option value="gmcYukon">VIP Chauffeur GMC Yukon XL (Royal Fleet)</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                Room Sharing Type
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value as any)}
                className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
              >
                <option value="quad">Quad Sharing (4 Persons / Room)</option>
                <option value="triple">Triple Sharing (3 Persons / Room)</option>
                <option value="double">Double / Twin Room (2 Persons)</option>
                <option value="single">Single Private Room</option>
              </select>
            </div>

            <div>
              <label className="block text-[11px] font-mono uppercase text-neutral-300 mb-1.5">
                Number of Adults (12+ yrs)
              </label>
              <input
                type="number"
                min="1"
                max="30"
                value={adults}
                onChange={(e) => setAdults(parseInt(e.target.value) || 1)}
                className="w-full bg-[#181818] border border-white/15 rounded-xl p-3 text-xs text-white focus:border-[#C5FF4A] focus:outline-none"
              />
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
                <option value="Multan / Sialkot">Multan / Sialkot</option>
                <option value="London UK / Europe">London (UK) / Europe</option>
                <option value="USA / Canada">USA / Canada</option>
              </select>
            </div>
          </div>

          {/* Add-ons checkboxes */}
          <div className="flex flex-wrap gap-6 pt-2">
            <label className="flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer font-mono">
              <input
                type="checkbox"
                checked={includeFlights}
                onChange={(e) => setIncludeFlights(e.target.checked)}
                className="accent-[#C5FF4A] w-4 h-4 rounded"
              />
              <span>Include Return International Flights</span>
            </label>

            <label className="flex items-center gap-2.5 text-xs text-neutral-300 cursor-pointer font-mono">
              <input
                type="checkbox"
                checked={includeZiyarat}
                onChange={(e) => setIncludeZiyarat(e.target.checked)}
                className="accent-[#C5FF4A] w-4 h-4 rounded"
              />
              <span>Include Guided Historical Ziyarat Tours</span>
            </label>
          </div>
        </div>

        {/* Modal Price Footer and WhatsApp Trigger */}
        <div className="p-6 bg-[#0E0E0E] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-[10px] text-neutral-400 uppercase tracking-[0.2em] font-mono block">Estimated Quote ({currency})</span>
            <div className="text-2xl sm:text-3xl font-black text-white font-mono flex items-baseline gap-2 mt-0.5">
              {calculateTotalCost()}
              <span className="text-xs text-neutral-400 font-normal">for {adults} adult(s)</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleLaunchWhatsApp}
              className="flex-1 sm:flex-initial px-8 py-3.5 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] shadow-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-105 active:scale-95"
              id="submit-journey-plan-btn"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>Send Plan to WhatsApp</span>
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

