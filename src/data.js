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
      category: "QA internship",
      items: [
        "Functional testing",
        "Regression testing",
        "Defect reporting",
        "Test cases and documentation",
      ],
    },
    {
      category: "Development projects",
      items: ["React", "JavaScript", "TypeScript", "React Native", "Expo"],
    },
    {
      category: "Testing practice",
      items: ["Playwright"],
    },
    {
      category: "Tools and services",
      items: ["Git", "GitHub", "Supabase"],
    },
    {
      category: "Additional knowledge",
      items: ["Basic IT troubleshooting", "Technical documentation"],
    },
  ],
  experience: {
    role: "Quality Assurance Intern",
    company: "Tidewrk",
    dates: "February 2026 – May 2026",
    responsibilities: [
      "Performed functional and regression testing.",
      "Identified, documented, and reported software defects.",
      "Maintained test cases, test data, and technical documentation.",
      "Practiced test automation using Playwright.",
    ],
  },
  projects: [
    {
      id: "our-system",
      name: "ScanWizard (Our-System)",
      kind: "Mobile product locator",
      summary:
        "A React Native and Expo application for searching products by barcode or text and finding nearby stores. The repository README identifies the application as ScanWizard; Our-System is the GitHub repository name, so they are presented as one project rather than duplicated.",
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
            "Finding a product in nearby stores can mean checking shops one at a time. This app brings product lookup and nearby-store discovery into one mobile workflow.",
        },
        {
          heading: "My contribution",
          content:
            "The public commit history under my GitHub account records a code-structure refactor and later updates to the profile screen and store-approval rejection modal. The repository does not document individual task allocation, so I’m not claiming sole authorship of the application.",
          links: [
            {
              label: "Structure refactor",
              url: "https://github.com/reyneilrodelas/Our-System-/commit/762c032c64057f427282c7644101894fc2adadf4",
            },
            {
              label: "Profile and approval UI update",
              url: "https://github.com/reyneilrodelas/Our-System-/commit/e8a51fc8df7e7a2d12807bea767bc963a8273294",
            },
          ],
        },
        {
          heading: "Implementation",
          bullets: [
            "The Expo app is written in TypeScript and organized into shared, store-owner, and administrator screens, with separate components, context, configuration, and data-access modules.",
            "The scanner looks up a product by barcode through Supabase and routes a match to the result screen.",
            "The search screen provides delayed suggestions and queries approved products; location can be included when loading results.",
            "The map uses React Native Maps and location services to display stores and filter them by a selectable radius. The source appendix describes Haversine distance calculation.",
            "Authentication and store-management flows include separate store-owner and administrator screens.",
          ],
        },
        {
          heading: "Technical notes",
          content:
            "Search and scanning lead into a shared result flow, while product and store data access is kept in a Supabase module. The repository includes technical documentation, but it does not describe a specific challenge-and-resolution story; this case study sticks to implementation details visible in the code and docs.",
        },
        {
          heading: "Validation and limitations",
          content:
            "The package manifest documents Expo start, Android, iOS, and web scripts, but no test script. I found no published test-run results or live demo in the repository materials reviewed, so I’m not making claims about mobile-device validation or test coverage.",
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
      name: "QA & Playwright Practice",
      kind: "Testing and quality",
      summary:
        "Testing work across my QA internship and separate personal Playwright practice. The internship responsibilities and personal learning are kept distinct.",
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
          heading: "Internship work",
          content:
            "At Tidewrk, I performed functional and regression testing, reported defects, and maintained test cases, test data, and technical documentation. I also practiced test automation using Playwright.",
        },
        {
          heading: "Personal practice",
          content:
            "Separately, I use Playwright for UI automation practice. No personal test repository, target application, or test-run results were supplied for this portfolio, so I have not listed specific scenarios or coverage.",
        },
        {
          heading: "Validation and next steps",
          content:
            "The work described here reflects the responsibilities and practice provided; it does not claim automated coverage or measured results. A public sample test repository can be linked if one is prepared for sharing.",
        },
      ],
      links: [],
      linksNote: "No public test repository was provided.",
    },
    {
      id: "portfolio-site",
      name: "Personal Portfolio",
      kind: "Web development",
      summary:
        "This responsive portfolio presents my work and explains implementation details using reusable React components and regular CSS.",
      technologies: ["React", "JavaScript", "CSS", "Vite"],
      sections: [
        {
          heading: "Problem",
          content:
            "A project list alone does not explain the engineering decisions behind the work. This site gives each selected project a concise case study while keeping the source information editable.",
        },
        {
          heading: "My contribution",
          content:
            "I designed and implemented the portfolio as a single-page React application, with reusable section and project components and project information stored separately from presentation.",
        },
        {
          heading: "Implementation and validation",
          content:
            "Navigation uses semantic in-page links; project case studies use native disclosure controls; regular CSS provides responsive layouts, keyboard focus states, and reduced-motion support. I verified a production build with Vite and checked the rendered page in a browser.",
        },
        {
          heading: "Limitations and next steps",
          content:
            "This project has no public repository or deployed demo link attached yet. Contact links and a real profile photo can be added when available.",
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
