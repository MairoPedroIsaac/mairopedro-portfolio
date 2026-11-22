import { SiWhatsapp, SiFacebook, SiGithub } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";

// The real brand logos, in their own colours.
type P = { className?: string };

export function GmailLogo({ className = "w-6 h-6" }: P) {
  return (
    <svg viewBox="52 42 88 66" className={className} aria-hidden>
      <path fill="#4285f4" d="M58 108h14V74L52 59v43c0 3.32 2.69 6 6 6" />
      <path fill="#34a853" d="M120 108h14c3.32 0 6-2.69 6-6V59l-20 15" />
      <path fill="#fbbc04" d="M120 48v26l20-15v-8c0-7.42-8.47-11.65-14.4-7.2" />
      <path fill="#ea4335" d="M72 74V48l24 18 24-18v26L96 92" />
      <path fill="#c5221f" d="M52 51v8l20 15V48l-5.6-4.2c-5.94-4.45-14.4-.22-14.4 7.2" />
    </svg>
  );
}

export function WhatsAppLogo({ className = "w-6 h-6" }: P) {
  return <SiWhatsapp className={className} style={{ color: "#25D366" }} aria-hidden />;
}

export function FacebookLogo({ className = "w-6 h-6" }: P) {
  return <SiFacebook className={className} style={{ color: "#0866FF" }} aria-hidden />;
}

export function LinkedInLogo({ className = "w-6 h-6" }: P) {
  return <FaLinkedin className={className} style={{ color: "#0A66C2" }} aria-hidden />;
}

// GitHub's mark is black or white, so it follows the theme.
export function GitHubLogo({ className = "w-6 h-6" }: P) {
  return <SiGithub className={`text-white ${className}`} aria-hidden />;
}

export function InstagramLogo({ className = "w-6 h-6" }: P) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden>
      <defs>
        <radialGradient id="ig-grad" cx="30%" cy="107%" r="150%">
          <stop offset="0" stopColor="#fdf497" />
          <stop offset="0.05" stopColor="#fdf497" />
          <stop offset="0.45" stopColor="#fd5949" />
          <stop offset="0.6" stopColor="#d6249f" />
          <stop offset="0.9" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="24" height="24" rx="6.5" fill="url(#ig-grad)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.1" fill="none" stroke="#fff" strokeWidth="1.8" />
      <circle cx="16.4" cy="7.6" r="1" fill="#fff" />
    </svg>
  );
}
