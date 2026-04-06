import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useEffect, useState } from "react";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 10 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 10 });

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorSpringX = useSpring(cursorX, { stiffness: 300, damping: 20 });
  const cursorSpringY = useSpring(cursorY, { stiffness: 300, damping: 20 });

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, cursorX, cursorY]);

  const handleScrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-background pt-20"
    >
      {/* Custom Cursor — desktop only */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 rounded-full border-[1.5px] border-primary pointer-events-none z-[100] mix-blend-difference hidden md:block"
        style={{ x: cursorSpringX, y: cursorSpringY }}
      />

      {/* System Status Badge */}
      {isMounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute top-20 right-4 md:top-24 md:right-12 z-50 flex items-center gap-2 text-[9px] md:text-[10px] font-mono text-muted-foreground tracking-widest uppercase"
        >
          <span>SYS // ONLINE</span>
          <motion.div
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      )}

      <motion.div
        className="absolute inset-0 z-0 opacity-10 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, hsl(var(--primary)) 0%, transparent 50%)",
          x: springX,
          y: springY,
        }}
      />

      <motion.div
        style={{ y, opacity }}
        className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-primary text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6 font-medium"
        >
          Creatif Nexus
        </motion.div>

        <motion.h1 className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[9rem] font-display font-bold text-foreground leading-[0.9] tracking-tighter mb-6 sm:mb-8 text-balance">
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="block glitch"
          >
            INTELLIGENCE
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="block text-primary/80 italic font-medium"
          >
            BY DESIGN
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto font-light tracking-wide text-balance mb-8 sm:mb-10 px-2"
        >
          We bridge human creativity with machine capability. Sharp strategy, premium design, robust engineering, and intelligent AI automation.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.55 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-10 sm:mb-14 w-full max-w-xs sm:max-w-none"
        >
          <button
            onClick={() => handleScrollTo("contact")}
            data-testid="btn-hero-start-project"
            className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-display font-bold uppercase tracking-widest text-xs sm:text-sm overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)]"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Start a Project
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
            onClick={() => handleScrollTo("work")}
            data-testid="btn-hero-view-work"
            className="group w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 border border-border text-foreground font-display font-bold uppercase tracking-widest text-xs sm:text-sm transition-all duration-300 hover:border-primary hover:text-primary relative overflow-hidden"
          >
            <span className="relative z-10">View Our Work</span>
            <motion.div
              className="absolute bottom-0 left-0 h-px bg-primary"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.65 }}
          className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-12 text-[9px] sm:text-xs text-muted-foreground font-medium uppercase tracking-widest border-t border-border pt-6 sm:pt-8 w-full"
        >
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl text-foreground font-display mb-1">50+</span>
            Projects
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl text-foreground font-display mb-1">10</span>
            AI Agents
          </div>
          <div className="flex flex-col items-center">
            <span className="text-2xl sm:text-3xl text-foreground font-display mb-1">5</span>
            Yrs Excellence
          </div>
        </motion.div>
      </motion.div>

      {/* Marquee Belt */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden border-y border-border py-3 sm:py-4 bg-background/50 backdrop-blur-sm z-20">
        <motion.div
          animate={{ x: [0, -1000] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          className="flex whitespace-nowrap gap-6 sm:gap-8 text-muted-foreground font-display uppercase tracking-widest text-xs sm:text-sm"
        >
          {Array(10).fill("Marketing Strategy • Design & Creative • Development • AI Solutions • ").map((text, i) => (
            <span key={i}>{text}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
