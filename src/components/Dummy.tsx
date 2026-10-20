import type { ReactNode } from "react";

/** Placeholder content, rendered in pink until real values are confirmed. */
export function Dummy({ children }: { children: ReactNode }) {
  return <span className="dummy">{children}</span>;
}
