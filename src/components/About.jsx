import Card from "./Card";
import { ME, TECH } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" data-s="About">
      <h2 className="h2 rv">About <span className="grad">me</span></h2>
      <p className="lead rv">A quick look at who I am and what I do.</p>
      <div className="bento rv">
        <Card className="b-bio"><span className="lbl">Intro</span><p>{ME.about}</p></Card>
        {ME.stats.map(([v, k]) => (
          <Card className="b-stat" key={k}><b className="grad">{v}</b><span>{k}</span></Card>
        ))}
        <Card className="b-loc">
          <span className="lbl">Education</span>
          <h3>{ME.education[0]}</h3>
          <p className="edu">{ME.education[1]}<br />{ME.education[2]}</p>
        </Card>
        <Card className="b-tech">
          <span className="lbl" style={{ width: "100%" }}>Tech stack</span>
          {TECH.map((t) => <span key={t}>{t}</span>)}
        </Card>
      </div>
    </section>
  );
}
