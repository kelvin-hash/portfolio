export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "JavaScript", "Python (OOP)", "SQL", "C#"],
  },
  {
    title: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "GraphQL APIs",
      "Microservices",
      "WebSockets",
      "Django (Python)",
    ],
  },
  {
    title: "Databases & Caching",
    items: [
      "MongoDB",
      "MySQL",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Upstash",
      "Cloudinary",
      "lua scripting",
    ],
  },
  {
    title: "Tools & Platform",
    items: [
      "Git",
      "Docker",
      "Render",
      "Cloudinary",
      "Clerk",
      "Webhooks",
      "M-Pesa Daraja API",
      "BullMQ",
      "Stripe API",
      "Vercel",
      "GitHub Actions",
    ],
  },
  {
    title: "Automation",
    items: ["UiPath RPA", "Document Understanding", "Excel Automation"],
  },
] as const;

export const projects = [
  {
    slug: "foody",
    title: "foody",
    type: "Food Delivery Platform",
    liveUrl: "https://foody-frontend-4i7t.onrender.com/",
    description:
      "Foody is a full-stack food ordering platform with user authentication, restaurant browsing, order management, and real-time updates.It  integrates real-time payment processing and background job handling to deliver a seamless checkout experience. The system is designed to decouple user interactions from payment execution using a queue-based architecture, ensuring reliability, responsiveness, and fault tolerance during high-demand operations.",
    stack: ["React (Vite)", "Node.js", "Express", "MongoDB", "Redis", "BullMQ", "M-Pesa Daraja API"],
    outcome:
      "Built an end-to-end food delivery platform with user authentication, restaurant browsing, order management, and real-time updates.Designed an asynchronous payment processing system using job queues, reducing API response latency during checkout and ensuring reliable STK push execution with retry mechanisms and callback validation.and Cloudinary media management.",
    implemtaion: [
      "Asynchronous Architecture: By decoupling payment processing from the request-response cycle, the system prevents server blocking and improves user experience during checkout.",

      "Fault Tolerance: Leveraging BullMQ retries and Redis persistence ensures that failed payment attempts can be retried without losing transaction data.",

      "Real-World Payment Integration: Integration with M-Pesa Daraja API demonstrates handling of external payment systems, including secure token generation and webhook-based confirmation.",

      "Scalability: The separation of API server and worker processes allows the system to scale horizontally, handling increased traffic without degrading performance.",

      "User Experience Optimization: Immediate API responses combined with background processing and toast notifications provide users with real-time feedback during payment initiation."
    ],
    highlights: [
      "Asynchronous Architecture: By decoupling payment processing from the request-response cycle, the system prevents server blocking and improves user experience during checkout.",

      "Fault Tolerance: Leveraging BullMQ retries and Redis persistence ensures that failed payment attempts can be retried without losing transaction data.",

      "Real-World Payment Integration: Integration with M-Pesa Daraja API demonstrates handling of external payment systems, including secure token generation and webhook-based confirmation.",

      "Scalability: The separation of API server and worker processes allows the system to scale horizontally, handling increased traffic without degrading performance.",

      "User Experience Optimization: Immediate API responses combined with background processing and toast notifications provide users with real-time feedback during payment initiation."
    ],
  },
  {
    slug: "quip-vault",
    title: "quip-vault",
    type: "Serverless Content App",
    liveUrl: "https://quip-vault.vercel.app/",
    description:
      "QuipVault is a cloud-native API designed to demonstrate high-availability and request governance in a serverless environment. By leveraging a distributed stack, the application ensures that data fetching is both secure and protected against exhaustion attacks..",
    stack: ["Next.js", "Supabase", "Redis", "Clerk"],
    outcome:
      "Architected a 'Serverless-First' stack to reduce infrastructure costs while maintaining 99.9% API availability through distributed rate-limiting.",
    implementation: [
      "Logic Flow: Every incoming request is identified by a unique key (either a userId from Clerk or a hashed IP address).",
      "The Atomic Increment: Using the INCR command in Redis ensures that the request count is updated instantly.",
      "Tiered Access: The system differentiates between (Guest) and (Authenticated) users, granting higher throughput (10 requests/min) to logged-in users compared to anonymous traffic (5 requests/min)."
    ],
    highlights: [
      "Performance vs. Fairness: By implementing rate limiting, the application prevents (noisy neighbors) or malicious scripts from overwhelming the Supabase database, ensuring consistent uptime for all users.",
      "Scalability: Because every component (Vercel, Upstash, Supabase) is serverless, the app can scale from 1 user to 10,000 users without any manual server configuration.",
      "Stateless Security: Using Clerk means the serverless functions don't need to query a database to check if a user is logged in; the session is verified via a secure token in the request header, reducing API latency.",
    ],
  },
  {
    slug: "contextual-chat-system",
    title: "U_SOCKET",
    type: "E-commerce Messaging Feature",
    liveUrl: "https://contextual-chat-system.vercel.app/",
    description:
      "An inbuilt buyer-seller chat system created for an e-commerce platform with a contextual real-time messaging and persistent conversation history.",
    stack: ["TypeScript", "WebSockets", "MySQL"],
    outcome:
      "Delivered seamless refresh-free messaging, optimized chat data retrieval, and improved team-supported platform functionality.",
    implementation: [
      "WebSocket Integration: Implemented a WebSocket server to enable real-time, bidirectional communication between buyers and sellers, allowing for instant message delivery without page refreshes.",
      "MySQL Schema Design: Developed a relational database schema to store message history, user sessions, and conversation context, ensuring efficient data retrieval and persistence.",
    ],
    highlights: [
      "Real-time contextual chat using WebSockets.",
      "MySQL schema design for message history and session context.",
      "Collaboration on debugging and feature upgrades from user feedback.",
    ],
  },
  {
    slug: "invoice-processing-automation",
    title: "Invoice Processing Automation",
    type: "UiPath Automation Project",
    liveUrl: "https://invoice-processing-automation.vercel.app/",
    description:
      "A document-processing automation for that extracts invoice data from email attachments, processes it using UiPath's Document Understanding, and compiles structured reports in Excel.",
    stack: ["UiPath", "Document Understanding", "Excel"],
    outcome:
      "Automated invoice date and amount extraction, email attachment triggers, and structured Excel reporting.",
    implementation: [
      "Email Trigger: The automation is set to trigger whenever a new email with an attachment arrives in the designated inbox, ensuring timely processing of incoming invoices.",
      "Document Understanding: Leveraging UiPath's Document Understanding capabilities, the system extracts key fields such as invoice date and amount from various invoice formats, improving accuracy and reducing manual data entry.",
      "Excel Reporting: Extracted data is compiled into a structured Excel report, allowing for easy analysis and record-keeping of processed invoices."
    ],
    highlights: [
      "Document Understanding flow for invoice field extraction.",
      "Automated trigger handling for incoming email attachments.",
      "Structured reporting workflow into Excel outputs.",
    ],
  },
  {
    slug: "portfolio-platform",
    title: "Portfolio",
    type: "Personal Brand Site",
    liveUrl: "https://portfolio-platform.vercel.app/",
    description:
      "A portfolio site for presenting my background, technical strengths, and selected engineering work in a clean, responsive format.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    outcome:
      "Designed to bring together skills, projects, education, and certification in a single polished presentation.",
    highlights: [
      "Responsive information architecture for fast scanning.",
      "Focused visual system for professional presentation.",
      "Project detail routing to support deeper portfolio storytelling.",
    ],
  },
] as const;

export const certificates = [
  {
    name: "UiPath Automation Developer Associate Training",
    issuer: "UiPath Academy",
    year: "2025",
  },
] as const;

export const education = [
  {
    title: "Bachelor of Science in Information Technology",
    institution: "Masinde Muliro University of Science and Technology",
    period: "Graduating 2026",
    details:
      "Formal training in software development, information systems, databases, and applied problem solving.",
  },
] as const;

export const projectCount = projects.length;

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export function getProjectImplementation(
  project: (typeof projects)[number]
) {
  if ("implementation" in project) {
    return project.implementation;
  }

  if ("implemtaion" in project) {
    return project.implemtaion;
  }

  return [];
}

export function getProjectGithubUrl(project: (typeof projects)[number]) {
  if ("githubUrl" in project) {
    return project.githubUrl;
  }

  return "https://github.com/kelvin-hash";
}
