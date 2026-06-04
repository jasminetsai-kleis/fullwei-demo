// Unified "詢價單" icon — an A4 sheet with a pen.
// Soft, slightly-rounded style (round caps/joins). Stroke uses currentColor,
// so size & color are controlled by the parent via width/height + text color.
export default function QuoteIcon({
  size = 13,
  className = '',
  strokeWidth = 1.6,
}: {
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {/* A4 sheet (rounded corners) */}
      <path d="M6.25 3.5h7.5A1.75 1.75 0 0 1 15.5 5.25v13.5A1.75 1.75 0 0 1 13.75 20.5h-7.5A1.75 1.75 0 0 1 4.5 18.75V5.25A1.75 1.75 0 0 1 6.25 3.5Z" />
      {/* text lines */}
      <path d="M7.6 8h4.3" />
      <path d="M7.6 11h4.3" />
      <path d="M7.6 14h2.6" />
      {/* pen, lower-right, nib pointing down-left over the sheet */}
      <path d="M18.4 9.6a1.45 1.45 0 0 1 2.05 2.05l-5.3 5.3-2.65.6.6-2.65Z" />
      <path d="M17.2 10.8l2.05 2.05" />
    </svg>
  );
}
