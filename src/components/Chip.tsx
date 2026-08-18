import type { Tech } from "../data/projects";

export default function Chip({ label, category }: Tech) {
  return (
    <span className={`chip chip--${category}`}>
      <span className="chip__dot" aria-hidden="true" />
      {label}
    </span>
  );
}
