import { 
  Project, 
  Experience, 
  Certificate, 
  Education, 
  SkillCategory, 
  TimelineEntry, 
  ResearchItem 
} from '../types';

export const PERSONAL_INFO = {
  fullName: "BODEPUDI VARUN TEJA",
  shortName: "VARUN TEJA",
  brandName: "BODEPUDI VARUN TEJA",
  tagline: "ONE PERSON · THREE PROFESSIONAL DIMENSIONS",
  subTagline: "Software Engineer · Digital Marketer · Entrepreneur",
  email: "varuntejabodepudi@gmail.com",
  secondaryEmail: "vcxmarthr@gmail.com",
  github: "https://github.com/vtcxxager",
  linkedin: "https://www.linkedin.com/in/varun-teja-bodepudi-a174a327b/",
  inceptionYear: "2019",
  specialization: "0 → 1 Specialist",
  location: "India",
  summary: "A multidisciplinary builder bridging software engineering, performance digital marketing, and startup entrepreneurship. I approach software through the lens of user acquisition and unit economics, and design marketing campaigns with full-stack technical precision."
};

export const EXPERIENCES: Experience[] = [
  {
    id: "vcx-mart",
    organization: "VCX Mart",
    position: "Founder & CEO – Brand and Digital Marketing",
    period: "Aug 2025 – Present",
    duration: "Ongoing",
    location: "India",
    type: "Venture / Leadership",
    ownershipContext: "Personal Venture under VTCX Incorporate",
    dimensions: ["entrepreneur", "marketer", "engineer"],
    summary: "Leading the inception, technical architecture, and early market growth of VCX Mart, an emerging multi-category commerce marketplace platform.",
    responsibilities: [
      "Defining the 0-to-1 product strategy, system architecture, and technical roadmap for marketplace services.",
      "Spearheading digital branding, brand positioning, search optimization, and organic user acquisition channels.",
      "Structuring multi-tenant data schemas, API contracts, and vendor onboarding funnels.",
      "Steering investor-facing documentation, business model unit economics, and operational milestones under VTCX Incorporate."
    ],
    projectsAssociated: ["VCX Mart Marketplace", "VTCX Platform Core"],
    achievements: [
      "Established initial marketplace product blueprint and vendor validation pipelines.",
      "Architected responsive full-stack client interfaces with high-speed performance benchmarks."
    ],
    tags: ["Marketplace Architecture", "Founder Leadership", "Brand Positioning", "SEO & Growth", "API-First"]
  },
  {
    id: "fugen-webtech",
    organization: "Fugen WebTech",
    position: "Digital Marketing",
    period: "2026",
    duration: "3 Months",
    location: "India",
    type: "Employment",
    ownershipContext: "Employer Engagement (Client / Collaborative Projects)",
    dimensions: ["marketer", "engineer"],
    summary: "Executed comprehensive digital marketing campaigns, content strategies, and product positioning for construction ecosystem platforms (CivilBook).",
    responsibilities: [
      "Executed targeted organic search (SEO) and paid campaign positioning for CivilBook User and CivilBook Provider platforms.",
      "Formulated the 14-day high-engagement educational content campaign: 'Generative AI in Construction'.",
      "Collaborated closely with product engineering teams to align landing page copy with CivilBook NextGen architectural enhancements.",
      "Analyzed search intent data, click-through metrics, and conversion drop-offs to optimize user onboarding funnels."
    ],
    projectsAssociated: [
      "CivilBook User", 
      "CivilBook Provider", 
      "CivilBook NextGen", 
      "Generative AI in Construction Campaign"
    ],
    achievements: [
      "Successfully launched the 14-day Generative AI in Construction educational campaign with strong engagement across professional channels.",
      "Streamlined keyword targeting for civil engineering contractors and material suppliers."
    ],
    tags: ["CivilBook Platform", "Content Strategy", "SEO Analytics", "B2B Positioning", "GenAI Campaign"]
  },
  {
    id: "aotms-global",
    organization: "AOTMS Global (Academy of Tech Masters)",
    position: "Digital Marketing",
    period: "2026",
    duration: "3 Months",
    location: "India",
    type: "Employment",
    ownershipContext: "Employer Engagement",
    dimensions: ["marketer"],
    summary: "Drove targeted student acquisition, inbound marketing funnels, and brand awareness for tech educational programs and masterclasses.",
    responsibilities: [
      "Constructed inbound marketing funnels for prospective learners in tech certifications and skill programs.",
      "Conducted keyword research and competitor SERP audits for technical education offerings.",
      "Crafted performance copywriting for Google Ads and multi-channel social media campaigns.",
      "Monitored student lead qualification pipelines and automated nurturing email workflows."
    ],
    projectsAssociated: ["Tech Masters Growth Funnel", "Education Ad Campaigns"],
    achievements: [
      "Optimized Google Ads Search campaign structure to reduce cost-per-lead for professional tech courses.",
      "Implemented structured schema markup and local SEO optimizations for educational webinars."
    ],
    tags: ["Google Ads", "Inbound Marketing", "Lead Generation", "EdTech Growth", "Conversion Funnels"]
  }
];

export const PROJECTS: Project[] = [
  // A. ACTIVE / ESTABLISHED
  {
    id: "vcx-mart-project",
    title: "VCX Mart",
    subtitle: "Emerging Multi-Category Digital Marketplace Ecosystem",
    classification: "active",
    status: "Development",
    period: "2025 – Present",
    role: "Founder & Chief Architect",
    ownershipContext: "Proprietary Venture under VTCX Incorporate",
    dimensions: ["entrepreneur", "engineer", "marketer"],
    shortDescription: "An end-to-end commerce marketplace platform connecting verified vendors with direct consumer and wholesale buyers through high-speed APIs.",
    overview: "VCX Mart is built from the ground up as a modern commerce platform emphasizing transparent vendor settlements, modular product catalogs, and search-optimized merchant storefronts. Operated under VTCX Incorporate.",
    inspiration: "Observing friction in traditional Indian regional trading where smaller merchants face heavy marketplace commissions and delayed settlement cycles.",
    problemStatement: "Fragmented supply chains, opaque commissions, and heavy latency on legacy marketplace platforms that alienate tier-2 and tier-3 business owners.",
    visionObjectives: "Empower merchants with an intuitive, lightweight digital sales channel with instant catalog sync, transparent fee schedules, and localized search visibility.",
    targetAudience: "Regional retail merchants, direct-to-consumer lifestyle brands, and value-conscious digital consumers.",
    proposedSolution: "A modular, API-first marketplace core featuring isolated tenant catalogs, fast server-rendered client storefronts, and automated checkout pipelines.",
    features: [
      "Vendor Self-Serve Onboarding & Catalog Indexing",
      "Dynamic Pricing & Real-Time Stock Tracking",
      "Multi-Gateway Payment Integration with Ledger Audit",
      "Automated SEO Metadata Generation for Product Pages",
      "Unified Order Fulfillment Dashboard for Merchants"
    ],
    techArchitecture: {
      frontend: ["React", "Tailwind CSS", "Vite", "Motion"],
      backend: ["Node.js", "Express REST APIs", "JWT Security"],
      database: ["PostgreSQL / Relational Data Model", "Redis Caching"],
      cloudOps: ["Docker", "Cloud Run / Scalable Compute", "CI/CD Actions"],
      apis: ["Payment Gateway Hooks", "SMS/WhatsApp Dispatch APIs"]
    },
    businessModel: "Tiered transaction commission (low baseline) + premium merchant storefront themes + sponsored category placement.",
    marketResearch: "Evaluated Indian e-commerce landscape; identified growing merchant resistance to 25%+ commissions on legacy aggregator apps.",
    roadmap: [
      { phase: "Phase 1", title: "Core Vendor Schema & Storefront MVP", status: "completed", details: "Established data schemas, catalog publishing, and auth." },
      { phase: "Phase 2", title: "Order Lifecycle & Settlement Engine", status: "in-progress", details: "Integrating payment reconciliation and vendor dashboards." },
      { phase: "Phase 3", title: "Mobile Apps & Regional Logistics Tie-Ins", status: "planned", details: "Native consumer mobile experiences and hyper-local delivery sync." }
    ],
    finalizedDecisions: [
      "Decided on API-first headless commerce architecture to decouple merchant admin from customer frontends.",
      "Strict zero-trust authentication on all vendor payout endpoints."
    ],
    unresolvedQuestions: [
      "Optimal automated return verification pipeline for physical goods in non-metro pin codes.",
      "Third-party reverse logistics partner integration contracts."
    ],
    risksAndChallenges: [
      "Logistics service level agreements across dispersed geographical delivery zones.",
      "Customer acquisition cost optimization against heavily funded incumbents."
    ],
    timelineMilestones: [
      { date: "Aug 2025", event: "Venture founded under VTCX Incorporate", completed: true },
      { date: "Nov 2025", event: "Alpha architectural blueprint finalized", completed: true },
      { date: "Q1 2026", event: "Vendor management dashboard prototype completed", completed: true },
      { date: "2026+", event: "Beta rollout and localized merchant onboarding", completed: false }
    ],
    futurePossibilities: [
      "AI-driven dynamic demand forecasting for merchant inventory replenishment.",
      "Micro-credit underwriting integration based on vendor transaction velocity."
    ],
    tags: ["Marketplace", "Full-Stack", "VTCX Incorporate", "React", "Node.js", "E-Commerce", "Startup"]
  },
  {
    id: "tracxi-core",
    title: "Tracxi",
    subtitle: "Heavy Logistics & Lorry Operations Management Platform",
    classification: "active",
    status: "Development",
    period: "2024 – Present",
    role: "Co-Developer & System Architect",
    ownershipContext: "Collaborative Family Venture (Co-developed with Father; shared ownership)",
    dimensions: ["engineer", "entrepreneur"],
    shortDescription: "A transportation and fleet operations software system engineered with my father to streamline lorry booking, trip dispatching, and driver ledger accounts.",
    overview: "Tracxi addresses real-world transportation friction. Developed jointly with my father—drawing directly from his extensive on-ground transportation industry experience and my software engineering expertise.",
    inspiration: "Growing up witnessing the administrative chaos of paper trip sheets, delayed fuel advances, broker mediation disputes, and lost return-trip loads for truck owners.",
    problemStatement: "Small-to-medium fleet operators lose 15-20% of their operational margins due to manual bookkeeping, unverified fuel consumption, and deadhead mileage (empty return trips).",
    visionObjectives: "Digitize Indian commercial freight operations from trip inception to final settlement, providing fleet owners with real-time operational visibility.",
    targetAudience: "Fleet owners (1 to 25 trucks), independent lorry drivers, and regional cargo booking brokers.",
    proposedSolution: "A centralized dispatch and accounting application enabling instant trip sheet generation, advance tracking, diesel expense logging, and pod (proof-of-delivery) archival.",
    features: [
      "Trip Sheet Generation & Multi-Stop Route Logging",
      "Diesel Slip & Toll Expense Bookkeeping",
      "Driver Cash Advance & Balance Ledger",
      "Proof of Delivery (POD) Image Scanning & Storage",
      "Vehicle Maintenance & Tax/Insurance Expiry Alerts"
    ],
    techArchitecture: {
      frontend: ["React SPA", "Tailwind CSS", "Mobile-first PWA Layout"],
      backend: ["Node.js Microservices", "Express"],
      database: ["Relational Database for Ledger Consistency", "Cloud Storage for PODs"],
      cloudOps: ["Automated Backups", "Low-Bandwidth Optimization"]
    },
    businessModel: "Monthly SaaS subscription per truck for fleet owners + optional freight load matching brokerage fee.",
    marketResearch: "Field-tested with active lorry operators in regional transport hubs; confirmed high demand for vernacular language UI and offline trip saving.",
    roadmap: [
      { phase: "V1 Core", title: "Trip Ledger & Diesel Bookkeeping", status: "completed", details: "Deployed live for internal fleet testing with 10+ operational vehicles." },
      { phase: "V1.5", title: "Driver Vernacular Interface", status: "in-progress", details: "Simplifying driver expense logging via one-tap inputs." },
      { phase: "V2.0", title: "Tracxi 2.0 Cargo-Booking Engine", status: "planned", details: "Expanding from fleet ledger into open cargo marketplace." }
    ],
    finalizedDecisions: [
      "Designed for extreme low-connectivity environments: offline-first client storage for in-transit drivers.",
      "Strict separation of operational ledger data to ensure data privacy between competing transport operators."
    ],
    unresolvedQuestions: [
      "GPS telematics hardware dongle vs smartphone-based geofencing for automatic trip completion.",
      "Automated FASTag toll transaction API integration via bank gateways."
    ],
    risksAndChallenges: [
      "Tech adoption hesitation among traditional transport brokers.",
      "Network dropouts along rural highway freight corridors."
    ],
    timelineMilestones: [
      { date: "2024", event: "Initial concept formulated with father based on transport hub bottlenecks", completed: true },
      { date: "Late 2024", event: "Trip ledger MVP tested with initial commercial lorries", completed: true },
      { date: "2025", event: "Digital proof-of-delivery module implemented", completed: true },
      { date: "2026", event: "Architecture formulation for Tracxi 2.0 platform expansion", completed: false }
    ],
    futurePossibilities: [
      "Automated return-trip broker matchmaking to eliminate empty deadhead kilometers.",
      "Integration with commercial fuel station chains for instant corporate discounts."
    ],
    tags: ["Logistics Tech", "Fleet Management", "Family Enterprise", "Transportation", "Node.js", "Offline-First"]
  },

  // B. DEEPLY PLANNED PROJECTS
  {
    id: "tracxi-2",
    title: "Tracxi 2.0",
    subtitle: "Local Cargo-Booking & Distributed Freight Settlement Platform",
    classification: "deeply-planned",
    status: "Planning",
    period: "2025 – 2026 Planning",
    role: "Lead Architect & Product Strategist",
    ownershipContext: "Evolution of Tracxi Enterprise Platform",
    dimensions: ["engineer", "entrepreneur"],
    shortDescription: "A comprehensive next-generation platform expanding Tracxi from internal fleet management into an open regional cargo marketplace with automated load dispatching.",
    overview: "Tracxi 2.0 represents the planned architectural evolution of Tracxi into a distributed cargo brokerage engine. It pairs shippers needing immediate freight transport with nearby idle commercial trucks.",
    inspiration: "Data collected during Tracxi 1.0 field trials showed that trucks return empty on more than 38% of inter-district runs.",
    problemStatement: "Shippers face unpredictable spot market pricing and unreliable truck availability, while small lorry owners lack direct access to industrial cargo loads without paying exploitative broker cuts.",
    visionObjectives: "Create a transparent, transparently rated regional freight network where booking a 10-ton truck is as predictable as booking an on-demand ride.",
    targetAudience: "Industrial manufacturers, agricultural produce aggregators, logistics 3PL companies, and independent truck drivers.",
    proposedSolution: "A dual-sided booking system featuring real-time load bidding, dynamic freight rate estimation based on route terrain and fuel prices, and escrow-backed milestone releases.",
    features: [
      "Algorithmic Freight Rate Estimator (Tonnage + Distance + Diesel Index)",
      "Real-Time Load Board with Filterable Weight & Body Type (Open/Container)",
      "Digital Escrow Payment Milestones: 50% on Loading, 50% on POD Upload",
      "Real-Time Driver Tracking via Light WebGL Map Visualizers",
      "Automated GST & E-Way Bill Verification Flow"
    ],
    techArchitecture: {
      frontend: ["React 19", "Tailwind CSS", "Mapbox / Leaflet Integration"],
      backend: ["Distributed Go/Node.js Microservices", "WebSockets for Live Bids"],
      database: ["PostgreSQL with PostGIS for Spatial Geofencing", "Redis Pub/Sub"],
      cloudOps: ["Kubernetes / Containerized Autoscaling", "Cloud Storage for E-Way Bills"]
    },
    businessModel: "2.5% shipper platform fee + optional instant payment discounting for drivers (1.5% fee for immediate bank clearance).",
    marketResearch: "Analyzed freight corridors in Andhra Pradesh, Telangana, and Tamil Nadu. Identified underserved medium-haul (150km-600km) inter-state routes.",
    roadmap: [
      { phase: "Architecture", title: "Microservices Design & Data Flow Specifications", status: "completed", details: "Completed comprehensive system design, entity diagrams, and API contracts." },
      { phase: "Bidding Engine", title: "Real-Time Matching & Dynamic Quotations", status: "planned", details: "Developing socket-driven bidding room and pricing algorithms." },
      { phase: "Pilot Launch", title: "Designated Highway Corridor Trial", status: "planned", details: "Controlled beta trial with 50 onboarded fleet operators on a single industrial route." }
    ],
    finalizedDecisions: [
      "Opted for an escrow-based settlement flow to eliminate payment defaults that plague the freight sector.",
      "Chose PostGIS for geo-spatial spatial queries to calculate deadhead proximity within 30km radii."
    ],
    unresolvedQuestions: [
      "Handling in-transit breakdown insurance policies through programmatic micro-insurance APIs.",
      "Legal dispute resolution protocols for cargo damage during adverse weather events."
    ],
    risksAndChallenges: [
      "Entrenched regional broker cartels attempting to undercut platform pricing.",
      "Driver compliance with milestone updates during long-haul stretches."
    ],
    timelineMilestones: [
      { date: "Late 2025", event: "Market problem validation & stakeholder interviews completed", completed: true },
      { date: "Early 2026", event: "Comprehensive technical architecture & database schemas authored", completed: true },
      { date: "Future", event: "Prototype development & regional pilot trials", completed: false }
    ],
    futurePossibilities: [
      "AI load bundling: combining partial LTL (Less-Than-Truckload) shipments into a single container.",
      "Green freight scoring: incentivizing newer BS6 compliant vehicles with lower platform commission."
    ],
    tags: ["Freight Tech", "Tracxi 2.0", "PostGIS", "Escrow Logistics", "System Architecture", "Microservices"]
  },
  {
    id: "wah-ecosystem",
    title: "WAH",
    subtitle: "Wearable Hardware & Personal Emergency Safety Ecosystem",
    classification: "deeply-planned",
    status: "Planning",
    period: "2025 – 2026 Deep Planning",
    role: "System Designer & Hardware-Software Architect",
    ownershipContext: "Original Physical Product & Ecosystem Concept",
    dimensions: ["entrepreneur", "engineer"],
    shortDescription: "A thoughtfully engineered wearable personal safety ecosystem combining an ultra-discreet smart ring with an intelligent mobile guardian network.",
    overview: "WAH (Wearable Assistance & Help) is a comprehensively planned personal protection system designed to bridge the gap between sudden real-world danger and slow smartphone emergency dialing.",
    inspiration: "Recognizing that when a person is in genuine physical distress or under threat, reaching for, unlocking, and dialing on a smartphone is physically impossible or immediately escalates danger.",
    problemStatement: "Current safety apps require active phone handling and visible screen interaction, rendering them completely ineffective during ambushes, medical collapses, or acute harassment.",
    visionObjectives: "Create a zero-latency, tactile wearable that can trigger discreet emergency broadcasts without alerting perpetrators or causing accidental false-alarm panics.",
    targetAudience: "Solo travelers, shift healthcare workers, collegiate students, elderly individuals prone to falls, and evening commuters.",
    proposedSolution: "A minimalist smart ring housing a haptic tactile pressure sensor paired via Bluetooth Low Energy (BLE) with a background smartphone daemon that activates emergency dispatch pipelines.",
    features: [
      "Concealed Micro-Switch Haptic Activation with False-Positive Dampening",
      "Ultra-Low-Power BLE 5.3 Firmware Architecture (14+ Day Battery Target)",
      "Discreet Geo-Coordinate Streaming to Pre-Configured Guardian Rings",
      "Silent Ambient Audio Packet Buffer for Evidence Preservation",
      "Cell-Tower + GPS Hybrid Triangulation for Indoor Location Accuracy"
    ],
    techArchitecture: {
      hardware: ["Nordic Semiconductor nRF52840 BLE SoC", "Ceramic Zirconia Chassis", "Micro-Piezo Haptic Actuator", "Custom LiPo Coin Cell"],
      frontend: ["React Native Companion App", "Native BLE Background Service"],
      backend: ["High-Priority Webhook Broker", "Twilio / SMS Fallback Gateway", "AWS Lambda Serverless Relay"],
      cloudOps: ["Zero-Data Retention for Ambient Audio unless Emergency Confirmed"]
    },
    businessModel: "Direct-to-consumer hardware purchase (affordable base price point) + optional premium emergency monitoring center dispatch subscription.",
    marketResearch: "Surveyed personal safety wearables; discovered users abandon bulky pendants and smartwatches due to ugly aesthetics and 24-hour battery recharge friction.",
    roadmap: [
      { phase: "Product Spec", title: "Industrial Design & Component Selection", status: "completed", details: "Completed BOM (Bill of Materials) research, PCB footprint sizing, and BLE SoC selection." },
      { phase: "Firmware Prototype", title: "Breadboard BLE State Engine", status: "planned", details: "Simulating activation patterns and battery current draw under sleep states." },
      { phase: "Chassis Tooling", title: "Hypoallergenic Ceramic Ring Casting", status: "planned", details: "Prototyping ergonomic ring sizes with micro-switch tactile feedback." }
    ],
    finalizedDecisions: [
      "Enforced a standalone ring identity distinct from feature-rich smartwatches: no screens, no LEDs, 100% discrete camouflage as fine jewelry.",
      "End-to-end encryption on all transmitted location telemetry."
    ],
    unresolvedQuestions: [
      "Waterproofing seal tolerances (IP68) with mechanical pressure actuation switch.",
      "Custom mold manufacturing costs across standard ring sizes (sizes 6 through 12)."
    ],
    risksAndChallenges: [
      "Battery chemistry constraints in ultra-miniaturized ring volumes.",
      "Operating system aggressive background task killing on budget Android devices."
    ],
    timelineMilestones: [
      { date: "2025", event: "Original safety vulnerability research & concept drafting", completed: true },
      { date: "Early 2026", event: "Full hardware component selection & BLE architecture completed", completed: true },
      { date: "Roadmap", event: "Functional prototype development and partner foundry outreach", completed: false }
    ],
    futurePossibilities: [
      "Integration with city emergency dispatch hotlines and campus security networks.",
      "Heart-rate anomaly detection indicating sudden distress or panic spikes."
    ],
    tags: ["Hardware Planning", "Wearable Tech", "BLE", "Personal Safety", "IoT Architecture", "Embedded Systems"]
  },
  {
    id: "magic-matrix",
    title: "MagicMatrix",
    subtitle: "High-Performance Native Android Matrix Puzzle Game",
    classification: "deeply-planned",
    status: "Planning",
    period: "2025 – 2026 Planning",
    role: "Game Engine Designer & Gameplay Programmer",
    ownershipContext: "Independent Game Project",
    dimensions: ["engineer"],
    shortDescription: "A mathematically rich native Android logic puzzle game exploring dynamic grid transformations, procedural level synthesis, and zero-garbage-collection rendering.",
    overview: "MagicMatrix blends algorithmic number theory with tactile spatial mechanics. Designed to deliver smooth 120 FPS native gameplay without battery-draining game engine overhead.",
    inspiration: "Classic mathematical magic squares combined with modern fluid tactile interactions found in minimalist puzzle titles.",
    problemStatement: "Most modern mobile puzzle games are bloated with heavy 200MB+ third-party engine wrappers, intrusive ad networks, and sluggish frame pacing.",
    visionObjectives: "Engineer a lightweight (<15MB download), lightning-fast native Android puzzle experience that trains spatial and arithmetic intuition through elegant visual feedback.",
    targetAudience: "Casual puzzle enthusiasts, STEM students, and fans of clean mental agility games.",
    proposedSolution: "A custom native Android rendering pipeline leveraging Canvas / OpenGL ES with zero-allocation game loops, combined with an algorithmic matrix puzzle generator.",
    features: [
      "Procedural Matrix Level Generator with Guaranteed Solvability",
      "Dynamic Row/Column Sliding Mechanics with Haptic Physics Snap",
      "Zero Allocation in Render Loop (Eliminates Android GC Frame Drops)",
      "Progressive Mathematical Rule Shifts (Parity, Modulo, Prime Vectors)",
      "Local Offline High Scores and Minimalist Dark Mode Visuals"
    ],
    techArchitecture: {
      frontend: ["Kotlin Native Android", "Jetpack Compose & Custom SurfaceView", "OpenGL ES 3.0"],
      backend: ["Optional Global Leaderboard API", "Lightweight Go Microservice"],
      cloudOps: ["Fast Google Play App Bundle Distribution (<12MB)"]
    },
    businessModel: "Free-to-play with one-time 'Zen Mode' unlock (no annoying interstitials or pay-to-win mechanics).",
    marketResearch: "Analyzed top brain training and grid games; identified high user retention for titles with instant load times (<1 sec) and offline availability.",
    roadmap: [
      { phase: "Math Engine", title: "Matrix Permutation & Solvability Algorithms", status: "completed", details: "Authored logic verifying unique solution paths across 3x3 to 6x6 matrices." },
      { phase: "Touch Physics", title: "Gesture Dispatch & Elastic Snap Bounds", status: "in-progress", details: "Fine-tuning swipe velocity curves and spring haptic impulses." },
      { phase: "Audio & Levels", title: "Synthesized Tonal Feedback & 100 Stage Pack", status: "planned", details: "Integrating procedural melodic chime responses to correct tile alignments." }
    ],
    finalizedDecisions: [
      "Refused heavyweight third-party game engines in favor of pure native Android to ensure maximum battery longevity and tiny install footprint.",
      "100% offline-playable with zero forced logins."
    ],
    unresolvedQuestions: [
      "Balancing curve for difficulty scaling beyond 5x5 matrix transformations.",
      "Adaptive colorblind palettes for high-contrast accessibility."
    ],
    risksAndChallenges: [
      "User discovery in an overcrowded mobile games marketplace.",
      "Device fragmentation across non-standard Android aspect ratios."
    ],
    timelineMilestones: [
      { date: "2025", event: "Mathematical puzzle ruleset and matrix solvability proved", completed: true },
      { date: "Early 2026", event: "Core game loop & touch interaction specifications completed", completed: true },
      { date: "Roadmap", event: "Beta build testing on Google Play Internal Track", completed: false }
    ],
    futurePossibilities: [
      "Daily asynchronous multiplayer speedrun challenges.",
      "Port to iOS utilizing Swift and Metal graphics pipeline."
    ],
    tags: ["Android Dev", "Kotlin", "Game Architecture", "Algorithms", "Mathematics", "Native Performance"]
  },

  // C. PROJECT PROPOSALS / FUTURE IDEAS
  {
    id: "wah-mahi-1",
    title: "WAH Mahi 1",
    subtitle: "Dual-Stage Activation & Grace-Period Cancellation Protocol",
    classification: "proposal",
    status: "Proposal",
    period: "Concept Proposal (Deferred)",
    role: "Originator & Mechanism Designer",
    ownershipContext: "Dedicated Safety Proposal (Maintained separately from WAH ecosystem)",
    dimensions: ["entrepreneur", "engineer"],
    shortDescription: "A specialized conceptual proposal for a fail-safe wearable trigger mechanism featuring a timed grace-period and silent cancellation buffer.",
    overview: "WAH Mahi 1 is a dedicated product proposal exploring the critical psychology and mechanics of emergency activation. It isolates the specific problem of panic button false-positives and uncommanded emergency dispatches.",
    inspiration: "Emergency responders report that over 65% of panic button signals are accidental presses from pockets, bags, or casual bumping, desensitizing responders.",
    problemStatement: "If an emergency wearable is too easy to press, users turn it off to avoid embarrassing false alarms. If it requires complex actions, it cannot be used during a real attack.",
    visionObjectives: "Design a fail-safe activation sequence that gives the wearer a silent, tactile 10-second grace window to cancel inadvertent triggers before emergency services are summoned.",
    targetAudience: "Users seeking foolproof emergency alert hardware with zero tolerance for false-alarm humiliation.",
    proposedSolution: "A dual-action mechanical trigger coupled with a progressive haptic countdown pulse. The user feels distinct vibration pulses indicating an alert will dispatch in 10 seconds unless a unique sequence is tapped.",
    features: [
      "Dual-Stage Mechanical Recessed Actuator (Prevents Accidental Bumping)",
      "Silent 10-Second Haptic Countdown Pulse Engine",
      "Discreet Micro-Tap Sequence for Silent Alarm Abort",
      "Duress Code Mode: Fake Abort that Secretly Elevates Urgency to Level 1",
      "Low-Power Watchdog Circuit Architecture"
    ],
    techArchitecture: {
      hardware: ["Custom Dual-Contact Tactile Switch", "Sub-miniature ERM Vibration Motor", "Ultra-Low-Power Timer IC"],
      frontend: ["Companion Daemon Configurator"],
      backend: ["Tiered Escalation Webhook Broker"]
    },
    businessModel: "Licensable patent/mechanism for broader wearable safety manufacturers or OEM integration into existing personal smart jewelry.",
    marketResearch: "Reviewed panic alert consumer complaints; confirmed false alarms are the #1 reason users decommission emergency pendants within 30 days.",
    roadmap: [
      { phase: "Concept", title: "State Machine Logic & Cancellation Sequence", status: "completed", details: "Defined exact timing intervals and false-trigger suppression logic." },
      { phase: "Bench Test", title: "Physical Micro-Switch Ergonomic Study", status: "planned", details: "Testing spring resistances against pocket compression forces." }
    ],
    finalizedDecisions: [
      "Maintained strictly as an isolated proposal document to evaluate mechanism viability before merging into any commercial product line.",
      "Silent cancellation must provide sensory confirmation without auditory beeps."
    ],
    unresolvedQuestions: [
      "Optimal tactile resistance (in Newtons) to prevent pocket actuation while remaining easy for an injured user to depress.",
      "Duress code recognition reliability under extreme psychological stress."
    ],
    risksAndChallenges: [
      "Ensuring the cancellation delay never delays dispatch in catastrophic, instantaneous emergencies.",
      "Hardware component durability over thousands of cyclic compressions."
    ],
    timelineMilestones: [
      { date: "2025", event: "Concept conceived following personal safety wearable discussions", completed: true },
      { date: "Archive", event: "Detailed proposal filed in project archive for future hardware development", completed: true }
    ],
    futurePossibilities: [
      "Licensing the activation patent to existing commercial smartwatch manufacturers.",
      "Integration into industrial lone-worker safety equipment."
    ],
    tags: ["Project Proposal", "Safety Mechanics", "Haptics", "Patent Concept", "Hardware Proposal"]
  },
  {
    id: "blockchain-inr-token",
    title: "INR-Linked Micro-Settlement Protocol",
    subtitle: "Sovereign Fiat-Pegged Settlement Concept for Micro-Commerce",
    classification: "proposal",
    status: "Proposal",
    period: "Theoretical Architecture Proposal",
    role: "Blockchain Protocol Researcher",
    ownershipContext: "Research & Discussion Concept (Non-Launched Idea)",
    dimensions: ["engineer", "entrepreneur"],
    shortDescription: "A conceptual framework exploring programmable Indian Rupee ledger tokens for automated micro-escrows and instant supplier invoicing.",
    overview: "A research and architectural proposal investigating how programmable ledger primitives can facilitate near-instant B2B settlement between micro-merchants and distributors without high credit-card interchange fees.",
    inspiration: "Analyzing the bottleneck of UPI settlement reconciliation for high-frequency micro-transactions between FMCG distributors and local mom-and-pop retail shops.",
    problemStatement: "While consumer-to-merchant UPI is instant, wholesale distributor settlements frequently remain bogged down in multi-day credit reconciliation and manual ledger balancing.",
    visionObjectives: "Demonstrate a regulatory-compliant, sovereign rupee-backed tokenization model for automated supply chain invoice discounting and programmatic micro-escrow.",
    targetAudience: "Wholesale distribution networks, supply chain financiers, and regional retail cooperatives.",
    proposedSolution: "A permissioned, low-energy consortium ledger utilizing smart contracts for automatic invoice payment releases triggered by verified transport delivery receipts.",
    features: [
      "Programmable Smart Escrow with Automatic Time-Lock and Delivery Proof",
      "Zero Gas Volatility via Fixed Consortium Consensus Nodes",
      "Instant Multi-Party Split Settlements (Distributor, Transport, Tax)",
      "Audit-Ready Ledger Export for Indian GST and Corporate Compliance",
      "API Bridges to Standard RBI-Compliant Banking Gateways"
    ],
    techArchitecture: {
      backend: ["Solidity Smart Contracts (EVM Compatible Consortium Chain)", "Hyperledger Besu / Polygon Edge"],
      apis: ["Banking API Connectors", "GST E-Invoice Webhook Listeners"],
      cloudOps: ["Distributed Node Infrastructure on Secure Sovereign Cloud"]
    },
    businessModel: "Fractional basis-point transaction fee (0.15%) on wholesale settlements—significantly lower than traditional merchant factoring rates.",
    marketResearch: "Studied RBI Central Bank Digital Currency (CBDC) pilot guidelines and wholesale digital rupee interoperability opportunities.",
    roadmap: [
      { phase: "Research", title: "Regulatory Landscape & Smart Contract Logic", status: "completed", details: "Documented legal boundaries and multi-sig escrow contract patterns." },
      { phase: "Simulation", title: "Synthetic Volume Ledger Stress Testing", status: "planned", details: "Simulating 10,000 transactions/second on private testnet." }
    ],
    finalizedDecisions: [
      "Preserved as a theoretical research proposal; not launched or marketed as a financial security.",
      "Strict compliance model: transactions must map 1:1 with domestic fiat bank balances."
    ],
    unresolvedQuestions: [
      "Final regulatory classification of consortium tokens under evolving Indian digital asset frameworks.",
      "Interoperability with official RBI CBDC wholesale settlement interfaces."
    ],
    risksAndChallenges: [
      "Rapidly changing fintech regulatory restrictions on tokenized accounting.",
      "Hesitancy of traditional banking partners to expose low-latency escrow hooks."
    ],
    timelineMilestones: [
      { date: "2025", event: "Theoretical whitepaper drafted & architectural review conducted", completed: true },
      { date: "Archive", event: "Indexed in research library awaiting regulatory policy clarity", completed: true }
    ],
    futurePossibilities: [
      "Integration into Tracxi 2.0 freight settlement ledger for instant carrier payments upon verified delivery.",
      "Automated tax withholding smart contracts."
    ],
    tags: ["Proposal", "Blockchain Concept", "Fintech Architecture", "Smart Contracts", "Micro-Settlement"]
  },
  {
    id: "wah-waters",
    title: "WAH Waters",
    subtitle: "Modular Ergonomic Smart Hydration & Thermal Ware Concept",
    classification: "proposal",
    status: "Proposal",
    period: "Product Design Proposal",
    role: "Industrial Concept Designer",
    ownershipContext: "Conceptual Consumer Goods Proposal",
    dimensions: ["entrepreneur"],
    shortDescription: "A proposed lifestyle hardware concept exploring vacuum-insulated hydration containers with embedded hydration telemetry and modular utility bases.",
    overview: "WAH Waters was conceived as a sustainable consumer wellness product exploring thermal insulation, modular utility compartments, and optional non-intrusive hydration cadence reminders.",
    inspiration: "Desk workers and athletes routinely fail to maintain basic hydration balance due to friction in tracking and generic, uninspiring water bottles.",
    problemStatement: "Most commercial smart water bottles are expensive gimmicks with fragile electronics that break in the dishwasher, while standard bottles offer zero functional utility beyond liquid containment.",
    visionObjectives: "Design an aesthetically elevated, dishwasher-safe bottle with a detachable modular smart base that separates sensitive electronics from the washing zone.",
    targetAudience: "Fitness enthusiasts, desk-bound software engineers, and sustainable lifestyle consumers.",
    proposedSolution: "A double-wall 18/8 food-grade stainless steel flask with a magnetic, modular puck base housing optional ambient hydration pulse reminders.",
    features: [
      "Detachable IP67 Magnetic Smart Base (Allows 100% Dishwasher-Safe Bottle Wash)",
      "Capacitive Fluid-Level Sensor Puck with Ambient Glow Reminders",
      "36-Hour Cold / 18-Hour Hot Vacuum Thermal Insulation Architecture",
      "Ergonomic Quick-Flow Spout with Magnetic Cap Retention",
      "BPA-Free, Zero-Plastic Recycled Packaging System"
    ],
    techArchitecture: {
      hardware: ["Detachable Base with Bluetooth Beacon", "Capacitive Water-Column Gauge", "USB-C Magnetic Fast Charger"],
      frontend: ["Minimalist Daily Water Tracker App Widget"]
    },
    businessModel: "Direct-to-consumer hardware sales + modular accessory attachments (infusers, travel handles, specialized filtration lids).",
    marketResearch: "Evaluated premium drinkware category trends in India and overseas; identified a market void between cheap plastic bottles and $80 luxury connected bottles.",
    roadmap: [
      { phase: "Industrial Sketch", title: "CAD Concept & Modular Base Schematic", status: "completed", details: "Drafted ergonomic cross-sections and modular magnetic latching mechanism." },
      { phase: "Prototyping", title: "Thermal Vacuum Chamber Tooling", status: "planned", details: "Sourcing certified food-grade stainless steel fabrication partners." }
    ],
    finalizedDecisions: [
      "Separated electronics completely into a detachable bottom base to eliminate moisture damage and permit regular machine washing.",
      "Classified explicitly as a design proposal pending manufacturing partner evaluation."
    ],
    unresolvedQuestions: [
      "Unit manufacturing cost at minimum order quantities (5,000 units).",
      "Long-term seal degradation under extreme carbonated or hot beverage pressures."
    ],
    risksAndChallenges: [
      "High upfront tooling costs for custom stainless steel stamping dies.",
      "Crowded consumer drinkware market with heavy brand loyalty."
    ],
    timelineMilestones: [
      { date: "2025", event: "Concept design & modular separation blueprint completed", completed: true },
      { date: "Archive", event: "Cataloged in product ideas archive for future consumer brand evaluation", completed: true }
    ],
    futurePossibilities: [
      "Electrolyte replenishment cartridge integration.",
      "Co-branding with corporate wellness programs."
    ],
    tags: ["Product Proposal", "Consumer Hardware", "Industrial Design", "Smart Hydration", "Ecosystem"]
  },

  // D. EMPLOYER & COLLABORATIVE PROJECTS
  {
    id: "civilbook-ecosystem",
    title: "CivilBook Platform Suite",
    subtitle: "Digital Infrastructure for Civil Engineering & Construction",
    classification: "employer",
    status: "Launched",
    period: "2026 (Fugen WebTech Engagement)",
    role: "Digital Marketing Specialist & Product Strategist",
    ownershipContext: "Employer Project developed at Fugen WebTech (Not a founded company)",
    dimensions: ["marketer", "engineer"],
    shortDescription: "A multi-sided digital ecosystem connecting construction clients, verified contractors, and building material suppliers across the civil engineering lifecycle.",
    overview: "During my digital marketing engagement at Fugen WebTech, I worked extensively on positioning and growth for the CivilBook platform suite, including CivilBook User, CivilBook Provider, and the upcoming CivilBook NextGen.",
    inspiration: "Addressing deep-rooted opacity, contractor unreliability, and unstandardized pricing within regional construction and home building industries.",
    problemStatement: "Home builders and commercial project managers struggle to verify contractor qualifications, monitor milestone progress, and procure authenticated construction materials at honest prices.",
    visionObjectives: "Standardize contractor discovery, quote comparisons, and milestone-linked payment releases for the construction industry.",
    targetAudience: "Property owners, civil contractors, structural engineers, architects, and building material vendors.",
    proposedSolution: "A dual-sided ecosystem comprising a client-facing booking interface (CivilBook User), a business management cockpit for contractors (CivilBook Provider), and a real-time collaboration layer (CivilBook NextGen).",
    features: [
      "CivilBook User: Contractor Discovery, Quotation Comparison, Milestone Escrow",
      "CivilBook Provider: Job Invoicing, Material Requisitions, Portfolio Showcases",
      "CivilBook NextGen: Real-Time Blueprint Annotation & Site Telemetry",
      "Automated Milestone Verifications with Geo-Tagged Site Photographs",
      "Material Price Benchmarking Index across Regional Supply Yards"
    ],
    techArchitecture: {
      frontend: ["Modern Web & Hybrid Mobile Apps", "Responsive CSS Frameworks"],
      backend: ["Scalable Cloud API Gateway", "Microservices Architecture"],
      cloudOps: ["High-Availability Hosting", "Media Optimization for On-Site Photos"]
    },
    businessModel: "Platform commission on project milestones + premium contractor verification badges + vendor material placement fees.",
    marketResearch: "Audited construction contractor search habits and regional property development hubs.",
    roadmap: [
      { phase: "User & Provider", title: "Dual Platform Launch & Merchant Onboarding", status: "completed", details: "Positioned initial releases for active service booking." },
      { phase: "Content Campaign", title: "14-Day Generative AI in Construction Series", status: "completed", details: "Executed viral educational marketing campaign." },
      { phase: "NextGen", title: "CivilBook NextGen Enterprise Rollout", status: "in-progress", details: "Advancing digital collaboration for enterprise civil projects." }
    ],
    finalizedDecisions: [
      "Accurately attributed as an employer project under Fugen WebTech; maintaining clear professional boundaries.",
      "Aligned product marketing messaging with contractor operational realities."
    ],
    unresolvedQuestions: [
      "Scaling on-site inspection validation across tier-3 towns without expanding overhead.",
      "Streamlining dispute arbitration protocols for weather-related structural delays."
    ],
    risksAndChallenges: [
      "Long sales cycles in high-ticket construction engagements.",
      "Traditional contractor resistance to digital invoicing and timeline tracking."
    ],
    timelineMilestones: [
      { date: "2026", event: "Spearheaded digital marketing strategy and keyword funnels at Fugen WebTech", completed: true },
      { date: "2026", event: "Successfully executed 14-day Generative AI educational campaign", completed: true },
      { date: "Ongoing", event: "CivilBook NextGen product positioning and user acquisition campaigns", completed: false }
    ],
    futurePossibilities: [
      "Drone photogrammetry integration for automated structural progress validation.",
      "AI-driven material price predictive analytics for civil estimators."
    ],
    tags: ["CivilBook", "Fugen WebTech", "Construction Tech", "B2B Marketing", "Product Strategy", "Employer Project"]
  },
  {
    id: "genai-construction-campaign",
    title: "Generative AI in Construction",
    subtitle: "14-Day Educational Content Campaign & Industry Thought Leadership",
    classification: "employer",
    status: "Launched",
    period: "2026 (Fugen WebTech Engagement)",
    role: "Content Strategist & Lead Campaign Architect",
    ownershipContext: "Employer Project (Executed for Fugen WebTech / CivilBook)",
    dimensions: ["marketer"],
    shortDescription: "A high-impact 14-day educational campaign demystifying practical applications of Generative AI, computer vision, and LLMs for civil contractors and builders.",
    overview: "Formulated and executed a structured 14-day educational thought leadership campaign demonstrating how generative AI tools streamline blueprint parsing, material cost estimations, safety audits, and automated client status reporting.",
    inspiration: "Civil engineering remains one of the slowest industries to adopt modern AI tools due to dense academic jargon and lack of actionable, bite-sized workflows.",
    problemStatement: "Builders viewed AI as an overhyped novelty with no relevance to concrete, rebar, or site management, creating high friction for tech-enabled platform adoption.",
    visionObjectives: "Bridge the gap between emerging generative AI capabilities and hands-on site managers through practical daily case studies and ready-to-use prompts.",
    targetAudience: "Civil engineers, project leads, architects, and forward-looking construction founders.",
    proposedSolution: "A 14-day sequential educational series published across LinkedIn, industry forums, and newsletter channels breaking down tangible AI site workflows.",
    features: [
      "14 Tailored Industry Case Studies (Blueprint QA, Safety Hazard Detection, Automated BOQ Generation)",
      "Curated Prompt Frameworks for Construction Project Managers",
      "Interactive Visual Infographics on AI Workflow Integration",
      "Lead Capture Funnel Connecting Builders to CivilBook NextGen Early Access",
      "Daily Engagement Analytics & Audience Retargeting Sequences"
    ],
    techArchitecture: {
      apis: ["Social Distribution APIs", "Analytics Tracking & UTM Pipelines"],
      cloudOps: ["Automated Newsletter Broadcasts", "Lead Data Sanitization"]
    },
    businessModel: "Organic inbound marketing funnel generating high-intent contractor leads for CivilBook at near-zero paid advertising expenditure.",
    marketResearch: "Audited search trends around 'AI in civil engineering' and identified surging interest with near-zero quality practitioner-level content.",
    roadmap: [
      { phase: "Curriculum", title: "14-Day Content Curriculum & Graphic Assets", status: "completed", details: "Researched and scripted all 14 instructional topics." },
      { phase: "Execution", title: "Multi-Channel Broadcast & Daily Engagement", status: "completed", details: "Published daily with real-time community comment interactions." },
      { phase: "Lead Ingestion", title: "Prospect Routing to CivilBook Platform", status: "completed", details: "Converted engaged readers into platform signups." }
    ],
    finalizedDecisions: [
      "Focused on practical real-world workflows (e.g., parsing PDF specifications) rather than theoretical robotics.",
      "Maintained professional attribution to Fugen WebTech."
    ],
    unresolvedQuestions: [
      "Syndicating content into academic civil engineering university chapters.",
      "Automating subsequent webinar registration series from campaign alumni."
    ],
    risksAndChallenges: [
      "Maintaining high technical accuracy to satisfy experienced structural engineers.",
      "Algorithmic reach fluctuations on professional social platforms."
    ],
    timelineMilestones: [
      { date: "Day 1-5", event: "Foundations of AI in construction & blueprint automation launch", completed: true },
      { date: "Day 6-10", event: "Material estimation, safety monitoring, and drone QA workflows", completed: true },
      { date: "Day 11-14", event: "Contract compliance, future tech synthesis, and platform conversion", completed: true }
    ],
    futurePossibilities: [
      "Compiling the series into a downloadable comprehensive PDF handbook for builders.",
      "Hosting a live masterclass series on prompt engineering for civil contractors."
    ],
    tags: ["Generative AI", "Content Strategy", "Thought Leadership", "Civil Engineering", "Growth Marketing"]
  },

  // E. EXPERIMENTS & PROTOTYPES
  {
    id: "liquid-glass-particle-engine",
    title: "Liquid Glass WebGL Engine",
    subtitle: "High-Fidelity 3D Interactive Particle Fluid System",
    classification: "experiment",
    status: "Launched",
    period: "2026",
    role: "Graphics Engineer & Creative Technologist",
    ownershipContext: "Technical Exploration & Portfolio Foundation",
    dimensions: ["engineer"],
    shortDescription: "A high-performance GPU particle wave simulation built with Three.js, rendering 3,000 interactive particles in the Indian tricolor spectrum with fluid wave physics.",
    overview: "Created as the signature visual background engine for this portfolio archive. Features custom sine wave wave displacement, real-time mouse interaction vector lerping, and zero frame stutter.",
    inspiration: "Creating an elevated visual atmosphere that honors the Indian tricolor (saffron, white, green) without loud clashing, instead evoking subtle liquid glass.",
    problemStatement: "Heavy WebGL scenes frequently choke mobile GPUs and cause high battery drain or jittery scroll performance.",
    visionObjectives: "Achieve continuous 60 FPS WebGL rendering with under 3% CPU utilization on modern devices.",
    targetAudience: "Engineering peers, creative directors, and technical hiring teams looking for frontend visual depth.",
    proposedSolution: "A lightweight BufferGeometry with custom float attributes for positions and vertex colors, rendered through additive blending and optimized render-loops.",
    features: [
      "3,000 Independent Three-Dimensional Particles",
      "Dynamic Sine Wave Mathematical Wave Propagation",
      "Smooth Exponential Mouse Parallax Vector Reaction",
      "Tricolor Saffron (#FF9933), White (#FFFFFF), and Green (#138808) Palette",
      "Dynamic Viewport Resize Listener with Aspect Ratio Preservation"
    ],
    techArchitecture: {
      frontend: ["Three.js r128", "WebGL Canvas", "RequestAnimationFrame Loop"],
      cloudOps: ["Lightweight Asset Overhead (<150KB bundle)"]
    },
    businessModel: "Open-source creative experimentation and personal brand asset.",
    marketResearch: "Benchmarked particle counts vs mobile frame drops across low-tier and high-tier smartphones.",
    roadmap: [
      { phase: "V1", title: "Single Wave Oscillation", status: "completed", details: "Tested basic particles with standard points material." },
      { phase: "V2", title: "Interactive Vector Field & Tricolor Palettes", status: "completed", details: "Added mouse tracking and Indian tricolor vertex shading." }
    ],
    finalizedDecisions: [
      "Used AdditiveBlending to create a luminous, glowing glass aesthetic against the pitch-black backdrop.",
      "Bound mouse movement to normalized viewport coordinates to prevent erratic jumps."
    ],
    unresolvedQuestions: [
      "Adding GPU compute shaders via WebGPU for 50,000+ particles on supported modern browsers.",
      "Optional audio reactive frequency modulation."
    ],
    risksAndChallenges: [
      "WebGL context loss on mobile devices entering background tabs.",
      "Battery consumption over prolonged idle browser sessions."
    ],
    timelineMilestones: [
      { date: "2026", event: "Initial prototype written in vanilla JavaScript & Three.js", completed: true },
      { date: "2026", event: "Modularized into modern React component with clean teardown", completed: true }
    ],
    futurePossibilities: [
      "Interactive particle gravity wells responding to user scroll velocities.",
      "Custom WebGL shader glow passes."
    ],
    tags: ["Three.js", "WebGL", "Creative Coding", "Interactive Design", "Performance Graphics"]
  },
  {
    id: "ai-search-serp-analyzer",
    title: "AI Search SERP Analyzer",
    subtitle: "Conversational LLM Citation Mechanics vs Traditional Google Rankings",
    classification: "experiment",
    status: "Prototype",
    period: "2026",
    role: "SEO & AI Researcher",
    ownershipContext: "Research Exploration",
    dimensions: ["marketer", "engineer"],
    shortDescription: "An experimental research script comparing traditional organic search ranking factors with conversational AI citation mechanics (Google AI Overviews, Perplexity, ChatGPT).",
    overview: "Built to evaluate how search architecture is shifting from ten blue links to direct synthesized LLM responses, testing which structured data patterns guarantee inclusion in AI citations.",
    inspiration: "Completing the Semrush AI Search Operating System certification and realizing standard SEO metrics fail to predict conversational visibility.",
    problemStatement: "Brands ranking #1 organically on Google frequently disappear completely from AI synthesized summaries.",
    visionObjectives: "Identify exact semantic schema patterns and authority markers that influence generative search engines to quote and link source websites.",
    targetAudience: "Digital marketing strategists, brand owners, and content architects.",
    proposedSolution: "A Python/Node.js testing harness that queries high-competition search terms across traditional Google SERP and conversational AI engines, comparing cited domains.",
    features: [
      "Multi-Engine Citation Correlation Matrix",
      "Semantic HTML5 & JSON-LD Structured Data Validator",
      "Information Density Scoring Engine for Web Articles",
      "Entity Graph Extraction & Wikipedia / Wikidata Correlation"
    ],
    techArchitecture: {
      backend: ["Node.js Scripts", "Headless Browser Automation", "Regex Parser"],
      apis: ["Semrush API", "LLM APIs for Semantic Query Testing"]
    },
    businessModel: "Proprietary methodology deployed across internal marketing projects and client growth funnels.",
    marketResearch: "Evaluated 200+ conversational search queries across B2B SaaS, logistics, and local commerce.",
    roadmap: [
      { phase: "Audit", title: "100 Query Comparison Dataset", status: "completed", details: "Mapped traditional rank vs AI overview citations." },
      { phase: "Playbook", title: "Generative Engine Optimization (GEO) Framework", status: "in-progress", details: "Drafting internal playbook for VCX Mart and client platforms." }
    ],
    finalizedDecisions: [
      "Focus on entity salience and concise definition blocks rather than traditional keyword density."
    ],
    unresolvedQuestions: [
      "Measuring dark traffic referrals from un-attributed AI conversational summaries."
    ],
    risksAndChallenges: [
      "High volatility as search engines constantly alter AI Overview display thresholds."
    ],
    timelineMilestones: [
      { date: "2026", event: "Synthesized findings following Semrush AI Search OS certification", completed: true },
      { date: "Ongoing", event: "Benchmarking new GEO strategies on active web platforms", completed: false }
    ],
    futurePossibilities: [
      "Automated SaaS scanner grading website readiness for AI search engine quotation."
    ],
    tags: ["GEO", "AI Search", "SEO Analytics", "Semrush", "Research Prototype"]
  }
];

export const CERTIFICATIONS: Certificate[] = [
  {
    id: "google-ads-search",
    title: "Google Ads Search Certification",
    issuer: "Google Skillshop",
    issueDate: "2026",
    credentialId: "Verified / ID available upon credential lookup",
    verificationUrl: "https://skillshop.credential.net/",
    status: "Verified",
    badgeAccent: "saffron",
    skillsCovered: [
      "Google Search Campaigns",
      "Smart Bidding Strategies",
      "Keyword Match Types & Quality Score",
      "Ad Rank & Auction Insights",
      "Conversion Tracking Setup",
      "Audience Segmentation"
    ],
    description: "Demonstrates mastery of building and optimizing high-performance Google Ads Search campaigns, leveraging automated smart bidding to maximize ROAS and lead capture."
  },
  {
    id: "hubspot-inbound",
    title: "Inbound Marketing Certification",
    issuer: "HubSpot Academy",
    issueDate: "2026",
    credentialId: "Credential on File",
    verificationUrl: "https://academy.hubspot.com/",
    status: "Verified",
    badgeAccent: "white",
    skillsCovered: [
      "Inbound Methodology (Attract, Engage, Delight)",
      "Buyer Persona Development",
      "Content Strategy & Topic Clusters",
      "Lead Nurturing & Email Workflows",
      "Conversion Funnel Optimization"
    ],
    description: "Validates proficiency in inbound growth frameworks: attracting organic traffic through high-value content, converting prospects through nurturing workflows, and delighting customers."
  },
  {
    id: "semrush-ai-search",
    title: "AI Search Operating System",
    issuer: "Semrush",
    issueDate: "2026",
    credentialId: "Credential on File",
    verificationUrl: "https://www.semrush.com/academy/",
    status: "Verified",
    badgeAccent: "green",
    skillsCovered: [
      "Generative Engine Optimization (GEO)",
      "LLM Search Query Mechanics",
      "AI Overviews & Perplexity Visibility",
      "Semantic Authority & Entity Graphing",
      "Information Gain Scoring"
    ],
    description: "Specialized certification covering the mechanics of AI-powered conversational search engines, modern entity graphs, and strategies to secure brand citations in generative AI responses."
  },
  {
    id: "semrush-seo-analytics",
    title: "SEO Analytics Certification",
    issuer: "Semrush",
    issueDate: "2026",
    credentialId: "Credential on File",
    verificationUrl: "https://www.semrush.com/academy/",
    status: "Verified",
    badgeAccent: "saffron",
    skillsCovered: [
      "Technical SEO Auditing",
      "Keyword Gap & Competitive Intelligence",
      "Backlink Profile Health",
      "Organic Search Visibility Tracking",
      "Core Web Vitals & SERP Diagnostics"
    ],
    description: "Validates deep competency in technical SEO diagnostics, competitive SERP benchmarking, backlink analysis, and data-backed organic growth auditing."
  }
];

export const EDUCATION_DATA: Education = {
  institution: "Dhanekula Institute of Engineering and Technology",
  degree: "Bachelor of Technology (B.Tech)",
  major: "Computer Science and Engineering",
  specialization: "Artificial Intelligence & Machine Learning (AI & ML)",
  period: "2023 – 2027",
  location: "India",
  currentStatus: "Undergraduate (3rd Year Active Candidate)",
  keyFocus: [
    "Data Structures & Algorithmic Problem Solving",
    "Artificial Intelligence Systems & Machine Learning Models",
    "Database Management Systems & Distributed Architectures",
    "Object-Oriented Software Design & System Engineering",
    "Web Technologies, Cloud Fundamentals & Computer Networks"
  ],
  academicHighlights: [
    "Active specialization in Applied AI and Machine Learning models.",
    "Bridging academic algorithmic theory with production software architecture and practical digital marketing ventures.",
    "Lead organizer and collaborator in departmental technical symposiums and prototype demos."
  ]
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Software Engineering & Architecture",
    dimension: "engineer",
    accent: "saffron",
    skills: [
      { name: "Full-Stack Development", level: "Production", tags: ["React", "Node.js", "Express", "TypeScript"], description: "Building scalable, type-safe web applications from 0 to 1." },
      { name: "Frontend Engineering", level: "Advanced", tags: ["React 19", "Tailwind CSS", "Vite", "Motion"], description: "Responsive liquid-glass UI, smooth interactive animations, and accessible layouts." },
      { name: "Backend & REST APIs", level: "Advanced", tags: ["Node.js", "Express", "Microservices", "JWT"], description: "Stateless API design, multi-tenant authentication, and middleware pipelines." },
      { name: "Database Engineering", level: "Proficient", tags: ["PostgreSQL", "SQL", "NoSQL", "Schema Design"], description: "Relational data modeling, ACID transactions, and index optimizations." },
      { name: "Creative 3D & Graphics", level: "Skilled", tags: ["Three.js", "WebGL", "GSAP", "ScrollTrigger"], description: "High-performance GPU particle canvases and interactive visual experiences." },
      { name: "DevOps & Tooling", level: "Proficient", tags: ["Docker", "Git", "GitHub Actions", "CI/CD"], description: "Version control workflows, containerization, and modern deployment setups." }
    ]
  },
  {
    title: "Digital Marketing & Performance Growth",
    dimension: "marketer",
    accent: "green",
    skills: [
      { name: "Search Engine Optimization (SEO)", level: "Certified / Advanced", tags: ["Technical SEO", "Semrush", "On-Page", "Schema JSON-LD"], description: "SERP diagnostics, crawl budget optimization, and semantic content structuring." },
      { name: "Google Ads & Search Campaigns", level: "Certified", tags: ["Google Skillshop", "Smart Bidding", "Search Ads", "Ad Rank"], description: "High-intent paid search campaign setup, keyword match governance, and ROAS tuning." },
      { name: "AI Search & GEO", level: "Certified", tags: ["Semrush AI OS", "Generative Engine Optimization", "Entity Graph"], description: "Optimizing brand presence for AI Overviews, Perplexity, and conversational engines." },
      { name: "Inbound Marketing & Funnels", level: "Certified", tags: ["HubSpot", "Lead Nurturing", "Email Sequences", "Personas"], description: "Buyer journey mapping, friction reduction, and automated lead capture." },
      { name: "Campaign Planning & Content Strategy", level: "Practitioner", tags: ["Thought Leadership", "Copywriting", "B2B Outreach"], description: "Architecting educational campaigns (e.g. 14-day GenAI in Construction) that generate organic inbound traction." },
      { name: "Web & Conversion Analytics", level: "Advanced", tags: ["Google Analytics", "Search Console", "Funnel Metrics"], description: "User behavior tracking, bounce rate remediation, and conversion event tagging." }
    ]
  },
  {
    title: "Entrepreneurship & Venture Strategy",
    dimension: "entrepreneur",
    accent: "white",
    skills: [
      { name: "0-to-1 Startup Inception", level: "Active Founder", tags: ["VCX Mart", "VTCX Incorporate", "Product Scoping"], description: "Navigating ideas from initial napkin sketches to working prototypes and market launches." },
      { name: "Product Strategy & Roadmapping", level: "Advanced", tags: ["PRDs", "Feature Prioritization", "User Validation"], description: "Translating customer pain points into modular development sprints and testable milestones." },
      { name: "Business Model & Unit Economics", level: "Practitioner", tags: ["Pricing Strategy", "Margin Analysis", "Escrow Models"], description: "Structuring viable commission structures, SaaS pricing tiers, and cash-flow models." },
      { name: "Market Research & Competitive Audits", level: "Advanced", tags: ["Industry Mapping", "User Interviews", "TAM / SAM"], description: "Uncovering underserved niches in regional logistics, commerce, and construction." },
      { name: "Collaborative Leadership", level: "Experienced", tags: ["Family Venture", "Team Alignment", "Partner Deals"], description: "Bridging generational industry experience (Tracxi with father) with modern software execution." }
    ]
  },
  {
    title: "Applied AI & Emerging Technologies",
    dimension: "general",
    accent: "saffron",
    skills: [
      { name: "Applied Machine Learning", level: "B.Tech AI & ML", tags: ["Python", "Neural Networks", "Data Pipelines"], description: "Academic and practical grounding in supervised learning, regression, and model tuning." },
      { name: "Generative AI Workflow Integration", level: "Advanced", tags: ["LLMs", "Prompt Engineering", "Agents", "APIs"], description: "Embedding conversational models into content pipelines, customer support, and code generation." },
      { name: "IoT & Hardware System Architecture", level: "Planning Specialist", tags: ["BLE 5.3", "Micro-Sensors", "Firmware Spec", "nRF52840"], description: "Architecting wearable device architectures with battery longevity constraints (WAH)." }
    ]
  }
];

export const TIMELINE_EVENTS: TimelineEntry[] = [
  {
    year: "2019",
    title: "Initial Coding Inception & Curiosity",
    category: "milestone",
    dimension: "all",
    description: "Wrote first lines of code, sparking an enduring obsession with how software tools can reshape physical real-world operations."
  },
  {
    year: "2023",
    title: "Commenced B.Tech in CSE (Artificial Intelligence & Machine Learning)",
    category: "education",
    dimension: "engineer",
    description: "Enrolled at Dhanekula Institute of Engineering and Technology, focusing academic research on algorithms, neural nets, and systems engineering."
  },
  {
    year: "2024",
    title: "Co-Engineering Tracxi with Father",
    category: "venture",
    dimension: "entrepreneur",
    description: "Partnered with father to confront operational chaos in Indian lorry transport. Built and field-tested the Tracxi trip ledger and diesel tracking system."
  },
  {
    year: "2025",
    title: "Founded VCX Mart under VTCX Incorporate",
    category: "venture",
    dimension: "entrepreneur",
    description: "Formally founded VCX Mart as an independent multi-category marketplace venture, taking on full-stack architecture and digital brand stewardship."
  },
  {
    year: "2025",
    title: "Formulated WAH Wearable Safety & Tracxi 2.0 Architectures",
    category: "milestone",
    dimension: "engineer",
    description: "Authored in-depth hardware/software specifications for the WAH personal safety ring ecosystem and Tracxi 2.0 distributed cargo-booking engine."
  },
  {
    year: "2026",
    title: "Digital Marketing Engagements (Fugen WebTech & AOTMS Global)",
    category: "experience",
    dimension: "marketer",
    description: "Executed high-impact campaigns for CivilBook platforms and 14-day GenAI in Construction at Fugen WebTech; led EdTech growth campaigns at AOTMS Global."
  },
  {
    year: "2026",
    title: "Earned Quad Industry Certifications (Google, HubSpot, Semrush)",
    category: "certification",
    dimension: "marketer",
    description: "Validated expertise with Google Ads Search, HubSpot Inbound Marketing, Semrush AI Search OS, and Semrush SEO Analytics credentials."
  },
  {
    year: "Present",
    title: "Unified Command: Software Engineer, Marketer, Entrepreneur",
    category: "milestone",
    dimension: "all",
    description: "Operating at the intersection of technical architecture, algorithmic user acquisition, and startup venture building as Bodepudi Varun Teja."
  }
];

export const RESEARCH_DOCUMENTS: ResearchItem[] = [
  {
    id: "doc-tracxi-arch",
    title: "Tracxi 2.0: Distributed Freight Dispatch & Escrow Settlement Blueprint",
    category: "Architecture",
    date: "2026",
    status: "Public Archive",
    abstract: "A comprehensive system specification detailing multi-tenant transport broker isolation, PostGIS deadhead route minimization algorithms, and automated POD milestone payouts.",
    keyFindings: [
      "Decoupled microservices reduce trip-sheet write latency to sub-80ms under high concurrency.",
      "Escrow milestone architecture eliminates broker default risks, reducing carrier payment disputes by an estimated 90%."
    ],
    tags: ["System Architecture", "Logistics", "PostGIS", "Escrow Engine"]
  },
  {
    id: "doc-genai-construction",
    title: "Generative AI in Construction: 14-Day Content Strategy & Playbook",
    category: "Marketing Playbook",
    date: "2026",
    status: "Public Archive",
    abstract: "Complete analytical retrospective on the 14-day educational campaign executed for Fugen WebTech / CivilBook, analyzing engagement resonance among civil engineers.",
    keyFindings: [
      "Practical prompt templates (e.g. BOQ extraction from PDF drawings) achieved 4.2x higher bookmark rates than general AI buzz articles.",
      "Positioning software as a contractor's assistant rather than a replacement drove 35% higher signup conversion."
    ],
    tags: ["Marketing Playbook", "Content Strategy", "CivilBook", "B2B Growth"]
  },
  {
    id: "doc-wah-hardware",
    title: "WAH Wearable Safety: BLE 5.3 Low-Power State Machine & False-Trigger Dampening",
    category: "Technical Whitepaper",
    date: "2026",
    status: "Confidential / On Request",
    abstract: "Hardware engineering document outlining sleep-state power budgets, sub-miniature ceramic chassis integration, and the dual-stage haptic countdown mechanism.",
    keyFindings: [
      "Achieving 14-day battery life requires aggressive 250ms BLE advertising intervals combined with deep SoC hibernation.",
      "A 10-second silent haptic cancellation window suppresses up to 85% of pocket-compression false dispatches."
    ],
    tags: ["Hardware Spec", "BLE 5.3", "IoT", "Personal Safety"]
  },
  {
    id: "doc-inr-token",
    title: "Sovereign Fiat-Linked Micro-Settlement Protocol for Domestic Supply Chains",
    category: "Business Proposal",
    date: "2025",
    status: "Proposal Draft",
    abstract: "Conceptual whitepaper detailing programmable rupee-pegged ledger tokens for high-velocity FMCG distributor credit reconciliation.",
    keyFindings: [
      "Replacing multi-day manual cheque reconciliation with smart delivery contracts cuts distributor working capital lockup from 14 days to under 2 hours.",
      "Full compliance achieved by mapping ledger tokens directly to regulated commercial bank escrow accounts."
    ],
    tags: ["Fintech Proposal", "Blockchain Concept", "Smart Contracts", "Supply Chain"]
  }
];
