import React from 'react';
import { NavScreen } from '../types';
import { Logo } from './Logo';
import { Phone, Mail, MapPin, MessageCircle, ShieldCheck, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: NavScreen) => void;
  onOpenContact: () => void;
  onOpenPlanner: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenContact,
  onOpenPlanner,
}) => {
  return (
    <footer className="bg-[#080808] text-[#E0E0E0] border-t border-white/10 pt-20 pb-12" id="main-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Call to Action Banner inside Footer */}
        <div className="mb-16 p-8 sm:p-12 rounded-3xl bg-[#121212] border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.3em] text-[#C5FF4A] font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
              START YOUR SACRED JOURNEY
            </div>
            <h3 className="font-serif-heading text-2xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Ready to embark on a transformative journey?
            </h3>
            <p className="text-xs sm:text-sm font-editorial-serif italic text-neutral-300 max-w-xl">
              Talk directly with our experienced Umrah and Hajj consultants for customized family packages, dates, and VIP front-row hotel suites.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto flex-shrink-0">
            <button
              onClick={onOpenPlanner}
              className="flex-1 md:flex-initial px-8 py-4 rounded-full font-black text-xs uppercase tracking-widest bg-white text-black hover:bg-[#C5FF4A] shadow-2xl transition-all transform hover:scale-105 active:scale-95 text-center"
              id="footer-plan-cta"
            >
              PLAN JOURNEY
            </button>
            <button
              onClick={onOpenContact}
              className="flex-1 md:flex-initial px-7 py-4 rounded-full font-mono font-bold text-xs bg-[#1C1C1C] text-white border border-white/20 hover:border-[#C5FF4A] transition-all active:scale-95 text-center flex items-center justify-center gap-2"
              id="footer-contact-cta"
            >
              <Phone className="w-4 h-4 text-[#C5FF4A]" />
              0345-8050124
            </button>
          </div>
        </div>

        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-5">
            <Logo />
            <p className="text-xs sm:text-sm font-editorial-serif italic text-neutral-400 leading-relaxed max-w-sm">
              Crafting spiritually enriching, meticulously planned, and premium travel experiences for pilgrims worldwide. Dedicated to sacred hospitality.
            </p>

            <div className="pt-2 flex flex-col gap-3 text-xs">
              <a
                href="tel:03458050124"
                className="flex items-center gap-3 text-neutral-300 hover:text-[#C5FF4A] transition-colors group font-mono"
              >
                <div className="w-8 h-8 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#C5FF4A] group-hover:border-[#C5FF4A]/50">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span>0345-8050124 / +92 345 8050124</span>
              </a>

              <a
                href="mailto:info@safarejahan.com"
                className="flex items-center gap-3 text-neutral-300 hover:text-[#C5FF4A] transition-colors group font-mono"
              >
                <div className="w-8 h-8 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#C5FF4A] group-hover:border-[#C5FF4A]/50">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span>info@safarejahan.com</span>
              </a>

              <div className="flex items-start gap-3 text-neutral-400">
                <div className="w-8 h-8 rounded-xl bg-[#141414] border border-white/10 flex items-center justify-center text-[#C5FF4A] flex-shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-xs font-mono">Main Commercial Avenue, DHA / Blue Area Islamabad / Clifton Karachi</span>
              </div>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div>
            <h4 className="font-mono text-xs font-bold text-[#C5FF4A] uppercase tracking-[0.2em] mb-5">
              EXPLORE
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <button onClick={() => onNavigate('umrah')} className="hover:text-white transition-colors text-left">
                  Umrah Packages
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('hajj')} className="hover:text-white transition-colors text-left">
                  Hajj 2025/2026
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('heritage')} className="hover:text-white transition-colors text-left">
                  Islamic Heritage Tours
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">
                  Fast-Track Umrah Visas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-white transition-colors text-left">
                  VIP Chauffeur GMC Yukon
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Resources */}
          <div>
            <h4 className="font-mono text-xs font-bold text-[#C5FF4A] uppercase tracking-[0.2em] mb-5">
              RESOURCES
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li>
                <button onClick={onOpenPlanner} className="hover:text-white transition-colors text-left">
                  Custom Journey Planner
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  About Safar-E-Jahan
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white transition-colors text-left">
                  Emergency Pilgrim Helpline
                </button>
              </li>
              <li>
                <a href="#faq" onClick={() => onNavigate('contact')} className="hover:text-white transition-colors">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <span className="font-urdu text-base text-neutral-300 block pt-1">
                  آؤ سفر کریں جہاں کا
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Legal & Accreditations */}
          <div>
            <h4 className="font-mono text-xs font-bold text-[#C5FF4A] uppercase tracking-[0.2em] mb-5">
              LEGAL & TRUST
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C5FF4A]"></span>
                <span className="font-mono text-xs">Ministry of Hajj & Umrah Certified</span>
              </li>
              <li className="flex items-center gap-2 text-neutral-300">
                <span className="w-2 h-2 rounded-full bg-[#C5FF4A]"></span>
                <span className="font-mono text-xs">IATA Accredited Agency</span>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  Terms of Service
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('about')} className="hover:text-white transition-colors text-left">
                  Privacy Policy & Data Shield
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4 font-mono">
          <p>© 2025 Safar-E-Jahan Travel and Tours. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Powered by Precision Hospitality</span>
            <span className="text-[#C5FF4A] font-urdu text-sm">سفرِ جہاں</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

