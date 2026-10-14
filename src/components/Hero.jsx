import { ME, PROJECTS } from "../data/portfolio";
import useTyping from "../hooks/useTyping";

const initials = ME.name.split(" ").map((w) => w[0]).join("").slice(0, 2);

export default function Hero() {
  const typed = useTyping(ME.roles);
  return (
    <section id="home" data-s="Home" className="hero">
      <div>
        <div className="eyebrow"><i /> Available for work</div>
        <h1>Hey, I'm <span className="grad">{ME.name}</span></h1>
        <div className="type grad" aria-label={ME.roles[0]}>{typed}</div>
        <p>{ME.tagline}</p>
        <div className="btns">
          <a className="btn pri" href="#projects">View my work</a>
          <a className="btn" href="#contact">Contact me</a>
        </div>
      </div>
      <div className="ph">
        <div className="fr">
<img src={ME.photo} alt={ME.name} style={{ transform: "scale(1) translateY(-9%)" }} />        </div>
        <div className="chip c1">⚛ React</div>
        <div className="chip c2">✦ {PROJECTS.length} Projects</div>
        <div className="chip c3">📍 {ME.location.split(",")[0]}</div>
      </div>
    </section>
  );
}
