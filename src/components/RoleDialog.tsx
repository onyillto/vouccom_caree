import { useEffect, useRef } from "react";
import type { Role } from "../data/roles";
import { DEADLINE, mailto } from "../data/roles";
import { Dummy } from "./Dummy";
import { RoleTile } from "./RoleIcon";

type Props = {
  role: Role | null;
  onClose: () => void;
};

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export function RoleDialog({ role, onClose }: Props) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (role && !d.open) d.showModal();
    if (!role && d.open) d.close();
  }, [role]);

  return (
    <dialog
      className="role"
      ref={ref}
      aria-labelledby="dlgTitle"
      onClose={onClose}
      onClick={(e) => {
        // Clicking the backdrop lands on the dialog element itself.
        if (e.target === ref.current) onClose();
      }}
    >
      {role && (
        <>
          <div className="dlg-head">
            <RoleTile icon={role.icon} color={role.color} size={56} />
            <div>
              <h3 id="dlgTitle">{role.title}</h3>
              <div className="sub">{role.team} · Lagos · {role.type}</div>
            </div>
            <button className="dlg-close" type="button" aria-label="Close" onClick={onClose}>×</button>
          </div>
          <div className="job-body">
            <div className="facts">
              <div><small>Location</small>Lagos, Nigeria · <Dummy>Hybrid</Dummy></div>
              <div><small>Reports to</small>{role.reports}</div>
              <div><small>Experience</small>Min. {role.years} year{role.years === 1 ? "" : "s"} · {role.level}</div>
              <div><small>Salary</small><Dummy>Competitive, discussed at interview</Dummy></div>
              <div><small>Start date</small><Dummy>{role.wave === 1 ? "Immediate" : "Q1 2027"}</Dummy></div>
            </div>
            <h4>The role</h4>
            <p>{role.summary}</p>
            <h4>What you'll do</h4>
            <List items={role.resp} />
            <h4>What you'll bring</h4>
            <List items={role.req} />
            <h4>Nice to have</h4>
            <List items={role.nice} />
            <div className="apply-row">
              <a className="btn" href={mailto(role)}>Apply for this role</a>
              <span style={{ color: "var(--muted)", fontSize: 14 }}>Closes <Dummy>{DEADLINE}</Dummy></span>
            </div>
          </div>
        </>
      )}
    </dialog>
  );
}
