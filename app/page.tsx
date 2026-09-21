import { ArrowDownRight, ArrowUpRight, BriefcaseBusiness, Download, GraduationCap, Mail, University } from "lucide-react";

const projects = [
  {
    number: "01",
    category: "Credit Risk",
    title: "Probability of Default Modeling",
    description: "A research-led study of credit risk estimation using statistical and machine learning methods.",
    tags: ["Python", "Logistic Regression", "Model Validation"]
  },
  {
    number: "02",
    category: "Market Risk",
    title: "Value at Risk: A Comparative Analysis",
    description: "Comparing parametric, historical simulation, and Monte Carlo approaches to VaR estimation.",
    tags: ["Python", "Risk Analytics", "Monte Carlo"]
  },
  {
    number: "03",
    category: "Portfolio Analytics",
    title: "Portfolio Optimization & Risk–Return Trade-off",
    description: "Examining diversification, correlation, and efficient-frontier construction through quantitative analysis.",
    tags: ["Python", "Optimization", "Portfolio Theory"]
  }
];

const insights = [
  { date: "Coming soon", title: "Why model validation matters in financial risk", type: "Risk" },
  { date: "Coming soon", title: "From probability distributions to business decisions", type: "Analytics" },
  { date: "Coming soon", title: "A practical introduction to portfolio risk", type: "Finance" }
];

export default function Home() {
  return (
    <main>
      <header className="site-header shell">
        <a className="wordmark" href="#top">MEDHA BHATTACHARYA</a>
        <nav className="nav-links" aria-label="Main navigation">
          <a className="active" href="#top">Home</a>
          <a href="#projects">Projects</a>
          <a href="#insights">Research</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">RISK · FINANCE · ANALYTICS</p>
          <h1>The Risk &<br />Finance Notebook</h1>
          <p className="hero-description">A collection of research-driven projects exploring financial risk, quantitative methods, and applied analytics.</p>

          <div className="credentials">
            <div className="credential"><GraduationCap size={18} /><div><strong>FMS Delhi</strong><span>MBA · Rank 1</span></div></div>
            <div className="credential"><BriefcaseBusiness size={18} /><div><strong>Blinkit</strong><span>Program Manager</span></div></div>
            <div className="credential"><University size={18} /><div><strong>Wells Fargo</strong><span>Ex-Software Engineer</span></div></div>
          </div>
          <a className="button" href="#projects">Explore projects <ArrowUpRight size={16} /></a>
        </div>

        <div className="hero-art" aria-label="Abstract geometric editorial artwork">
          <div className="art-circle" />
          <div className="art-panel" />
          <div className="art-caption">Better decisions<br />come from<br /><em>clearer questions.</em></div>
          <div className="art-line" />
        </div>
      </section>

      <section id="projects" className="section shell">
        <div className="section-heading"><p className="eyebrow">SELECTED PROJECTS</p><span>01—03</span></div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-meta"><span>{project.number} / {project.category}</span><ArrowUpRight size={17} /></div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a className="text-link" href="#contact">Project details <ArrowUpRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section id="insights" className="section shell lower-grid">
        <div>
          <div className="section-heading"><p className="eyebrow">LATEST INSIGHTS</p><span>Research notes</span></div>
          <div className="insights-list">
            {insights.map((insight) => <article className="insight" key={insight.title}><span>{insight.date}</span><div><h3>{insight.title}</h3><p>Research note and practical interpretation of a core concept.</p></div><span className="pill">{insight.type}</span></article>)}
          </div>
        </div>

        <aside id="about" className="about">
          <p className="eyebrow">ABOUT ME</p>
          <h2>Analytical work, clearly communicated.</h2>
          <p>I am an MBA graduate from FMS Delhi with a background in computer science, financial technology, and applied problem-solving.</p>
          <p>This portfolio brings together my work in risk management, quantitative finance, and financial systems.</p>
          <div className="socials" id="contact">
  <a href="https://www.linkedin.com/in/medha-bhattacharya-5b29291b3/">LinkedIn</a>
  <a href="https://github.com/medha-b">GitHub</a>
  <a href="medha.b26@fms.edu">
    <Mail size={17} /> Email
  </a>
</div>
        </aside>
      </section>

      <footer className="footer shell"><span>© {new Date().getFullYear()} Medha Bhattacharya</span><a href="#top">Back to top <ArrowDownRight size={15} /></a></footer>
    </main>
  );
}
