import { useState, useEffect } from "react";

// Navbar highlight, scroll progress bar, reveal animation aur mouse glow
export default function useScrollEffects(rootRef) {
  const [active, setActive] = useState("Home");
  const [pct, setPct] = useState(0);

  useEffect(() => {
    const nav = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.dataset.s)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    const rv = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) e.target.classList.add("in"); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll("[data-s]").forEach((el) => nav.observe(el));
    document.querySelectorAll(".rv").forEach((el) => rv.observe(el));

    const onScroll = () => {
      const h = document.documentElement;
      setPct((h.scrollTop / (h.scrollHeight - h.clientHeight)) * 100);
    };
    const onMove = (e) => {
      rootRef.current?.style.setProperty("--cx", e.clientX + "px");
      rootRef.current?.style.setProperty("--cy", e.clientY + "px");
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      nav.disconnect(); rv.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, [rootRef]);

  return { active, pct };
}
