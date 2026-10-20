import type { ReactNode } from "react";

const FEATURES: { title: string; text: string; icon: ReactNode }[] = [
  {
    title: "Transparent draws",
    text: "Every draw is governed, auditable and broadcast live, with a public archive of results and prize handovers.",
    icon: (
      <>
        <rect x="2" y="6" width="14" height="12" rx="2" />
        <path d="m22 8-6 4 6 4z" />
      </>
    ),
  },
  {
    title: "Verified vehicles",
    text: "Cars come from reputable dealers and are independently inspected, documented and accurately listed.",
    icon: (
      <>
        <path d="M3 17v-4l2-5h14l2 5v4z" />
        <circle cx="7.5" cy="17.5" r="1.5" />
        <circle cx="16.5" cy="17.5" r="1.5" />
      </>
    ),
  },
  {
    title: "Regulated by design",
    text: "Licensing, AML/KYC, data protection and responsible participation are part of the product from day one.",
    icon: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
  },
];

const LAUNCH_GATE = [
  "Licensing",
  "Draw governance",
  "Payment reconciliation",
  "Fraud monitoring",
  "Data protection",
  "Customer complaints",
  "Vehicle verification",
  "Information security",
  "Incident response",
];

export function About() {
  return (
    <section className="about">
      <div className="wrap">
        <div className="about-head">
          <div>
            <div className="eyebrow">About VOUCCOM</div>
            <h2 className="about-title">
              A fairer way to win your next <em>car</em>.
            </h2>
          </div>
          <p className="about-lead">
            VOUCCOM is a digital platform where users buy vouchers that enter them into transparent, independently
            governed draws to win verified vehicles from reputable dealers.
          </p>
        </div>

        <div className="features">
          {FEATURES.map((f, i) => (
            <div className="feature" key={f.title}>
              <div className="feature-top">
                <span className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                    {f.icon}
                  </svg>
                </span>
                <span className="feature-num">0{i + 1}</span>
              </div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>

        <div className="gate">
          <div className="gate-copy">
            <div className="gate-label">Our launch gate</div>
            <h3>We don't go live until every one of these has an owner.</h3>
            <p>That's why we're hiring. Every role on this page owns part of that promise.</p>
            <a className="gate-btn" href="#roles">See who we need →</a>
          </div>
          <ul className="gate-list">
            {LAUNCH_GATE.map((item) => (
              <li key={item}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="m5 12 5 5 9-10" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
