import type { IconName } from "../components/RoleIcon";

// Placeholder values (shown in pink): replace before publishing.
export const APPLY_EMAIL = "careers@vouccom.com";
export const DEADLINE = "30 November 2026";

export type Level = "Entry" | "Mid" | "Senior" | "Executive";
export const LEVEL_RANK: Record<Level, number> = { Entry: 1, Mid: 2, Senior: 3, Executive: 4 };

type RawRole = {
  title: string;
  team: string;
  wave: 1 | 2;
  type: string;
  reports: string;
  summary: string;
  resp: string[];
  req: string[];
  nice: string[];
};

export type Role = RawRole & {
  id: string;
  color: string;
  icon: IconName;
  years: number;
  level: Level;
};

const RAW_ROLES: RawRole[] = [
  {
    title: "Chief Operating Officer / Operations Manager", team: "Leadership", wave: 1,
    type: "Full-time", reports: "Managing Director / CEO",
    summary: "Design and run VOUCCOM's day-to-day operations: listings, draws, vendors and on-time prize delivery.",
    resp: [
      "Design and document daily operating procedures for listings, draws and prize fulfilment",
      "Coordinate the listing and draw calendar across product, dealers and content teams",
      "Manage vendors and partners, including inspection, logistics and payment providers",
      "Make sure every prize is delivered on schedule and properly documented",
      "Set operational KPIs and report on them to leadership",
      "Work with compliance to make sure operations meet licensing and consumer-protection rules"
    ],
    req: [
      "7+ years in operations, including at least 3 years in a leadership role",
      "Experience running multi-party processes in a regulated or high-trust business",
      "Strong vendor management and process design skills",
      "Comfortable working in a fast-moving, early-stage environment"
    ],
    nice: ["Background in gaming, promotions, automotive or fintech", "Experience launching a new business in Nigeria"]
  },
  {
    title: "Head of Product", team: "Product & Engineering", wave: 1,
    type: "Full-time", reports: "Managing Director / CEO",
    summary: "Turn the business model into a product roadmap, and own the user, dealer, wallet, draw, claims and admin experiences.",
    resp: [
      "Own the product vision and roadmap across all VOUCCOM surfaces",
      "Define requirements for onboarding, wallet, vouchers, draws, claims, dealer tools and administration",
      "Prioritise work with engineering, compliance and operations",
      "Build compliance, fraud and responsible-participation controls into the product",
      "Set product metrics and use data and user research to make decisions"
    ],
    req: [
      "5+ years in product management for consumer or fintech products",
      "Proven record of shipping web and mobile products from zero to one",
      "Able to turn regulatory and operational requirements into clear specs",
      "Strong written communication and stakeholder management"
    ],
    nice: ["Experience with wallets, payments, gaming or marketplaces", "Familiarity with Nigerian payment rails"]
  },
  {
    title: "DevOps & Cybersecurity Engineer", team: "Product & Engineering", wave: 1,
    type: "Full-time", reports: "Technical Lead",
    summary: "Keep VOUCCOM's infrastructure available, secure, monitored and recoverable.",
    resp: [
      "Maintain cloud infrastructure, CI/CD and environment management",
      "Own uptime, monitoring, alerting and backups",
      "Run access controls and secrets management, following least-privilege principles",
      "Lead incident response and post-incident reviews",
      "Arrange regular security testing and fix the issues it finds"
    ],
    req: [
      "4+ years in DevOps, SRE or security engineering",
      "Hands-on experience with a major cloud provider and infrastructure-as-code",
      "Solid understanding of application and network security",
      "Experience setting up observability and incident processes"
    ],
    nice: ["Security certifications such as OSCP, CISSP or cloud security", "Experience with NDPR/NDPA compliance"]
  },
  {
    title: "Quality Assurance Engineer", team: "Product & Engineering", wave: 1,
    type: "Full-time", reports: "Technical Lead",
    summary: "Make sure every release is safe: test onboarding, payments, vouchers, draw logic, claims and dealer workflows.",
    resp: [
      "Plan and run test cycles before every release",
      "Test critical flows: onboarding, payments, voucher issuance, draw logic, claims and dealer tools",
      "Build and maintain automated test suites",
      "Log, track and verify defects with the engineering team",
      "Keep test evidence for audit and compliance purposes"
    ],
    req: [
      "3+ years in QA for web or mobile applications",
      "Experience with manual and automated testing tools",
      "Strong attention to detail, especially around money flows and edge cases"
    ],
    nice: ["Experience testing payment or wallet systems", "Familiarity with Playwright, Cypress or similar"]
  },
  {
    title: "Legal & Regulatory Compliance Manager", team: "Risk & Compliance", wave: 1,
    type: "Full-time", reports: "Managing Director / CEO",
    summary: "Own licensing, consumer protection, contracts, responsible participation and regulator relationships.",
    resp: [
      "Manage gaming or promotional-competition licensing and renewals",
      "Make sure we meet consumer-protection and data-protection requirements",
      "Draft and review contracts with dealers, vendors and partners",
      "Design responsible-participation controls with the product team",
      "Prepare regulator reports and legally review product, marketing and terms"
    ],
    req: [
      "Qualified lawyer called to the Nigerian Bar",
      "5+ years in regulatory, gaming, fintech or consumer-protection practice",
      "Experience dealing directly with regulators"
    ],
    nice: ["Experience with Lagos State or national lottery/gaming regulators", "Data-protection certification"]
  },
  {
    title: "Finance & Reconciliation Manager", team: "Risk & Compliance", wave: 1,
    type: "Full-time", reports: "Managing Director / CEO",
    summary: "Oversee budgeting, cash flow, accounting, tax, wallet and payment reconciliation, dealer settlements and prize funding.",
    resp: [
      "Own budgeting, cash flow, accounting and tax compliance",
      "Run daily reconciliation of wallets, payments and the payment-provider ledger",
      "Manage dealer settlements and prize funding",
      "Produce management reports and support audits",
      "Set up financial controls for a high-volume transactional platform"
    ],
    req: [
      "Qualified accountant (ICAN, ACCA or equivalent)",
      "5+ years in finance, including reconciliation of high-volume transactions",
      "Strong Excel and accounting-software skills"
    ],
    nice: ["Fintech, gaming or e-commerce background", "Experience working with payment processors"]
  },
  {
    title: "AML, KYC & Fraud Risk Analyst", team: "Risk & Compliance", wave: 2,
    type: "Full-time", reports: "Legal & Regulatory Compliance Manager",
    summary: "Protect the platform and its users by reviewing identity checks, transaction alerts and fraud cases.",
    resp: [
      "Review KYC and identity-verification outcomes",
      "Investigate transaction alerts and suspicious activity, and escalate where needed",
      "Run sanctions screening",
      "Detect and act on account abuse and chargebacks",
      "Work fraud cases with our payment partners"
    ],
    req: [
      "3+ years in AML, KYC or fraud operations",
      "Knowledge of Nigerian AML/CFT requirements",
      "Analytical, discreet and well organised"
    ],
    nice: ["ACAMS or similar certification", "Experience with case-management or fraud tooling"]
  },
  {
    title: "Dealer Partnerships & Vehicle Sourcing Manager", team: "Supply", wave: 2,
    type: "Full-time", reports: "Chief Operating Officer",
    summary: "Recruit reputable dealers, negotiate terms and keep a steady supply of quality vehicles.",
    resp: [
      "Find and onboard reputable dealers",
      "Negotiate commercial terms and manage dealer relationships",
      "Maintain a steady pipeline of listings",
      "Coordinate vehicle documentation and availability"
    ],
    req: [
      "4+ years in automotive sales, partnerships or sourcing",
      "Strong network among dealers in Lagos and across Nigeria",
      "Excellent negotiation skills"
    ],
    nice: ["Experience in marketplace or B2B2C partnerships"]
  },
  {
    title: "Vehicle Inspection & Listing Officer", team: "Supply", wave: 2,
    type: "Full-time", reports: "Dealer Partnerships & Vehicle Sourcing Manager",
    summary: "Make sure every vehicle we list is real, verified and accurately described.",
    resp: [
      "Coordinate independent vehicle inspections",
      "Validate vehicle records and documentation",
      "Prepare accurate specifications for each listing",
      "Confirm listing content meets our quality standards before it goes live"
    ],
    req: [
      "2+ years in vehicle inspection, valuation or automotive operations",
      "Strong knowledge of vehicle documentation in Nigeria",
      "Meticulous attention to detail"
    ],
    nice: ["Mechanical or automotive engineering background"]
  },
  {
    title: "Growth Marketing Manager", team: "Growth", wave: 2,
    type: "Full-time", reports: "Managing Director / CEO",
    summary: "Lead user acquisition, referrals, retention and performance marketing while tracking acquisition cost closely.",
    resp: [
      "Plan and run acquisition campaigns across paid and organic channels",
      "Design referral and retention programmes",
      "Run performance marketing and track customer-acquisition cost",
      "Work with compliance so all marketing meets responsible-participation rules"
    ],
    req: [
      "4+ years in growth or performance marketing for consumer apps",
      "Data-driven, with hands-on experience in analytics and attribution tools",
      "Track record of hitting acquisition and retention targets"
    ],
    nice: ["Experience marketing regulated products in Nigeria"]
  },
  {
    title: "Content, Social Media & Live Events Producer", team: "Growth", wave: 2,
    type: "Full-time", reports: "Growth Marketing Manager",
    summary: "Make VOUCCOM visible and transparent through vehicle reviews, social content and live draws.",
    resp: [
      "Produce vehicle review content",
      "Manage our social media channels",
      "Run live draws and record prize presentations",
      "Keep a transparent, public archive of draw and winner content"
    ],
    req: [
      "3+ years in content production or social media",
      "Experience producing live streams or events",
      "Confident on camera, or comfortable directing talent"
    ],
    nice: ["Automotive content experience", "Video editing skills"]
  },
  {
    title: "Customer Experience Lead", team: "Customer Experience", wave: 2,
    type: "Full-time", reports: "Chief Operating Officer",
    summary: "Build our support function: standards, knowledge base, escalation paths and complaint handling.",
    resp: [
      "Set support standards and service-level targets",
      "Build and maintain help content and the knowledge base",
      "Define escalation paths and the complaint-management process",
      "Report on service quality, and lead and coach Support Officers"
    ],
    req: [
      "4+ years in customer support, including people management",
      "Experience setting up support tools and processes",
      "Knowledge of consumer-complaint handling requirements"
    ],
    nice: ["Fintech or gaming support background"]
  },
  {
    title: "Customer Support Officers", team: "Customer Experience", wave: 2,
    type: "Full-time · multiple openings", reports: "Customer Experience Lead",
    summary: "Help users and dealers with onboarding, wallets, vouchers, draws and claims.",
    resp: [
      "Answer onboarding questions across our approved channels",
      "Resolve wallet and voucher issues",
      "Handle draw enquiries and support claims",
      "Log and escalate user and dealer complaints"
    ],
    req: [
      "1+ year in customer support",
      "Excellent written and spoken English",
      "Patient, empathetic and well organised"
    ],
    nice: ["Fluency in Yoruba, Igbo or Hausa", "Experience with helpdesk tools"]
  }
];

// Card styling per role (same order as RAW_ROLES): tile colour, icon, min. years, level.
const META: [string, IconName, number, Level][] = [
  ["#2b2e83", "briefcase", 7, "Executive"],
  ["#e8705a", "layers", 5, "Senior"],
  ["#2855ff", "shield", 4, "Senior"],
  ["#4ba0c6", "check", 3, "Mid"],
  ["#eb8a44", "scale", 5, "Senior"],
  ["#d9573a", "wallet", 5, "Senior"],
  ["#e46f99", "search", 3, "Mid"],
  ["#3d8bf2", "car", 4, "Senior"],
  ["#f2c94c", "clipboard", 2, "Mid"],
  ["#22a06b", "trend", 4, "Senior"],
  ["#8b5cf6", "video", 3, "Mid"],
  ["#0f766e", "chat", 4, "Senior"],
  ["#f97316", "headset", 1, "Entry"]
];

export const ROLES: Role[] = RAW_ROLES.map((r, i) => {
  const [color, icon, years, level] = META[i];
  return {
    ...r,
    color,
    icon,
    years,
    level,
    id: r.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, ""),
  };
});

export const TEAMS = ["All", ...new Set(ROLES.map((r) => r.team))];

export const mailto = (r: Role) =>
  `mailto:${APPLY_EMAIL}?subject=${encodeURIComponent("Application – " + r.title)}`;
