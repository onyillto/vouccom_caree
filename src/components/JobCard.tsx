import { useEffect, useRef, useState } from "react";
import type { Role } from "../data/roles";
import { mailto } from "../data/roles";
import { RoleTile } from "./RoleIcon";

type Props = {
  role: Role;
  onDetails: (id: string) => void;
  onToast: (msg: string) => void;
};

const roleUrl = (id: string) => `${location.href.split("#")[0]}#${id}`;

export function JobCard({ role, onDetails, onToast }: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setMenuOpen(false);
    };
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  const copyLink = async () => {
    const url = roleUrl(role.id);
    try {
      await navigator.clipboard.writeText(url);
      onToast("Link copied");
    } catch {
      onToast(url);
    }
    setMenuOpen(false);
  };

  const share = () => {
    location.href = `mailto:?subject=${encodeURIComponent("Job at VOUCCOM: " + role.title)}&body=${encodeURIComponent(roleUrl(role.id))}`;
    setMenuOpen(false);
  };

  return (
    <article className="card" ref={ref}>
      <button className="more" type="button" aria-label="More options" aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="4" cy="10" r="1.6" />
          <circle cx="10" cy="10" r="1.6" />
          <circle cx="16" cy="10" r="1.6" />
        </svg>
      </button>
      {menuOpen && (
        <div className="menu" role="menu">
          <button type="button" role="menuitem" onClick={copyLink}>Copy link</button>
          <button type="button" role="menuitem" onClick={share}>Share by email</button>
          <button type="button" role="menuitem" onClick={() => { setMenuOpen(false); onDetails(role.id); }}>View details</button>
        </div>
      )}
      {role.wave === 1 && <span className="badge-now">Hiring Now</span>}
      <RoleTile icon={role.icon} color={role.color} />
      <h3>{role.title}</h3>
      <p className="desc">{role.summary}</p>
      <div className="pills">
        <span className="pill">{role.type.split(" ·")[0]}</span>
        <span className="pill">Min. {role.years} Year{role.years === 1 ? "" : "s"}</span>
        <span className="pill">{role.level} Level</span>
      </div>
      <div className="actions">
        <a className="btn" href={mailto(role)}>Apply Now</a>
        <button className="btn-grey" type="button" onClick={() => onDetails(role.id)}>View Details</button>
      </div>
    </article>
  );
}
