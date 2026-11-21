/**
 * MP monogram: the right leg of the M doubles as the stem of the P.
 * Pure SVG so it stays sharp everywhere and needs no font.
 */
export function LogoMark({ size = 36, inverted = false, className = "" }: { size?: number; inverted?: boolean; className?: string }) {
  const bg = inverted ? "#000000" : "#FFFFFF";
  const fg = inverted ? "#FFFFFF" : "#000000";
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} role="img" aria-label="MP logo">
      <rect width="48" height="48" rx="11" fill={bg} />
      <path
        d="M7 36.5V11.5L15.25 24.5L23.5 11.5V36.5M30.5 36.5V18H34.5A5 5 0 0 1 34.5 28H30.5"
        fill="none"
        stroke={fg}
        strokeWidth="4.2"
        strokeLinejoin="miter"
        strokeLinecap="butt"
      />
    </svg>
  );
}

export default function Logo({ showName = true }: { showName?: boolean }) {
  return (
    <span className="inline-flex items-center gap-3">
      <LogoMark />
      {showName && (
        <span className="font-display text-[15px] font-extrabold uppercase tracking-[0.2em] text-white">
          Mairo Pedro
        </span>
      )}
    </span>
  );
}
