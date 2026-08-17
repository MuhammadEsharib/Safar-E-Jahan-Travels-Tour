import React, { useState, useEffect } from "react";
import { NavScreen, PackageDetail } from "../types";
import { Logo } from "./Logo";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Sparkles,
  Globe,
  ArrowRight,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface NavbarProps {
  currentScreen: NavScreen;
  onNavigate: (screen: NavScreen) => void;
  onOpenPlanner: () => void;
  onOpenContact: () => void;
  onSelectPackage?: (pkg: PackageDetail) => void;
  selectedCurrency: "PKR" | "USD" | "SAR" | "GBP";
  onCurrencyChange: (curr: "PKR" | "USD" | "SAR" | "GBP") => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentScreen,
  onNavigate,
  onOpenPlanner,
  onOpenContact,
  selectedCurrency,
  onCurrencyChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile drawer
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const navItems: { label: string; screen: NavScreen; badge?: string }[] = [
    { label: "HOME", screen: "home" },
    { label: "UMRAH", screen: "umrah", badge: "Featured" },
    { label: "HAJJ", screen: "hajj" },
    { label: "SERVICES", screen: "services" },
    { label: "HERITAGE", screen: "heritage" },
    { label: "ABOUT", screen: "about" },
    { label: "CONTACT", screen: "contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0A0A0A]/95 backdrop-blur-md shadow-2xl border-b border-white/10 py-2 sm:py-2.5"
            : "bg-linear-to-b from-[#0A0A0A]/98 via-[#0A0A0A]/90 to-transparent py-2.5 sm:py-3.5"
        }`}
        id="main-navigation"
      >
        {/* Top Info Bar (Desktop >= 1280px xl screen) */}
        <div className="hidden xl:block border-b border-white/10 pb-2 mb-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs text-[#A0A0A0]">
            <div className="flex items-center gap-4 xl:gap-6 min-w-0">
              <span className="flex items-center gap-2 text-[#E0E0E0] font-mono text-[11px] uppercase tracking-wider shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
                Saudi Ministry Approved • Umrah & Hajj Certified
              </span>
              <span className="text-white/20">|</span>
              <a
                href="tel:03458050124"
                className="hover:text-[#C5FF4A] transition-colors flex items-center gap-1.5 font-medium shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5FF4A]" />
                Direct Helpline:{" "}
                <span className="text-white font-mono font-semibold">
                  0345-8050124
                </span>
              </a>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <span className="text-neutral-400 font-serif italic text-xs">
                Motto:{" "}
                <span className="font-urdu text-[#dfa742] text-sm not-italic ml-1">
                  آؤ سفر کریں جہاں کا
                </span>
              </span>
              <span className="h-3 w-px bg-white/20"></span>
              <div className="flex items-center gap-1.5 bg-[#141414] rounded-full px-3 py-0.5 border border-white/10">
                <Globe className="w-3 h-3 text-neutral-400" />
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-mono">
                  Currency:
                </span>
                <select
                  value={selectedCurrency}
                  onChange={(e) => onCurrencyChange(e.target.value as any)}
                  className="bg-transparent text-[#C5FF4A] font-mono font-bold text-xs focus:outline-none cursor-pointer"
                  id="currency-select"
                >
                  <option value="PKR" className="bg-[#121212] text-white">
                    PKR (₨)
                  </option>
                  <option value="USD" className="bg-[#121212] text-white">
                    USD ($)
                  </option>
                  <option value="SAR" className="bg-[#121212] text-white">
                    SAR (﷼)
                  </option>
                  <option value="GBP" className="bg-[#121212] text-white">
                    GBP (£)
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header Bar */}
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex items-center justify-between gap-2 sm:gap-3 md:gap-4">
            {/* Left: Logo */}
            <button
              onClick={() => onNavigate("home")}
              className="text-left focus:outline-none transition-transform active:scale-95 shrink-0 min-w-0"
              id="navbar-logo-btn"
            >
              <Logo className="max-w-[220px]" />
            </button>

            {/* Center: Desktop Navigation Links (>= 1280px xl) */}
            <nav
              className="hidden xl:flex items-center gap-1 min-w-0"
              id="desktop-nav-links"
            >
              {navItems.map((item) => {
                const isActive = currentScreen === item.screen;
                return (
                  <button
                    key={item.screen}
                    onClick={() => onNavigate(item.screen)}
                    className={`relative px-3 py-2 text-xs font-bold uppercase tracking-[0.14em] transition-all rounded-md whitespace-nowrap shrink-0 ${
                      isActive
                        ? "text-[#C5FF4A] font-black"
                        : "text-neutral-300 hover:text-white hover:bg-white/5"
                    }`}
                    id={`nav-link-${item.screen}`}
                  >
                    {item.label}
                    {item.badge && (
                      <span className="ml-1.5 text-[8px] px-1.5 py-0.5 rounded-full bg-[#C5FF4A]/15 text-[#C5FF4A] border border-[#C5FF4A]/40 font-mono">
                        {item.badge}
                      </span>
                    )}
                    {isActive && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right: Desktop Action Buttons (>= 1280px xl) */}
            <div
              className="hidden xl:flex items-center gap-3 shrink-0"
              id="desktop-nav-actions"
            >
              <button
                onClick={onOpenContact}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-bold text-white bg-[#141414] hover:bg-[#1f1f1f] border border-white/15 transition-all active:scale-95 hover:border-[#C5FF4A]/50"
                id="header-talk-btn"
              >
                <Phone className="w-3.5 h-3.5 text-[#C5FF4A]" />
                <span>0345-8050124</span>
              </button>

              <button
                onClick={onOpenPlanner}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-black uppercase tracking-widest text-black bg-white hover:bg-[#C5FF4A] transition-all transform hover:scale-105 shadow-md shadow-white/5 active:scale-95"
                id="header-book-btn"
              >
                <Sparkles className="w-3.5 h-3.5 text-black shrink-0" />
                <span className="whitespace-nowrap">PLAN JOURNEY</span>
              </button>
            </div>

            {/* Tablet & Small Laptop Action Bar */}
            <div className="hidden md:flex xl:hidden items-center gap-2 shrink-0">
              <div className="flex items-center gap-1 bg-[#141414] rounded-full px-2.5 py-1 border border-white/10">
                <select
                  value={selectedCurrency}
                  onChange={(e) => onCurrencyChange(e.target.value as any)}
                  className="bg-transparent text-[#C5FF4A] font-mono font-bold text-[10px] sm:text-xs focus:outline-none cursor-pointer"
                >
                  <option value="PKR" className="bg-[#121212] text-white">
                    PKR
                  </option>
                  <option value="USD" className="bg-[#121212] text-white">
                    USD
                  </option>
                  <option value="SAR" className="bg-[#121212] text-white">
                    SAR
                  </option>
                  <option value="GBP" className="bg-[#121212] text-white">
                    GBP
                  </option>
                </select>
              </div>

              <button
                onClick={onOpenPlanner}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider text-black bg-[#C5FF4A] hover:bg-white transition-all active:scale-95 shadow-sm"
              >
                <Sparkles className="w-3 h-3 text-black shrink-0" />
                <span>PLAN</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl text-neutral-300 hover:text-white bg-[#141414] border border-white/10 hover:border-[#C5FF4A]/50 active:scale-95 flex items-center gap-1.5 text-[10px] sm:text-xs font-mono"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5FF4A]" />
                ) : (
                  <Menu className="w-4 h-4 sm:w-5 sm:h-5 text-[#C5FF4A]" />
                )}
                <span className="hidden sm:inline font-bold">MENU</span>
              </button>
            </div>

            {/* Mobile Action Bar */}
            <div className="flex md:hidden items-center gap-2 shrink-0">
              <button
                onClick={onOpenPlanner}
                className="px-2.5 py-1.5 text-[9px] font-black uppercase tracking-wider rounded-full bg-[#C5FF4A] text-black active:scale-95 flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3 text-black shrink-0" />
                <span>Plan</span>
              </button>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-neutral-300 hover:text-white bg-[#141414] border border-white/10 active:scale-95"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-4 h-4 text-[#C5FF4A]" />
                ) : (
                  <Menu className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* MOBILE & TABLET DRAWER NAVIGATION (< 1280px xl) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <div className="fixed inset-0 z-50 xl:hidden">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Slide-in Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-[#0F0F0F] border-l border-white/15 p-5 sm:p-6 shadow-2xl flex flex-col justify-between overflow-y-auto z-50"
            >
              <div className="space-y-5">
                {/* Drawer Header */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#C5FF4A] shadow-[0_0_8px_#C5FF4A]"></span>
                    <span className="font-serif-heading font-black text-white text-base tracking-wider">
                      SAFAR-E-JAHAN
                    </span>
                  </div>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2 rounded-full bg-[#181818] text-neutral-300 hover:text-white border border-white/10 active:scale-95"
                    aria-label="Close navigation menu"
                  >
                    <X className="w-5 h-5 text-[#C5FF4A]" />
                  </button>
                </div>

                {/* Direct Support Pill */}
                <div className="p-3.5 rounded-2xl bg-[#161616] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#C5FF4A]" />
                    <div className="text-left">
                      <div className="text-[9px] font-mono uppercase text-neutral-400">
                        Direct 24/7 Helpline
                      </div>
                      <div className="font-mono font-bold text-white text-xs">
                        0345-8050124
                      </div>
                    </div>
                  </div>
                  <a
                    href="tel:03458050124"
                    className="px-3 py-1 bg-[#C5FF4A] text-black font-mono font-bold text-[11px] rounded-full active:scale-95"
                  >
                    Call Now
                  </a>
                </div>

                {/* Nav Links List */}
                <div className="space-y-1.5 py-1">
                  {navItems.map((item) => {
                    const isActive = currentScreen === item.screen;
                    return (
                      <button
                        key={item.screen}
                        onClick={() => {
                          onNavigate(item.screen);
                          setMobileMenuOpen(false);
                        }}
                        className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left text-sm font-bold uppercase tracking-wider transition-all ${
                          isActive
                            ? "bg-white text-black font-black shadow-lg"
                            : "text-neutral-300 hover:text-white hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${isActive ? "bg-[#0A0A0A]" : "bg-[#C5FF4A]"}`}
                          ></span>
                          <span>{item.label}</span>
                        </div>
                        {item.badge ? (
                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full font-mono font-bold ${
                              isActive
                                ? "bg-[#0A0A0A] text-[#C5FF4A]"
                                : "bg-[#C5FF4A]/20 text-[#C5FF4A] border border-[#C5FF4A]/40"
                            }`}
                          >
                            {item.badge}
                          </span>
                        ) : (
                          <ArrowRight
                            className={`w-4 h-4 ${isActive ? "text-black" : "text-neutral-500"}`}
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Drawer Bottom Actions */}
              <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
                <button
                  onClick={() => {
                    onOpenPlanner();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3.5 rounded-full font-black text-xs uppercase tracking-widest text-center bg-[#C5FF4A] text-black shadow-xl flex items-center justify-center gap-2 active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-black" />
                  Plan Your Journey
                </button>

                <button
                  onClick={() => {
                    onOpenContact();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-3.5 rounded-full font-bold text-xs font-mono tracking-wider text-center bg-[#181818] text-white border border-white/15 hover:border-[#C5FF4A] flex items-center justify-center gap-2 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 text-[#C5FF4A]" />
                  Chat on WhatsApp & Inquire
                </button>

                {/* Currency Switcher in Drawer */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#141414] rounded-2xl border border-white/10">
                  <span className="text-xs text-neutral-400 font-mono flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#C5FF4A]" /> Currency:
                  </span>
                  <div className="flex gap-1">
                    {(["PKR", "USD", "SAR", "GBP"] as const).map((c) => (
                      <button
                        key={c}
                        onClick={() => onCurrencyChange(c)}
                        className={`text-xs font-mono font-bold px-2.5 py-1 rounded-lg transition-all ${
                          selectedCurrency === c
                            ? "bg-[#C5FF4A] text-black shadow-sm"
                            : "text-neutral-400 hover:text-white bg-[#202020]"
                        }`}
                      >
                        {c}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-center text-[10px] font-mono text-neutral-500 pt-1">
                  Saudi Ministry Approved • MOFA Certified
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
