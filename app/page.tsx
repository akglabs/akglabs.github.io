import Image from "next/image";

const proof = [
  { value: "10+", label: "Years in software" },
  { value: "500+", label: "LinkedIn connections" },
  { value: "Microsoft", label: "Current workplace" },
  { value: "Hyderabad", label: "Location" },
];

const strengths = [
  {
    title: "AI Product Engineering",
    text: "Build and ship AI-enabled product capabilities from idea to production with strong delivery discipline.",
  },
  {
    title: "Architecture and Scale",
    text: "Design service boundaries, platform patterns, and technical standards that keep systems maintainable.",
  },
  {
    title: "Full-Stack Execution",
    text: "Bridge backend reliability and frontend clarity so product value is obvious and dependable.",
  },
];

const timeline = [
  {
    period: "Now",
    title: "AI Dev Lead · Microsoft",
    text: "Leading impactful engineering initiatives and aligning technical execution with product outcomes.",
  },
  {
    period: "Focus",
    title: "Software Architect · Full-Stack Developer",
    text: "Driving practical technical decisions, clean implementation, and consistent release quality.",
  },
  {
    period: "Education",
    title: "BITS Pilani",
    text: "Strong engineering foundation that informs systems thinking and problem-solving rigor.",
  },
];

const blogs = [
  {
    title: "BYO Thread Storage in Azure AI Foundry using Python",
    summary:
      "Published a technical deep-dive on Azure AI Foundry BYO Thread Storage to help teams integrate BYO Thread features into real workloads.",
    source: "Microsoft Community Hub",
    href: "https://techcommunity.microsoft.com/discussions/azure-ai-foundry-discussions/byo-thread-storage-in-azure-ai-foundry-using-python/4468147",
  },
  {
    title: "Understanding Prompt Injection: The New Security Frontier in the Age of AI",
    summary:
      "Published a security-focused article on prompt injection threats and defensive practices to improve secure AI adoption.",
    source: "Medium",
    href: "https://medium.com/@abhiguptame/%EF%B8%8F-understanding-prompt-injection-the-new-security-frontier-in-the-age-of-ai-61f401dd78eb",
  },
  {
    title: "Threat Modeling & Security Design Review in SDL",
    summary:
      "Published guidance on threat modeling and security design reviews in the SDL lifecycle to secure software from the start.",
    source: "Medium",
    href: "https://medium.com/@abhiguptame/threat-modeling-security-design-review-in-sdl-securing-software-from-the-start-f76ac480ef3d",
  },
  {
    title: "Building Secure Software: A Practical Guide to the Security Development Lifecycle (SDL)",
    summary:
      "Published a practical SDL guide covering how to embed security into design and development from the earliest stages.",
    source: "Medium",
    href: "https://medium.com/@abhiguptame/building-secure-software-a-practical-guide-to-the-security-development-lifecycle-sdl-6d2eace77dbc",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/akglabs" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhiguptame/" },
  { label: "Email", href: "mailto:abhiguptame@gmail.com" },
];

export default function Home() {
  return (
    <div className="site-wrap" id="top">
      <header className="header">
        <div className="container nav-shell">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true">
              <Image
                src="/Abhishek_Gupta_Profile_Pic.png"
                alt=""
                fill
                sizes="42px"
                className="brand-avatar"
              />
            </span>
            <span className="brand-text">
              Abhishek Kumar Gupta
              <small>AI Dev Lead · Software Architect</small>
            </span>
          </a>

          <nav className="nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#strengths">Strengths</a>
            <a href="#experience">Experience</a>
            <a href="#blogs">Blogs</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Personal portfolio</p>
              <h1>Building reliable software systems with product clarity.</h1>
              <p className="lead">
                AI Dev Lead at Microsoft with 10+ years of experience across
                platform engineering, architecture, and full-stack product
                delivery. Focused on high standards, practical decisions, and
                outcomes that last.
              </p>

              <div className="actions">
                <a className="btn btn-primary" href="#strengths">
                  View strengths
                </a>
                <a
                  className="btn btn-secondary"
                  href="/Abhishek%20Kumar%20Gupta%20LeadSDE.pdf"
                >
                  Download resume
                </a>
              </div>
            </div>

            <aside className="hero-card" aria-label="Profile summary">
              <p>AI Dev Lead at Microsoft</p>
              <span>Full-stack Developer · BITS Pilani · Hyderabad</span>
            </aside>
          </div>
        </section>

        <section className="proof" aria-label="Key profile metrics">
          <div className="container proof-grid">
            {proof.map((item) => (
              <article className="proof-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="strengths">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Core strengths</p>
              <h2>Strong ownership from architecture to product impact.</h2>
            </div>
            <div className="cards-3">
              {strengths.map((item) => (
                <article className="feature-card" key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Experience</p>
              <h2>Career progression built on systems thinking and delivery.</h2>
            </div>

            <div className="timeline">
              {timeline.map((item) => (
                <article className="timeline-item" key={item.title}>
                  <span>{item.period}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="blogs">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Blogs</p>
              <h2>Selected articles on AI engineering and security.</h2>
            </div>

            <div className="cards-3">
              {blogs.map((blog) => (
                <article className="feature-card" key={blog.href}>
                  <h3>{blog.title}</h3>
                  <p>{blog.summary}</p>
                  <a
                    className="blog-link"
                    href={blog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Read on {blog.source}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="container cta-grid">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Open to impactful engineering and architecture opportunities.</h2>
            </div>

            <div className="cta-actions">
              <a className="btn btn-primary" href="/Abhishek%20Kumar%20Gupta%20LeadSDE.pdf">
                Open resume
              </a>
              <div className="link-row">
                {links.map((item) => (
                  <a key={item.label} href={item.href}>
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <p>© 2026 Abhishek Kumar Gupta. Crafted with Next.js.</p>
        </div>
      </footer>
    </div>
  );
}