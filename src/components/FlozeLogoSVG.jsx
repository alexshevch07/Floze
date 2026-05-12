export default function FlozeLogoSVG({ className = '', size = 36 }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Floze mascot logo"
    >
      {/* Outer orange rounded blob body */}
      <path
        d="M50 5
           C25 5, 5 20, 5 46
           C5 68, 18 86, 38 93
           C44 96, 56 96, 62 93
           C82 86, 95 68, 95 46
           C95 20, 75 5, 50 5Z"
        fill="#FFB074"
      />
      {/* Inner brown face panel — rounded rectangle */}
      <rect
        x="14"
        y="22"
        width="72"
        height="56"
        rx="24"
        ry="24"
        fill="#A0714F"
      />
      {/* Left eye — white oval */}
      <ellipse cx="36" cy="46" rx="7" ry="8.5" fill="white" />
      {/* Right eye — white oval */}
      <ellipse cx="64" cy="46" rx="7" ry="8.5" fill="white" />
      {/* Smile — small white curved path */}
      <path
        d="M43 64 Q50 71 57 64"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}
