import { Dummy } from "./components/Dummy";
import { JobBoard } from "./components/JobBoard";
import { ThemeToggle } from "./components/ThemeToggle";
import { APPLY_EMAIL, DEADLINE } from "./data/roles";

export default function App() {
  return (
    <>
      <header className="top">
        <div className="wrap">
          <a href="#"><img src={`${import.meta.env.BASE_URL}logo.svg`} alt="VOUCCOM" /></a>
          <div className="header-actions">
            <ThemeToggle />
            <a className="btn" href="#roles">View open roles</a>
          </div>
        </div>
      </header>

      <main>

        <JobBoard />

        <section>
          <div className="wrap">
            <h2>What we offer</h2>
            <div className="offer">
              <div className="pillar"><strong>Competitive pay</strong><Dummy>Salary bands shared at interview stage</Dummy></div>
              <div className="pillar"><strong>Health cover</strong><Dummy>HMO for you and dependants</Dummy></div>
              <div className="pillar"><strong>Flexible work</strong><Dummy>Hybrid schedule from our Lagos office</Dummy></div>
              <div className="pillar"><strong>Early-team impact</strong><span>Shape how a regulated consumer platform launches from day one.</span></div>
            </div>
          </div>
        </section>

        <section className="how">
          <div className="wrap">
            <h2>How to apply</h2>
            <ol>
              <li>Send your CV and a short note on why the role fits you to <Dummy>{APPLY_EMAIL}</Dummy>.</li>
              <li>Put the role title in the email subject, e.g. “Application – QA Engineer”.</li>
              <li>Applications close on <Dummy>{DEADLINE}</Dummy>. We review them on a rolling basis.</li>
              <li>Process: <Dummy>intro call → skills assessment → panel interview → offer</Dummy>.</li>
            </ol>
            <div className="callout" style={{ marginTop: 24 }}>
              <div>
                <h3>Don't see your role?</h3>
                <p>Send us your CV anyway. We'll be hiring more people as we grow.</p>
              </div>
              <a className="btn" href={`mailto:${APPLY_EMAIL}`}><Dummy>{APPLY_EMAIL}</Dummy></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="wrap">© 2026 VOUCCOM · Lagos, Nigeria · VOUCCOM is an equal-opportunity employer.</div>
      </footer>
    </>
  );
}
