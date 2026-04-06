import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";


// ─── EDIT YOUR CASE STUDY CONTENT HERE ───────────────────────────────────────
const projects = [
  {
    id: 1,
    title: "Aura",
    subtitle: "Redefining financial brand identity",
    category: "Marketing Campaign",
    year: "2024",
    image: "/projects/project-1.png",
    tags: ["Brand Strategy", "Campaigns", "Growth"],
    layout: "full",
    caseStudy: {
      client: "Aura Financial",
      duration: "3 months",
      overview: "Aura came to us as a challenger brand entering a saturated fintech market. They needed a bold identity that could hold its own against legacy institutions while speaking directly to a younger, digitally-native audience.",
      challenge: "The financial sector is dominated by tired blue palettes and corporate jargon. Aura needed to feel trustworthy without feeling stale — approachable without being casual.",
      solution: "We built a campaign identity anchored in warmth and clarity. A dual-tone editorial system, bespoke headline typeface, and a photography direction that showed real people in motion — not stock-photo smiles.",
      results: [
        "340% increase in social engagement in 60 days",
        "2.1M impressions across launch campaign",
        "Brand recall score jumped from 12% to 67%",
      ],
    },
  },
  {
    id: 2,
    title: "Vanguard Studio",
    subtitle: "A visual system built to command attention",
    category: "Design & Identity",
    year: "2024",
    image: "/projects/project-2.png",
    tags: ["UI/UX", "Brand Identity", "Motion"],
    layout: "left",
    caseStudy: {
      client: "Vanguard Creative Studio",
      duration: "6 weeks",
      overview: "A London-based creative studio specialising in film and photography needed an identity that reflected their editorial precision and appetite for risk.",
      challenge: "Their existing brand was generic — a wordmark with no personality, no system. It couldn't scale across digital, print, and motion contexts.",
      solution: "We developed a kinetic identity system: a modular grid structure that reacts to content, a restricted palette of black, bone, and electric amber, and a motion language built around controlled tension and release.",
      results: [
        "Won 3 new brand clients in the month of launch",
        "Featured in Typewolf and Brand New",
        "Retained for ongoing design partnership",
      ],
    },
  },
  {
    id: 3,
    title: "Nexus Finance",
    subtitle: "Enterprise-grade web platform, zero compromises",
    category: "Web Application",
    year: "2023",
    image: "/projects/project-3.png",
    tags: ["React", "API", "Dashboard"],
    layout: "right",
    caseStudy: {
      client: "Nexus Financial Group",
      duration: "5 months",
      overview: "Nexus needed a web platform that could handle real-time data feeds, multi-role permissions, and complex financial workflows — all while feeling fast and intuitive for non-technical users.",
      challenge: "Their existing tools were a patchwork of legacy systems. Compliance requirements made third-party solutions impossible. Everything had to be built from scratch, with security at every layer.",
      solution: "We architected a React + Node platform with role-based access control, real-time WebSocket data streams, and a custom component library purpose-built for financial data density.",
      results: [
        "Load times cut from 8.4s to 0.9s",
        "Zero critical security incidents post-launch",
        "Adopted by 400+ internal users in week one",
      ],
    },
  },
  {
    id: 4,
    title: "Omni Agent",
    subtitle: "The AI that closed $2M in its first quarter",
    category: "Custom AI Solution",
    year: "2024",
    image: "/projects/project-4.png",
    tags: ["AI Agent", "Automation", "LLM"],
    layout: "full",
    caseStudy: {
      client: "Omni Commerce",
      duration: "8 weeks",
      overview: "Omni needed an AI sales agent that could qualify leads, answer product questions, and book demos — without sounding like a bot. It had to live inside their existing CRM and Slack environment.",
      challenge: "Existing chatbot tools were too rigid. They needed something that could reason, adapt its tone to each prospect, and escalate intelligently to human reps at exactly the right moment.",
      solution: "We built a custom LLM-powered agent with a multi-step reasoning loop, CRM write-back, calendar integration, and a confidence-threshold system that triggers human handoff when uncertainty is high.",
      results: [
        "$2M in pipeline attributed to the agent in Q1",
        "78% reduction in sales team response time",
        "94% customer satisfaction score on AI interactions",
      ],
    },
  },
];
// ─────────────────────────────────────────────────────────────────────────────

type Project = typeof projects[0];

function CaseStudyModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  const handleContact = () => {
    onClose();
    setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[200] flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {/* Backdrop */}
        <motion.div
          className="absolute inset-0 bg-background/80 backdrop-blur-md"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        />

        {/* Panel */}
        <motion.div
          className="relative ml-auto w-full max-w-3xl h-full bg-card border-l border-border overflow-y-auto"
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            data-testid="btn-case-study-close"
            className="absolute top-6 right-6 z-10 w-10 h-10 flex items-center justify-center border border-border text-muted-foreground hover:text-foreground hover:border-primary transition-colors duration-200 font-mono text-sm"
          >
            ✕
          </button>

          {/* Hero image */}
          <div className="relative w-full aspect-[16/7] overflow-hidden bg-background">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            <div className="absolute bottom-6 left-8 right-16">
              <span className="text-[10px] font-mono uppercase tracking-widest text-primary mb-2 block">
                {project.category} — {project.year}
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight leading-none">
                {project.title}
              </h2>
            </div>
          </div>

          {/* Content */}
          <div className="px-8 py-12 space-y-12">
            {/* Meta row */}
            <div className="flex flex-wrap gap-6 pb-8 border-b border-border">
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Client</p>
                <p className="text-sm text-foreground font-medium">{project.caseStudy.client}</p>
              </div>
              <div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-1">Duration</p>
                <p className="text-sm text-foreground font-medium">{project.caseStudy.duration}</p>
              </div>
              <div className="flex flex-wrap gap-2 self-end">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-mono uppercase tracking-widest border border-border text-muted-foreground px-2 py-1">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Overview */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-4">Overview</p>
              <p className="text-foreground/90 leading-relaxed text-base md:text-lg font-light">
                {project.caseStudy.overview}
              </p>
            </div>

            {/* Challenge */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-4">The Challenge</p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                {project.caseStudy.challenge}
              </p>
            </div>

            {/* Solution */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-4">Our Solution</p>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base font-light">
                {project.caseStudy.solution}
              </p>
            </div>

            {/* Results */}
            <div>
              <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-6">Results</p>
              <ul className="space-y-4">
                {project.caseStudy.results.map((result, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="text-primary font-mono text-xs mt-1 flex-shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-foreground font-medium text-sm md:text-base">{result}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="pt-8 border-t border-border">
              <p className="text-muted-foreground font-light text-sm mb-6">
                Interested in results like these? Let's build something together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handleContact}
                  data-testid="btn-case-study-start-project"
                  className="group relative px-8 py-4 bg-primary text-primary-foreground font-display font-bold uppercase tracking-widest text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.35)] flex items-center justify-center gap-2"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start a Similar Project
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      →
                    </motion.span>
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-foreground"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  />
                </button>

                <button
                  onClick={handleContact}
                  data-testid="btn-case-study-schedule"
                  className="px-8 py-4 border border-border text-foreground font-display font-bold uppercase tracking-widest text-sm transition-all duration-300 hover:border-primary hover:text-primary relative overflow-hidden group"
                >
                  <span className="relative z-10">Schedule a Call</span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-px bg-primary"
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

function FullWidthCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.96, 1, 0.96]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="relative group cursor-pointer"
      data-testid={`project-card-${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="font-mono text-xs tracking-widest text-muted-foreground uppercase">
          {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
        </span>
        <span className="font-mono text-xs tracking-widest text-muted-foreground">{project.year}</span>
      </div>

      <div className="relative w-full aspect-[16/8] overflow-hidden bg-card">
        <motion.img style={{ y, scale }} src={project.image} alt={project.title}
          className="absolute inset-[-5%] w-[110%] h-[110%] object-cover" />

        <motion.div animate={{ opacity: hovered ? 0.65 : 0.25 }} transition={{ duration: 0.4 }}
          className="absolute inset-0 bg-background" />

        <motion.div animate={{ opacity: hovered ? 1 : 0, y: hovered ? 0 : 12 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-8">
          <p className="text-foreground/80 text-base md:text-lg font-light max-w-md mb-6">{project.subtitle}</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {project.tags.map(tag => (
              <span key={tag} className="text-[10px] font-mono uppercase tracking-widest border border-primary/50 text-primary px-3 py-1">
                {tag}
              </span>
            ))}
          </div>
          <motion.span animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="mt-8 text-xs font-mono uppercase tracking-widest text-primary border-b border-primary pb-0.5">
            View Case Study →
          </motion.span>
        </motion.div>

        <div className="absolute bottom-6 left-6">
          <motion.span animate={{ opacity: hovered ? 0 : 1 }}
            className="text-[10px] font-mono uppercase tracking-widest bg-background/80 backdrop-blur-sm text-primary px-3 py-1.5 border border-border">
            {project.category}
          </motion.span>
        </div>
      </div>

      <div className="flex items-end justify-between mt-5">
        <motion.h3 animate={{ color: hovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-6xl font-display font-bold tracking-tight leading-none">
          {project.title}
        </motion.h3>
        <motion.div animate={{ x: hovered ? 0 : -8, opacity: hovered ? 1 : 0 }}
          className="text-primary font-mono text-sm tracking-widest hidden md:block">
          {project.category}
        </motion.div>
      </div>
    </motion.div>
  );
}

function SplitCard({
  project,
  index,
  flip,
  onOpen,
}: {
  project: Project;
  index: number;
  flip: boolean;
  onOpen: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col md:flex-row gap-8 md:gap-12 items-stretch cursor-pointer group ${flip ? "md:flex-row-reverse" : ""}`}
      data-testid={`project-card-${project.id}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onOpen}
    >
      <div className="relative w-full md:w-[60%] aspect-[4/3] md:aspect-auto overflow-hidden bg-card">
        <motion.img style={{ y }} src={project.image} alt={project.title}
          className="absolute inset-[-8%] w-[116%] h-[116%] object-cover" />
        <motion.div animate={{ opacity: hovered ? 0.15 : 0.35 }} className="absolute inset-0 bg-background" />
        <motion.div animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.9 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center">
          <span className="text-[10px] font-mono uppercase tracking-widest text-primary border border-primary px-4 py-2 backdrop-blur-sm">
            View Case Study →
          </span>
        </motion.div>
      </div>

      <div className={`flex flex-col justify-center w-full md:w-[40%] ${flip ? "md:items-end md:text-right" : ""}`}>
        <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase mb-4">
          {String(index + 1).padStart(2, "0")} — {project.year}
        </span>
        <motion.h3 animate={{ color: hovered ? "hsl(var(--primary))" : "hsl(var(--foreground))" }}
          transition={{ duration: 0.3 }}
          className="text-4xl md:text-5xl font-display font-bold tracking-tight leading-none mb-4">
          {project.title}
        </motion.h3>
        <p className="text-muted-foreground font-light leading-relaxed mb-6 text-sm md:text-base">{project.subtitle}</p>
        <span className="text-[10px] font-mono uppercase tracking-widest text-primary mb-5">{project.category}</span>
        <div className={`flex flex-wrap gap-2 ${flip ? "md:justify-end" : ""}`}>
          {project.tags.map(tag => (
            <span key={tag} className="text-[10px] font-mono uppercase tracking-widest border border-border text-muted-foreground px-2 py-1">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export function Work() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 sm:py-32 bg-background relative z-20">
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 flex items-end justify-between">
          <div>
            <p className="text-[10px] font-mono uppercase tracking-widest text-primary mb-3">Selected Work</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
              Things We've Built
            </h2>
          </div>
          <span className="font-mono text-xs text-muted-foreground tracking-widest hidden md:block">
            {projects.length} Projects
          </span>
        </motion.div>

        <div className="h-px bg-border mb-20" />

        <div className="space-y-28 md:space-y-36">
          {projects.map((project, index) => {
            const open = () => setActiveProject(project);
            if (project.layout === "full") {
              return <FullWidthCard key={project.id} project={project} index={index} onOpen={open} />;
            }
            return (
              <SplitCard key={project.id} project={project} index={index} flip={project.layout === "right"} onOpen={open} />
            );
          })}
        </div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-border flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <p className="text-muted-foreground font-light text-lg max-w-sm">
            Every project starts with a conversation. Let's talk about yours.
          </p>
          <a href="#contact" data-testid="btn-work-start-project"
            className="group flex items-center gap-3 font-display font-bold uppercase tracking-widest text-sm text-foreground hover:text-primary transition-colors duration-300">
            Start a Project
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-primary">→</motion.span>
          </a>
        </motion.div>
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {activeProject && (
          <CaseStudyModal project={activeProject} onClose={() => setActiveProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
