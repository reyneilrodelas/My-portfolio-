export const portfolio = {
  name: "Reyneil Rodelas",
  title: "Entry-Level IT Professional",
  tagline:
    "Open to entry-level roles such as Software Engineer, Junior Tester/QA, IT Assistant, and Network Associate, as well as other opportunities in IT.",
  introduction:
    "I’m an Information Technology graduate with experience in software development and quality assurance, along with a foundation in IT troubleshooting and technical documentation. I’m eager to contribute, keep learning, and grow in a role where I can solve technical problems and support users and teams.",
  about:
    "My Information Technology studies and projects have given me experience working with mobile and web application technologies. During my QA internship at Tidewrk, I performed functional and regression testing, documented defects, maintained test cases and technical documentation, and practiced Playwright. I’m open to entry-level roles such as Software Engineer, Junior Tester/QA, IT Assistant, and Network Associate. I’m motivated to keep learning and contribute to a team wherever I can help solve technical problems.",
  skills: [
    {
      category: "Quality assurance",
      items: [
        "Functional testing",
        "Regression testing",
        "Test case maintenance",
        "Defect reporting and documentation",
      ],
    },
    {
      category: "Software development",
      items: [
        "React",
        "JavaScript",
        "TypeScript",
        "React Native",
        "Expo",
        "CSS",
        "HTML",
        "PHP",
        "SQL",
        "Node.js",
      ],
    },
    {
      category: "Test automation",
      items: ["Playwright"],
    },
    {
      category: "Tools and data services",
      items: ["Git", "GitHub", "Supabase"],
    },
    {
      category: "IT support foundations",
      items: ["Basic IT troubleshooting", "Technical documentation"],
    },
  ],
  experience: {
    role: "Quality Assurance Intern",
    company: "Tidewrk",
    dates: "February 2026 – May 2026",
    summary:
      "Supported software quality through hands-on functional and regression testing, clear defect reporting, and organized test documentation.",
    responsibilities: [
      "Executed functional and regression checks to evaluate application behavior.",
      "Identified, documented, and reported defects to support investigation and resolution.",
      "Maintained test cases, test data, and technical documentation.",
      "Built familiarity with UI test automation by practicing with Playwright.",
    ],
  },
  projects: [
    {
      id: "our-system",
      name: "ScanWizard: Product Locator Application with Customizable Distance Tracker.",
      kind: "Full-Stack Development · Academic Team Project",
      summary:
        "A mobile application that combines barcode scanning, product search, nearby-store discovery, and a customizable search radius using React Native, Expo, TypeScript, and Supabase.",
      technologies: [
        "React Native",
        "Expo",
        "TypeScript",
        "Supabase",
        "Expo Camera",
        "Expo Location",
        "React Native Maps",
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
            "I developed ScanWizard as a full-stack mobile application with the assistance of AI tools throughout the development process. I worked on the application's frontend, Supabase backend integration, barcode scanning, product search, location-based store discovery, and customizable search radius. I also worked on the application's code structure, profile interface, and store-approval workflows.",
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
            "Implemented in TypeScript with Expo and separated into shared, store-owner, and administrator screens.",
            "Connects barcode scanning and text search to product data stored in Supabase.",
            "Provides nearby-store discovery with maps, location services, and a selectable search radius.",
            "Organizes UI components, app context, configuration, and Supabase data access into separate modules.",
            "Includes distinct authentication and store-management flows for store owners and administrators.",
          ],
        },
        {
          heading: "Technical notes",
          content:
            "Barcode scanning and text search feed into a shared product-result flow, while Supabase access is organized in a dedicated data module. The project combines mobile UI, backend data access, and location-aware discovery.",
        },
        {
          heading: "Validation and limitations",
          content:
            "The repository includes Expo scripts for Android, iOS, and web, but no test script or published test results. The case study therefore describes the implementation without claiming test coverage or device-validation results.",
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
      id: "qa-testing",
      name: "Software Testing & Playwright",
      kind: "Quality assurance · Internship and practice",
      summary:
        "Hands-on QA internship experience in functional and regression testing, supported by ongoing Playwright practice. Internship work and independent learning are described separately.",
      technologies: [
        "Functional testing",
        "Regression testing",
        "Playwright",
        "Defect documentation",
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
            "At Tidewrk, I tested application functionality and regression behavior, reported defects, and maintained test cases, test data, and technical documentation.",
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
  contact: {
    github: "https://github.com/reyneilrodelas",
    email: "reyneilrodelas29@gmail.com",
    linkedin: "https://www.linkedin.com/in/reyneil-rodelas/",
  },
};
