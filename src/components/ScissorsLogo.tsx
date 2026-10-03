/**
 * Vectorized barber scissors logo — simplified from traced image.
 */
export default function ScissorsLogo({
  className,
  color = "currentColor",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      stroke={color}
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-label="Patrizio Gentlemen's Barber scissors"
      role="img"
    >
      {/* Left blade */}
      <path d="M 50 70 L 85 100 L 50 130 Z" />

      {/* Right blade */}
      <path d="M 150 70 L 115 100 L 150 130 Z" />

      {/* Left handle circle */}
      <circle cx="50" cy="70" r="9" />

      {/* Right handle circle */}
      <circle cx="150" cy="70" r="9" />

      {/* Central pivot rivet */}
      <circle cx="100" cy="100" r="4" fill={color} />
    </svg>
  );
}
