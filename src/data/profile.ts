export interface ProfileData {
  hero: {
    name: string;
    title: string;
    tagline: string;
    subline: string;
    profilePhoto: string;
    initials: string;
    buttons: {
      viewWork: { label: string; href: string };
      downloadResume: { label: string; href: string };
      getInTouch: { label: string; href: string };
    };
    socials: {
      linkedin: string;
      email: string;
    };
  };
  impactStats: Array<{
    value: number;
    suffix: string;
    label: string;
    displayValue?: string;
  }>;
  about: {
    paragraphs: string[];
    badges: string[];
  };
  coreCompetencies: Array<{
    title: string;
    description: string;
    icon: string;
  }>;
  projects: {
    categories: string[];
    items: Array<{
      title: string;
      category: string;
      description: string;
      chips: string[];
    }>;
  };
  experience: Array<{
    role: string;
    company: string;
    location: string;
    period: string;
    defaultBullets: string[];
    moreBullets?: string[];
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  education: Array<{
    degree: string;
    institution: string;
    period: string;
  }>;
  contact: {
    heading: string;
    shortLine: string;
    email: string;
    linkedin: string;
    resumeUrl: string;
    location: string;
  };
  footer: {
    builtWith: string;
  };
}

export const profileData: ProfileData = {
  hero: {
    name: "Sudarshan P K",
    title: "Product Manager — Conversational AI & Customer Support Experience",
    tagline:
      "I design how people move from bots and self-service to humans — and make that handoff seamless.",
    subline:
      "Co-founder & CPO at Exelon Circuits · 6 years · Udupi, Karnataka, India",
    profilePhoto: "/profile.jpg",
    initials: "SP",
    buttons: {
      viewWork: {
        label: "View My Work",
        href: "#projects",
      },
      downloadResume: {
        label: "Download Resume",
        href: "/resume.pdf",
      },
      getInTouch: {
        label: "Get in Touch",
        href: "#contact",
      },
    },
    socials: {
      linkedin: "https://linkedin.com/in/sudarshan-pk",
      email: "mailto:sudarshanpk007@gmail.com",
    },
  },

  impactStats: [
    {
      value: 6,
      suffix: " Years",
      label: "in product & engineering",
    },
    {
      value: 50,
      suffix: "+",
      label: "Client engagements",
    },
    {
      value: 20,
      suffix: "+",
      label: "BRDs & SRS authored",
    },
    {
      value: 13,
      displayValue: "11–13",
      suffix: "",
      label: "Cross-functional team size led",
    },
    {
      value: 2,
      suffix: "",
      label: "State utilities served (MESCOM & GESCOM)",
    },
  ],

  about: {
    paragraphs: [
      "Product leader with 6 years of experience owning conversational and customer-support products end to end, across chat, voice, WhatsApp and web self-service. As Co-founder & Chief Product Officer of Exelon Circuits, an ISO 9001, ISO 27001 and ISO 20000-1 certified technology company, I have shipped WhatsApp commerce and agent-handoff platforms, AI voice agents for reception and in-room service, website chatbots, and complaint-management systems for two state utilities serving millions of consumers.",
      "My work sits where automation meets live agents: designing how a user moves from a bot or self-service flow to a human, defining the routing, authentication, context-sharing and CRM integrations that make the transition seamless, and closing the loop with post-interaction feedback.",
    ],
    badges: ["ISO 9001", "ISO 27001", "ISO 20000-1"],
  },

  coreCompetencies: [
    {
      title: "Conversational Product",
      description:
        "Chat and voice journey design, bot-to-live-agent handoff, IVR and telephony flows, WhatsApp Business API, agent consoles, intent and escalation logic",
      icon: "MessageSquare",
    },
    {
      title: "Support Experience",
      description:
        "Self-service and help-centre design, ticket routing and SLA management, escalation matrices, CSAT and post-interaction feedback, quality review workflows",
      icon: "Headphones",
    },
    {
      title: "Integrations & Technical Fluency",
      description:
        "API design and evaluation, authentication and context passing, CRM and third-party integrations, data flows, architecture trade-offs, webhooks and events",
      icon: "Cpu",
    },
    {
      title: "Product Management",
      description:
        "Roadmapping, MVP definition, prioritisation, BRD/SRS writing, user stories and acceptance criteria, stakeholder management",
      icon: "Compass",
    },
    {
      title: "Data & Experimentation",
      description:
        "Metric definition, funnel and drop-off analysis, dashboards, A/B and pilot rollouts",
      icon: "BarChart3",
    },
    {
      title: "Cross-functional Delivery",
      description:
        "Scrum and Kanban, sprint planning, UAT and go-live across engineering, design, content, operations and localization",
      icon: "Users",
    },
  ],

  projects: {
    categories: [
      "All",
      "Conversational AI",
      "Support & CRM",
      "Platforms at Scale",
    ],
    items: [
      // Conversational AI
      {
        title: "WhatAStore — WhatsApp Business API Commerce & Agent Platform",
        category: "Conversational AI",
        description:
          "Product website, customer web app and Admin-Agent Portal. Conversation flows, template messaging, agent inbox, assignment and bot-to-human handoff with conversation history carried across.",
        chips: ["WhatsApp API", "Agent Handoff", "Queue Routing"],
      },
      {
        title: "AI Voice Agents for Hospitality (Sea View Hotel)",
        category: "Conversational AI",
        description:
          "Voice agents for reception, in-room service and dining, with escalation to staff and automated post-stay feedback calls.",
        chips: ["Voice AI", "Call Flows", "Feedback Loop"],
      },
      {
        title: "Website Chatbots (Qamen Studio, VShop)",
        category: "Conversational AI",
        description:
          "Enquiry chatbots with response-management dashboards for client teams.",
        chips: ["Chatbot", "Lead Capture", "Dashboard"],
      },
      {
        title: "Parent–Student Communication System",
        category: "Conversational AI",
        description:
          "Hybrid WiFi/SIP telephony with SIM fallback and a prepaid wallet, covering call routing, permissions and usage controls.",
        chips: ["SIP/VoIP", "Routing", "Wallet"],
      },

      // Support & CRM
      {
        title: "Electricity Board Complaint Management (MESCOM & GESCOM)",
        category: "Support & CRM",
        description:
          "Multi-channel complaint intake, categorisation, routing to field teams, SLA tracking, escalation and resolution confirmation for two state utilities.",
        chips: ["Ticketing", "SLA", "Escalation"],
      },
      {
        title: "Co-operative Bank CRM (multi-phase)",
        category: "Support & CRM",
        description:
          "Customer records, enquiry and service-request handling, and staff workflows.",
        chips: ["CRM", "Service Requests", "Workflows"],
      },
      {
        title: "United Toyota — Integrated CRM & HRMS",
        category: "Support & CRM",
        description:
          "Dealership platform covering customer lifecycle from lead to service, plus employee lifecycle, attendance and payroll.",
        chips: ["CRM", "HRMS", "Lifecycle"],
      },
      {
        title: "Property Operations Suite (Rohan Corporation)",
        category: "Support & CRM",
        description:
          "Complaint and maintenance logging, assignment and tracking, with a resident mobile app.",
        chips: ["Maintenance", "Mobile App", "Tracking"],
      },
      {
        title: "Sainik Setu",
        category: "Support & CRM",
        description:
          "Services platform connecting senior citizens and ex-servicemen with verified providers, with request intake and verification workflows.",
        chips: ["Marketplace", "Verification", "Intake"],
      },

      // Platforms at Scale
      {
        title: "Industrial Automation & Traceability Platform (Mysore Minds)",
        category: "Platforms at Scale",
        description:
          "Manufacturing SaaS integrating ERP, machines and processes; led the traceability module.",
        chips: ["SaaS", "ERP", "Traceability"],
      },
      {
        title: "Event Management Platform",
        category: "Platforms at Scale",
        description:
          "Web portal and tablet app for live events, judges' scoring and leaderboards with offline support and sync.",
        chips: ["Offline-first", "Tablet", "Real-time"],
      },
      {
        title: "Multilingual & Global Web Platforms",
        category: "Platforms at Scale",
        description:
          "Phil McArthur & Partners, Hitachi Vantara microsite, EduCare Foundation (USA), MAHE SDG portal and a bilingual English–Kannada university portal.",
        chips: ["Multilingual", "CMS", "Localization"],
      },
    ],
  },

  experience: [
    {
      role: "Co-founder & Chief Product Officer",
      company: "Exelon Circuits Pvt. Ltd.",
      location: "Mangaluru",
      period: "Jul 2021 – Present",
      defaultBullets: [
        "Own product strategy and delivery across 50+ client engagements, with conversational support, CRM and self-service as a core product line",
        "Built WhatAStore, defining how automated WhatsApp conversations hand off to live agents with full context, agent assignment and queue handling",
        "Led an AI voice-agent product for hospitality covering reception, in-room service, dining and automated post-stay feedback calls",
        "Delivered complaint-management platforms for MESCOM and GESCOM with multi-channel intake, routing, SLA tracking and escalation",
        "Authored 20+ BRDs and SRS documents including role matrices, escalation rules, state machines and acceptance criteria",
      ],
      moreBullets: [
        "Defined integration requirements across authentication, message routing, context sharing, CRM records and notifications",
        "Designed feedback and quality mechanisms: post-interaction feedback, ticket-quality review and resolution-rate reporting",
        "Defined and tracked product metrics (resolution time, escalation rate, drop-off, adoption) to justify roadmap decisions",
        "Delivered bilingual and multilingual products, coordinating content and localization with engineering",
        "Led cross-functional teams of 11–13 through Agile ceremonies from discovery to UAT and go-live",
        "Presented proposals, solution architecture and roadmaps to government officials, bank leadership and enterprise clients",
      ],
    },
    {
      role: "Frontend Developer",
      company: "Triofi Technologies Pvt. Ltd.",
      location: "Bengaluru",
      period: "Sep 2020 – Jul 2021",
      defaultBullets: [
        "Built customer-facing web apps in React.js, Vue.js and Nuxt.js from Figma designs",
        "Partnered with UI/UX and backend teams to reduce friction in user flows",
      ],
    },
    {
      role: "Intern",
      company: "Applied Cognition Systems Pvt. Ltd.",
      location: "Manipal",
      period: "2019 – 2020",
      defaultBullets: [
        "Built an Employee/Customer Database and Management System using HTML, CSS, JavaScript and SQL",
      ],
    },
  ],

  skills: [
    {
      category: "Conversational & Messaging",
      items: [
        "WhatsApp Business API",
        "Chatbot platforms",
        "AI Voice Agents",
        "SIP/VoIP",
        "SMS & Email",
      ],
    },
    {
      category: "AI & Automation",
      items: [
        "LLM-based assistants",
        "Intent handling & routing",
        "Speech-to-text / Text-to-speech",
        "AI-assisted delivery",
      ],
    },
    {
      category: "Product & Analytics",
      items: [
        "BRD/SRS",
        "User stories",
        "Journey mapping",
        "Figma",
        "Adobe XD",
        "Funnel & event analytics",
        "Dashboards",
      ],
    },
    {
      category: "Integrations",
      items: [
        "REST APIs",
        "Webhooks",
        "OAuth & token auth",
        "CRM & ERP integrations",
        "Payment gateways",
      ],
    },
    {
      category: "Engineering",
      items: [
        "React.js",
        "Next.js",
        "Vue.js",
        "Nuxt.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "Python",
      ],
    },
    {
      category: "Mobile",
      items: [
        "React Native",
        "Ionic",
        "Capacitor",
        "PWA",
        "Offline-first sync",
      ],
    },
    {
      category: "Data",
      items: ["MongoDB", "SQL", "Firebase", "Realm"],
    },
    {
      category: "Cloud & DevOps",
      items: [
        "AWS",
        "Azure",
        "Google Cloud",
        "DigitalOcean",
        "Cloudflare",
        "Docker",
        "CI/CD",
        "Git/GitHub",
      ],
    },
  ],

  education: [
    {
      degree: "B.Tech, Electronics & Communication Engineering",
      institution: "Manipal Institute of Technology",
      period: "2017 – 2020",
    },
    {
      degree: "Diploma, Electronics & Communication Engineering",
      institution: "Dr. TMA Pai Polytechnic",
      period: "2014 – 2017",
    },
  ],

  contact: {
    heading: "Let's build better conversations.",
    shortLine:
      "Open to Product Manager roles in Conversational AI, customer support and CX platforms.",
    email: "mailto:sudarshanpk007@gmail.com",
    linkedin: "https://linkedin.com/in/sudarshan-pk",
    resumeUrl: "/resume.pdf",
    location: "Udupi, Karnataka, India",
  },

  footer: {
    builtWith: "Built with Next.js",
  },
};
