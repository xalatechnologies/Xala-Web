/**
 * Panel content data for ServicePanel (left) and ProductPanel (right)
 * This file contains all the text/data for the scroll-driven panels
 */

// Types
export interface CardContent {
  iconKey: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  accentColor: string;
}

export interface ValueContent {
  iconKey: string;
  value: string;
  label: string;
  description: string;
  accentColor: string;
  link?: string;
}

export interface ServicePhase {
  headerLabel: string;
  footerLabel: string;
  cards: CardContent[];
}

export interface ProductPhase {
  headerLabel: string;
  footerLabel: string;
  values: ValueContent[];
}

// Accent colors
export const ACCENT_COLORS = {
  xala: "#5DE67A",
  cyan: "#00d4ff",
  gold: "#D4A853",
  linkedin: "#0A66C2",
  white: "#ffffff",
} as const;

// Left Panel (Service) Phases
export const SERVICE_PHASES: ServicePhase[] = [
  // Phase 0: Core Pillars (0-28%)
  {
    headerLabel: "Core Pillars",
    footerLabel: "Together, a coherent system",
    cards: [
      {
        iconKey: "ai",
        title: "AI Automation",
        tagline: "Intelligent Systems That Work",
        description: "Practical automation of workflows, decisions, and processes",
        highlights: ["Efficiency", "Scale", "Intelligence"],
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "saas",
        title: "SaaS Solutions",
        tagline: "Platforms Built for Scale",
        description: "Design, development, and operation of scalable SaaS platforms",
        highlights: ["Real Users", "Real Data", "Real Business"],
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "blockchain",
        title: "Blockchain & Web3",
        tagline: "Infrastructure for Tomorrow",
        description: "Decentralized and hybrid systems, enterprise-ready",
        highlights: ["Compliance", "Security", "Longevity"],
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 1: What We Deliver (28-42%)
  {
    headerLabel: "What We Deliver",
    footerLabel: "Real solutions, not promises",
    cards: [
      {
        iconKey: "code",
        title: "Enterprise Software",
        tagline: "Production-Grade Systems",
        description: "Scalable architectures, clean code, maintainable solutions",
        highlights: ["API Design", "Microservices", "Integration"],
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "saas",
        title: "Cloud Infrastructure",
        tagline: "Built for Scale",
        description: "AWS, Azure, Kubernetes - infrastructure that grows with you",
        highlights: ["DevOps", "CI/CD", "Monitoring"],
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "cyber",
        title: "Security & Compliance",
        tagline: "Enterprise Standards",
        description: "ISO 27001, GDPR, SOC 2 - security built in from day one",
        highlights: ["Audit Ready", "Zero Trust", "Encryption"],
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 2: Team (42-56%)
  {
    headerLabel: "Our Team",
    footerLabel: "Human expertise + AI power",
    cards: [
      {
        iconKey: "team",
        title: "Expert Engineers",
        tagline: "20+ Years Combined",
        description: "Senior developers, architects, and specialists",
        highlights: ["Full-Stack", "DevOps", "Security"],
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "brain",
        title: "40+ AI Agents",
        tagline: "Accelerated Delivery",
        description: "Autonomous AI agents supporting development and testing",
        highlights: ["Code Review", "Testing", "Documentation"],
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "cyber",
        title: "Quality Focus",
        tagline: "99.9% Uptime",
        description: "Rigorous testing and monitoring across all deployments",
        highlights: ["TDD", "E2E Testing", "Performance"],
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 3: NorChain (56-70%)
  {
    headerLabel: "NorChain Platform",
    footerLabel: "Blockchain for the real world",
    cards: [
      {
        iconKey: "norchain",
        title: "Enterprise Blockchain",
        tagline: "Production Ready",
        description: "Hybrid blockchain infrastructure for regulated industries",
        highlights: ["Private Chains", "Consensus", "Nodes"],
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "blockchain",
        title: "Smart Contracts",
        tagline: "Secure & Audited",
        description: "Solidity, audited contracts, secure execution",
        highlights: ["ERC-20", "ERC-721", "Custom"],
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "cyber",
        title: "Nordic Compliance",
        tagline: "GDPR Ready",
        description: "Built for Norwegian and EU regulatory requirements",
        highlights: ["Audit Trail", "Privacy", "Transparency"],
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 4: AI & Tech (70-84%)
  {
    headerLabel: "AI & Technology",
    footerLabel: "Modern stack, proven results",
    cards: [
      {
        iconKey: "brain",
        title: "AI Integration",
        tagline: "LLMs & Automation",
        description: "OpenAI, LangChain, custom models for real workflows",
        highlights: ["GPT-4", "RAG", "Fine-tuning"],
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "stack",
        title: "Modern Stack",
        tagline: "Best-in-Class Tools",
        description: "React, TypeScript, Node.js, Python, and more",
        highlights: ["Next.js", "Remix", "FastAPI"],
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "code",
        title: "Data & Analytics",
        tagline: "Insights That Matter",
        description: "PostgreSQL, MongoDB, real-time analytics",
        highlights: ["ETL", "Dashboards", "ML Ops"],
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 5: Contact (84-100%)
  {
    headerLabel: "Get in Touch",
    footerLabel: "Let's build together",
    cards: [
      {
        iconKey: "team",
        title: "Start a Conversation",
        tagline: "hello@xala.no",
        description: "Tell us about your project and let's explore how we can help",
        highlights: ["Free Consultation", "No Commitment"],
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "norchain",
        title: "Oslo, Norway",
        tagline: "Nordic Headquarters",
        description: "Serving clients across Norway, Nordics, and Europe",
        highlights: ["Remote First", "On-Site Available"],
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "cyber",
        title: "Enterprise Ready",
        tagline: "SLA & Support",
        description: "Dedicated account management and 24/7 support options",
        highlights: ["NDA Ready", "Compliance"],
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
];

// Right Panel (Product/Values) Phases
export const PRODUCT_PHASES: ProductPhase[] = [
  // Phase 0: Why Xala (0-28%)
  {
    headerLabel: "Why Xala",
    footerLabel: "Proven track record",
    values: [
      {
        iconKey: "experience",
        value: "20+",
        label: "Years Experience",
        description: "Building enterprise-grade systems",
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "trust",
        value: "50+",
        label: "Trusted Clients",
        description: "Enterprise & public sector worldwide",
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "vision",
        value: "Future",
        label: "Thinking Vision",
        description: "AI-first with long-term focus",
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 1: Delivery Stats (28-42%)
  {
    headerLabel: "Our Delivery",
    footerLabel: "Measurable results",
    values: [
      {
        iconKey: "systems",
        value: "100+",
        label: "Systems Delivered",
        description: "Platforms, APIs, integrations",
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "uptime",
        value: "99.9%",
        label: "System Uptime",
        description: "Production reliability",
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "global",
        value: "5",
        label: "Countries",
        description: "Clients across Nordic & EU",
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 2: Team Stats (42-56%)
  {
    headerLabel: "Team Power",
    footerLabel: "Human + AI synergy",
    values: [
      {
        iconKey: "experience",
        value: "15+",
        label: "Core Team",
        description: "Senior engineers & specialists",
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "agent",
        value: "40+",
        label: "AI Agents",
        description: "Autonomous development support",
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "trust",
        value: "24/7",
        label: "Support",
        description: "Enterprise-grade SLAs",
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 3: NorChain Stats (56-70%)
  {
    headerLabel: "NorChain",
    footerLabel: "Enterprise blockchain",
    values: [
      {
        iconKey: "chain",
        value: "Web3",
        label: "Infrastructure",
        description: "Hybrid blockchain platform",
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "trust",
        value: "GDPR",
        label: "Compliant",
        description: "Nordic regulatory standards",
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "global",
        value: "Multi",
        label: "Chain Ready",
        description: "Ethereum, Polygon, custom",
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 4: Technology (70-84%)
  {
    headerLabel: "Technology",
    footerLabel: "Modern & proven",
    values: [
      {
        iconKey: "agent",
        value: "GPT-4",
        label: "AI Powered",
        description: "Latest LLM integration",
        accentColor: ACCENT_COLORS.xala,
      },
      {
        iconKey: "systems",
        value: "Cloud",
        label: "Native",
        description: "AWS, Azure, GCP ready",
        accentColor: ACCENT_COLORS.cyan,
      },
      {
        iconKey: "trust",
        value: "ISO",
        label: "27001 Ready",
        description: "Security certified",
        accentColor: ACCENT_COLORS.gold,
      },
    ],
  },
  // Phase 5: Social & Connect (84-100%)
  {
    headerLabel: "Connect",
    footerLabel: "Follow our journey",
    values: [
      {
        iconKey: "linkedin",
        value: "LinkedIn",
        label: "Professional Network",
        description: "Company updates & insights",
        accentColor: ACCENT_COLORS.linkedin,
        link: "https://linkedin.com/company/xala",
      },
      {
        iconKey: "github",
        value: "GitHub",
        label: "Open Source",
        description: "Our public repositories",
        accentColor: ACCENT_COLORS.white,
        link: "https://github.com/xala-technologies",
      },
      {
        iconKey: "twitter",
        value: "X / Twitter",
        label: "Latest News",
        description: "Tech insights & announcements",
        accentColor: ACCENT_COLORS.xala,
        link: "https://twitter.com/xalatech",
      },
    ],
  },
];

// Phase thresholds for scroll progress
export const PHASE_THRESHOLDS = [0.28, 0.42, 0.56, 0.70, 0.84] as const;

