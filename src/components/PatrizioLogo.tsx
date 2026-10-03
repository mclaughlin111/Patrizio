type PatrizioLogoProps = {
  /** "full" renders the complete signboard recreation; "compact" is a small header/footer wordmark. */
  variant?: "full" | "compact";
  /** "light" is ink-on-cream for light backgrounds; "dark" is cream-on-ink for dark backgrounds. */
  theme?: "light" | "dark";
  className?: string;
  titleId?: string;
};

const fontDisplay = "var(--font-sans), Inter, Arial, sans-serif";

// A small curled scroll flourish, mirrored via transform for the opposite side.
function Flourish({ color, transform }: { color: string; transform?: string }) {
  return (
    <path
      d="M0 10 C 6 0, 16 0, 18 8 C 19.5 14, 14 16, 10 13 C 7 10.5, 9 7, 12.5 8"
      fill="none"
      stroke={color}
      strokeWidth={1.6}
      strokeLinecap="round"
      transform={transform}
    />
  );
}

function WheatOrnament({
  color,
  transform,
}: {
  color: string;
  transform?: string;
}) {
  return (
    <g
      transform={transform}
      stroke={color}
      strokeWidth={1.3}
      fill="none"
      strokeLinecap="round"
    >
      <path d="M0 6 H28" />
      <path d="M6 6 C 9 2, 9 -2, 6 -5" />
      <path d="M6 6 C 9 10, 9 14, 6 17" />
      <path d="M14 6 C 17 2, 17 -2, 14 -5" />
      <path d="M14 6 C 17 10, 17 14, 14 17" />
      <path d="M22 6 C 25 2, 25 -2, 22 -5" />
      <path d="M22 6 C 25 10, 25 14, 22 17" />
    </g>
  );
}

/**
 * Vector recreation of the Patrizio shop sign — not a photograph.
 * Renders as an accessible <svg> with a single descriptive title.
 */
export default function PatrizioLogo({
  variant = "full",
  theme = "light",
  className,
  titleId = "patrizio-logo-title",
}: PatrizioLogoProps) {
  const ink =
    theme === "light" ? "var(--charcoal, #211c18)" : "var(--fg, #1c1815)";
  const panel =
    theme === "light"
      ? "var(--white, #ffffff)"
      : "var(--charcoal-soft, #3a332c)";
  const frame =
    theme === "light" ? "var(--charcoal, #211c18)" : "var(--brass, #b5904f)";
  const accent = "var(--barber-red, #a3352d)";
  const title =
    "Patrizio Gentlemen's Barber, classical 30's style, established 1991";

  if (variant === "compact") {
    return (
      <svg
        viewBox="0 0 260 64"
        role="img"
        aria-labelledby={titleId}
        className={className}
        fill="none"
      >
        <title id={titleId}>{title}</title>
        <Flourish color={accent} transform="translate(2,26) scale(0.9)" />
        <Flourish color={accent} transform="translate(40,44) scale(-0.9,0.9)" />
        <text
          x="130"
          y="34"
          textAnchor="middle"
          fill={ink}
          fontFamily={fontDisplay}
          fontWeight={700}
          fontSize="28"
          letterSpacing="1"
        >
          Patrizio
        </text>
        <text
          x="130"
          y="52"
          textAnchor="middle"
          fill={ink}
          fontFamily={fontDisplay}
          fontStyle="italic"
          fontWeight={500}
          fontSize="11"
          letterSpacing="2"
        >
          GENTLEMEN&rsquo;S BARBER
        </text>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 640 240"
      role="img"
      aria-labelledby={titleId}
      className={className}
      fill="none"
    >
      <title id={titleId}>{title}</title>

      {/* Signboard frame */}
      <rect
        x="6"
        y="6"
        width="628"
        height="228"
        rx="18"
        fill={panel}
        stroke={frame}
        strokeWidth="6"
      />
      <rect
        x="18"
        y="18"
        width="604"
        height="204"
        rx="10"
        fill="none"
        stroke={accent}
        strokeWidth="1.5"
      />

      {/* Top label */}
      <text
        x="320"
        y="58"
        textAnchor="middle"
        fill={ink}
        fontFamily={fontDisplay}
        fontStyle="italic"
        fontWeight={500}
        fontSize="22"
      >
        Classical 30&rsquo;s style
      </text>

      {/* Main wordmark with side flourishes */}
      <Flourish color={accent} transform="translate(70,90) scale(1.6)" />
      <Flourish color={accent} transform="translate(548,124) scale(-1.6,1.6)" />
      <text
        x="320"
        y="140"
        textAnchor="middle"
        fill={ink}
        fontFamily={fontDisplay}
        fontWeight={800}
        fontSize="64"
        letterSpacing="2"
      >
        PATRIZIO &amp;
      </text>

      {/* Sub wordmark with wheat ornaments */}
      <WheatOrnament color={accent} transform="translate(120,168)" />
      <WheatOrnament
        color={accent}
        transform="translate(492,168) scale(-1,1)"
      />
      <text
        x="320"
        y="180"
        textAnchor="middle"
        fill={ink}
        fontFamily={fontDisplay}
        fontWeight={600}
        fontSize="24"
        letterSpacing="4"
      >
        GENTLEMEN&rsquo;S BARBER
      </text>

      {/* Established line */}
      <text
        x="320"
        y="210"
        textAnchor="middle"
        fill={ink}
        fontFamily={fontDisplay}
        fontStyle="italic"
        fontWeight={500}
        fontSize="15"
        letterSpacing="1"
      >
        Est. 1991
      </text>
    </svg>
  );
}
