"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Reveal } from "@/components/ui/reveal";
import { ScrollProgress } from "@/components/ui/scroll-progress";

type Project = {
  name: string;
  problem: string;
  architecture: string;
  impact: string;
  decisions: string[];
  githubUrl: string;
  liveUrl: string;
};

const socialLinks = [
  { label: "GitHub", href: "https://github.com/abhiguptame" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/abhiguptame/" },
  { label: "Email", href: "mailto:abhiguptame@gmail.com" },
];

const proof = [
  { value: "10+", label: "Years in engineering" },
  { value: "3B+", label: "Daily messages processed" },
  { value: "120K+", label: "Enterprise users served" },
  { value: "24+", label: "Engineers led" },
  { value: "20+", label: "Production releases" },
  { value: "87%", label: "Ticket triage effort reduction" },
];

const whatIBuild = [
  {
    title: "Enterprise AI Platforms",
    items: ["Agentic orchestration", "RAG architecture", "Enterprise copilots"],
  },
  {
    title: "Distributed Cloud-Native Systems",
    items: ["Event-driven services", "High-throughput processing", "Resilience by design"],
  },
  {
    title: "Intelligent Workflow Automation",
    items: ["Operational AI workflows", "AI-powered modernization", "Automation at scale"],
  },
  {
    title: "Secure & Observable Platforms",
    items: ["Security-first engineering", "Telemetry and diagnostics", "Reliability governance"],
  },
];

const currentFocus = [
  "Agentic AI orchestration for enterprise workflows",
  "AI-powered operational excellence and ticket automation",
  "Enterprise RAG systems with strong governance",
  "Distributed AI workflow architecture on Azure",
  "Cloud-native AI infrastructure and observability",
];

const leadershipPoints = [
  "Led distributed engineering teams across enterprise AI and cloud modernization initiatives.",
  "Guided architecture reviews, scalability decisions, and roadmap execution for high-availability systems.",
  "Mentored engineers in backend systems, reliability, observability, and AI platform development.",
  "Drove secure engineering practices, release governance, and production reliability excellence.",
];

const projects: Project[] = [
  {
    name: "Kaseya AI Digital Worker",
    problem:
      "Enterprise support workflows suffered from manual triaging delays and inconsistent SLA performance.",
    architecture:
      "Designed Agentic AI orchestration with event-driven microservices on AKS, plus telemetry-first observability for resilient scaling.",
    impact:
      "Reduced ticket triaging effort by 87% (12 minutes to 1.5 minutes), improving response times and operational efficiency.",
    decisions: ["Agentic workflow engine", "Fault-tolerant async processing", "Telemetry-first platform"] ,
    githubUrl: "https://github.com/abhiguptame",
    liveUrl:
      "https://www.linkedin.com/in/abhiguptame/",
  },
  {
    name: "Enterprise AI Assistant Experience",
    problem:
      "Large enterprise teams needed context-rich AI support across multiple productivity channels.",
    architecture:
      "Integrated enterprise knowledge sources and high-volume context pipelines across Web, Microsoft 365 Copilot, Teams, and SharePoint.",
    impact:
      "Enabled multi-channel AI assistance for 120K+ users with 500M+ knowledge/file contexts to improve answer relevance.",
    decisions: ["Context federation", "Multi-channel delivery", "Enterprise access controls"],
    githubUrl: "https://github.com/abhiguptame",
    liveUrl:
      "https://www.linkedin.com/in/abhiguptame/",
  },
  {
    name: "Renault-Nissan Connected Platform",
    problem:
      "Connected-vehicle product lines required scalable event processing with strict release and reliability expectations.",
    architecture:
      "Architected event-driven cloud-native platform services across 8+ products with strong release governance and reliability controls.",
    impact:
      "Reduced per-vehicle platform cost by 63% (EUR 0.54 to EUR 0.20) while sustaining production quality across ~20 releases.",
    decisions: ["Domain-aligned service boundaries", "Cost-aware architecture", "Release quality gates"],
    githubUrl: "https://github.com/abhiguptame",
    liveUrl:
      "https://www.linkedin.com/in/abhiguptame/",
  },
];

const timeline = [
  {
    year: "2021 - Present",
    role: "Senior Consultant, Microsoft GCID",
    text: "Leading AI transformation and platform modernization initiatives across enterprise programs.",
  },
  {
    year: "2020 - 2021",
    role: "R&D Engineer, ABB",
    text: "Built scalable cloud-native services and reusable engineering frameworks for enterprise applications.",
  },
  {
    year: "2018 - 2020",
    role: "Deputy Manager, Deloitte",
    text: "Delivered tax technology platforms with cloud-native services, automation pipelines, and quality practices.",
  },
  {
    year: "2016 - 2018",
    role: "Software Engineer, 42Gears",
    text: "Contributed to enterprise mobility and endpoint management features focused on security and scale.",
  },
];

const achievements = [
  "Delivered ~20 consecutive platform releases with zero critical/high incidents in connected-car systems.",
  "Led architecture and delivery for multi-team programs, including pods spanning 24+ engineers.",
  "Built high-throughput systems processing 3B+ daily messages across enterprise workloads.",
  "Drove global stakeholder collaboration across US, EU, and EMEA engineering organizations.",
];

const principles = [
  "Build for reliability first",
  "Design for scale from day one",
  "Optimize for observability and fast diagnostics",
  "Prefer platform thinking over feature thinking",
  "Automate operational complexity wherever possible",
];

const blogs = [
  {
    title: "BYO Thread Storage in Azure AI Foundry using Python",
    href: "https://techcommunity.microsoft.com/discussions/azure-ai-foundry-discussions/byo-thread-storage-in-azure-ai-foundry-using-python/4468147",
    source: "Microsoft Community Hub",
  },
  {
    title: "Understanding Prompt Injection: The New Security Frontier in the Age of AI",
    href: "https://medium.com/@abhiguptame/%EF%B8%8F-understanding-prompt-injection-the-new-security-frontier-in-the-age-of-ai-61f401dd78eb",
    source: "Medium",
  },
  {
    title: "Threat Modeling & Security Design Review in SDL",
    href: "https://medium.com/@abhiguptame/threat-modeling-security-design-review-in-sdl-securing-software-from-the-start-f76ac480ef3d",
    source: "Medium",
  },
  {
    title: "Building Secure Software: A Practical Guide to SDL",
    href: "https://medium.com/@abhiguptame/building-secure-software-a-practical-guide-to-the-security-development-lifecycle-sdl-6d2eace77dbc",
    source: "Medium",
  },
];

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 50, y: 50 });

  const heroGlowStyle = useMemo(
    () => ({
      left: `${mousePosition.x}%`,
      top: `${mousePosition.y}%`,
    }),
    [mousePosition],
  );

  return (
    <div className="relative isolate overflow-x-hidden pb-16 light:bg-slate-50">
      <ScrollProgress />

      <div className="pointer-events-none fixed inset-0 -z-20 hero-grid" />
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(56,189,248,0.16),transparent_60%)]" />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl light:border-slate-200 light:bg-white/80">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <a href="#top" className="flex items-center gap-3">
            <span className="relative h-10 w-10 overflow-hidden rounded-full border border-white/20 light:border-slate-300">
              <Image src="/Abhishek_Gupta_Profile_Pic.png" alt="Abhishek Kumar Gupta" fill sizes="40px" className="object-cover object-top" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-sm font-semibold text-white light:text-slate-900">Abhishek Kumar Gupta</span>
              <span className="block text-xs text-slate-400 light:text-slate-600">Lead Software Development Engineer | Distributed Systems & AI Architect</span>
            </span>
          </a>

          <nav className="hidden items-center gap-2 md:flex">
            {[
              ["About", "about"],
              ["What I Build", "build"],
              ["Leadership", "leadership"],
              ["Case Studies", "projects"],
              ["Experience", "experience"],
              ["Focus", "focus"],
              ["Blogs", "blogs"],
              ["Contact", "contact"],
            ].map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className="rounded-full px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:bg-slate-100"
              >
                {label}
              </a>
            ))}
          </nav>

        </div>
      </header>

      <main id="top" className="relative">
        <section
          id="about"
          className="section-shell relative pt-16 sm:pt-20"
          onMouseMove={(event) => {
            const rect = event.currentTarget.getBoundingClientRect();
            const x = ((event.clientX - rect.left) / rect.width) * 100;
            const y = ((event.clientY - rect.top) / rect.height) * 100;
            setMousePosition({ x, y });
          }}
        >
          <motion.div
            style={heroGlowStyle}
            className="pointer-events-none absolute h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/25 blur-3xl transition-all duration-300"
            animate={{ opacity: [0.35, 0.5, 0.35] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <div className="glass shine-border relative overflow-hidden rounded-3xl p-8 sm:p-12">
            <motion.p
              className="kicker"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Building AI-First Digital Experiences
            </motion.p>
            <motion.h1
              className="mt-4 max-w-4xl font-display text-4xl leading-tight text-white sm:text-6xl lg:text-7xl light:text-slate-900"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
            >
              Engineering leader building scalable AI platforms, distributed systems, and enterprise-grade cloud-native solutions.
            </motion.h1>
            <motion.p
              className="mt-6 max-w-3xl text-balance text-base text-slate-300 sm:text-lg light:text-slate-600"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Specialized in Agentic AI, platform engineering, distributed architectures, and high-scale enterprise systems powering operational excellence and intelligent automation.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <a href="#projects" className="rounded-full bg-brand-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-brand-200">
                Explore Projects
              </a>
              <a href="/Abhishek%20Kumar%20Gupta%20LeadSDE.pdf" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 light:border-slate-300 light:text-slate-700 light:hover:bg-slate-100">
                Download Resume
              </a>
              <div className="flex items-center gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-white/15 px-3 py-1.5 text-xs text-slate-300 transition hover:border-brand-300/60 hover:text-brand-200 light:border-slate-300 light:text-slate-600"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: 0.08 } },
              }}
            >
              {proof.map((item) => (
                <motion.article
                  key={item.label}
                  variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
                  className="glass rounded-2xl p-4"
                >
                  <p className="text-2xl font-bold text-brand-200 light:text-brand-700">{item.value}</p>
                  <p className="mt-1 text-sm text-slate-300 light:text-slate-600">{item.label}</p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>

        <section id="build" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">What I Build</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Platforms engineered for scale, reliability, and intelligent automation.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {whatIBuild.map((group, index) => (
              <Reveal key={group.title} delay={index * 0.05}>
                <article className="glass rounded-2xl p-6 transition hover:-translate-y-0.5">
                  <h3 className="font-display text-2xl text-white light:text-slate-900">{group.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span key={item} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="leadership" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">Engineering Leadership</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Driving technical direction, delivery quality, and platform excellence.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {leadershipPoints.map((point, index) => (
              <Reveal key={point} delay={index * 0.05}>
                <article className="glass rounded-2xl p-6 text-sm leading-relaxed text-slate-300 light:text-slate-600">
                  {point}
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="projects" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">Case Studies</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Architecture decisions, scale challenges, and business impact.</h2>
          </Reveal>

          <div className="mt-8 grid gap-4 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.article
                key={project.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass shine-border group rounded-2xl p-6"
              >
                <h3 className="mt-2 font-display text-2xl text-white light:text-slate-900">{project.name}</h3>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-400 light:text-slate-500">Problem</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300 light:text-slate-600">{project.problem}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-slate-400 light:text-slate-500">Architecture</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300 light:text-slate-600">{project.architecture}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.18em] text-brand-200 light:text-brand-700">Impact</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-200 light:text-slate-700">{project.impact}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.decisions.map((tag) => (
                    <span key={tag} className="rounded-md bg-brand-400/10 px-2 py-1 text-xs text-brand-200 light:bg-brand-100 light:text-brand-700">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-brand-300 hover:text-brand-200 light:border-slate-300 light:text-slate-700">
                    GitHub
                  </a>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg border border-white/20 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-brand-300 hover:text-brand-200 light:border-slate-300 light:text-slate-700">
                    Live Context
                  </a>
                </div>
              </motion.article>
            ))}
          </div>

          <Reveal className="mt-8">
            <article className="glass rounded-2xl p-6">
              <p className="kicker">Architecture Snapshot</p>
              <h3 className="mt-2 font-display text-2xl text-white light:text-slate-900">Agentic Workflow + RAG + Event Platform</h3>
              <div className="mt-5 grid gap-3 text-xs sm:grid-cols-5">
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700">Sources</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700">RAG Layer</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700">Agent Orchestrator</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700">Event Services</div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 light:border-slate-300 light:bg-slate-100 light:text-slate-700">Ops Insights</div>
              </div>
            </article>
          </Reveal>
        </section>

        <section id="experience" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">Experience Timeline</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">From software engineer to enterprise AI consultant.</h2>
          </Reveal>

          <div className="mt-8 grid gap-4">
            {timeline.map((item, index) => (
              <Reveal key={item.role} delay={index * 0.05}>
                <article className="glass relative overflow-hidden rounded-2xl p-6">
                  <span className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-brand-300 via-cyan-300 to-violet-400" />
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400 light:text-slate-500">{item.year}</p>
                  <h3 className="mt-2 font-display text-2xl text-white light:text-slate-900">{item.role}</h3>
                  <p className="mt-2 text-sm text-slate-300 light:text-slate-600">{item.text}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="achievements" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">Achievements and Recognition</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Delivery leadership with measurable reliability impact.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {achievements.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <div className="glass rounded-2xl p-5 text-sm leading-relaxed text-slate-300 light:text-slate-600">{item}</div>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="innovation" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">AI and Innovation Showcase</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Innovation lab mindset: secure, scalable, and production-ready AI.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Agentic Workflow Orchestration",
                text: "Building autonomous multi-step systems that coordinate tools, policies, and business actions with high confidence.",
              },
              {
                title: "Copilot and Azure AI Integrations",
                text: "Designing context-rich AI assistants integrated into enterprise workflows across Microsoft ecosystems.",
              },
              {
                title: "Security-by-Design for AI",
                text: "Applying prompt-injection defense, threat modeling, and SDL-first engineering for trustworthy AI solutions.",
              },
            ].map((card, index) => (
              <Reveal key={card.title} delay={index * 0.05}>
                <motion.article whileHover={{ scale: 1.02 }} className="glass rounded-2xl p-6">
                  <h3 className="font-display text-2xl text-white light:text-slate-900">{card.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300 light:text-slate-600">{card.text}</p>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="focus" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">Currently Focused On</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Where I am investing my architecture and AI efforts now.</h2>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {currentFocus.map((item, index) => (
              <Reveal key={item} delay={index * 0.04}>
                <article className="glass rounded-2xl p-5 text-sm text-slate-300 light:text-slate-600">{item}</article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="principles" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">Engineering Principles</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Leadership principles that shape how I design and ship systems.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-5">
            {principles.map((item, index) => (
              <Reveal key={item} delay={index * 0.05}>
                <article className="glass rounded-2xl p-5 text-sm text-slate-300 light:text-slate-600">{item}</article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="blogs" className="section-shell pt-20">
          <Reveal>
            <p className="kicker">Writing</p>
            <h2 className="section-title mt-3 text-white light:text-slate-900">Technical writing on AI platforms and security engineering.</h2>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {blogs.map((blog, index) => (
              <Reveal key={blog.href} delay={index * 0.05}>
                <article className="glass rounded-2xl p-6">
                  <h3 className="font-display text-xl text-white light:text-slate-900">{blog.title}</h3>
                  <a
                    href={blog.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex rounded-full border border-brand-300/50 px-3 py-1.5 text-xs font-semibold text-brand-200 transition hover:bg-brand-300/10 light:text-brand-700"
                  >
                    Read on {blog.source}
                  </a>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="section-shell pt-20">
          <Reveal>
            <div className="glass rounded-3xl p-8 sm:p-10">
              <p className="kicker">Contact</p>
              <h2 className="section-title mt-3 max-w-3xl text-white light:text-slate-900">Let us build intelligent, scalable systems that users trust and teams can evolve.</h2>
              <p className="mt-4 max-w-2xl text-sm text-slate-300 light:text-slate-600">
                If you are scaling AI products, platform systems, or modernization initiatives, I am happy to discuss architecture, execution strategy, and delivery leadership.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="mailto:abhiguptame@gmail.com" className="rounded-full bg-brand-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-brand-200">
                  Email Me
                </a>
                <a href="https://www.linkedin.com/in/abhiguptame/" target="_blank" rel="noopener noreferrer" className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10 light:border-slate-300 light:text-slate-700 light:hover:bg-slate-100">
                  Connect on LinkedIn
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="section-shell pt-12">
        <div className="glass rounded-2xl px-5 py-4 text-xs text-slate-400 light:text-slate-600">
          © 2026 Abhishek Kumar Gupta · Built with Next.js, Tailwind CSS, and Framer Motion.
        </div>
      </footer>
    </div>
  );
}
