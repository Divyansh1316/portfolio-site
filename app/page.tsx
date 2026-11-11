import Image from "next/image";
import EmailCopyButton from "@/components/EmailCopyButton";
import ScrollEffects from "@/components/ScrollEffects";
import MusicPlayer from "@/components/MusicPlayer";
import ShootingStars from "@/components/ShootingStars";

const projects = [
  { n: "01", kind: "Full-stack web app", title: "Airbnb Clone", desc: "Property discovery and reservations with sign-in, date-range booking, price breakdowns, filters, and MongoDB search.", tags: ["Next.js", "React", "MongoDB", "Tailwind CSS"], url: "https://video-rent-example-tawny.vercel.app/", type: "stayscape", image: "/airbnbpng.png", alt: "Airbnb clone accommodation search and booking interface" },
  { n: "02", kind: "Commerce backend & UI", title: "Full-Stack E-Commerce Website", desc: "Product browsing, variant selection, smart filtering, and payment gateway integration in a complete shopping experience.", tags: ["React", "Node.js", "Express", "MongoDB"], url: "https://forever-clone-frontend.onrender.com/", type: "storefront", image: "/forever.png", alt: "Forever fashion storefront with its product collection" },
  { n: "03", kind: "Real-time AI platform", title: "AI Agent Platform", desc: "Video calls with AI agents, live transcripts, meeting summaries, and searchable recordings.", tags: ["Next.js", "React", "Stream", "OpenAI API", "Inngest", "Polar", "PostgreSQL", "Better Auth"], url: null, type: "agent", image: "/ai_platform.png", alt: "AI agent platform interface for real-time video interactions" },
];
const skills = [
  ["Core Languages", "Syntax & runtime", "Type-safe, algorithmic solutions across frontend and backend systems.", "TypeScript,JavaScript,Java,C++,Python"],
  ["Frontend", "Client", "Component architecture, responsive interfaces, and accessible UI.", "React,Next.js,Tailwind CSS,HTML5 / CSS3"],
  ["Backend", "Server", "REST APIs, authentication, background jobs, and service integrations.", "Node.js,Express,NextAuth,Inngest"],
  ["Databases & Persistence", "SQL & NoSQL", "Schema design and data storage for dependable application workflows.", "PostgreSQL,MongoDB,MySQL"],
  ["Foundations & Architecture", "Logic", "Object-oriented design, algorithms, and modular systems thinking.", "DSA,OOP,Software design"],
];
const techTicker = "REACT · NEXT.JS · TYPESCRIPT · NODE.JS · EXPRESS · POSTGRESQL · MONGODB · PYTHON · JAVA · C++ · AWS · TAILWIND CSS ·";
const foundationTicker = "DATA STRUCTURES · REST APIS · REDIS · GIT · CI/CD · SQL · OOP ·";
const milestones = [
  ["2022–2026", "Undergraduate degree", "B.Tech Computer Science & Engineering", "Graphic Era Deemed University", "Studied algorithms, software development, databases, operating systems, and web applications."],
  ["Full-stack mastery", "Application development", "Modern Web & Backend Systems", "Independent Builds & Production Architecture", "Built web apps with Next.js and Node.js, using MongoDB or PostgreSQL to store data."],
  ["Advanced integrations", "AI & real-time streams", "Interactive AI & WebRTC Platforms", "Real-Time Web Applications", "Built WebRTC video calls with live transcripts, meeting summaries, and contextual Q&A."],
];
function Heading({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="section-heading scroll-reveal"><span className="section-index">{number}</span><h2>{children}</h2></div>;
}
function Preview({ type, image, alt }: { type: string; image: string | null; alt: string }) {
  return <div className={`browser-preview ${type}`}>
    <div className="browser-bar"><span className="window-dots"><i /><i /><i /></span><span aria-hidden="true">&#x2302;</span></div>
    {image ? <div className="preview-screen project-image-screen"><Image src={image} alt={alt} fill sizes="(max-width: 760px) 100vw, 60vw" className="preview-image" /></div> :
      <div className="preview-screen agent-screen" aria-hidden="true">
        <div className="agent-toolbar"><strong>STREAM<span> / </span>AGENT</strong><span>Engineering Sync</span><i>LIVE</i></div>
        <div className="agent-layout"><div className="agent-video"><div className="agent-avatar">AI</div><span>Product Assistant</span><i>&#9679; &#9679; &#9679;</i></div><div className="agent-transcript"><b>Live transcript <i>&#9679; recording</i></b><p><span>10:42</span> Let&apos;s review the launch timeline.</p><p><span>10:43</span> Three items are ready for review.</p><div className="agent-wave">{Array.from({ length: 24 }, (_, i) => <i key={i} />)}</div><small>Summary and action items are being prepared...</small></div></div>
      </div>}
  </div>;
}

export default function Home() {
  return <main className="site-shell" id="top"><ScrollEffects /><ShootingStars /><MusicPlayer />
    <header className="site-header"><nav className="floating-nav" aria-label="Main navigation"><a href="#selected-work">Work</a><a href="#about">About</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a></nav></header>
    <div className="page-content">
      <section className="hero" aria-labelledby="hero-title"><div className="hero-glow" /><div className="hero-content">
        <div className="hero-badges"><span className="availability"><i /> Available for Engineering Roles <b>&middot;</b> <strong>2026</strong></span><span className="location"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="2" /></svg>Flexible location</span></div>
        <h1 id="hero-title">Divyansh Dhaundiyal</h1><p>Full-stack developer building fast, responsive web applications and reliable backends with clean architecture.</p>
        <div className="hero-actions"><a className="button button-primary" href="#selected-work">Explore Work <span>&#8595;</span></a><a className="button button-quiet" href="#contact">Get in Touch <span>&#8599;</span></a></div>
        <div className="hero-stats"><div><b>Full-Stack</b><span>TypeScript &amp; React</span></div><div><b>AWS Cert</b><span>Cloud &amp; AI</span></div><div><b>High Uptime</b><span>Clean Architecture</span></div></div>
      </div></section>
      <section className="content-section" id="about"><Heading number="01 / ABOUT">Engineering Logic &amp; Form</Heading><div className="about-grid scroll-reveal">
        <div className="about-copy"><h3>Computer Science graduate building web and server applications with TypeScript and databases.</h3><p>I build responsive websites and backend services with TypeScript. I work across the interface and database, and keep the code clear, easy to update, and reliable for everyday use.</p><div className="signal-tags"><span>Web Development</span><span>Backend Development</span><span>Database Design</span></div></div>
        <div className="metrics"><article><b>03</b><div><h3>Full-Stack Projects</h3><p>Web apps for bookings, online shopping, and video calls, with sign-in and database support.</p></div><span>&#8984;</span></article><article><b>TS</b><div><h3>TypeScript</h3><p>Used across the interface, server APIs, and database-connected features.</p></div><span>&#9673;</span></article><article><b>UI</b><div><h3>Reusable Components</h3><p>Shared interface parts, consistent styles, and checks that catch common mistakes.</p></div><span>&#10003;</span></article></div>
      </div></section>
      <section className="content-section" id="selected-work"><div className="section-title-row"><Heading number="02 / SELECTED WORK">Architected Projects</Heading></div><div className="project-list scroll-reveal">{projects.map((p) => <article className="project-card scroll-reveal" key={p.n}>
        <span className="project-number" aria-hidden="true">{p.n}</span><div className="project-copy"><div className="project-category"><i />{p.kind}</div><h3>{p.title}</h3><p>{p.desc}</p><div className="chips">{p.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>{p.url ? <a className="button button-primary project-link" href={p.url} target="_blank" rel="noopener noreferrer">Live Preview <span>&#8599;</span></a> : <span className="project-link-note">Project details available on request</span>}</div><Preview type={p.type} image={p.image} alt={p.alt} />
      </article>)}</div></section>
      <section className="content-section" id="skills"><Heading number="03 / CAPABILITIES">Technical Stack &amp; Skills</Heading>
        <div className="ticker scroll-reveal" aria-label="Technologies: React, Next.js, TypeScript, Node.js, PostgreSQL, MongoDB, Python, AWS"><div className="ticker-track">{Array.from({ length: 8 }, (_, index) => <span key={index} aria-hidden={index > 0}>{techTicker}</span>)}</div></div><div className="ticker ticker-muted scroll-reveal" aria-label="Data structures, REST APIs, Redis, Git, CI/CD, SQL, and object-oriented programming"><div className="ticker-track">{Array.from({ length: 8 }, (_, index) => <span key={index} aria-hidden={index > 0}>{foundationTicker}</span>)}</div></div>
        <div className="skills-grid scroll-reveal">{skills.map(([title, meta, copy, tags]) => <article className="skill-card scroll-reveal" key={title}><div className="skill-card-heading"><h3>{title}</h3><span>{meta}</span></div><p>{copy}</p><div className="chips">{tags.split(",").map((tag) => <span key={tag}>{tag}</span>)}</div></article>)}</div>
      </section>
      <section className="content-section" id="experience"><div className="section-title-row"><Heading number="04 / JOURNEY">Timeline &amp; Credentials</Heading></div>
        <div className="timeline scroll-reveal">{milestones.map(([date, label, title, place, copy], i) => <article className="timeline-card scroll-reveal" key={title}><div className="timeline-marker"><b>{i + 1}</b><span>{date}</span></div><div className="timeline-content"><span className="timeline-label">{label}</span><h3>{title}</h3><strong>{place}</strong><p>{copy}</p></div></article>)}</div>
      </section>
      <section className="content-section" id="contact"><Heading number="05 / CONNECT">Initiate Transmission</Heading><div className="contact-card scroll-reveal"><div className="contact-glow" /><div className="contact-copy"><h3>Let&rsquo;s build<br /><span>something remarkable.</span></h3><p>Available for software engineering roles, technical advisory, and collaborative high-concurrency builds.</p></div>
        <div className="contact-actions"><EmailCopyButton email="divyanshdec@gmail.com" /><a className="button button-quiet" href="mailto:divyanshdec@gmail.com">Send an email <span>&#8599;</span></a></div>
        <div className="social-links"><a href="https://www.linkedin.com/in/divyansh-dhaundiyal-116047252/" target="_blank" rel="noopener noreferrer">LinkedIn <span>&#8599;</span></a><a href="https://github.com/Divyansh1316" target="_blank" rel="noopener noreferrer">GitHub <span>&#8599;</span></a></div>
      </div></section>
      <footer className="site-footer"><div className="footer-meta"><span>&copy; 2026 Divyansh Dhaundiyal. Built with precision.</span><span className="footer-location"><i /> Flexible location</span><a href="#top">Back to top &#8593;</a></div></footer>
    </div>
  </main>;
}
