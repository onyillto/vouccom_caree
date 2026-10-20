import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { LEVEL_RANK, ROLES, TEAMS } from "../data/roles";
import type { Role } from "../data/roles";
import { JobCard } from "./JobCard";
import { RoleDialog } from "./RoleDialog";

type SortKey = "priority" | "title" | "experience";

function sortRoles(roles: Role[], by: SortKey) {
  const a = [...roles];
  if (by === "title") a.sort((x, y) => x.title.localeCompare(y.title));
  else if (by === "experience") a.sort((x, y) => LEVEL_RANK[y.level] - LEVEL_RANK[x.level] || y.years - x.years);
  else a.sort((x, y) => x.wave - y.wave);
  return a;
}

const hashId = () => location.hash.slice(1);

export function JobBoard() {
  const [team, setTeam] = useState("All");
  const [query, setQuery] = useState("");
  const [sortBy, setSortBy] = useState<SortKey>("priority");
  const [openId, setOpenId] = useState<string | null>(() => (ROLES.some((r) => r.id === hashId()) ? hashId() : null));
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<number | undefined>(undefined);

  const shown = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sortRoles(
      ROLES.filter(
        (r) =>
          (team === "All" || r.team === team) &&
          (!q || `${r.title} ${r.summary} ${r.team}`.toLowerCase().includes(q)),
      ),
      sortBy,
    );
  }, [team, query, sortBy]);

  // Keep the URL hash in sync so a specific role can be linked to.
  const openRole = useCallback((id: string) => {
    setOpenId(id);
    history.replaceState(null, "", "#" + id);
  }, []);
  const closeRole = useCallback(() => {
    setOpenId(null);
    history.replaceState(null, "", location.pathname + location.search);
  }, []);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(null), 1800);
  }, []);
  useEffect(() => () => clearTimeout(toastTimer.current), []);

  return (
    <section id="roles">
      <div className="wrap">
        <div className="toolbar">
          <input type="search" placeholder="Search roles…" aria-label="Search roles" value={query} onChange={(e) => setQuery(e.target.value)} />
          <div className="filters" role="group" aria-label="Filter by team">
            {TEAMS.map((t) => (
              <button key={t} type="button" aria-pressed={t === team} onClick={() => setTeam(t)}>
                {t}
              </button>
            ))}
          </div>
        </div>
        <div className="list-head">
          <h2>Showing {shown.length} Job{shown.length === 1 ? "" : "s"}</h2>
          <label className="sort">
            Sort by:
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortKey)}>
              <option value="priority">Hiring Now First</option>
              <option value="title">Title (A–Z)</option>
              <option value="experience">Experience Level</option>
            </select>
          </label>
        </div>
        <div className="jobs">
          {shown.length ? (
            shown.map((r) => <JobCard key={r.id} role={r} onDetails={openRole} onToast={showToast} />)
          ) : (
            <div className="empty">No roles match your search.</div>
          )}
        </div>
      </div>
      <RoleDialog role={ROLES.find((r) => r.id === openId) ?? null} onClose={closeRole} />
      <div className={`toast${toast ? " show" : ""}`} role="status">{toast}</div>
    </section>
  );
}
