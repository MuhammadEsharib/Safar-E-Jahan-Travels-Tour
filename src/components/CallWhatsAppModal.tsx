import React from 'react';
import { X, Phone, MessageCircle, Mail, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface CallWhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CallWhatsAppModal: React.FC<CallWhatsAppModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("Assalam-o-Alaikum, I would like to inquire about your Umrah / Hajj packages and customized travel services.");
    window.open(`https://wa.me/923458050124?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md" id="contact-quick-modal">
      <div className="relative w-full max-w-lg bg-[#121212] border border-white/15 rounded-3xl shadow-2xl p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2.5 rounded-full bg-[#1C1C1C] text-neutral-300 hover:text-white hover:border-[#C5FF4A] border border-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-[#1C1C1C] border border-white/15 flex items-center justify-center text-[#C5FF4A] mx-auto">
            <Phone className="w-5 h-5" />
          </div>
          <div className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold">
            24/7 DEDICATED CONCIERGE
          </div>
          <h3 className="font-serif-heading text-2xl sm:text-3xl font-bold text-white">
            Connect with Our Advisors
          </h3>
          <p className="text-xs sm:text-sm font-editorial-serif italic text-neutral-300">
            Available 24/7 for Umrah, Hajj, visa inquiries, and VIP hotel bookings.
          </p>
        </div>

        {/* Quick Action Buttons */}
        <div className="space-y-3">
          <button
            onClick={handleWhatsAppDirect}
            className="w-full py-4 px-6 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] shadow-2xl flex items-center justify-center gap-2.5 transition-all transform hover:scale-[1.01] active:scale-95"
            id="modal-quick-whatsapp"
          >
            <MessageCircle className="w-4 h-4 fill-black text-transparent" />
            <span>Chat on WhatsApp (+92 345 8050124)</span>
          </button>

          <a
            href="tel:03458050124"
            className="w-full py-4 px-6 rounded-full font-mono font-bold text-xs bg-[#1C1C1C] text-white border border-white/20 hover:border-[#C5FF4A] shadow-lg flex items-center justify-center gap-2.5 transition-all text-center"
            id="modal-quick-call"
          >
            <Phone className="w-4 h-4 text-[#C5FF4A]" />
            <span>Direct Call: 0345-8050124</span>
          </a>
        </div>

        {/* Details List */}
        <div className="pt-4 border-t border-white/10 space-y-3 text-xs text-neutral-300 font-mono">
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-[#C5FF4A] flex-shrink-0" />
            <span><strong className="text-white">Advisory:</strong> 24/7 Ground Support & Active Helpline</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-[#C5FF4A] flex-shrink-0" />
            <span><strong className="text-white">Email:</strong> info@safarejahan.com</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-[#C5FF4A] flex-shrink-0 mt-0.5" />
            <span><strong className="text-white">Offices:</strong> Karachi • Lahore • Islamabad • Makkah Branch (Ajyad)</span>
          </div>
        </div>

        <div className="p-3.5 rounded-2xl bg-[#181818] border border-white/10 flex items-center gap-3 text-xs text-neutral-400 font-mono">
          <ShieldCheck className="w-4 h-4 text-[#C5FF4A] flex-shrink-0" />
          <span>Licensed and authorized by Ministry of Hajj and Umrah (KSA).</span>
        </div>
      </div>
    </div>
  );
};

