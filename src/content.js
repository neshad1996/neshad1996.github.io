export const profile = {
  name: "Neshad D. Pathirana",
  title: "Ph.D. Candidate in Physics • Nuclear Astrophysics • Experimental Nuclear Physics",
  subtitle:
    "I build experimentally constrained nuclear inputs for nucleosynthesis and neutrino physics using charge-exchange reactions, Oslo-method techniques, and modeling.",
  location: "East Lansing, MI, USA",
  email: "devanes1@msu.edu",
  affiliation: "Facility for Rare Isotope Beams (FRIB), Michigan State University",

  // Files in /public
  cvUrl: "/cv.pdf",
  headshotUrl: "/images/profile.webp"
};

// Header navigation (added News, removed Talks)
export const nav = [
  { id: "home", label: "Home" },
  { id: "news", label: "News" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "awards", label: "Awards" },
  { id: "service", label: "Service" },
  { id: "contact", label: "Contact" }
];

// NEWS (you will edit this a lot in the future)
// date format: YYYY-MM-DD (this helps automatic ordering)
export const news = [
  {
    id: "news-2026-02-06",
    date: "2026-02-06",
    title: "Website launched",
    summary: "New personal academic website is live with research portfolio and publications.",
    images: ["/images/news/sample1.webp"],
    details: [
      "Modern React site hosted on GitHub Pages.",
      "Expandable News section to avoid a long homepage."
    ],
    links: []
  },
  {
    id: "news-2026-01-20",
    date: "2026-01-20",
    title: "Project milestone",
    summary: "Major progress on CE-Oslo analysis pipeline and model validation.",
    images: ["/images/news/sample2.webp", "/images/news/sample3.webp"],
    details: [
      "Cross-checks completed across multiple normalization choices.",
      "Next: integrate results into reaction-rate sensitivity studies."
    ],
    links: []
  }
];

// Research projects
export const projects = [
  {
    id: "nb92",
    title: "Cosmochronometer 92Nb Production Sites",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB / MSU)",
    image: "/images/92nb.webp",
    tags: ["charge-exchange", "Gamow–Teller", "nucleosynthesis"],
    summary:
      "Extracting astrophysical reaction rates relevant to 92Nb via charge-exchange data and Gamow–Teller strength.",
    bullets: [
      "Uses 92Zr(3He,t) experimental data",
      "Targets key nuclear inputs shaping 92Nb production/destruction pathways"
    ],
    links: []
  },
  {
    id: "ceoslo",
    title: "CE-Oslo Method for (n,γ) Constraints",
    timeframe: "Published + ongoing extensions",
    role: "Method development + first applications",
    image: "/images/ce-oslo.webp",
    tags: ["Oslo method", "charge-exchange", "(n,γ)"],
    summary:
      "Developed the Charge-Exchange Oslo (CE-Oslo) method and applied it to constrain neutron-capture cross sections.",
    bullets: [
      "First application toward 92Zr(n,γ)93Zr constraints",
      "Bridges charge-exchange information with statistical properties"
    ],
    links: []
  },
  {
    id: "pb208",
    title: "Neutrino–208Pb Charged-Current Cross Sections",
    timeframe: "Ongoing",
    role: "GT strength extraction from charge-exchange data",
    image: "/images/neutrino-pb.webp",
    tags: ["neutrinos", "charge-exchange", "208Pb"],
    summary:
      "Determining neutrino–208Pb CC cross sections by extracting Gamow–Teller strength from charge-exchange reactions.",
    bullets: [
      "Based on 208Pb(3He,t)208Bi reaction data",
      "Supports neutrino detection / nuclear response applications"
    ],
    links: []
  },
  {
    id: "lenda",
    title: "LENDA Detector Upgrade & Testing",
    timeframe: "Ongoing",
    role: "Detector development",
    image: "/images/lenda.webp",
    tags: ["instrumentation", "neutrons", "scintillators"],
    summary:
      "Contributing to LENDA upgrade work by testing and evaluating scintillator materials for improved neutron detection.",
    bullets: [
      "Hands-on testing & evaluation",
      "Supports experimental campaigns at FRIB"
    ],
    links: []
  }
];

export const publications = [
  {
    title: "Solving the puzzle of the cosmochronometer 92Nb production using the Oslo method",
    venue: "Physical Review Letters (PRL)",
    status: "Ongoing",
    links: []
  },
  {
    title:
      "Experimental study on supernova neutrino-induced nucleosynthesis of 92Nb via the 92Zr(3He,t)92Nb charge-exchange reaction",
    venue: "Physical Review Letters (PRL)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Charged-current neutrino-208Pb cross sections via the 208Pb(3He,t) charge-exchange reaction",
    venue: "Physical Review Letters (PRL)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Extraction of neutron capture cross sections on 92Zr using the charge-exchange Oslo method",
    venue: "Physical Review C (PRC)",
    status: "Published",
    links: []
  },
  {
    title: "Single-nucleon transfer unveils NiCu cycle in astrophysical X-ray bursts",
    venue: "PRL",
    status: "Submitted",
    links: [{ label: "Preprint", href: "https://doi.org/10.21203/rs.3.rs-7660136/v1" }]
  }
];

export const teaching = [
  {
    place: "Michigan State University",
    timeframe: "Aug 2022 – Dec 2024",
    items: [
      "Instructor in charge: PHY 252 — Introductory Physics Laboratory II",
      "Instructor in charge: ISP 205L — Visions of the Laboratory",
      "Tutor in charge: PHY 415 — Mathematical Modeling in Physics"
    ]
  },
  {
    place: "University of Peradeniya",
    timeframe: "Aug 2021 – Jul 2022",
    items: [
      "Instructor: Nuclear Physics Laboratory (M.Sc.)",
      "Instructor: Advanced Laboratory sessions (Honors program)",
      "Tutor: Quantum Mechanics I/II; General Relativity",
      "Help desk: PH 230 — Quantum Mechanics and Atomic Physics"
    ]
  }
];

export const awards = [
  "Galonsky International Travel Award (MSU)",
  "NNRC Scholarship (University of Oslo)",
  "FRIB Fellowships (MSU)",
  "Herbert T. Graham Scholarship (MSU)",
  "Graduate School Travel Fellowship (MSU)",
  "Gold medals & prizes (UoP): Physics excellence and awards",
  "Merit award (UoP symposium)"
];

export const service = [
  "APS (member), Sigma Xi (member), Phi Kappa Phi (member)",
  "IReNA / JINA-CEE / CeNAM (member)",
  "Former Secretary — Sri Lankan Student Association at MSU"
];

// CONTACT FORM CONFIG (kept in content.js so you edit one file)
// Recommended: use Formspree so messages go to your inbox without a backend.
// How: create a form on Formspree → it gives you an endpoint like https://formspree.io/f/xxxxabcd
export const contactForm = {
  // Put your Formspree endpoint here. Leave "" to use mailto fallback.
  endpoint: "",
  emailTo: "devanes1@msu.edu",
  subjectPrefix: "Website message"
};
