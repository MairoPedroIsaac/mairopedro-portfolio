"use client";

import { ElementType, ReactNode } from "react";
import { useInView } from "./useInView";

type Props = {
  lines: ReactNode[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  delay?: number; // ms before the first line
  stagger?: number; // ms between lines
};

// Each line slides up from behind a mask, one after the other.
export default function LineReveal({
  lines,
  as: Tag = "h2",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 110,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>(0.3);
  return (
    <Tag ref={ref} className={className}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em] -mb-[0.08em]">
          <span
            className={`line-in block ${inView ? "is-in" : ""} ${lineClassName}`}
            style={{ transitionDelay: `${delay + i * stagger}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
