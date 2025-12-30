'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
  }
}

export default function TawkToScript() {
  useEffect(() => {
    if (typeof window !== 'undefined' && !window.Tawk_API) {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://embed.tawk.to/6953964a3851d2197da8f8ee/1jdn86527';
      script.charset = 'UTF-8';
      script.setAttribute('crossorigin', '*');
      
      const s0 = document.getElementsByTagName('script')[0];
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(script, s0);
      }
    }
  }, []);

  return null;
}