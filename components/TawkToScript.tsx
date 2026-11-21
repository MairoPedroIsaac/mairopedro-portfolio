'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

const TAWK_SRC = 'https://embed.tawk.to/6953964a3851d2197da8f8ee/1jdn86527';

/**
 * Loads the Tawk.to chat only after the visitor shows intent (scrolls past the
 * hero) or after 20 seconds, so the greeting never covers the hero on first load.
 * On phones the widget always starts minimised.
 */
export default function TawkToScript() {
  useEffect(() => {
    if (typeof window === 'undefined' || window.Tawk_API?.loaded) return;

    let loaded = false;
    const isMobile = () => window.matchMedia('(max-width: 767px)').matches;

    const load = () => {
      if (loaded) return;
      loaded = true;
      cleanup();

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();
      window.Tawk_API.loaded = true;
      window.Tawk_API.onLoad = () => {
        if (isMobile()) window.Tawk_API?.minimize?.();
      };

      const script = document.createElement('script');
      script.async = true;
      script.src = TAWK_SRC;
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      document.body.appendChild(script);
    };

    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) load();
    };
    const timer = window.setTimeout(load, 20000);
    window.addEventListener('scroll', onScroll, { passive: true });

    function cleanup() {
      window.clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    }

    return cleanup;
  }, []);

  return null;
}
