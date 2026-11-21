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
        d="M8.25 35V12L15 24.5L21.75 12V35M28.75 35V14.5H33.5A6 6 0 0 1 33.5 26.5H28.75"
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
