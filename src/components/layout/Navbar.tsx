import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";

const navLinks = [
  { num: "01", name: "Services", id: "services", label: "What we do" },
  { num: "02", name: "Work", id: "work", label: "Selected projects" },
  { num: "03", name: "AI Solutions", id: "ai-solutions", label: "Intelligence layer" },
  { num: "04", name: "About", id: "about", label: "Who we are" },
  { num: "05", name: "Contact", id: "contact", label: "Start a project" },
];

function MenuLink({
  link,
  index,
  onClick,
}: {
  link: (typeof navLinks)[0];
  index: number;
  onClick: () => void;
}) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<HTMLButtonElement>(null);

  const mouseY = useMotionValue(0);
  const springY = useSpring(mouseY, { stiffness: 200, damping: 20 });
  const translateY = useTransform(springY, [-50, 50], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (rect) mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.button
      ref={ref}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); mouseY.set(0); }}
      onMouseMove={handleMouseMove}
      data-testid={`nav-link-${link.id}`}
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -40 }}
      transition={{ duration: 0.55, delay: 0.1 + index * 0.07, ease: [0.16, 1, 0.3, 1] }}
      className="group relative w-full text-left flex items-center gap-6 md:gap-10 py-4 md:py-5 border-t border-border/40 last:border-b overflow-hidden"
    >
      {/* Hover fill sweep */}
      <motion.div
        className="absolute inset-0 bg-primary/5 origin-left"
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "left" }}
      />

      {/* Amber left bar */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-[2px] bg-primary"
        animate={{ scaleY: hovered ? 1 : 0 }}
        initial={{ scaleY: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: "bottom" }}
      />

      {/* Number */}
      <motion.span
        style={{ y: translateY }}
        animate={{ color: hovered ? "hsl(var(--primary))" : "hsl(var(--muted-foreground))" }}
        transition={{ duration: 0.2 }}
        className="font-mono text-xs md:text-sm tracking-widest w-8 flex-shrink-0 relative z-10"
      >
        {link.num}
      </motion.span>

      {/* Name */}
      <motion.span
        style={{ y: translateY }}
        animate={{ x: hovered ? 12 : 0 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-foreground relative z-10 leading-none"
      >
        {link.name}
      </motion.span>

      {/* Label + arrow on right */}
      <motion.span
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : -10 }}
        transition={{ duration: 0.25 }}
        className="ml-auto font-mono text-[10px] uppercase tracking-widest text-primary hidden md:block relative z-10"
      >
        {link.label} →
      </motion.span>
    </motion.button>
  );
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const navigateTo = (id: string) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      {/* Top bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          menuOpen
            ? "bg-transparent border-transparent py-6"
            : isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            animate={{ opacity: menuOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
            className="text-xl md:text-2xl font-bold font-display tracking-tight cursor-pointer text-foreground"
            onClick={() => { setMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            data-testid="link-home"
          >
            Creatif Nexus.
          </motion.div>

          {/* Desktop quiet links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.slice(0, 3).map(link => (
              <button
                key={link.id}
                onClick={() => navigateTo(link.id)}
                className={`text-xs font-mono uppercase tracking-widest transition-colors duration-200 ${menuOpen ? "text-transparent" : "text-muted-foreground hover:text-foreground"}`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Menu trigger — all screen sizes */}
          <button
            onClick={() => setMenuOpen(v => !v)}
            data-testid="btn-menu-toggle"
            className="relative flex items-center gap-3 group z-[70]"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1, x: menuOpen ? 10 : 0 }}
              transition={{ duration: 0.2 }}
              className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hidden sm:block"
            >
              {menuOpen ? "" : "Menu"}
            </motion.span>

            {/* Animated hamburger → X */}
            <div className="w-7 h-5 flex flex-col justify-between">
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 9, backgroundColor: "hsl(var(--foreground))" } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block h-px bg-foreground origin-center"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
                transition={{ duration: 0.2 }}
                className="block h-px bg-foreground origin-center"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -9, backgroundColor: "hsl(var(--foreground))" } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="block h-px bg-foreground origin-center"
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Full-screen overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="fullmenu"
            className="fixed inset-0 z-[55] bg-background flex flex-col overflow-hidden"
            initial={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            animate={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }}
            exit={{ clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" }}
            transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Dot grid bg */}
            <div
              className="absolute inset-0 opacity-[0.04] pointer-events-none"
              style={{ backgroundImage: "radial-gradient(hsl(var(--foreground)) 1px, transparent 1px)", backgroundSize: "28px 28px" }}
            />

            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

            {/* Logo (inside overlay) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="absolute top-6 left-6 md:left-8 text-xl md:text-2xl font-bold font-display tracking-tight text-foreground z-10 px-0 md:px-6"
              style={{ paddingLeft: "calc(var(--container-padding, 1.5rem))" }}
            >
              <span className="container mx-auto">Creatif Nexus.</span>
            </motion.div>

            {/* Main layout */}
            <div className="container mx-auto px-6 flex flex-col md:flex-row h-full pt-24 pb-10 gap-8">
              {/* Left: Nav links */}
              <div className="flex flex-col justify-center flex-1 min-w-0">
                <AnimatePresence>
                  {navLinks.map((link, i) => (
                    <MenuLink
                      key={link.id}
                      link={link}
                      index={i}
                      onClick={() => navigateTo(link.id)}
                    />
                  ))}
                </AnimatePresence>
              </div>

              {/* Right: Ambient panel */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="hidden md:flex flex-col justify-between w-64 xl:w-80 flex-shrink-0 border-l border-border/30 pl-10 py-4"
              >
                {/* Status */}
                <div>
                  <div className="flex items-center gap-2 mb-8">
                    <motion.div
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-primary"
                    />
                    <span className="font-mono text-[10px] uppercase tracking-widest text-primary">Available for projects</span>
                  </div>

                  <p className="text-muted-foreground text-sm font-light leading-relaxed mb-8">
                    A boutique creative agency building brands, products, and intelligent systems.
                  </p>

                  <div className="space-y-3 text-xs font-mono text-muted-foreground">
                    <p className="uppercase tracking-widest text-[10px] text-primary mb-2">Get in touch</p>
                    <p>hello@creatifnexus.com</p>
                    <p>+1 (555) 000-0000</p>
                  </div>
                </div>

                {/* Bottom */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <p className="uppercase tracking-widest text-[10px] font-mono text-primary">Based in</p>
                    <p className="font-mono text-xs text-muted-foreground">New York · London · Remote</p>
                  </div>

                  <div className="flex gap-6">
                    {["Twitter", "LinkedIn", "Dribbble"].map(s => (
                      <button key={s} className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors duration-200">
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Bottom status bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="border-t border-border/30 py-4 px-6"
            >
              <div className="container mx-auto flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
                  Creatif Nexus © 2024
                </span>
                <span className="font-mono text-[10px] tracking-widest text-muted-foreground/50 tabular-nums">
                  {time}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50 hidden sm:block">
                  EST — New York
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
