import * as React from "react";

/**
 * Original simple camel illustration done with SVG shapes.
 * Friendly, modern, premium look without being childish.
 */
export interface CamelSvgProps {
  className?: string;
  /** Color for the camel body. Defaults to a warm camel tan. */
  bodyColor?: string;
  /** Color for accent details (saddle, etc). */
  accentColor?: string;
  /** Background color, transparent by default. */
  bgColor?: string;
  title?: string;
}

export function CamelSvg({
  className,
  bodyColor = "#B88253",
  accentColor = "#8B5A3C",
  bgColor = "transparent",
  title = "Camel illustration",
}: CamelSvgProps) {
  return (
    <svg
      viewBox="0 0 240 200"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      {bgColor !== "transparent" && (
        <rect width="240" height="200" fill={bgColor} rx="16" />
      )}

      {/* Sand dune shadow */}
      <ellipse cx="120" cy="180" rx="80" ry="10" fill="#000" opacity="0.08" />

      {/* Back legs */}
      <rect x="68" y="130" width="14" height="50" rx="5" fill={bodyColor} />
      <rect x="92" y="130" width="14" height="50" rx="5" fill={bodyColor} opacity="0.85" />

      {/* Front legs */}
      <rect x="150" y="130" width="14" height="50" rx="5" fill={bodyColor} />
      <rect x="174" y="130" width="14" height="50" rx="5" fill={bodyColor} opacity="0.85" />

      {/* Body */}
      <ellipse cx="120" cy="125" rx="65" ry="32" fill={bodyColor} />

      {/* Hump */}
      <path
        d="M 90 100 Q 110 60 130 95 Q 145 70 160 100 L 160 125 L 90 125 Z"
        fill={bodyColor}
      />

      {/* Saddle on top of hump */}
      <path
        d="M 100 95 Q 120 75 140 95 L 138 105 Q 120 100 102 105 Z"
        fill={accentColor}
      />
      <rect x="115" y="78" width="10" height="20" rx="2" fill={accentColor} />

      {/* Neck */}
      <path
        d="M 155 110 Q 180 100 185 70 Q 187 55 178 45 L 168 45 Q 173 55 172 65 Q 168 85 152 100 Z"
        fill={bodyColor}
      />

      {/* Head */}
      <ellipse cx="178" cy="45" rx="22" ry="16" fill={bodyColor} />
      <ellipse cx="170" cy="42" rx="6" ry="5" fill={bodyColor} />

      {/* Ear */}
      <path d="M 168 30 L 172 22 L 178 32 Z" fill={bodyColor} />

      {/* Eye */}
      <circle cx="186" cy="42" r="2.5" fill="#2A1D12" />
      <circle cx="186.5" cy="41" r="0.8" fill="#fff" />

      {/* Mouth */}
      <path d="M 192 50 Q 196 52 198 50" stroke="#2A1D12" strokeWidth="1.2" fill="none" strokeLinecap="round" />

      {/* Tail */}
      <path
        d="M 55 120 Q 40 125 38 140 Q 40 145 44 144 Q 46 134 58 130 Z"
        fill={bodyColor}
      />

      {/* Subtle highlight on body */}
      <ellipse cx="105" cy="115" rx="25" ry="6" fill="#fff" opacity="0.12" />
    </svg>
  );
}

/**
 * Small camel mark used in the header logo and favicon.
 */
export function CamelMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Camel Calculator logo"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Camel Calculator logo</title>
      <circle cx="32" cy="32" r="30" fill="#C8965D" />
      <circle cx="32" cy="32" r="30" fill="none" stroke="#8B5A3C" strokeWidth="2" />
      {/* mini camel silhouette */}
      <path
        d="M 18 40 L 18 50 M 22 40 L 22 50 M 40 40 L 40 50 M 44 40 L 44 50"
        stroke="#5C3A1E"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <ellipse cx="32" cy="38" rx="14" ry="6" fill="#5C3A1E" />
      <path
        d="M 25 34 Q 30 26 35 34 Q 38 28 41 34 L 41 38 L 25 38 Z"
        fill="#5C3A1E"
      />
      <path d="M 41 36 Q 50 32 51 22 L 54 22 Q 52 32 45 38 Z" fill="#5C3A1E" />
      <circle cx="52" cy="22" r="4" fill="#5C3A1E" />
      <circle cx="53" cy="21" r="0.8" fill="#fff" />
    </svg>
  );
}
