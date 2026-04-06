import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    phase: "01",
    title: "Discover",
    description: "Deep dive into your business model, audience, and market positioning. We don't start until we understand exactly what we're solving.",
    tag: "Research"
  },
  {
    phase: "02",
    title: "Strategize",
    description: "Formulating the approach. Establishing the technical architecture, AI integration points, and brand direction.",
    tag: "Planning"
  },
  {
    phase: "03",
    title: "Create",
    description: "Exploring visual directions. Designing the interface, typography, color theory, and user experience.",
    tag: "Design"
  },
  {
    phase: "04",
    title: "Build",
    description: "Pixel-perfect execution. We write clean, performant code focused on speed, accessibility, and robust AI automation.",
    tag: "Engineering"
  },
  {
    phase: "05",
    title: "Launch & Optimize",
    description: "Deployment, testing, and continuous refinement. Ensuring the product scales and the AI models improve.",
    tag: "Growth"
  }
];

function StepCard({ step, index, total }: { step: typeof processSteps[0], index: number, total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      data-testid={`process-step-${step.phase}`}
      className="relative flex flex-col"
    >
      {/* Step connector line above (except first) */}
      <div className="flex items-start gap-6 md:gap-8">
        {/* Left: Number + line */}
        <div className="flex flex-col items-center flex-shrink-0 pt-1">
          <motion.div
            animate={isInView ? { scale: 1, backgroundColor: "hsl(var(--primary))" } : { scale: 0.6, backgroundColor: "hsl(var(--border))" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center flex-shrink-0 relative z-10"
            style={{ borderColor: isInView ? "hsl(var(--primary))" : "hsl(var(--border))" }}
          >
            <motion.span
              animate={isInView ? { opacity: 1 } : { opacity: 0.4 }}
              className="text-xs font-mono font-bold text-primary-foreground"
            >
              {step.phase}
            </motion.span>
          </motion.div>

          {index < total - 1 && (
            <div className="w-px flex-1 min-h-[80px] mt-2 overflow-hidden bg-border relative">
              <motion.div
                animate={isInView ? { height: "100%" } : { height: "0%" }}
                transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                className="w-full bg-primary absolute top-0 left-0"
              />
            </div>
          )}
        </div>

        {/* Right: Content */}
        <div className="pb-14 flex-1">
          <motion.div
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0.4, x: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 mb-3">
              <motion.span
                animate={isInView ? { color: "hsl(var(--primary))", opacity: 1 } : { color: "hsl(var(--muted-foreground))", opacity: 0.5 }}
                className="text-[10px] font-mono uppercase tracking-widest border border-current px-2 py-0.5"
              >
                {step.tag}
              </motion.span>
            </div>
            <motion.h3
              animate={isInView ? { color: "hsl(var(--foreground))" } : { color: "hsl(var(--muted-foreground))" }}
              transition={{ duration: 0.4 }}
              className="text-2xl md:text-3xl font-display font-bold mb-3"
            >
              {step.title}
            </motion.h3>
            <p className="text-muted-foreground font-light leading-relaxed text-sm md:text-base max-w-lg">
              {step.description}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export function Process() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 60, damping: 20 });
  const progressWidth = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  // Wave path animation driven by scroll
  const waveOffset = useTransform(smoothProgress, [0, 1], [0, -200]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-32 bg-background relative z-20 border-t border-border"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="flex items-end justify-between mb-2">
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground uppercase tracking-tight">
              Methodology
            </h2>
            <motion.span
              className="font-mono text-xs text-primary tracking-widest hidden md:block"
              style={{ opacity: smoothProgress }}
            >
              SEQUENCE IN PROGRESS
            </motion.span>
          </div>

          {/* Scroll-driven progress bar */}
          <div className="relative w-full h-px bg-border overflow-hidden mt-4 mb-2">
            <motion.div
              style={{ width: progressWidth }}
              className="absolute left-0 top-0 h-full bg-primary origin-left"
            />
            {/* Glowing head */}
            <motion.div
              style={{ left: progressWidth }}
              className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_4px_hsl(var(--primary)/0.5)]"
            />
          </div>

          {/* Animated wave SVG */}
          <div className="w-full h-10 overflow-hidden mb-12 opacity-30">
            <svg viewBox="0 0 800 40" preserveAspectRatio="none" className="w-full h-full">
              <motion.path
                d="M0,20 C50,5 100,35 150,20 C200,5 250,35 300,20 C350,5 400,35 450,20 C500,5 550,35 600,20 C650,5 700,35 750,20 C800,5 850,35 900,20"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                style={{ x: waveOffset }}
              />
              <motion.path
                d="M0,25 C50,10 100,40 150,25 C200,10 250,40 300,25 C350,10 400,40 450,25 C500,10 550,40 600,25 C650,10 700,40 750,25 C800,10 850,40 900,25"
                fill="none"
                stroke="hsl(var(--primary)/0.4)"
                strokeWidth="1"
                style={{ x: waveOffset }}
              />
            </svg>
          </div>
        </motion.div>

        <div className="max-w-2xl mx-auto md:mx-0">
          {processSteps.map((step, index) => (
            <StepCard key={step.phase} step={step} index={index} total={processSteps.length} />
          ))}
        </div>
      </div>
    </section>
  );
}
