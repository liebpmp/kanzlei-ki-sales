import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export default function AnimatedCounter({ value, suffix = "", duration = 1.5 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState("0");

  const numericMatch = value.match(/(\d+)/);
  const numericValue = numericMatch ? parseInt(numericMatch[1], 10) : 0;
  const prefix = value.slice(0, value.indexOf(numericMatch?.[0]));
  const textSuffix = value.slice(
    value.indexOf(numericMatch?.[0]) + numericMatch?.[0].length
  );

  useEffect(() => {
    if (!isInView || numericValue === 0) return;

    let start = 0;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * numericValue);

      if (current !== start) {
        start = current;
        setDisplay(String(current));
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        setDisplay(String(numericValue));
      }
    }

    requestAnimationFrame(step);
  }, [isInView, numericValue, duration]);

  if (!numericMatch) {
    return <span ref={ref}>{value}{suffix}</span>;
  }

  return (
    <span ref={ref}>
      {prefix}{display}{textSuffix}{suffix}
    </span>
  );
}
