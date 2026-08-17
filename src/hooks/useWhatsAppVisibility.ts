import { useState, useEffect } from 'react';

/**
 * Custom hook to control floating WhatsApp action button visibility.
 * Hides the button when:
 * 1. Any modal is currently open (to prevent overlapping dialog overlays and forms)
 * 2. The user scrolls past / near the main footer (to prevent overlapping footer CTAs and phone links)
 *
 * @param isModalOpen - Boolean flag indicating if any modal is active
 * @param footerId - The DOM element ID of the footer (defaults to 'main-footer')
 * @returns boolean - Whether the floating button should be rendered and visible
 */
export function useWhatsAppVisibility(
  isModalOpen: boolean = false,
  footerId: string = 'main-footer'
): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(!isModalOpen);

  useEffect(() => {
    // If any modal is open, immediately hide the floating button
    if (isModalOpen) {
      setIsVisible(false);
      return;
    }

    const checkFooterOverlap = () => {
      const footer = document.getElementById(footerId);
      if (!footer) {
        setIsVisible(true);
        return;
      }

      const rect = footer.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;

      // When the top edge of the footer is within or above the viewport bottom (with 40px buffer),
      // hide the WhatsApp button so it does not collide with footer buttons/links.
      const isFooterNear = rect.top <= windowHeight - 40;
      setIsVisible(!isFooterNear);
    };

    // Run initial assessment
    checkFooterOverlap();

    let ticking = false;
    const handleScrollOrResize = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          checkFooterOverlap();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScrollOrResize, { passive: true });
    window.addEventListener('resize', handleScrollOrResize, { passive: true });

    // IntersectionObserver for responsive viewport tracking
    let observer: IntersectionObserver | null = null;
    const footerEl = document.getElementById(footerId);
    if (footerEl && 'IntersectionObserver' in window) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(false);
            } else {
              checkFooterOverlap();
            }
          });
        },
        {
          rootMargin: '0px 0px -40px 0px',
          threshold: [0, 0.05, 0.1, 0.25],
        }
      );
      observer.observe(footerEl);
    }

    return () => {
      window.removeEventListener('scroll', handleScrollOrResize);
      window.removeEventListener('resize', handleScrollOrResize);
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isModalOpen, footerId]);

  return isVisible;
}
