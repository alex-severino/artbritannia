// Guilloché line work, the engine-turned patterns of banknote and coin engraving.
// Every pattern is drawn on a 1040-unit square centred on the origin, radius 500.

const TAU = Math.PI * 2;

function trace(radius: (theta: number) => number, lobes: number) {
  const steps = Math.min(2880, Math.max(720, lobes * 32));
  let d = "";
  for (let s = 0; s < steps; s++) {
    const theta = (s / steps) * TAU;
    const r = radius(theta);
    d += `${s ? "L" : "M"}${(r * Math.cos(theta)).toFixed(1)} ${(r * Math.sin(theta)).toFixed(1)}`;
  }
  return `${d}Z`;
}

export function ring(r: number) {
  return `M${r} 0A${r} ${r} 0 1 0 ${-r} 0A${r} ${r} 0 1 0 ${r} 0Z`;
}

// Strands that weave across a band, like a rope border.
export function braid(inner: number, outer: number, lobes: number, strands: number) {
  const mid = (inner + outer) / 2;
  const amp = (outer - inner) / 2;
  return Array.from({ length: strands }, (_, i) =>
    trace((t) => mid + amp * Math.cos(lobes * t + (TAU * i) / strands), lobes),
  );
}

// Lines that step outward while their phase turns, so the band reads as a twisted ribbon.
export function ribbon(inner: number, outer: number, lobes: number, lines: number) {
  const amp = (outer - inner) * 0.28;
  return Array.from({ length: lines }, (_, i) => {
    const f = i / (lines - 1);
    return trace((t) => inner + amp + (outer - inner - 2 * amp) * f + amp * Math.sin(lobes * t + f * Math.PI), lobes);
  });
}

// A fast wave inside a slow envelope: fine line work gathered into blooms.
export function petals(inner: number, outer: number, lobes: number, blooms: number, lines: number) {
  return Array.from({ length: lines }, (_, i) =>
    trace((t) => {
      const envelope = 0.5 + 0.5 * Math.cos(blooms * t);
      return inner + (outer - inner) * (0.5 + 0.5 * envelope * Math.cos(lobes * t + (TAU * i) / lines));
    }, lobes),
  );
}

export function scallops(inner: number, outer: number, lobes: number, lines: number, sharpness = 0.7) {
  return Array.from({ length: lines }, (_, i) => {
    const phase = (Math.PI / 2) * (i / lines);
    return trace((t) => inner + (outer - inner) * Math.abs(Math.cos((lobes * t) / 2 + phase)) ** sharpness, lobes);
  });
}

// Rings that ripple harder the further out they sit.
export function ripples(inner: number, outer: number, lobes: number, lines: number) {
  return Array.from({ length: lines }, (_, i) => {
    const f = i / (lines - 1);
    const amp = 6 + 22 * f;
    return trace((t) => inner + amp + (outer - inner - 2 * amp) * f + amp * Math.sin(lobes * t + f * TAU), lobes);
  });
}

// Strands woven with a triangle wave instead of a sine, for a crystalline lattice.
export function zigzag(inner: number, outer: number, lobes: number, strands: number) {
  const mid = (inner + outer) / 2;
  const amp = (outer - inner) / 2;
  return Array.from({ length: strands }, (_, i) =>
    trace((t) => mid + amp * (2 / Math.PI) * Math.asin(Math.sin(lobes * t + (TAU * i) / strands)), lobes),
  );
}

// The ribbon laid flat: a horizontal band of twisting line work.
export function ribbonBand(width: number, height: number, wavelength: number, lines: number) {
  const amp = height * 0.28;
  const steps = Math.ceil(width / 3);
  return Array.from({ length: lines }, (_, i) => {
    const f = i / (lines - 1);
    let d = "";
    for (let s = 0; s <= steps; s++) {
      const x = (s / steps) * width;
      const y = amp + (height - 2 * amp) * f + amp * Math.sin((TAU * x) / wavelength + f * Math.PI);
      d += `${s ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`;
    }
    return d;
  });
}
