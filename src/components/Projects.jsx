import Card from "./Card";
import Thumb from "./Thumb";
import { PROJECTS } from "../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" data-s="Projects">
      <h2 className="h2 rv">My <span className="grad">projects</span></h2>
      <p className="lead rv">Some of the things I have built.</p>
      <div className="pg rv">
        {PROJECTS.map((p) => (
          <Card className="proj" tilt key={p.title}>
            <Thumb p={p} />
            <div className="pb">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="tg">{[p.type, ...p.stack].map((s) => <span key={s}>{s}</span>)}</div>
              <a className="ln" href={p.link}>Live Demo ↗</a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}
