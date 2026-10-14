import { useState } from "react";
import Card from "./Card";
import { ME } from "../data/portfolio";

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", msg: "" });
  const [sent, setSent] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = () => {
    if (!f.name || !f.email || !f.msg) return;
    // Asli project me yahan EmailJS / backend API lagao
    window.location.href = `mailto:${ME.email}?subject=Message from ${encodeURIComponent(f.name)}&body=${encodeURIComponent(f.msg + "\n\n" + f.email)}`;
    setSent(true);
  };

  return (
    <section id="contact" data-s="Contact">
      <div className="ct rv">
        <Card className="big">
          <h2>Let's <span className="grad">connect!</span></h2>
          <p>Open to new opportunities and collaborations.</p>
          <div className="links">
            <a href={`mailto:${ME.email}`}><span>Email</span><span>{ME.email}</span></a>
            <a href={`tel:${ME.phone}`}><span>Phone</span><span>{ME.phone}</span></a>
            <a href="#contact"><span>Location</span><span>{ME.location}</span></a>
          </div>
        </Card>
        <Card>
          <div className="form">
            <label>Name<input value={f.name} onChange={set("name")} /></label>
            <label>Email<input type="email" value={f.email} onChange={set("email")} /></label>
            <label>Message<textarea value={f.msg} onChange={set("msg")} /></label>
            <button className="btn pri" onClick={send}>Send Message</button>
            {sent && <div className="ok">Your mail app has opened. Press Send to deliver the message.</div>}
          </div>
        </Card>
      </div>
    </section>
  );
}
