// Unified "詢價單" icon — an A4 sheet with a pen.
// Soft, slightly-rounded style (round caps/joins). The sheet (border + text
// lines) uses currentColor; the pen sits ON TOP of the sheet with a knockout
// halo (drawn in `bg`) so the sheet's edges/lines never cross through the pen.
//
// `bg` should match the surface the icon sits on (white by default, which
// covers the navbar and the quote modal panel).
export default function QuoteIcon({
  size = 13,
  className = '',
  strokeWidth = 1.6,
  bg = '#ffffff',
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
  bg?: string;
}) {
  // Pen silhouette (closed) + the band near the pen head.
  const penBody = 'M18.4 9.6a1.45 1.45 0 0 1 2.05 2.05l-5.3 5.3-2.65.6.6-2.65Z';
  const penBand = 'M17.2 10.8l2.05 2.05';

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* A4 sheet (rounded corners) + text lines */}
      <g stroke="currentColor" strokeWidth={strokeWidth}>
        <path d="M6.25 3.5h7.5A1.75 1.75 0 0 1 15.5 5.25v13.5A1.75 1.75 0 0 1 13.75 20.5h-7.5A1.75 1.75 0 0 1 4.5 18.75V5.25A1.75 1.75 0 0 1 6.25 3.5Z" />
        <path d="M7.6 8h4.3" />
        <path d="M7.6 11h4.3" />
        <path d="M7.6 14h2.6" />
      </g>

      {/* Knockout halo: clears the sheet edges/lines beneath the pen */}
      <path d={penBody} fill={bg} stroke={bg} strokeWidth={strokeWidth + 2.6} />

      {/* Pen, drawn on top */}
      <g stroke="currentColor" strokeWidth={strokeWidth} fill="none">
        <path d={penBody} />
        <path d={penBand} />
      </g>
    </svg>
  );
}
