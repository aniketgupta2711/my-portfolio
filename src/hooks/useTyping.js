import { useState, useEffect } from "react";

// Hero me role ko type/delete karke dikhata hai
export default function useTyping(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let r = 0, i = 0, del = false;
    const t = setInterval(() => {
      const w = words[r];
      i += del ? -1 : 1;
      setText(w.slice(0, i));
      if (!del && i === w.length) del = true;
      else if (del && i === 0) { del = false; r = (r + 1) % words.length; }
    }, 90);
    return () => clearInterval(t);
  }, [words]);
  return text;
}
