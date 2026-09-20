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
    updated: "2026-09-20",         // shown as "REV" in the footer — bump it when you edit
  },

  /* ---------- HERO (top of page) ---------------------------------- */
  hero: {
    // Small line above your name. Leave "" to hide it.
    eyebrow: "",

    // Headshot beside your name, shown as a circle. Put the file in assets/; use photo: "" to hide it.
    // photoPosition picks which part of the photo stays in the circle ("50% 30%" nudges the crop up).
    photo: "assets/headshot.jpg",
    photoAlt: "Headshot of Dhyan Soni",
    photoPosition: "50% 50%",

    tagline: "Building toward Canada's sovereign aerospace capability.",
    // Paragraph under the tagline. Leave "" to hide it.
    intro: "",

    // A third button beside "Get in touch" and "See the work". It opens the link in a new tab.
    // Change the label or the link freely; leave url: "" to hide the button.
    extraButton: { label: "Hear me speak", url: "https://www.youtube.com/watch?v=pYqtLODlbcM" },

    // The numbers box. It is hidden while stats is empty. To bring it back, fill it in, for example:
    //   stats: [
    //     { value: "12,327", unit: "ft",      label: "Apogee · Goldeneye, LC 2026" },
    //     { value: "1.17",   unit: "Mach",    label: "Max velocity" },
    //     { value: "84",     unit: "members", label: "Team led" },
    //     { value: "4",      unit: "rockets", label: "Competition-level builds" },
    //   ],
    statsTitle: "Flight & team data",
    statsNote: "TFRA · 2024–26",
    stats: [],
  },

  /* ---------- TYPING LINE (between the top of the page and Work) --- */
  typing: {
    show: true,
    // Typed out one after another, on a loop. Add, remove or reorder lines freely.
    lines: [
      "I design rockets.",
      "I lead teams.",
      "I fly planes.",
      "I build cool sh*t.",
    ],
    speed: 70,     // milliseconds per letter: smaller = faster typing
    hold: 1800,    // how long a finished line stays on screen before it is erased (milliseconds)
  },

  /* ---------- WORK ------------------------------------------------- */
  work: {
    show: true,
    title: "Work",
    note: "Rocketry & aerospace projects",
    moreTitle: "More projects",   // heading of the section under Work that holds every other project

    projects: [
      // featured: true  →  the big block in the Work section. It stays put.
      // Every other project becomes a card in the More projects section right under it (a swipeable strip, in the
      // order listed). A project that has facts, highlights or links gets a "See more" arrow on its card, and those
      // open in a pop-up.
      {
        featured: true,
        kicker: "Launch Canada 2026",
        title: "Goldeneye",
        summary:
          "Turner Fenton Rocketry's entry at Launch Canada 2026, launched to an apogee of 12,327 ft and a maximum velocity of Mach 1.17. " +
          "This rocket pushed the team to its absolute limits, and expanded our horizons further than we'd ever guessed. " +
          "From designing custom instrumentation, taming explosive charges, and assembling microscopic electronics, " +
          "Goldeneye was an incredibly complex, risky, and challenging endeavour.",

        // Label / value pairs shown beside the summary. A fact can also be clickable:
        //   pdf: "assets/x.pdf"   opens that PDF in a reader window on the page (no download)
        //   url: "https://..."    opens a normal link in a new tab
        facts: [
          { label: "Event",         value: "Launch Canada 2026" },
          { label: "My scope",      value: "Hardware · Software · Project management" },
          { label: "Documentation", value: "145-page design report",
            pdf: "assets/goldeneye/goldeneye-final-design-report.pdf", pdfTitle: "Goldeneye Final Design Report" },
        ],

        // VIDEO: plays beside the summary. Put the .mp4 in assets/goldeneye/.
        //   ratio  = width / height of the video ("9 / 16" is a phone video held upright; "16 / 9" is widescreen)
        //   poster = optional still image shown before it plays (e.g. "assets/goldeneye/poster.jpg")
        //   Leave src: "" to hide the video.
        video: {
          src: "assets/goldeneye/launch.mp4",
          ratio: "9 / 16",
          poster: "assets/goldeneye/launch-poster.jpg",
          caption: "Flight video",
        },

        // PHOTO CAROUSEL: to add a photo, copy one line, change the file name, and describe it.
        //   src     = file in assets/goldeneye/ (about 1400 px on the long side is plenty)
        //   alt     = what the photo shows, for screen readers
        //   caption = short label under the photo (optional, "" for none)
        // Photos appear in the order listed. Leave the list empty ([]) to hide the carousel.
        gallery: [
          { src: "assets/goldeneye/01-launch.jpg",           caption: "Goldeneye lifting off",
            alt: "Goldeneye lifting off, trailing a tall column of white smoke above the tree line" },
          { src: "assets/goldeneye/02-team.jpg",             caption: "The team at Launch Canada 2026",
            alt: "Seven team members posing together at Launch Canada 2026, one holding a red rocket nose cone" },
          { src: "assets/goldeneye/03-tracking.jpg",         caption: "Tracking a flight from the field",
            alt: "Team members on the launch field looking up, one holding a Yagi antenna and others holding phones and a radio" },
          { src: "assets/goldeneye/04-on-the-rail.jpg",      caption: "On the launch rail",
            alt: "A red rocket beside a launch rail, seen from below against a cloudy sky" },
          { src: "assets/goldeneye/05-prep-table.jpg",       caption: "Pre-flight prep at the launch site",
            alt: "A rocket lying on a table under a tent at the launch site, with paperwork and a red tag" },
          { src: "assets/goldeneye/06-fin-fitting.jpg",      caption: "Fin and aft fitting on the airframe",
            alt: "A dark composite airframe on a workbench with a green fiberglass fin and an aluminum ring at the aft end" },
          { src: "assets/goldeneye/07-aluminum-part.jpg",    caption: "Machined aluminum part",
            alt: "A tapered, machined aluminum part with a threaded end lying on a wooden workbench" },
          { src: "assets/goldeneye/08-avionics-sled.jpg",    caption: "Avionics sled",
            alt: "An avionics sled: threaded rods and fiberglass plates holding a small battery and a green terminal block" },
          { src: "assets/goldeneye/09-avionics-board.jpg",   caption: "Avionics circuit board",
            alt: "A green avionics circuit board with a microcontroller, an SD card slot and several connectors" },
          { src: "assets/goldeneye/10-gps-tracker.jpg",      caption: "GPS tracker and support boards",
            alt: "A GPS tracker with its antenna beside two small green circuit boards on a black surface" },
          { src: "assets/goldeneye/11-airframe-hardware.jpg", caption: "Hardware detail on the airframe",
            alt: "A close-up of a metal fitting with a hex-socket screw on a red composite tube" },
        ],

        // A single photo instead of the video (used only when there is no video):
        //   image: "assets/some-photo.jpg", imageAlt: "...", imageRatio: "4 / 5", imagePosition: "50% 0%"
        image: "",
        imageAlt: "",

        // Optional buttons under the summary (none right now: the report opens from the "Documentation" fact).
        // A button can open a link:        { label: "Read the paper", url: "https://example.com" }
        // or open a PDF in the reader:     { label: "Design report", pdf: "assets/goldeneye/goldeneye-final-design-report.pdf" }
        links: [],
      },

      {
        kicker: "Launch Canada 2025",
        title: "Spectre",
        summary:
          "Turner Fenton Rocketry's entry at Launch Canada 2025, launched to an apogee of 10,147 ft and a maximum velocity of Mach 0.95. " +
          "The flight made the team the first Canadian high school to launch and recover a competition rocket.",
        facts: [
          { label: "Event",        value: "Launch Canada 2025 · Timmins, ON" },
          { label: "Launched",     value: "August 19, 2025" },
          { label: "Apogee",       value: "10,147 ft (3,092 m)" },
          { label: "Max velocity", value: "Mach 0.95 (1,148 km/h)" },
          { label: "Result",       value: "11th in Basic Launch" },
          { label: "Recovery",     value: "Two sequential parachutes" },
          { label: "My scope",     value: "Team lead · Avionics" },
        ],
        highlights: [
          "Competed against teams from 30 universities and placed 11th in the Basic Launch category.",
          "Flew for just over a minute before its two sequential parachutes deployed, and was recovered about three hours later, suspended in the boreal forest.",
          "The third rocket the team launched that year, after two Stallion flights.",
        ],
        tags: ["Avionics", "Parachute recovery", "Launch Canada"],
        links: [
          { label: "Peel District School Board release", url: "https://www.peelschools.org/news/NEWSRELEASETurnerFentonSecondarySchoolstudentsmakehistorywithSpectrerocketlaunch" },
          { label: "inBrampton coverage", url: "https://www.insauga.com/brampton-rocket-club-students-first-in-canada-to-compete-against-universities/" },
          { label: "Launch Canada results", url: "https://www.launchcanada.org/lc-2025-highlights" },
        ],
      },

      {
        kicker: "IB Physics IA · 2024–25",
        title: "Wind tunnel",
        summary:
          "Designed a small wind tunnel to measure the lift coefficient of a 3D-printed NACA 6412 airfoil, " +
          "with a smoke system to show whether the air flows smoothly or turbulently.",
        facts: [
          { label: "Airfoil",      value: "NACA 6412 · 0.15 m chord" },
          { label: "Contraction",  value: "5:1 ratio · 12° angle" },
          { label: "Test section", value: "0.018 m² · 8% blockage" },
          { label: "Fan",          value: "12 in · 5 speeds" },
          { label: "Repeats",      value: "5 trials per fan speed" },
        ],
        highlights: [
          "Lift follows F = ½ρv²·A·CL, so plotting lift against airspeed squared gives a straight line whose slope yields the lift coefficient.",
          "A honeycomb of straws and a mesh screen straighten the air before a contraction speeds it into the test section; a diffuser slows it on the way out.",
          "Smoke from mineral oil vaporized by a nichrome wire is drawn in through a valve by the tunnel's low pressure, and shows laminar versus turbulent flow through an acrylic window.",
          "Lift is read as an apparent loss of mass on a scale under the airfoil (F = 9.81 × Δm), with an anemometer downstream of the wing measuring airspeed.",
          "Sized the airfoil (0.15 m chord, 0.08 m span) to keep blockage at 8%, under the 10% limit for clean flow.",
          "Air density comes from the day's temperature and METAR pressure, and the uncertainty from repeated trials carries through to error bars and max/min fit lines.",
        ],
        tags: ["Aerodynamics", "Wind tunnel design", "3D printing", "Experimental method"],
      },

      {
        kicker: "MYP Personal Project · 2024",
        title: "2-axis TVC mount",
        summary:
          "A 3D-printed, servo-driven thrust vector control gimbal for model rockets, " +
          "designed over three Fusion 360 iterations and steered by an Arduino-compatible board.",
        facts: [
          { label: "Axes",           value: "2 · servo-driven" },
          { label: "Range achieved", value: "≈50° X · 17.5° Y" },
          { label: "Target",         value: "±15° on each axis" },
          { label: "Controller",     value: "Elegoo Uno" },
          { label: "Iterations",     value: "3 in Fusion 360" },
          { label: "Power",          value: "9 V battery" },
        ],
        highlights: [
          "Modelled on the 3D-printed TVC mount that Joe Barnard of BPS.Space flies on his rockets.",
          "Restored an old 3D printer to make the parts, fixing its glass bed's adhesion with masking tape and a glue-stick layer.",
          "Three iterations: a one-axis prototype, a more compact elliptical ring, then an added outer ring for the second axis, which printed correctly on the first try.",
          "Drilled ultra-fine holes through nails to make the pushrods that turn each servo's rotation into linear motion at the gimbal.",
          "Wired both servos to the Uno on a breadboard, soldered a 9 V battery for portable power, and learned PWM servo control.",
          "Wrote the Arduino (C/C++) code: calibrated each servo's neutral position (X 85°, Y 65°), then a synchronized dual-axis routine and a circular-motion program built from a mathematical model of the mount's positions.",
          "Dropped a planned Bluetooth controller and custom PCB after research showed the mount didn't need them, and planned the work in Notion.",
          "Next steps identified: more Y-axis range (mount its servo lower), a lighter and more compact design, and better print quality.",
        ],
        tags: ["Fusion 360", "3D printing", "Arduino", "Servo control", "Mechatronics"],
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
      // (Add  facts: [{ label: "Apogee", value: "10,000 ft" }]  and a longer  highlights  list to give the card a "See more" pop-up.)
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

  /* ---------- EXPERIENCE ------------------------------------------ */
  experience: {
    show: true,
    title: "Experience",
    items: [
      {
        role: "Propulsion Member",
        org: "Waterloo Rocketry",
        place: "Waterloo, ON",
        dates: "2026 – Present",
        bullets: [
          "Currently leading future development of Waterloo Rocketry technology demonstrators.",
          "Casted solid propellant igniters for current liquid engines.",
          "Redesigned and iterated upon ground support infrastructure for fueling.",
        ],
      },
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
          "Ensured documentation of the design cycle, culminating in a 145-page report for Goldeneye.",
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
        role: "Drafting Engineer",
        org: "Launch Canada Turbopump Project",
        place: "",
        dates: "Dec 2024 – Present",
        bullets: [
          "Created engineering drawings from complex turbomachinery components on OnShape.",
          "Maintained version control and component databases on Excel.",
          "Designed promotional material and information packages for the development program, using Canva.",
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

    // The pop-up that the "Get in touch" button opens. It lists your email, LinkedIn
    // and résumé (whichever are set below), plus this heading and note.
    dialogTitle: "Get in touch",
    dialogNote: "The fastest way to reach me is email.",

    // The email address is assembled by the page at load time, which keeps it
    // out of the plain HTML that spam scrapers read. Leave "" to hide.
    email: "d22soni@uwaterloo.ca",
    linkedin: "https://linkedin.com/in/dhyan-soni-720813310",

    // Optional: a PDF of your résumé WITHOUT your phone number.
    // Put it in assets/ and set e.g.  resume: "assets/Dhyan_Soni_Resume.pdf"
    resume: "",
  },
};
