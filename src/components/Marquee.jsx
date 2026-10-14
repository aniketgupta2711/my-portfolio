import { TECH } from "../data/portfolio";

export default function Marquee() {
  return (
    <div className="marq" aria-hidden="true">
      <div>{[...TECH, ...TECH].map((t, i) => <span key={i}>{t}</span>)}</div>
    </div>
  );
}
