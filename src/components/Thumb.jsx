import { useState } from "react";

// Project ki image: apni image > live demo screenshot > gradient mock
export default function Thumb({ p }) {
  const [bad, setBad] = useState(false);
  const src = p.image || `https://image.thum.io/get/width/900/crop/560/noanimate/${p.link}`;
  return (
    <div className="th" style={{ background: `linear-gradient(135deg,${p.c[0]},${p.c[1]})` }}>
      {!bad ? (
        <img className="shot" src={src} alt={`${p.title} screenshot`} loading="lazy" onError={() => setBad(true)} />
      ) : (
        <div className="mk" style={{ "--a": p.c[1] }}><i /><i style={{ width: "78%" }} /><div><i /><i /><i /></div></div>
      )}
    </div>
  );
}
