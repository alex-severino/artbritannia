// Britannia's trident, drawn for Art Britannia: barbed leaf heads on a crescent,
// a turned collar, and a ferrule at the foot. `compact` crops the shaft for icons.

const HEAD =
  "M0 -32C1.2 -24 3.5 -16 8.5 -7C9.6 -5 10 -1.5 9.8 1.5C8 -.6 5.6 -2.6 3.3 -3.4L3 5L-3 5L-3.3 -3.4C-5.6 -2.6 -8 -.6 -9.8 1.5C-10 -1.5 -9.6 -5 -8.5 -7C-3.5 -16 -1.2 -24 0 -32Z";

export function Trident({ className, compact = false }: { className?: string; compact?: boolean }) {
  return (
    <svg className={className} viewBox={compact ? "-2 -1 124 148" : "-2 -1 124 201"} fill="currentColor" aria-hidden="true">
      <path d={HEAD} transform="translate(60 40) scale(1.25)" />
      <path d={HEAD} transform="translate(8 50.3) rotate(-5)" />
      <path d={HEAD} transform="translate(112 50.3) rotate(5)" />
      <path d="M5 50C8 88 30 104 60 104C90 104 112 88 115 50L109 50.5C107 81 87 95 60 95C33 95 13 81 11 50.5Z" />
      <ellipse cx="60" cy="108.5" rx="8" ry="4.2" />
      <path d="M54.5 114H65.5V116.4H54.5ZM55.5 118.6H64.5V119.8H55.5Z" />
      {compact ? (
        <path d="M57 40H63V134L60 146L57 134Z" />
      ) : (
        <>
          <path d="M57 40H63V186H57Z" />
          <ellipse cx="60" cy="184" rx="5.6" ry="2.6" />
          <path d="M57 186L60 199L63 186Z" />
        </>
      )}
    </svg>
  );
}
