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
    updated: "2026-10-11",         // shown as "REV" in the footer — bump it when you edit
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

    // THE FLIGHT RECORD: one card per rocket, right under the featured project. Edit the numbers here.
    //   image    = a photo, kept in assets/fleet/ (a photo shown here shouldn't also be in the Goldeneye carousel)
    //   position = which part of the photo stays in the crop ("50% 0%" keeps the top, "50% 100%" the bottom)
    //   result   = leave "" and that row is simply hidden
    // Set  show: false  to hide the whole block.
    fleet: {
      show: true,
      kicker: "TFRA flight record",
      title: "4 rockets. 2 years.",
      note: "Proven, rapid, groundbreaking development pace.",
      rockets: [
        { name: "Goldeneye", launched: "August 2026",  apogee: "12,327 ft", speed: "Mach 1.17", result: "7th place",
          image: "assets/fleet/goldeneye.jpg", position: "50% 60%",
          alt: "Goldeneye lifting off, trailing a tall column of white smoke above the tree line" },
        { name: "Spectre",   launched: "August 2025",  apogee: "10,147 ft", speed: "Mach 0.95", result: "11th place",
          image: "assets/fleet/spectre.jpg", position: "50% 75%",
          alt: "Four team members standing beside the orange Spectre rocket" },
        { name: "Stallion",  launched: "March 2025",   apogee: "3,005 ft",  speed: "Mach 0.6",  result: "",
          image: "assets/fleet/stallion.jpg", position: "50% 55%",
          alt: "Team members crouched at the base of the Stallion rocket on a flat, muddy launch field" },
        { name: "Vanguard",  launched: "January 2025", apogee: "1,100 ft",  speed: "Mach 0.3",  result: "",
          image: "assets/fleet/vanguard.jpg", position: "50% 55%",
          alt: "Two people on a snowy field handling the Vanguard rocket" },
      ],
    },

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
          { label: "Launched",      value: "August 2026" },
          { label: "Result",        value: "7th place" },
          { label: "My scope",      value: "Everything: hardware, software and project management" },
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
        // A photo that already appears in the portfolio section (the flight record or a project pop-up) is NOT repeated here.
        gallery: [
          { src: "assets/goldeneye/02-team.jpg",             caption: "The team at Launch Canada 2026",
            alt: "Seven team members posing together at Launch Canada 2026, one holding a red rocket nose cone" },
          { src: "assets/goldeneye/03-tracking.jpg",         caption: "Tracking a flight from the field",
            alt: "Team members on the launch field looking up, one holding a Yagi antenna and others holding phones and a radio" },
          { src: "assets/goldeneye/05-prep-table.jpg",       caption: "Pre-flight prep at the launch site",
            alt: "A rocket lying on a table under a tent at the launch site, with paperwork and a red tag" },
          { src: "assets/goldeneye/08-avionics-sled.jpg",    caption: "Avionics sled",
            alt: "An avionics sled: threaded rods and fiberglass plates holding a small battery and a green terminal block" },
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

      // figures = photos, CAD and drawings shown in the pop-up (a project needs facts, highlights, figures or links to get one).
      //   ratio    = crop shape ("4 / 3"); leave it out to show the whole picture, uncropped
      //   position = which part stays in the crop ("50% 0%" keeps the top)
      //   wide: true  makes the picture span the full width of the pop-up (good for drawings)
      // The cards run in the order listed here.

      {
        kicker: "Instrumentation",
        title: "Supersonic pitot tube",
        summary:
          "Designed and manufactured an aluminum-carbon fiber pitot tube capable of functioning in supersonic flight. " +
          "In flight it read Mach 1.17, within 0.85% of the flight computer's own estimate.",
        image: "assets/projects/pitot-tube.jpg", imageAlt: "A machined aluminum pitot tube with a threaded end and a tapered shoulder, lying on a wooden workbench",
        imageRatio: "16 / 10", imagePosition: "50% 50%",
        facts: [
          { label: "Flown on",                 value: "Goldeneye · Launch Canada 2026" },
          { label: "Measured velocity",        value: "Mach 1.17" },
          { label: "Flight computer estimate", value: "Mach 1.16 (0.85% error)" },
          { label: "Materials",                value: "Machined aluminum · carbon fiber" },
        ],
        highlights: [
          "Goldeneye was designed to maximize flight velocity. Rocket velocity is normally measured indirectly, with accelerometers (IMUs) on a flight computer; a pitot tube measures airspeed directly, by sensing the air pressure acting on the rocket.",
          "Machined from aluminum and carbon fiber. To eliminate the need for complex internal channels, the design went through several redesigns to ensure it could be manufactured.",
          "It functioned flawlessly in flight, measuring Mach 1.17 against the flight computer's estimate of Mach 1.16, a 0.85% error.",
        ],
        figures: [
          { src: "assets/projects/pitot-tube.jpg",          ratio: "4 / 3", position: "50% 50%", caption: "Machined aluminum pitot tube section",
            alt: "A machined aluminum pitot tube with a threaded end and a tapered shoulder, lying on a wooden workbench" },
          { src: "assets/projects/pitot-on-rocket.jpg",     ratio: "4 / 3", position: "50% 38%", caption: "Goldeneye on the launch rail, pitot tube at the nose",
            alt: "The red nose of Goldeneye beside a launch rail against a cloudy sky, with a thin spike at its tip" },
          { src: "assets/projects/pitot-velocity.png",      wide: true, caption: "Vertical velocity against time, L2375 motor",
            alt: "A line chart of vertical velocity rising steeply to a peak, then decaying slowly over the rest of the flight" },
          { src: "assets/projects/pitot-drawing-aft.png",   wide: true, caption: "Engineering drawing · aft section",
            alt: "A dimensioned engineering drawing of the pitot tube's aft section, with a threaded end and a tapered shoulder" },
          { src: "assets/projects/pitot-drawing-fwd.png",   wide: true, caption: "Engineering drawing · forward section",
            alt: "A dimensioned engineering drawing of the pitot tube's forward section, a slim tapered tip" },
        ],
        tags: ["Machining", "Design-for-manufacturability", "Carbon fiber", "CAD", "GD&T", "Engineering drawings", "Supersonic"],
      },

      {
        kicker: "Aerodynamics",
        title: "Aluminum boat tail",
        summary:
          "Engineered a proprietary aluminum boat tail that improved Goldeneye's flight performance by 7–10%.",
        image: "assets/projects/boat-tail-installed.jpg", imageAlt: "The aluminum boat tail fitted to the aft end of a dark composite airframe with a green fiberglass fin",
        imageRatio: "16 / 10", imagePosition: "50% 52%",
        facts: [
          { label: "Flown on",         value: "Goldeneye · Launch Canada 2026" },
          { label: "Motor thrust",     value: "~250 kg" },
          { label: "Purpose",          value: "Primary thrust-transfer mechanism" },
          { label: "Aerodynamic gain", value: "7–8% more efficient (less drag)" },
        ],
        highlights: [
          "Goldeneye used an incredibly high-thrust motor, around 250 kg of thrust, which put tremendous stress on the vehicle.",
          "The custom-designed boat tail served as the primary thrust-transfer mechanism.",
          "At the same time it reduces drag, increasing the aerodynamic efficiency of the vehicle by 7–8%.",
        ],
        figures: [
          { src: "assets/projects/boat-tail-part.jpg",      ratio: "4 / 5", position: "50% 55%", caption: "The machined boat tail",
            alt: "A machined aluminum ring with a stepped, tapered profile standing on a wooden table" },
          { src: "assets/projects/boat-tail-installed.jpg", ratio: "4 / 5", position: "50% 55%", caption: "Fitted to the airframe",
            alt: "The aluminum boat tail at the aft end of a dark composite airframe, beside a green fiberglass fin on a workbench" },
          { src: "assets/projects/boat-tail-cad.jpg",       ratio: "1308 / 1112", caption: "CAD model",
            alt: "A CAD render of the boat tail, a white tapered ring with a pale blue inner face" },
          { src: "assets/projects/boat-tail-section.jpg",   ratio: "1308 / 1112", caption: "CAD cross-section",
            alt: "A cross-section of the boat tail in CAD, showing its wall profile and a pale blue inner groove" },
        ],
        tags: ["Machining", "Force analysis", "Aerodynamic analysis", "CAD", "GD&T", "Engineering drawings"],
      },

      {
        kicker: "Avionics",
        title: "Data-acquisition computer",
        summary:
          "The most complex flight computer the team has built. " +
          "Designed and wired the avionics systems for three competition rockets: Stallion, Spectre and Goldeneye.",
        image: "assets/projects/daq-board.jpg", imageAlt: "A green avionics circuit board with a microcontroller, an SD card slot and several connectors",
        imageRatio: "16 / 10", imagePosition: "50% 45%",
        facts: [
          { label: "Architecture", value: "STM32 microcontroller" },
          { label: "Sensors",      value: "IMU · barometer · magnetometer" },
          { label: "Protocols",    value: "SPI · I²C · UART" },
          { label: "Flight data",  value: "Nearly 800 MB recorded" },
        ],
        highlights: [
          "The DAQ was the most complex flight computer that TFRA has manufactured. It featured an Inertial Measurement Unit (IMU), barometer, magnetometer, on-board power regulation and more.",
          "It was based on STM32 microcontroller architecture and successfully recorded and stored nearly 800 MB of flight data.",
          "The DAQ uses various communication protocols that are standard within the industry including: SPI, I²C, and UART.",
          "Designed and wired the avionics systems for the team's three competition rockets: Stallion, Spectre and Goldeneye.",
        ],
        figures: [
          { src: "assets/projects/daq-board.jpg", ratio: "4 / 3", position: "50% 45%", caption: "The data-acquisition computer (DAQ)",
            alt: "A green circuit board with a large microcontroller, an SD card slot and several connectors on a white surface" },
        ],
        tags: ["PCB design", "Circuit design & troubleshooting", "Soldering (THT/SMD)", "STM32"],
      },

      {
        kicker: "Avionics",
        title: "Pitot tube board",
        summary:
          "The electrical system that acquires the pitot tube's data: two high-resolution pressure transducers, " +
          "redundant data storage and a Teensy 3.2 (STM32-based microcontroller).",
        image: "assets/projects/pitot-tube-board.jpg", imageAlt: "A hand holding a round green circuit board with a blue sensor module standing up from it, mounted in a red cylindrical housing",
        imageRatio: "16 / 10", imagePosition: "50% 55%",
        facts: [
          { label: "Sensing",    value: "Two high-resolution pressure transducers" },
          { label: "Storage",    value: "Redundant data storage" },
          { label: "Controller", value: "Teensy 3.2 (STM32-based)" },
        ],
        highlights: [
          "The pitot tube (PT) board was the electrical system responsible for acquiring data from the pitot tube.",
          "It features two high-resolution pressure transducers, redundant data storage mechanisms and a Teensy 3.2 (STM32-based microcontroller).",
        ],
        figures: [
          { src: "assets/projects/pitot-tube-board.jpg", ratio: "4 / 3", position: "50% 55%", caption: "The pitot tube board",
            alt: "A hand holding a round green circuit board with a blue sensor module standing up from it, mounted in a red cylindrical housing" },
        ],
        tags: ["PCB design", "Circuit design & troubleshooting", "Soldering (THT/SMD)", "STM32"],
      },

      {
        kicker: "Avionics",
        title: "GNSS breakout board",
        summary:
          "A separate circuit board that interfaces with the DAQ and acquires the vehicle's real-time GPS position during flight. " +
          "It pushed my soldering skills to their limits.",
        facts: [
          { label: "Interfaces with", value: "The DAQ" },
          { label: "Purpose",         value: "Real-time GPS positioning in flight" },
          { label: "Hardest part",    value: "Complex QFN (quad, flat, no-leads) packages" },
        ],
        highlights: [
          "The GNSS breakout board was a separate circuit board that interfaces with the DAQ. Its purpose was to acquire the real-time GPS position of the vehicle during flight.",
          "This circuit board pushed my soldering skills to its limits, as some components had a complex QFN (quad, flat, no-leads) package.",
        ],
        tags: ["PCB design", "Soldering (THT/SMD)", "QFN packages", "Troubleshooting"],
      },

      {
        kicker: "Recovery",
        title: "Pyrotechnic ejection system",
        summary:
          "Black powder-based pyrotechnic separation that reliably and predictably splits a rocket in flight to deploy its parachutes, " +
          "backed by nearly a dozen ground tests.",
        image: "assets/projects/ejection-test.jpg", imageAlt: "A red rocket airframe lying on grass in a backyard beside a shed, with white smoke near its middle",
        imageRatio: "16 / 10", imagePosition: "50% 55%",
        facts: [
          { label: "Method",       value: "Black powder-based separation" },
          { label: "Purpose",      value: "Parachute deployment · safe descent" },
          { label: "Ground tests", value: "Nearly a dozen" },
        ],
        highlights: [
          "All of my rockets required a way to reliably and predictably separate the vehicle during flight, in order to deploy parachutes and ensure a safe descent.",
          "The most reliable method is black powder-based pyrotechnic separation: carefully igniting an explosive charge during flight to separate the vehicle.",
          "The entire process required diligent design, constant attention to safety, and nearly a dozen ground tests of the system.",
        ],
        figures: [
          { src: "assets/projects/ejection-test.jpg", wide: true, caption: "Ejection testing of Goldeneye",
            alt: "A red rocket airframe lying on grass in a backyard beside a shed, with white smoke near its middle" },
        ],
        tags: ["Pyrotechnic design", "Circuit design & wiring", "Personnel safety", "Pyrotechnics handling"],
      },

      {
        kicker: "Fuel feed system",
        title: "QD piston tail",
        summary:
          "The pneumatic piston that actuates the quick-disconnect on an ethanol fuel-feed system, " +
          "manufactured from 304 stainless steel entirely on manual machinery.",
        image: "assets/projects/qd-piston.jpg", imageAlt: "A stainless steel piston with a threaded stud at each end, lying on dark textured leather",
        imageRatio: "16 / 10", imagePosition: "50% 50%",
        facts: [
          { label: "System",        value: "Ethanol (C₂H₅OH) fuel feed" },
          { label: "Function",      value: "Quick-disconnect from the vehicle" },
          { label: "Pressure",      value: "300 PSI, pneumatic" },
          { label: "Material",      value: "304 stainless steel" },
          { label: "Manufacturing", value: "Entirely manual machinery" },
        ],
        highlights: [
          "The fuel feed system for ethanol (C₂H₅OH) requires the use of a quick-disconnect (QD) system.",
          "The QD allows the ground support equipment (GSE) and fuel-feed system to disconnect from the vehicle during the first few seconds of liftoff.",
          "The QD fill-valve uses a pneumatic piston operating at 300 PSI to actuate the quick-disconnecting mechanism.",
          "The piston was manufactured from 304 stainless steel, entirely on manual machinery.",
        ],
        figures: [
          { src: "assets/projects/qd-piston.jpg", wide: true, caption: "The QD piston",
            alt: "A stainless steel piston with a threaded stud at each end, lying on dark textured leather" },
        ],
        tags: ["Manual machining", "GD&T", "Manual mill", "Manual lathe", "Inspection & QA"],
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
      { label: "Analysis",      items: ["Engineering Force Analysis", "Aerodynamic Analysis"] },
      { label: "Manufacturing", items: ["Machining", "Manual Mill & Lathe", "Composite Fabrication", "Wet Layups", "CNC Operation", "CMM Operation (ZEISS CALYPSO)"] },
      { label: "Quality",       items: ["Shadowgraph / Caliper / Micrometer Inspection", "Inspection & QA"] },
      { label: "Electrical",    items: ["Circuit Design & Troubleshooting", "Circuit Design & Wiring", "Circuit Assembly", "Soldering (SMT/THT)", "PCB Design (Autodesk Eagle, KiCAD)"] },
      { label: "Pyrotechnics",  items: ["Pyrotechnic Design", "Pyrotechnics Handling", "Personnel Safety"] },
      { label: "Programming",   items: ["Python", "Arduino", "C++", "STM32 Microcontrollers"] },
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
