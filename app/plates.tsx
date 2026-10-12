"use client";

import { useMemo, useSyncExternalStore } from "react";
import { braid, petals, ribbon, ribbonBand, ring, ripples, scallops, zigzag } from "./engraving";
import { Trident } from "./trident";

// The line work is hundreds of kilobytes of path data, so it is drawn in the
// browser after hydration rather than shipped in the HTML.
const noSubscribe = () => () => {};
function useInBrowser() {
  return useSyncExternalStore(noSubscribe, () => true, () => false);
}

function Engraving({ paths }: { paths: string[] }) {
  return (
    <svg viewBox="-520 -520 1040 1040" aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}

function medallionLayers() {
  return [
    [ring(500), ring(494), ...braid(432, 488, 72, 3), ring(426), ring(421)],
    ribbon(292, 414, 12, 30),
    [ring(286), ...braid(226, 280, 48, 6), ring(220), ring(215)],
  ];
}

export function Medallion() {
  const inBrowser = useInBrowser();
  const layers = useMemo(() => (inBrowser ? medallionLayers() : []), [inBrowser]);

  return (
    <div className="medallion">
      {layers.map((paths, i) => (
        <div className="medallion-ring" key={i}>
          <Engraving paths={paths} />
        </div>
      ))}
      <Trident className="medallion-trident" />
    </div>
  );
}

const SEALS = [
  () => [ring(500), ring(488), ...ribbon(200, 470, 7, 16), ring(190)],
  () => [ring(500), ring(488), ...petals(196, 476, 64, 8, 5), ring(186)],
  () => [ring(500), ring(488), ...zigzag(210, 476, 12, 6), ring(198), ring(188)],
  () => [ring(500), ring(488), ...scallops(198, 478, 16, 9), ring(188)],
  () => [ring(500), ring(488), ...braid(380, 478, 40, 3), ring(370), ...ribbon(198, 362, 10, 12), ring(188)],
  () => [ring(500), ring(488), ...ripples(196, 478, 14, 11), ring(188)],
];

export function Seal({ index, numeral }: { index: number; numeral: string }) {
  const inBrowser = useInBrowser();
  const paths = useMemo(() => (inBrowser ? SEALS[index % SEALS.length]() : []), [inBrowser, index]);

  return (
    <span className="seal" aria-hidden="true">
      <Engraving paths={paths} />
      <span className="seal-numeral">{numeral}</span>
    </span>
  );
}

// The hero medallion again, as a watermark behind the enquiries.
export function Watermark() {
  const inBrowser = useInBrowser();
  const paths = useMemo(() => (inBrowser ? medallionLayers().flat() : []), [inBrowser]);

  return (
    <div className="watermark">
      <Engraving paths={paths} />
    </div>
  );
}

export function Band() {
  const inBrowser = useInBrowser();
  const paths = useMemo(() => (inBrowser ? ribbonBand(2400, 52, 300, 18) : []), [inBrowser]);

  return (
    <svg className="band" viewBox="0 0 2400 52" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
