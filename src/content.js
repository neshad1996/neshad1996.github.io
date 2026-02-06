export const profile = {
  // This is what will show on the site (requested)
  name: "Neshad D. Pathirana",

  // Keep your full title here (used below the name)
  title: "Ph.D. Candidate in Physics • Nuclear Astrophysics • Experimental Nuclear Physics",

  subtitle:
    "I build experimentally constrained nuclear inputs for nucleosynthesis and neutrino physics using charge-exchange reactions, Oslo-method techniques, and modeling.",

  location: "East Lansing, MI, USA",
  email: "devanes1@msu.edu",
  affiliation: "Facility for Rare Isotope Beams (FRIB), Michigan State University",

  // Files you upload in /public
  cvUrl: "/cv.pdf",
  headshotUrl: "/images/profile.jpg",

  links: [
    { label: "GitHub", href: "https://github.com/neshad1996" },
    { label: "Google Scholar", href: "#" },
    { label: "ORCID", href: "#" },
    { label: "LinkedIn", href: "#" }
  ]
};

// Removed Talks from nav (requested)
export const nav = [
  { id: "home", label: "Home" },
  { id: "research", label: "Research" },
  { id: "publications", label: "Publications" },
  { id: "teaching", label: "Teaching" },
  { id: "awards", label: "Awards" },
  { id: "service", label: "Service" },
  { id: "contact", label: "Contact" }
];

export const projects = [
  {
    id: "nb92",
    title: "Cosmochronometer 92Nb Production Sites",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB / MSU)",
    image: "/images/92nb.jpg",
    tags: ["charge-exchange", "Gamow–Teller", "nucleosynthesis"],
    summary:
      "Extracting astrophysical reaction rates relevant to 92Nb via charge-exchange data and Gamow–Teller strength.",
    bullets: [
      "Uses 92Zr(3He,t) experimental data",
      "Targets key nuclear inputs shaping 92Nb production/destruction pathways"
    ],
    links: [{ label: "Overview", href: "#" }]
  },
  {
    id: "ceoslo",
    title: "CE-Oslo Method for (n,γ) Constraints",
    timeframe: "Published + ongoing extensions",
    role: "Method development + first applications",
    image: "/images/ce-oslo.jpg",
    tags: ["Oslo method", "charge-exchange", "(n,γ)"],
    summary:
      "Developed the Charge-Exchange Oslo (CE-Oslo) method and applied it to constrain neutron-capture cross sections.",
    bullets: [
      "First application toward 92Zr(n,γ)93Zr constraints",
      "Bridges charge-exchange information with statistical properties"
    ],
    links: [{ label: "Paper", href: "#" }]
  },
  {
    id: "pb208",
    title: "Neutrino–208Pb Charged-Current Cross Sections",
    timeframe: "Ongoing",
    role: "GT strength extraction from charge-exchange data",
    image: "/images/neutrino-pb.jpg",
    tags: ["neutrinos", "charge-exchange", "208Pb"],
    summary:
      "Determining neutrino–208Pb CC cross sections by extracting Gamow–Teller strength from charge-exchange reactions.",
    bullets: [
      "Based on 208Pb(3He,t)208Bi reaction data",
      "Supports neutrino detection / nuclear response applications"
    ],
    links: [{ label: "Notes", href: "#" }]
  },
  {
    id: "lenda",
    title: "LENDA Detector Upgrade & Testing",
    timeframe: "Ongoing",
    role: "Detector development",
    image: "/images/lenda.jpg",
    tags: ["instrumentation", "neutrons", "scintillators"],
    summary:
      "Contributing to LENDA upgrade work by testing and evaluating scintillator materials for improved neutron detection.",
    bullets: [
      "Hands-on testing & evaluation",
      "Supports experimental campaigns at FRIB"
    ],
    links: [{ label: "Details", href: "#" }]
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
    links: [
      { label: "Preprint", href: "https://doi.org/10.21203/rs.3.rs-7660136/v1" }
    ]
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
