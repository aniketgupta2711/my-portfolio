import Card from "./Card";
import { EXPERIENCE as E } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" data-s="Experience">
      <h2 className="h2 rv"><span className="grad">Experience</span></h2>
      <p className="lead rv">Where I have worked so far.</p>
      <div className="tl rv">
        <div>
          <Card>
            <small>{E.date}</small>
            <h3>{E.role}</h3>
            <p>{E.org}</p>
            <ul>{E.points.map((p) => <li key={p}>{p}</li>)}</ul>
            <a className="ln" href={E.link}>Live Demo ↗</a>
          </Card>
        </div>
      </div>
    </section>
  );
}
