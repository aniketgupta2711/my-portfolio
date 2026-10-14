import { useRef } from "react";

// Glass card: mouse ke saath glow, tilt=true par halka 3D tilt
export default function Card({ className = "", tilt = false, children }) {
  const ref = useRef(null);
  const move = (e) => {
    const el = ref.current, b = el.getBoundingClientRect();
    const x = e.clientX - b.left, y = e.clientY - b.top;
    el.style.setProperty("--mx", x + "px");
    el.style.setProperty("--my", y + "px");
    if (tilt) el.style.transform = `perspective(900px) rotateX(${(0.5 - y / b.height) * 8}deg) rotateY(${(x / b.width - 0.5) * 8}deg) translateY(-4px)`;
  };
  const leave = () => { if (tilt) ref.current.style.transform = ""; };
  return <div ref={ref} className={"card " + className} onMouseMove={move} onMouseLeave={leave}>{children}</div>;
}
