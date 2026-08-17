/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { NavScreen, PackageDetail } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomeView } from './views/HomeView';
import { UmrahView } from './views/UmrahView';
import { HajjView } from './views/HajjView';
import { ServicesView } from './views/ServicesView';
import { HeritageView } from './views/HeritageView';
import { AboutView } from './views/AboutView';
import { ContactView } from './views/ContactView';
import { PackageDetailModal } from './components/PackageDetailModal';
import { JourneyPlannerModal } from './components/JourneyPlannerModal';
import { CallWhatsAppModal } from './components/CallWhatsAppModal';
import { PageTransitionLoader } from './components/PageTransitionLoader';
import { MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useWhatsAppVisibility } from './hooks/useWhatsAppVisibility';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<NavScreen>('home');
  const [isNavigating, setIsNavigating] = useState<boolean>(false);
  const [currency, setCurrency] = useState<'PKR' | 'USD' | 'SAR' | 'GBP'>('PKR');
  const [selectedPackage, setSelectedPackage] = useState<PackageDetail | null>(null);
  const [plannerOpen, setPlannerOpen] = useState<boolean>(false);
  const [contactModalOpen, setContactModalOpen] = useState<boolean>(false);

  // Check if any modal is active
  const isAnyModalOpen = Boolean(selectedPackage || plannerOpen || contactModalOpen);

  // Hook to hide floating WhatsApp button if near/past footer or if a modal is open
  const isWhatsAppVisible = useWhatsAppVisibility(isAnyModalOpen, 'main-footer');

  // Scroll to top on navigation with shimmer transition feedback
  const handleNavigate = (screen: NavScreen) => {
    if (screen === currentScreen) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setIsNavigating(true);
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      setIsNavigating(false);
    }, 380);
  };

  const handleSelectPackage = (pkg: PackageDetail) => {
    setSelectedPackage(pkg);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#E0E0E0] flex flex-col selection:bg-[#C5FF4A] selection:text-black antialiased relative">
      {/* Luxury Page Shimmer Transition Loader */}
      <PageTransitionLoader isLoading={isNavigating} />

      {/* Top Fixed Navbar */}
      <Navbar
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenPlanner={() => setPlannerOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onSelectPackage={handleSelectPackage}
        selectedCurrency={currency}
        onCurrencyChange={setCurrency}
      />


      {/* Main Dynamic Screen Content with Smooth Route Transition Animation */}
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {currentScreen === 'home' && (
              <HomeView
                onNavigate={handleNavigate}
                onOpenPlanner={() => setPlannerOpen(true)}
                onOpenContact={() => setContactModalOpen(true)}
                onSelectPackage={handleSelectPackage}
                currency={currency}
              />
            )}

            {(currentScreen === 'umrah' || currentScreen === 'packages') && (
              <UmrahView
                onSelectPackage={handleSelectPackage}
                onOpenPlanner={() => setPlannerOpen(true)}
                onOpenContact={() => setContactModalOpen(true)}
                currency={currency}
              />
            )}

            {currentScreen === 'hajj' && (
              <HajjView
                onSelectPackage={handleSelectPackage}
                onOpenPlanner={() => setPlannerOpen(true)}
                onOpenContact={() => setContactModalOpen(true)}
                currency={currency}
              />
            )}

            {currentScreen === 'services' && (
              <ServicesView
                onOpenPlanner={() => setPlannerOpen(true)}
                onOpenContact={() => setContactModalOpen(true)}
              />
            )}

            {currentScreen === 'heritage' && (
              <HeritageView
                onOpenContact={() => setContactModalOpen(true)}
              />
            )}

            {currentScreen === 'about' && (
              <AboutView
                onOpenPlanner={() => setPlannerOpen(true)}
                onOpenContact={() => setContactModalOpen(true)}
              />
            )}

            {currentScreen === 'contact' && (
              <ContactView />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Main Global Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenPlanner={() => setPlannerOpen(true)}
      />

      {/* Floating Action Button for Instant WhatsApp & Phone Assistance */}
      {/* Hidden dynamically when modal is open or when user scrolls past/near footer */}
      <AnimatePresence>
        {isWhatsAppVisible && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.88 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.88 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto"
            id="floating-whatsapp-container"
          >
            <button
              onClick={() => {
                const text = encodeURIComponent("Assalam-o-Alaikum, I am inquiring about Safar-E-Jahan Umrah & Hajj packages.");
                window.open(`https://wa.me/923458050124?text=${text}`, '_blank');
              }}
              className="group flex items-center gap-2.5 px-5 py-3 rounded-full bg-white text-black hover:bg-[#C5FF4A] shadow-2xl border border-white/20 transition-all hover:scale-105 active:scale-95 font-mono text-xs font-bold"
              id="floating-whatsapp-btn"
              title="Direct WhatsApp Helpline"
            >
              <MessageCircle className="w-4 h-4 fill-black text-transparent" />
              <span>WhatsApp 0345-8050124</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modals */}
      {selectedPackage && (
        <PackageDetailModal
          pkg={selectedPackage}
          currency={currency}
          onClose={() => setSelectedPackage(null)}
          onBookDirect={(_pkg) => {
            setSelectedPackage(null);
            setContactModalOpen(true);
          }}
        />
      )}

      {plannerOpen && (
        <JourneyPlannerModal
          isOpen={plannerOpen}
          onClose={() => setPlannerOpen(false)}
          currency={currency}
        />
      )}

      {contactModalOpen && (
        <CallWhatsAppModal
          isOpen={contactModalOpen}
          onClose={() => setContactModalOpen(false)}
        />
      )}
    </div>
  );
}
