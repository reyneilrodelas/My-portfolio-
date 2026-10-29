import React from "react";
import { portfolio } from "./data.js";

const navigation = [
  ["About", "about"],
  ["Projects", "projects"],
  ["Technical Skills", "skills"],
  ["Experience", "experience"],
  ["Contact", "contact"],
];
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label={`${portfolio.name}, home`}
        >
          <span className="wordmark-mark" aria-hidden="true">
            RR
          </span>
          {portfolio.name}
        </a>
        <nav aria-label="Main navigation">
          {navigation.map(([label, id]) => (
            <a href={`#${id}`} key={id}>
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

function SectionHeading({ eyebrow, children, id }) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={id}>{children}</h2>
    </div>
  );
}

function Introduction() {
  return (
    <section
      className="intro section-wrap"
      id="home"
      aria-labelledby="intro-title"
    >
      <div className="intro-copy">
        <p className="eyebrow">Software · Testing · IT support · Networking</p>
        <h1 id="intro-title">{portfolio.name}</h1>
        <p className="intro-title">{portfolio.title}</p>
        <p className="intro-tagline">{portfolio.tagline}</p>
        <p className="intro-description">{portfolio.introduction}</p>
        <div className="intro-links">
          <a className="button button-primary" href="#projects">
            Explore Projects
          </a>
          <a className="button button-secondary" href={resumeUrl} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
          <a className="text-link" href="#contact">
            Get in touch <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
      <img
        className="profile-photo"
        src={`${import.meta.env.BASE_URL}profile-photo.jpeg`}
        alt={`${portfolio.name} profile`}
      />
    </section>
  );
}

function About() {
  const { degree, school, dates, distinction } = portfolio.education;
  return (
    <section
      className="content-section about-section"
      id="about"
      aria-labelledby="about-title"
    >
      <SectionHeading eyebrow="Background" id="about-title">
        About
      </SectionHeading>
      <div className="about-layout">
        <p className="body-copy">{portfolio.about}</p>
        <aside className="education-note" aria-label="Education">
          <p className="eyebrow">Education</p>
          <h3>{degree}</h3>
          <p>{school}</p>
          <p className="education-date">{dates}</p>
          <p className="education-distinction">{distinction}</p>
        </aside>
      </div>
    </section>
  );
}

function ProjectLinks({ links, note }) {
  return (
    <div className="project-links">
      {links.map(({ label, url }) => (
        <a href={url} key={label} target="_blank" rel="noopener noreferrer">
          {label} <span aria-hidden="true">↗</span>
        </a>
      ))}
      {note && <span className="link-note">{note}</span>}
    </div>
  );
}

function ProjectSection({ section }) {
  return (
    <section className="case-section">
      <h4>{section.heading}</h4>
      {section.content && <p>{section.content}</p>}
      {section.bullets && (
        <ul>
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}
      {section.links && (
        <div className="evidence-links">
          {section.links.map(({ label, url }) => (
            <a href={url} key={label} target="_blank" rel="noopener noreferrer">
              {label} <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      )}
    </section>
  );
}

function ProjectCard({ project, index }) {
  return (
    <article className="project-entry">
      <p className="project-number" aria-hidden="true">
        {String(index + 1).padStart(2, "0")}
      </p>
      <div className="project-content">
        <p className="eyebrow">{project.kind}</p>
        <h3>{project.name}</h3>
        <p className="project-description">{project.summary}</p>
        <p className="technology-list">
          <span className="field-label">Technologies </span>
          {project.technologies.join(" · ")}
        </p>
        <ProjectLinks links={project.links} note={project.linksNote} />
        <details className="case-study" open={project.featured}>
          <summary>Read project case study</summary>
          <div className="case-study-body">
            {project.sections.map((section) => (
              <ProjectSection key={section.heading} section={section} />
            ))}
            {project.files && (
              <div className="source-map">
                <p className="field-label">Repository structure</p>
                <pre>
                  <code>{project.files.join("\n")}</code>
                </pre>
              </div>
            )}
          </div>
        </details>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      className="content-section projects-section"
      id="projects"
      aria-labelledby="projects-title"
    >
      <SectionHeading
        eyebrow="Selected work · Case studies"
        id="projects-title"
      >
        Projects
      </SectionHeading>
      <p className="section-intro">
        A closer look at the problems, implementation, and evidence behind my
        development and testing work.
      </p>
      <div className="projects-list">
        {portfolio.projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.id} />
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section
      className="content-section"
      id="skills"
      aria-labelledby="skills-title"
    >
      <SectionHeading eyebrow="Tools I use and learn" id="skills-title">
        Technical Skills
      </SectionHeading>
      <p className="section-intro">
        A practical mix of development, quality assurance, and IT support
        foundations, built through projects, internship experience, and
        continued practice.
      </p>
      <div className="skills-list">
        {portfolio.skills.map(({ category, items }) => (
          <div className="skill-row" key={category}>
            <h3>{category}</h3>
            <p>{items.join(" · ")}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  const { role, company, dates, summary, responsibilities } =
    portfolio.experience;
  return (
    <section
      className="content-section"
      id="experience"
      aria-labelledby="experience-title"
    >
      <SectionHeading eyebrow="Professional experience" id="experience-title">
        Experience
      </SectionHeading>
      <article className="experience-entry">
        <div className="entry-meta">
          <h3>{role}</h3>
          <p>{company}</p>
          <p className="entry-dates">{dates}</p>
        </div>
        <div>
          <p className="experience-context">{summary}</p>
          <ul className="plain-list">
            {responsibilities.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </section>
  );
}
function Certifications() {
  return (
    <section
      className="content-section"
      id="certifications"
      aria-labelledby="certifications-title"
    >
      <SectionHeading eyebrow="Certifications" id="certifications-title">
        Certifications & Training
      </SectionHeading>
      <ul className="plain-list certifications-list">
        {portfolio.certifications.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

function Contact() {
  const { github, email, linkedin } = portfolio.contact;
  const optionalLinks = [
    email && {
      label: "Email",
      href: `mailto:${email}`,
      text: email,
    },
    linkedin && {
      label: "LinkedIn",
      href: linkedin,
      text: "LinkedIn profile",
    },
  ].filter(Boolean);

  return (
    <section
      className="content-section contact-section"
      id="contact"
      aria-labelledby="contact-title"
    >
      <SectionHeading eyebrow="Contact" id="contact-title">
        Get in touch
      </SectionHeading>
      <div className="contact-layout">
        <p className="body-copy">
          I’m open to entry-level roles such as Associate Network Engineer,
          Junior Network Engineer, IT Support, QA Analyst, and other
          opportunities in IT.
        </p>
        <div className="contact-list">
          <div className="contact-item">
            <h3>Resume</h3>
            <a href={resumeUrl} target="_blank" rel="noopener noreferrer">
              Download / view PDF <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="contact-item">
            <h3>GitHub</h3>
            <a href={github} target="_blank" rel="noopener noreferrer">
              github.com/reyneilrodelas <span aria-hidden="true">↗</span>
            </a>
          </div>
          {optionalLinks.map(({ label, href, text }) => (
            <div className="contact-item" key={label}>
              <h3>{label}</h3>
              <a
                href={href}
                target={label === "LinkedIn" ? "_blank" : undefined}
                rel={label === "LinkedIn" ? "noopener noreferrer" : undefined}
              >
                {text}
              </a>
            </div>
          ))}
          {!email && !linkedin && (
            <p className="contact-note">
              Email and LinkedIn are not published here; no contact details have
              been guessed.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>{portfolio.name} · Entry-Level IT Professional</p>
        <a href="#home">Back to top ↑</a>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Introduction />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
