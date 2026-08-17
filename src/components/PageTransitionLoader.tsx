import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PageTransitionLoaderProps {
  isLoading: boolean;
}

export const PageTransitionLoader: React.FC<PageTransitionLoaderProps> = ({ isLoading }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <>
          {/* Top Progress Bar with Gold / Lime Shimmer */}
          <div className="fixed top-0 left-0 right-0 z-[100] pointer-events-none h-[3px] bg-black/40 overflow-hidden">
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{
                duration: 0.45,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full w-full bg-gradient-to-r from-[#dfa742] via-[#C5FF4A] to-white shadow-[0_0_10px_#C5FF4A]"
            />
          </div>

          {/* Subtle Luxury Ambient Flash/Shimmer for Page Transition */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 pointer-events-none z-[99] bg-[#C5FF4A]"
          />
        </>
      )}
    </AnimatePresence>
  );
};
