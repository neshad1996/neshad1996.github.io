export const profile = {
  name: "Neshad D. Pathirana",
  affiliation: "Facility for Rare Isotope Beams (FRIB), Michigan State University",
  location: "East Lansing, MI, USA",
  title: "Ph.D. Candidate • Nuclear Physics • Astrophysics • Neutrino Physics",
  subtitle: [
    "I am a Ph.D. candidate in Experimental Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams, and a former visiting scholar at the University of Oslo. I earned both my M.Sc. in Physics and a Graduate Certificate in Instrumentation for High Energy Physics from Michigan State University, and I received my B.Sc. (Honours) in Physics (First Class) from the University of Peradeniya.",
    "My research is centered on experimental nuclear physics and its applications to both nuclear astrophysics and neutrino physics. I use precision measurements and modern detector techniques to constrain the nuclear data needed to model how elements are synthesized in astrophysical environments and to improve predictions for neutrino–nucleus interactions relevant to laboratory and cosmic settings."
  ],
  email: "devanes1@msu.edu",


  // Files in /public
  cvUrl: "/cv.pdf",
  headshotUrl: "/images/profile.webp"
};

// Header navigation
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

// Social links (icons rendered in Contact section)
// You can update URLs later here only.
export const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/neshad1996?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    icon: "linkedin"
  },
  {
    label: "Google Scholar",
    href: "#",
    icon: "scholar"
  },
  {
    label: "ORCID",
    href: "#",
    icon: "orcid"
  },
  {
    label: "GitHub",
    href: "https://github.com/neshad1996",
    icon: "github"
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18pC7PkZM7/?mibextid=wwXIfr",
    icon: "facebook"
  },
  {
    label: "Instagram",
    href: "#",
    icon: "instagram"
  }
];

// NEWS (edit this list in the future)
// News / Updates (LinkedIn-style posts) — curated from news.txt
// Tip: keep images in /public/images/news/ and set image: "/images/news/<file>.jpg"
export const news = [
  {
    id: "news-2026-01-06-prc-ce-oslo",
    date: "2026-01-06",
    title: "First first-author Ph.D. paper published in Physical Review C",
    summary:
      "My first first-author Ph.D. paper is now published in Physical Review C (Phys. Rev. C 113, 015801), presenting the Charge-Exchange Oslo Method for extracting neutron-capture and weak-interaction information from a single measurement.",
    images: [],
    details: [
      "Introduces a novel indirect technique that complements approaches such as the Oslo Method, β-Oslo, inverse-Oslo, surrogate reactions, and γ-strength methods.",
      "Demonstrated using light-ion beam data with the S800 spectrometer in coincidence with the GRETINA γ-ray array (NSCL/FRIB legacy program).",
      "Opens a path toward future applications in inverse kinematics, including (p,n+γ) with rare-isotope beams."
    ],
    links: []
  },

  {
    id: "news-2025-11-10-rcnp-pandroa-campaign",
    date: "2025-11-10",
    title: "Participated in the PANDROA experiment campaign at RCNP (Osaka University)",
    summary:
      "Participated in the PANDROA experiment campaign at RCNP, contributing to hands-on preparation and learning large-scale experimental workflows within a major international collaboration.",
    images: [],
    details: [
      "Gained practical experience with detector/DAQ environments and collaboration analysis systems used during the campaign.",
      "Worked alongside experts from multiple regions and engaged with the experimental setup and operations.",
      "Travel supported by the Galonsky International Travel Award (MSU Physics & Astronomy)."
    ],
    links: []
  },

  {
    id: "news-2025-10-13-galonsky-travel-award",
    date: "2025-10-13",
    title: "Awarded the Galonsky International Travel Award (MSU)",
    summary:
      "Received the Galonsky International Travel Award from the MSU Department of Physics & Astronomy, supporting longer research stays with international collaborators and strengthening global scientific partnerships.",
    images: [],
    details: [
      "Supports extended visits to international collaborators to deepen research impact and build long-term connections.",
      "Grateful to Prof. Remco Zegers for the nomination and continued mentorship."
    ],
    links: []
  },

  {
    id: "news-2025-09-12-sigma-xi",
    date: "2025-09-12",
    title: "Elected to Sigma Xi — The Scientific Research Honor Society",
    summary:
      "Honored to be nominated and selected as a member of Sigma Xi, an international multidisciplinary research honor society recognizing research achievements and potential.",
    images: [],
    details: [
      "Membership is by nomination and reflects demonstrated research accomplishments and promise.",
      "Motivated to contribute to Sigma Xi’s mission of advancing scientific excellence and the broader role of research."
    ],
    links: []
  },

  {
    id: "news-2025-08-19-frib-theory-alliance-summer-school",
    date: "2025-08-19",
    title: "Selected for the FRIB Theory Alliance Summer School (MSU)",
    summary:
      "Selected to attend the FRIB Theory Alliance Summer School, “Emergence of Collective Motion in Atomic Nuclei” (Aug 19–22, 2025), strengthening my nuclear theory background alongside experimental training.",
    images: [],
    details: [
      "Valuable opportunity to engage with theorists and deepen understanding of collective phenomena in nuclei.",
      "Enhanced cross-disciplinary perspective to support ongoing experimental and analysis work."
    ],
    links: []
  },

  {
    id: "news-2025-07-25-beaver-island-school-hackathon",
    date: "2025-07-25",
    title: "Summer school & hackathon on nuclear astrophysics tools (Beaver Island)",
    summary:
      "Attended the “Open Questions and Research Tools in Nuclear Astrophysics” summer school and hackathon (July 21–25, 2025), combining big-picture lectures with team-based research problem solving.",
    images: [],
    details: [
      "Hands-on training with the WinNet astrophysical reaction network to support my Ph.D. modeling work.",
      "Hackathon format emphasized collaboration, networking, and rapid development of practical research tools.",
      "Grateful to Prof. Remco Zegers and the organizers (including Prof. Alfredo Estrade) and to IReNA for support."
    ],
    links: []
  },

  {
    id: "news-2025-07-01-visiting-scientist-uio",
    date: "2025-07-01",
    title: "Completed fully funded Visiting Scientist Scholar stay at the University of Oslo",
    summary:
      "Completed a fully funded Visiting Scientist Scholar research stay at the University of Oslo (April–July 2025), participating in experiments and advancing a major component of my Ph.D. thesis analysis.",
    images: [],
    details: [
      "Advanced thesis work expected to contribute to a forthcoming publication.",
      "Grateful for mentorship and support from Prof. Ann-Cecilie Larsen and many collaborators at UiO.",
      "Valued the rare opportunity to work with Prof. Peter von Neumann-Cosel during his concurrent visit."
    ],
    links: []
  },

  {
    id: "news-2025-06-08-siren-italy",
    date: "2025-06-08",
    title: "Poster + 5-minute talk at the siREN International Conference (Giulianova, Italy)",
    summary:
      "Presented my 5th Ph.D. poster and a 5-minute talk at the siREN International Conference (June 8–13, 2025), sharing Oslo-method results connected to the 92Nb cosmochronometer problem.",
    images: [],
    details: [
      "Presented analysis of the 90Zr(α,d+γ)92Nb experiment at the Oslo Cyclotron Laboratory (SiRi particle telescope + OSCAR γ-ray array).",
      "Applied the Oslo Method to extract the nuclear level density and γ-ray strength function of 92Nb (first-time experimental constraints from this dataset).",
      "Used the extracted inputs in TALYS to constrain the 91Nb(n,γ)92Nb rate; results indicate a lower 92Nb destruction rate than earlier estimates, motivating updated astrophysical modeling."
    ],
    links: []
  },

  {
    id: "news-2025-04-25-phi-kappa-phi",
    date: "2025-04-25",
    title: "Invited to Phi Kappa Phi Honor Society",
    summary:
      "Invited to join Phi Kappa Phi, a selective all-discipline honor society recognizing sustained academic excellence at Michigan State University.",
    images: [],
    details: [
      "Invitation reflects strong academic standing and scholarly achievement.",
      "Provides access to career resources, awards opportunities, and a broad scholar network."
    ],
    links: []
  },

  {
    id: "news-2024-12-13-hep-instrumentation-certificate",
    date: "2024-12-13",
    title: "Graduated with the Graduate Certificate in Instrumentation in High Energy Physics (GPA 4.0)",
    summary:
      "Completed the MSU Graduate Certificate in Instrumentation in High Energy Physics (TRAIN-MI) with a cumulative GPA of 4.0, expanding my detector and DAQ expertise alongside nuclear physics research.",
    images: [],
    details: [
      "Curriculum emphasized: (1) advanced sensors for particle/radiation detection (including quantum devices), (2) front-end electronics & data acquisition, and (3) systems design for complex instrumentation environments.",
      "Strengthened systems-level instrumentation skills directly relevant to modern nuclear physics experiments.",
      "Grateful to Prof. Remco Zegers and mentors/colleagues for continued support."
    ],
    links: []
  },

  {
    id: "news-2024-11-03-argonne-campaign-low-energy-enhancement",
    date: "2024-11-03",
    title: "Participated in an experiment campaign at Argonne National Laboratory",
    summary:
      "Participated in an experiment campaign at Argonne National Laboratory focused on investigations related to low-energy enhancement behavior in γ-ray strength functions.",
    images: [],
    details: [
      "Expanded hands-on experience with experimental campaign operations and collaboration workflows.",
      "Strengthened context for ongoing γSF-related analysis topics in my broader research program."
    ],
    links: []
  },

  {
    id: "news-2024-10-16-pprocess-workshop-budapest",
    date: "2024-10-16",
    title: "Oral talk at the 8th p-process Workshop (Budapest, Hungary)",
    summary:
      "Delivered my second Ph.D. oral talk at the 8th p-process Workshop (Oct 16–18, 2024), presenting upcoming measurements and method development connected to p-process nucleosynthesis.",
    images: [],
    details: [
      "Presented planned work at RCNP (Japan) to measure 92Zr(3He,t+γ)92Nb, targeting rates relevant to the 92Nb cosmochronometer problem.",
      "Discussed applying the Charge-Exchange Oslo Method and validation strategies using fine-structure / detailed analyses.",
      "Highlighted connections to neutrino charge-current reaction-rate constraints relevant to neutrino physics."
    ],
    links: []
  },

  {
    id: "news-2024-09-15-npa-xi-dresden",
    date: "2024-09-15",
    title: "Poster + short talk at Nuclear Physics in Astrophysics XI (TU Dresden)",
    summary:
      "Presented my 4th Ph.D. poster (and a short talk) at NPA-XI (Sep 15–20, 2024), sharing progress on the Charge-Exchange Oslo Method for indirect neutron-capture constraints.",
    images: [],
    details: [
      "NPA-XI brought together a broad community across experiments, theory, and astrophysics (300+ participants).",
      "Discussed promising tests of the technique and the first applications using S800 + GRETINA coincidence capabilities in this context.",
      "Engaged with international experts and received valuable feedback to refine next steps."
    ],
    links: []
  },

  {
    id: "news-2024-09-08-npa-school-xi-stolpen",
    date: "2024-09-08",
    title: "Attended Nuclear Physics in Astrophysics School XI (Stolpen, Germany)",
    summary:
      "Attended the Nuclear Physics in Astrophysics School XI (Sep 8–15, 2024), selected among 30 participants worldwide, strengthening foundations across experiments, theory, and multi-messenger astrophysics.",
    images: [],
    details: [
      "Lectures covered experimental nuclear physics, reactions, nuclear theory, galactic archaeology, and multi-messenger astronomy.",
      "Hands-on activities included facility-focused training and visits (e.g., bremsstrahlung and underground lab environments).",
      "Grateful to mentors and to IReNA for continued travel support."
    ],
    links: []
  },

  {
    id: "news-2024-09-03-peradeniya-panelist",
    date: "2024-09-03",
    title: "Invited panelist: Career opportunities with a Physics degree (University of Peradeniya)",
    summary:
      "Invited as a panelist for the University of Peradeniya Physics Department orientation session on career opportunities with a Physics degree, sharing perspectives on graduate school and research pathways.",
    images: [],
    details: [
      "Joined a panel with professionals working across academia and industry in multiple countries.",
      "Discussed postgraduate opportunities, research careers, and diverse pathways for Physics graduates."
    ],
    links: []
  },

  {
    id: "news-2024-08-20-msu-graduate-school-travel-fellowship",
    date: "2024-08-20",
    title: "Awarded MSU Graduate School Travel Fellowship",
    summary:
      "Received an MSU Graduate School Travel Fellowship to support travel for presenting research at professional conferences.",
    images: [],
    details: [
      "Enables broader dissemination of research and stronger engagement with the scientific community.",
      "Grateful to Prof. Remco Zegers for support in reaching this milestone."
    ],
    links: []
  },

  {
    id: "news-2024-08-15-msc-completed",
    date: "2024-08-15",
    title: "Completed M.Sc. in Physics (GPA 4.0) during my Ph.D.",
    summary:
      "Completed my M.Sc. in Physics at Michigan State University with a cumulative GPA of 4.0 while continuing my Ph.D. work at FRIB.",
    images: [],
    details: [
      "Completed substantial theory coursework and research credits as part of the M.Sc. requirements.",
      "Reached this milestone just before the end of my second Ph.D. year (I did not participate in the graduation ceremony)."
    ],
    links: []
  },

  {
    id: "news-2024-07-14-ebss2024-argonne",
    date: "2024-07-14",
    title: "Poster presentation at the 21st Exotic Beam Summer School (EBSS2024, Argonne)",
    summary:
      "Presented my 3rd Ph.D. poster at EBSS2024 (July 14–20, 2024) at Argonne National Laboratory, combining lectures with hands-on rare-isotope beam activities.",
    images: [],
    details: [
      "Morning lectures from leading experts; afternoons focused on laboratory work and modern instrumentation.",
      "Strengthened practical experience with experimental techniques relevant to radioactive-beam science."
    ],
    links: []
  },

  {
    id: "news-2024-05-27-oslo-nld-gsf-workshop",
    date: "2024-05-27",
    title: "Poster at the 9th Workshop on Nuclear Level Density and Gamma Strength (Oslo)",
    summary:
      "Presented my second Ph.D. poster at the 9th Workshop on Nuclear Level Density and Gamma Strength (May 27, 2024) at the University of Oslo.",
    images: [],
    details: [
      "Excellent forum bringing experimentalists and theorists together around NLD and γSF frontiers.",
      "Gained valuable insights that directly informed my ongoing Ph.D. analysis."
    ],
    links: []
  },

  {
    id: "news-2024-05-10-phd-candidacy",
    date: "2024-05-10",
    title: "Advanced to Ph.D. candidacy (GPA 4.0 milestone)",
    summary:
      "Advanced to Ph.D. candidacy with a 4.0 GPA early in my program, marking a major milestone in my graduate journey at Michigan State University’s nuclear physics program.",
    images: [],
    details: [
      "Grateful for guidance from Prof. Remco Zegers and support from my committee: Artemis Spyrou, Chloe Hebborn, Laura Chomiuk, and Sophie Berkman.",
      "Thankful to the FRIB Charge-Exchange group and collaborators, and to my wife and mother for unwavering support."
    ],
    links: []
  },

  {
    id: "news-2023-11-24-frib-fellowship-graham",
    date: "2023-11-24",
    title: "Awarded FRIB Laboratory Fellowship and the Herbert T. Graham Scholarship",
    summary:
      "Received a Fellowship from the Facility for Rare Isotope Beams (FRIB) Laboratory and the Herbert T. Graham Scholarship at Michigan State University.",
    images: [],
    details: [
      "Recognition supporting continued research progress and graduate training.",
      "Grateful to mentors and colleagues for their support and encouragement."
    ],
    links: []
  },

  {
    id: "news-2023-09-01-irena-ukakuren-tokyo-poster",
    date: "2023-09-01",
    title: "First Ph.D. poster presentation at the inaugural IReNA-Ukakuren conference (Tokyo)",
    summary:
      "Presented my first Ph.D. research poster at the inaugural IReNA-Ukakuren conference in Tokyo, focused on advancing professional development in nuclear astrophysics and related areas.",
    images: [],
    details: [
      "An important early milestone in communicating my research to the international community.",
      "Grateful to my supervisor and mentors for guidance and support."
    ],
    links: []
  },

  {
    id: "news-2023-05-21-cenam-frontiers-irena-school",
    date: "2023-05-21",
    title: "First conference + first summer school: CeNAM Frontiers Meeting & IReNA Summer School",
    summary:
      "Participated in my first conference (CeNAM Frontiers in Nuclear Astrophysics Meeting 2023) and my first summer school (IReNA Frontiers in Nuclear Astrophysics 2023).",
    images: [],
    details: [
      "A formative experience for entering the broader nuclear astrophysics community.",
      "Grateful to the organizers for creating a welcoming and high-impact program."
    ],
    links: []
  },

  {
    id: "news-2023-05-16-started-gra-frib",
    date: "2023-05-16",
    title: "Started as a Graduate Research Assistant at FRIB (Charge-Exchange Nuclear Astrophysics)",
    summary:
      "Started a new position as a Graduate Research Assistant at the Facility for Rare Isotope Beams (FRIB) in the Charge-Exchange Nuclear Astrophysics group under Prof. Remco Zegers.",
    images: [],
    details: [
      "Beginning of my FRIB-based research program in experimental nuclear physics with astrophysical and weak-interaction applications.",
      "Excited to contribute to precision measurements, analysis, and modeling efforts within the collaboration."
    ],
    links: []
  },

  {
    id: "news-2023-05-07-bbc-documentary-interview",
    date: "2023-05-07",
    title: "Invited for a BBC documentary interview",
    summary:
      "Invited for a BBC documentary interview highlighting my academic journey and accomplishments—an important personal milestone that I am deeply grateful for.",
    images: [],
    details: [
      "Thankful to my schools and institutions that supported my path, including University of Peradeniya, Michigan State University, and FRIB.",
      "Grateful to the organizers and all who contributed to making this opportunity possible."
    ],
    links: []
  },

  {
    id: "news-2022-08-27-started-phd-msu-frib",
    date: "2022-08-27",
    title: "Started my Ph.D. in Nuclear Physics at Michigan State University / FRIB",
    summary:
      "Began my Ph.D. journey in Nuclear Physics at Michigan State University, based at the Facility for Rare Isotope Beams (FRIB).",
    images: [],
    details: [
      "Started graduate training within a leading research environment for rare-isotope science.",
      "Focused on experimental nuclear physics with applications to nuclear astrophysics and neutrino physics."
    ],
    links: []
  },

  {
    id: "news-2022-08-25-uop-bsc-top-of-batch",
    date: "2022-08-25",
    title: "Graduated B.Sc. (Honours) in Physics — top of the batch with multiple medals and awards",
    summary:
      "Graduated from the University of Peradeniya with First Class Honours in Physics as the top of the batch (Overall GPA 3.90; Physics GPA 3.93; Mathematics GPA 4.00), receiving the full set of departmental medals and major prizes.",
    images: [],
    details: [
      "Received multiple medals/prizes including two gold medals and several departmental and university awards (including Dean’s List recognition across all four years).",
      "Selected into five highly ranked U.S. Ph.D. programs in Nuclear/Particle Physics with full scholarships—without standardized tests—based on academic record and recommendations.",
      "Chose Michigan State University’s Nuclear Physics Ph.D. program for graduate studies."
    ],
    links: []
  }
];

// Research projects
export const projects = [
  {
    id: "oslomethod",
    title: "Experimental Extraction of Nuclear Statistical Properties",
    timeframe: "Published + Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/statistical.jpg",
    tags: ["Oslo Method", "CE-Oslo Method", "NLD", "γSF"],
    summary:
      "Extracting nuclear statistical properties with the Oslo Method to provide experimental constraints and reduce uncertainties in reaction modeling.",
    bullets: [
      "Targets key statistical inputs in nuclei where experimental constraints are scarce or unavailable",
      "Performs experiments using transfer and charge-exchange (CE) reactions across multiple systems",
      "Extracts nuclear level densities (NLDs) and γ-ray strength functions (γSFs) using Oslo-method techniques",
      "Develops and applies the CE-Oslo method to extend Oslo-type extractions to charge-exchange reactions"
    ],
    links: []
  },
  {
    id: "neutron",
    title: "Indirect Constraints on Neutron-Capture Reaction Rates",
    timeframe: "Published + Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/neutron.webp",
    tags: ["Hauser–Feshbach", "TALYS", "NLD", "γSF"],
    summary:
      "Constraining astrophysical (n,γ) rates by incorporating experimentally extracted statistical inputs into Hauser–Feshbach calculations.",
    bullets: [
      "Focuses on neutron-capture rates relevant to nucleosynthesis and cosmochronometry",
      "Combines experimentally extracted NLD and γSF with model systematics to reduce reaction-rate uncertainties",
      "Performs Hauser–Feshbach calculations using TALYS and evaluates the impact of nuclear-input variations"
    ],
    links: []
  },
  {
    id: "astro",
    title: "Supernova Post-Processing Nucleosynthesis Modeling",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU) • Visiting Scholar (University of Oslo)",
    image: "/images/supernova.webp",
    tags: ["NuGrid", "PPN", "WinNet", "p-process"],
    summary:
      "Simulating nucleosynthesis in core-collapse and thermonuclear supernova environments using experimentally constrained reaction rates in post-processing networks.",
    bullets: [
      "Propagates experimentally constrained neutron-capture rates into nucleosynthesis calculations",
      "Runs post-processing simulations using NuGrid (PPN) and WinNet across CCSN and SNe Ia trajectories",
      "Quantifies how nuclear-physics constraints shift predicted p-process yields and addresses key model discrepancies"
    ],
    links: []
  },
  {
    id: "mda",
    title: "Extraction of Gamow–Teller and Fermi Strengths via Charge-Exchange Reactions",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/charge_exchange.png",
    tags: ["Charge-Exchange", "Multipole Decomposition Analysis", "DWBA", "Gamow–Teller"],
    summary:
      "Extracting Gamow–Teller and Fermi transition strengths from charge-exchange data using multipole decomposition analysis (MDA) to reduce theoretical uncertainties.",
    bullets: [
      "Targets weak-interaction nuclear inputs relevant to neutrino physics and nuclear astrophysics",
      "Performs charge-exchange measurements and constructs angular-distribution observables",
      "Applies MDA with DWBA-based templates to isolate isovector transition components",
      "Extracts Gamow–Teller and Fermi strengths for use in neutrino–nucleus cross-section calculations"
    ],
    links: []
  },
  {
    id: "neutrino",
    title: "Indirect Constraints on Charged-Current Neutrino–Nucleus Cross Sections",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/neutrino.png",
    tags: ["Gamow–Teller", "Fermi", "Charged-Current", "MARLEY"],
    summary:
      "Constraining charged-current neutrino–nucleus cross sections using experimentally extracted transition strengths to improve predictions for detectors and astrophysical applications.",
    bullets: [
      "Uses experimentally extracted Gamow–Teller and Fermi strengths as key nuclear inputs",
      "Computes charged-current neutrino–nucleus cross sections (including low-momentum-transfer limits) using MARLEY",
      "Benchmarks and updates cross-section inputs for applications in neutrino detection and astrophysical modeling"
    ],
    links: []
  },
  {
    id: "lenda",
    title: "LENDA Detector Upgrade and Performance Testing",
    timeframe: "Ongoing",
    role: "Graduate Research Assistant (FRIB/MSU)",
    image: "/images/lenda.jpg",
    tags: ["Instrumentation", "Neutrons", "Scintillators"],
    summary:
      "Contributing to the LENDA upgrade through detector testing and performance characterization to improve neutron-detection capabilities for upcoming experiments.",
    bullets: [
      "Leads hands-on testing and evaluation of detector components and scintillator performance",
      "Supports commissioning and readiness for experimental campaigns at FRIB"
    ],
    links: []
  }
];


export const publications = [
  {
    title: "Solving the puzzle of the cosmochronometer 92Nb production using the Oslo method",
    venue: "TBD",
    status: "Ongoing",
    links: []
  },
  {
    title:
      "Experimental study on supernova neutrino-induced nucleosynthesis of 92Nb",
    venue: "Physical Review Letters (PRL)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Charged-current neutrino-208Pb cross sections via the 208Pb(3He,t) charge-exchange reaction",
    venue: "Physical Review C (PRC)",
    status: "Ongoing",
    links: []
  },
  {
    title: "Extraction of neutron capture cross sections on 92Zr using the charge-exchange Oslo method",
    venue: "N.D. Pathirana et. al (2026)",
    status: "Published",
    links: [{ label: "Phys. Rev. C 113, 015801", href:"https://doi.org/10.1103/qdsh-ygry"}]
  },
  {
    title: "Single-nucleon transfer unveils NiCu cycle in astrophysical X-ray bursts",
    venue: "O'Shea et. al (2026)",
    status: "Submitted",
    links: [{ label: "Physical Review Letters (PRL)", href: "https://doi.org/10.21203/rs.3.rs-7660136/v1" }]
  },
  {
    title: "Determination of proton and neutron contributions to the 0+gs →2+1 excitations in 42Si and 44S using inelastic proton scattering in inverse kinematics and intermediate energy Coulomb excitation",
    venue: "L.A. Riley et al. (2025)",
    status: "Published",
    links: [{ label: "Phys. Rev. C 112, 014331", href:"https://doi.org/10.1103/b8xj-ycqk"}]
  },
  {
    title: "Construction of an Ionization Chamber to Detect Alpha and Beta Particles",
    venue: "N.D. Pathirana et. al (2021)",
    status: "Published",
    links: [{ label: "Research Congress (RESCON 2021)", href:"http://www.pgis.pdn.ac.lk/rescon2021/abstracts/PS/134.pdf"}]
  },
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
    timeframe: "Aug 2021 - Jul 2022",
    items: [
      "Instructor in charge: Nuclear Physics Laboratory ",
      "Instructor in charge: Advanced Level Physics Laboratory",
      "Tutor in charge: PH 430 — Quantum Mechanics I",
      "Tutor in charge: PH 431 — Quantum Mechanics II",
      "Tutor in charge: PH 458 — General Relativity"
    ]
  }
];

export const awards = [
  "Galonsky International Travel Award",
  "Norwegian Nuclear Research Center Scholarship",
  "FRIB Fellowships",
  "Herbert T. Graham Scholarship",
  "Graduate School Travel Fellowship",
  "Prof. Lakshman Dissanayake Gold Medal for Excellence in Physics",
  "Prof. George Dissanaike Memorial Gold Medal in Physics",
  "Dr. C.A. Hevavitharana Memorial Prize in Physics",
  "Prof. A.W. Wolfendale Prize in Physics",
  "University of Peradeniya Award for Academic Excellence",
  "Eramudugolla Dunuwila Prize in Mathematics",
  "Merit Award in SURS Symposium"
];

export const service = [
  "Galonsky International Travel Award"
];



export const contactForm = {
  endpoint: "https://formspree.io/f/mqedkpqz",
  emailTo: "devanes1@msu.edu",
  subjectPrefix: "Website message"
};
