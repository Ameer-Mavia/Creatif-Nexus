import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="py-20 sm:py-32 relative overflow-hidden bg-background border-y border-border">
      {/* Animated dot grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        >
          <motion.div
            className="w-full h-full bg-gradient-to-r from-transparent via-background to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </div>

      {/* Radial glow */}
      <motion.div
        animate={{ scale: [1, 1.05, 1], opacity: [0.08, 0.12, 0.08] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] bg-primary rounded-full blur-[120px] pointer-events-none z-0"
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-background/50 backdrop-blur-sm mb-6 sm:mb-8"
        >
          <motion.div
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]"
          />
          <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
            Currently Accepting Projects
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight text-foreground max-w-4xl text-balance mb-4 sm:mb-6"
        >
          Ready to Build Something the World Has Never Seen?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.2 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl font-light mb-8 sm:mb-10 text-balance"
        >
          We're looking for ambitious partners ready to challenge the status quo. Let's design the future of your brand.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-5 sm:mb-6 w-full max-w-xs sm:max-w-none"
        >
          <a
            href="#contact"
            data-testid="btn-cta-start"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-primary/90 transition-colors w-full sm:w-auto text-center"
          >
            Start a Project →
          </a>
          <a
            href="#contact"
            data-testid="btn-cta-schedule"
            className="px-6 sm:px-8 py-3.5 sm:py-4 bg-transparent border border-border text-foreground font-bold uppercase tracking-widest text-xs sm:text-sm hover:bg-border/50 transition-colors w-full sm:w-auto text-center"
          >
            Schedule a Call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center gap-2 text-xs text-muted-foreground font-mono"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>Average response time: 4 hours</span>
        </motion.div>
      </div>
    </section>
  );
}
