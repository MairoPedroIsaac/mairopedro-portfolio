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
        d="M8 35V13.5L14.25 25L20.5 13.5V35M28 35V13.5H33A6.5 6.5 0 0 1 33 26.5H28"
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
