import { NAV } from "../data/portfolio";

export default function Navbar({ active }) {
  return (
    <nav className="nav" aria-label="Main">
      {NAV.map((s) => (
        <a key={s} href={`#${s.toLowerCase()}`} className={s === active ? "on" : ""}>{s}</a>
      ))}
    </nav>
  );
}
