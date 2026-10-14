import Card from "./Card";
import { SKILLS } from "../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" data-s="Skills">
      <h2 className="h2 rv">My <span className="grad">skills</span></h2>
      <p className="lead rv">Technologies I work with.</p>
      <div className="sk rv">
        {SKILLS.map(([n, d]) => <Card className="skc" key={n}><h3>{n}</h3><p>{d}</p></Card>)}
      </div>
    </section>
  );
}
