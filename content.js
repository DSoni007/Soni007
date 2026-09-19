/* =====================================================================
   CONTENT.JS  —  the ONLY file you need to edit for day-to-day changes.
   ---------------------------------------------------------------------
   Everything on the site is generated from this file.

   THE RULES (they're simple):
   1. Text goes between "double quotes".
   2. Every item in a list ends with a comma  ,
   3. To hide a whole section, set  show: false
   4. To add a project / job / skill group: copy an existing { ... }
      block, paste it right after the last one, and change the text.
   5. Save, refresh the page. If something looks broken, you've almost
      certainly missed a comma or a quote — the page will tell you.

   Lines starting with // are notes to you. The site ignores them.
   ===================================================================== */

window.PORTFOLIO = {

  /* ---------- SITE-WIDE ------------------------------------------- */
  site: {
    name: "Dhyan Soni",
    shortName: "D. Soni",          // shown top-left and in the footer
    location: "Toronto, ON",
    updated: "2026-09",            // shown as "REV" in the footer — bump it when you edit
  },

  /* ---------- HERO (top of page) ---------------------------------- */
  hero: {
    eyebrow: "Mechanical Engineering · University of Waterloo · Toronto, ON",
    tagline: "Building toward Canada's sovereign aerospace capability.",
    intro:
      "I founded the Turner Fenton Rocketry Association and led it to become the first high school team at Launch Canada. " +
      "Goldeneye flew to 12,327 ft at Mach 1.17. I design, build and document flight hardware, from CAD to the shop floor.",

    // The numbers box on the right. Add / remove rows freely (4 looks best).
    statsTitle: "Flight & team data",
    statsNote: "TFRA · 2024–26",
    stats: [
      { value: "12,327", unit: "ft",      label: "Apogee · Goldeneye, LC 2026" },
      { value: "1.17",   unit: "Mach",    label: "Max velocity" },
      { value: "84",     unit: "members", label: "Team led" },
      { value: "4",      unit: "rockets", label: "Competition-level builds" },
    ],
  },

  /* ---------- WORK ------------------------------------------------- */
  work: {
    show: true,
    title: "Work",
    note: "Turner Fenton Rocketry Association",

    projects: [
      // featured: true  →  big block.  Leave it out for a normal card.
      {
        featured: true,
        kicker: "Launch Canada 2026",
        title: "Goldeneye",
        summary:
          "Turner Fenton Rocketry's entry at Launch Canada 2026, launched to an apogee of 12,327 ft and a maximum velocity of Mach 1.17. " +
          "I engineered its supersonic pitot tube, avionics and aluminum boat tail, and led the team that documented the full design cycle in a 144-page report.",

        // Label / value pairs shown beside the summary.
        facts: [
          { label: "Event",         value: "Launch Canada 2026" },
          { label: "My scope",      value: "Pitot tube · Avionics · Boat tail" },
          { label: "Documentation", value: "144-page design report" },
        ],

        // Photo: put the file in the assets/ folder and use its name here.
        // Leave image: "" for no photo.
        image: "assets/goldeneye-launch.jpg",
        imageAlt: "Goldeneye lifting off, trailing a tall column of white smoke above the tree line",
        // Optional crop controls (these are the values in use).
        //   imageRatio    = width / height of the frame, e.g. "4 / 5" (portrait) or "16 / 10" (landscape)
        //   imagePosition = which part stays in frame: "50% 0%" top centre, "50% 50%" middle
        imageRatio: "4 / 5",
        imagePosition: "50% 0%",

        // Optional buttons, e.g. { label: "Design report (PDF)", url: "assets/goldeneye-report.pdf" }
        links: [],
      },

      {
        kicker: "Instrumentation",
        title: "Supersonic pitot tube",
        summary:
          "Designed and manufactured an aluminum-carbon fiber pitot tube capable of functioning in supersonic flight.",
        highlights: [],
        tags: ["Aluminum", "Carbon fiber", "Supersonic"],
        image: "", imageAlt: "", links: [],
      },

      {
        kicker: "Aerodynamics",
        title: "Aluminum boat tail",
        summary:
          "Engineered a proprietary aluminum boat tail that improved Goldeneye's flight performance by 7–10%.",
        highlights: [],
        tags: ["Aluminum", "Design-for-manufacturability", "Flight performance"],
        image: "", imageAlt: "", links: [],
      },

      {
        kicker: "Avionics",
        title: "Flight avionics",
        summary:
          "Designed and wired the avionics systems for three competition rockets: Stallion, Spectre and Goldeneye.",
        highlights: [],
        tags: ["Avionics", "Wiring", "3 flight vehicles"],
        image: "", imageAlt: "", links: [],
      },

      {
        kicker: "Manufacturing",
        title: "Composite airframes",
        summary:
          "Constructed four competition-level rockets using industry-standard composite manufacturing processes.",
        highlights: [],
        tags: ["Composite fabrication", "Wet layups", "4 flight vehicles"],
        image: "", imageAlt: "", links: [],
      },

      // TEMPLATE: copy the block below, delete the "//" at the start of each
      // line, paste it above this note, and fill it in.
      //
      // {
      //   kicker: "Category",
      //   title: "Project name",
      //   summary: "One or two sentences on what it is and what you did.",
      //   highlights: ["Optional bullet with a number in it", "Another bullet"],
      //   tags: ["SolidWorks", "CNC"],
      //   image: "assets/my-photo.jpg",
      //   imageAlt: "Describe the photo for screen readers",
      //   links: [{ label: "Write-up", url: "https://example.com" }],
      // },
    ],
  },

  /* ---------- ABOUT ------------------------------------------------ */
  about: {
    show: true,
    title: "About",
    paragraphs: [
      "I got into aerospace by asking how high a high school team could fly. The rocketry association I founded from nothing became the first high school team at Launch Canada, and crossing that finish line only sharpened the question.",
      "Since then the work has moved between CAD and the shop floor: engineering drawings and CMM inspection at Dellcom Aerospace, sheet-metal and composite repair at Venture Aviation, and flying gliders as a licensed Transport Canada pilot. Each taught me the same thing from a different side. Precision on paper only counts if it survives contact with the hardware, and with the people who build it.",
    ],
  },

  /* ---------- EXPERIENCE ------------------------------------------ */
  experience: {
    show: true,
    title: "Experience",
    items: [
      {
        role: "Founder & President",
        org: "Turner Fenton Rocketry Association",
        place: "Brampton, ON",
        dates: "Feb 2024 – Aug 2026",
        bullets: [
          "Made history as the first high school to compete at Canada's premier rocketry competition, Launch Canada.",
          "Launched Goldeneye at LC 2026, reaching an apogee of 12,327 feet and a max velocity of Mach 1.17.",
          "Designed and manufactured an aluminum-carbon fiber pitot tube capable of functioning in supersonic flight.",
          "Constructed four competition-level rockets using industry-standard composite manufacturing processes.",
          "Designed and wired the avionics systems for three competition rockets (Stallion, Spectre, Goldeneye).",
          "Engineered a proprietary aluminum boat tail, improving the flight performance of Goldeneye by 7–10%.",
          "Led a team of 84 members through technical development while managing financials, hiring, onboarding, outreach, and community engagement.",
          "Ensured documentation of the design cycle, culminating in a 144-page report for Goldeneye.",
        ],
      },
      {
        role: "Mechanical Engineering Intern",
        org: "Dellcom Aerospace",
        place: "Concord, ON",
        dates: "Jul 2025 – Aug 2025",
        bullets: [
          "Prepared engineering drawings from client 3D models in CATIA using ASME Y14.5 standards.",
          "Verified fabrication and post-processing methods for machined components supplied to Tier 1 aerospace manufacturers (Bombardier, De Havilland, Lockheed Martin).",
          "Created and maintained manufacturing travellers in an Epicor ERP system, ensuring compliance with ISO 9001 and AS9100-D QMS standards.",
          "Audited physical part geometries against 3D CAD models in CATIA and prepared manufacturing travellers for Q-400 and Global Series aircraft components.",
          "Operated 3-axis CNC milling machinery and CMM equipment (ZEISS CALYPSO).",
          "Performed quality assurance on machined components using standard shop QA equipment (calipers, micrometers, dial gauges, shadowgraphs, etc.).",
        ],
      },
      {
        role: "Aircraft Maintenance Assistant",
        org: "Venture Aviation",
        place: "Mississauga, ON",
        dates: "May 2025 – Aug 2026",
        bullets: [
          "Performed Transport Canada-approved maintenance, overhauls, and repairs on commercial aircraft.",
          "Executed sheet-metal riveting, composite repairs, and refinishing to manufacturer specifications.",
          "Maintained compliance documentation and airworthiness logs to strict Transport Canada regulatory standards.",
        ],
      },
      {
        role: "Glider Pilot",
        org: "Air Cadet Gliding Program, Transport Canada",
        place: "",
        dates: "Aug 2024 – Present",
        bullets: [
          "Licensed Glider Pilot (Transport Canada), with 24 hours as Pilot-in-Command (PIC).",
          "Certified by the Air Cadet Program of Canada as a Familiarization Pilot.",
          "Completed the Transport Canada certification exam with a score of 96%.",
          "Proficient in elementary aircraft maintenance, inspection, and technical/journey log documentation.",
        ],
      },
    ],
  },

  /* ---------- SKILLS ----------------------------------------------- */
  skills: {
    show: true,
    title: "Skills",
    groups: [
      { label: "CAD & Design",  items: ["SolidWorks", "OnShape", "Fusion 360", "CATIA", "GD&T", "Engineering Drawings", "Design-for-Manufacturability", "OpenRocket"] },
      { label: "Manufacturing", items: ["Composite Fabrication", "Wet Layups", "CNC Operation", "CMM Operation (ZEISS CALYPSO)"] },
      { label: "Quality",       items: ["Shadowgraph / Caliper / Micrometer Inspection"] },
      { label: "Electrical",    items: ["Circuit Assembly", "Soldering (SMT/THT)", "PCB Design (Autodesk Eagle, KiCAD)"] },
      { label: "Programming",   items: ["Python", "Arduino", "C++"] },
    ],
  },

  /* ---------- EDUCATION -------------------------------------------- */
  education: {
    show: true,
    title: "Education",
    items: [
      {
        school: "University of Waterloo",
        detail: "Bachelor of Applied Science (BASc), Mechanical Engineering",
        dates: "Expected graduation 2031",
        note: "",
      },
      {
        school: "Turner Fenton Secondary School",
        detail: "International Baccalaureate (IB) Diploma Program",
        dates: "Graduated Jun 2026",
        note: "97.8% average (4.0 GPA)",
      },
    ],
  },

  /* ---------- CONTACT ---------------------------------------------- */
  contact: {
    show: true,
    title: "Contact",
    blurb: "Open to mechanical engineering co-op and internship opportunities in aerospace. The fastest way to reach me is email.",

    // The email address is assembled by the page at load time, which keeps it
    // out of the plain HTML that spam scrapers read. Leave "" to hide.
    email: "d22soni@uwaterloo.ca",
    linkedin: "https://linkedin.com/in/dhyan-soni-720813310",

    // Optional: a PDF of your résumé WITHOUT your phone number.
    // Put it in assets/ and set e.g.  resume: "assets/Dhyan_Soni_Resume.pdf"
    resume: "",
  },
};
