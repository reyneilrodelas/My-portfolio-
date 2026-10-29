export const portfolio = {
  name: "Reyneil Rodelas",
  title: "Information Technology Graduate | Associate Network Engineer",
  tagline:
    "Open to entry-level roles such as Associate Network Engineer, Junior Network Engineer, IT Support, QA Analyst, and other opportunities in IT.",
  introduction:
    "I’m an Information Technology graduate with foundational knowledge of computer networking, IP addressing, subnetting, network security, operating systems, and cloud computing. I bring experience in software testing, issue identification, technical documentation, and systematic troubleshooting through my QA internship and academic projects, and I’m eager to grow in LAN/WAN operations, network administration, and cloud infrastructure.",
  about:
    "My IT studies and projects have given me a practical foundation in networking, troubleshooting, software testing, and technical documentation. During my QA internship at Tidewrk, I executed functional and regression testing, tracked issues, maintained test cases and data, and documented findings with clear attention to detail. I’m especially interested in building practical skills in network operations, wireless networking, device configuration, and cloud infrastructure as an Associate Network Engineer.",
  skills: [
    {
      category: "Networking fundamentals",
      items: [
        "TCP/IP fundamentals",
        "IP addressing",
        "Subnetting",
        "LAN/WAN concepts",
        "Basic network topologies",
        "Connectivity troubleshooting",
      ],
    },
    {
      category: "Networking tools and technologies",
      items: [
        "Cisco Packet Tracer",
        "Basic router and switch configuration",
        "Network simulation",
        "VirtualBox",
        "VMware",
      ],
    },
    {
      category: "Network security and cloud",
      items: [
        "Network security principles",
        "Access control concepts",
        "AWS basics",
        "Introductory cloud labs",
        "Virtualization fundamentals",
      ],
    },
    {
      category: "IT support and documentation",
      items: [
        "Windows OS fundamentals",
        "Software installation and configuration",
        "Hardware troubleshooting",
        "Technical issue documentation",
        "Microsoft Word",
        "Excel",
        "PowerPoint",
      ],
    },
    {
      category: "Quality assurance",
      items: [
        "Functional testing",
        "Regression testing",
        "Defect reporting",
        "Test case maintenance",
        "Issue validation",
      ],
    },
    {
      category: "Tools and applications",
      items: ["Git", "GitHub", "Visual Studio Code", "Jira", "MySQL"],
    },
    {
      category: "Professional skills",
      items: [
        "Attention to detail",
        "Analytical problem-solving",
        "Written communication",
        "Team collaboration",
        "Adaptability",
        "Continuous learning",
      ],
    },
  ],
  experience: {
    role: "Quality Assurance Intern",
    company: "Tidewrk",
    dates: "February 2026 – May 2026",
    summary:
      "Supported software quality through functional and regression testing, issue validation, and organized technical documentation for application reliability.",
    responsibilities: [
      "Executed functional and regression checks to verify application behavior and reliability.",
      "Assisted with issue tracking and validation of fixes to confirm reported problems were addressed.",
      "Used a systematic approach to investigate unexpected results, compare actual and expected behavior, and document findings.",
      "Created and maintained test cases, test data, and technical documentation to support testing activities.",
      "Communicated testing results and documented issues clearly with team members to support application quality.",
    ],
  },
  projects: [
    {
      id: "our-system",
      name: "ScanWizard: Product Locator Application with Customizable Distance Tracker",
      kind: "Full-Stack Development · Academic Team Project",
      summary:
        "A mobile application that enables users to scan product barcodes and QR codes, find related products, and locate nearby stores carrying them using a customizable search radius.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "React Navigation",
        "React Native Maps",
        "Expo Camera",
        "Expo Location",
      ],
      sections: [
        {
          heading: "Problem",
          content:
            "Finding a product and then locating a nearby store can take several separate searches. ScanWizard brings product lookup and store discovery together in one mobile experience.",
        },
        {
          heading: "My contribution",
          content:
            "I developed ScanWizard as a full-stack mobile application with the assistance of AI tools throughout the development process. I worked on the application's frontend, Supabase backend integration, barcode scanning, product search, location-based store discovery, and customizable search radius. I also contributed to the app structure, profile interface, and store approval workflows.",
          links: [
            {
              label: "View Source Code on GitHub",
              url: "https://github.com/reyneilrodelas/Our-System-",
            },
          ],
        },
        {
          heading: "Implementation",
          bullets: [
            "Built in TypeScript with Expo using separate shared, store-owner, and administrator screens.",
            "Integrated barcode scanning and text search with product data stored in Supabase.",
            "Implemented nearby-store discovery using map and location services with a customizable distance tracker.",
            "Developed product and store management functions for organizing product availability and store information.",
            "Participated in system testing, troubleshooting, database management, and interface development.",
          ],
        },
        {
          heading: "Recognition",
          content:
            "Awarded 2nd Best Capstone Award for ScanWizard.",
        },
        {
          heading: "Validation and limitations",
          content:
            "The repository includes Expo scripts for Android, iOS, and web, but no test script or published test results. The case study therefore describes implementation and contributions without claiming complete formal validation beyond the project’s development workflow.",
        },
      ],
      links: [
        {
          label: "View on GitHub",
          url: "https://github.com/reyneilrodelas/Our-System-",
        },
      ],
      files: [
        "App.tsx",
        "src/screens/shared/",
        "src/screens/components/",
        "src/context/",
        "src/lib/supabase.ts",
      ],
      featured: true,
    },
    {
      id: "safety-security-system",
      name: "Web-Based Safety and Security Services Unit Management System",
      kind: "Web Development · Academic Project",
      summary:
        "A web-based system for managing personnel, incident reports, schedules, and records for a safety and security services unit.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "XAMPP"],
      sections: [
        {
          heading: "Problem",
          content:
            "Safety and security information can become scattered across manual records and multiple sources. A centralized system helps organize and access important operational data more efficiently.",
        },
        {
          heading: "My contribution",
          content:
            "I served as a co-developer for the front-end and back-end, helping implement modules for managing personnel, incident reports, schedules, and records.",
        },
        {
          heading: "Implementation",
          bullets: [
            "Developed a centralized system for managing personnel, incident reports, schedules, and records.",
            "Created user-friendly interfaces to improve information organization and accessibility.",
            "Applied web development, database management, and system design principles throughout the project.",
          ],
        },
      ],
      links: [],
    },
    {
      id: "qa-testing",
      name: "Software Testing & Playwright",
      kind: "Quality assurance · Internship and practice",
      summary:
        "Hands-on QA internship experience in functional and regression testing, supported by ongoing Playwright practice and issue documentation.",
      technologies: [
        "Functional testing",
        "Regression testing",
        "Playwright",
        "Defect documentation",
        "Jira",
      ],
      sections: [
        {
          heading: "Problem",
          content:
            "Changes can introduce defects or disrupt existing behavior. Structured checks and clear defect reports help make issues easier to reproduce and address.",
        },
        {
          heading: "QA internship",
          content:
            "At Tidewrk, I tested application functionality and regression behavior, validated fixes, and maintained test cases, test data, and technical documentation.",
        },
        {
          heading: "Playwright practice",
          content:
            "I’m building familiarity with browser-based UI automation using Playwright. This is separate from my internship testing responsibilities; no personal test results or coverage are claimed here.",
        },
      ],
      links: [],
    },
    {
      id: "portfolio-site",
      name: "Personal Portfolio",
      kind: "Independent project · Web development",
      summary:
        "Designed and built this responsive portfolio to present my projects, technical skills, and QA experience in one clear, accessible site.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      sections: [
        {
          heading: "Problem",
          content:
            "A project list alone doesn’t show how work was built or what I contributed. This portfolio gives selected projects context and keeps the content easy to maintain.",
        },
        {
          heading: "My contribution",
          content:
            "I designed and implemented the portfolio as a single-page React application, with reusable section and project components and project information stored separately from presentation.",
        },
        {
          heading: "Implementation and validation",
          content:
            "Built with reusable React components, Vite, and responsive CSS. Includes semantic in-page navigation and keyboard-accessible project details. Verified the production build and checked the rendered page in a browser.",
        },
        {
          heading: "Next steps",
          content:
            "Continue improving the portfolio as I build and document new projects and practical skills.",
        },
      ],
      links: [],
      linksNote: "This source folder has not been published to a repository.",
    },
  ],
  education: {
    degree: "Bachelor of Science in Information Technology",
    school: "Sorsogon State University – Bulan Campus",
    dates: "August 2022 – June 2026",
    distinction: "Academic Distinction",
  },
  certifications: [
    "Hardware and Upgrade Support — Cisco Networking Academy",
    "IT Customer Support Basic — Cisco Networking Academy",
    "Networking Basics — Cisco Networking Academy",
  ],
  contact: {
    github: "https://github.com/reyneilrodelas",
    email: "reyneilrodelas29@gmail.com",
    linkedin: "https://www.linkedin.com/in/reyneil-rodelas/",
  },
};
