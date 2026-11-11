import type { CardTemplate } from "@/lib/templates";

export function CardMotif({ motif }: { motif: CardTemplate["motif"] }) {
  if (motif === "choco") {
    return (
      <svg viewBox="0 0 120 120" className="h-24 w-24 drop-shadow-md" aria-hidden="true">
        <g transform="rotate(-14 45 70)">
          <rect x="38" y="20" width="12" height="78" rx="6" fill="#f3c68f" />
          <rect x="38" y="20" width="12" height="54" rx="6" fill="#3e1f14" />
          <circle cx="42" cy="34" r="1.8" fill="#fde047" />
          <circle cx="46" cy="48" r="1.8" fill="#fb7185" />
        </g>
        <g transform="rotate(0 60 70)">
          <rect x="54" y="14" width="12" height="84" rx="6" fill="#f3c68f" />
          <rect x="54" y="14" width="12" height="60" rx="6" fill="#4a2218" />
          <circle cx="58" cy="28" r="2" fill="#ffffff" />
          <circle cx="62" cy="44" r="2" fill="#fbbf24" />
        </g>
        <g transform="rotate(14 75 70)">
          <rect x="70" y="20" width="12" height="78" rx="6" fill="#f3c68f" />
          <rect x="70" y="20" width="12" height="54" rx="6" fill="#3e1f14" />
          <circle cx="74" cy="36" r="1.8" fill="#fb7185" />
          <circle cx="78" cy="50" r="1.8" fill="#38bdf8" />
        </g>
        <rect x="30" y="72" width="60" height="34" rx="6" fill="#b91c1c" stroke="#fbbf24" strokeWidth="2.5" />
        <rect x="55" y="72" width="10" height="34" fill="#fbbf24" />
      </svg>
    );
  }

  if (motif === "strawberry") {
    return (
      <svg viewBox="0 0 120 120" className="h-24 w-24 drop-shadow-md" aria-hidden="true">
        <g transform="rotate(-12 48 65)">
          <rect x="42" y="18" width="11" height="72" rx="5.5" fill="#f5d0a9" />
          <rect x="42" y="18" width="11" height="50" rx="5.5" fill="#f43f5e" />
          <circle cx="46" cy="32" r="2" fill="#fff1f2" />
          <circle cx="49" cy="46" r="2" fill="#fde047" />
        </g>
        <g transform="rotate(10 72 65)">
          <rect x="66" y="18" width="11" height="72" rx="5.5" fill="#f5d0a9" />
          <rect x="66" y="18" width="11" height="50" rx="5.5" fill="#fb7185" />
          <circle cx="70" cy="30" r="2" fill="#fff1f2" />
          <circle cx="73" cy="48" r="2" fill="#be123c" />
        </g>
        <path
          d="M60 80 C48 68 34 75 40 87 C46 97 60 103 60 103 C60 103 74 97 80 87 C86 75 72 68 60 80 Z"
          fill="#e11d48"
        />
      </svg>
    );
  }

  if (motif === "almond") {
    return (
      <svg viewBox="0 0 120 120" className="h-24 w-24 drop-shadow-md" aria-hidden="true">
        <g transform="rotate(-10 48 60)">
          <rect x="42" y="16" width="12" height="78" rx="6" fill="#eab676" />
          <rect x="42" y="16" width="12" height="54" rx="6" fill="#5c2d16" />
          <ellipse cx="46" cy="28" rx="2.6" ry="1.8" fill="#fde68a" />
          <ellipse cx="50" cy="42" rx="2.6" ry="1.8" fill="#fde68a" />
          <ellipse cx="47" cy="56" rx="2.6" ry="1.8" fill="#fde68a" />
        </g>
        <g transform="rotate(12 72 60)">
          <rect x="66" y="16" width="12" height="78" rx="6" fill="#eab676" />
          <rect x="66" y="16" width="12" height="54" rx="6" fill="#78350f" />
          <ellipse cx="70" cy="32" rx="2.6" ry="1.8" fill="#fde68a" />
          <ellipse cx="74" cy="48" rx="2.6" ry="1.8" fill="#fde68a" />
        </g>
        <rect x="28" y="84" width="64" height="18" rx="9" fill="#d97706" />
        <text x="60" y="97" textAnchor="middle" fontSize="11" fontWeight="bold" fill="#ffffff">
          11.11
        </text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 120 120" className="h-24 w-24 drop-shadow-md" aria-hidden="true">
      <rect x="24" y="42" width="72" height="56" rx="8" fill="#ec4899" stroke="#fde047" strokeWidth="3" />
      <rect x="18" y="32" width="84" height="16" rx="5" fill="#f43f5e" stroke="#fde047" strokeWidth="3" />
      <rect x="54" y="32" width="12" height="66" fill="#fde047" />
      <ellipse cx="48" cy="24" rx="14" ry="8" fill="#fbbf24" />
      <ellipse cx="72" cy="24" rx="14" ry="8" fill="#fbbf24" />
      <circle cx="60" cy="26" r="5" fill="#fef08a" />
    </svg>
  );
}
