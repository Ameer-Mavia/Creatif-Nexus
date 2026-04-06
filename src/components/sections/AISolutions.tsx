import { motion } from "framer-motion";

export function AISolutions() {
  return (
    <section id="ai-solutions" className="py-20 sm:py-32 bg-card relative z-20 overflow-hidden border-y border-border">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-medium tracking-widest uppercase text-xs sm:text-sm mb-4 sm:mb-6"
          >
            The Future is Automated
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-6xl font-display font-bold text-foreground mb-6 sm:mb-8 tracking-tight text-balance"
          >
            Intelligent Systems That Work.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base sm:text-xl text-muted-foreground font-light leading-relaxed mb-10 sm:mb-16 text-balance"
          >
            We don't build gimmicks. We engineer custom chatbots for seamless customer service, autonomous agents for sales automation, and internal knowledge bases that supercharge your team's efficiency.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 text-left">
            {[
              { title: "Customer Service", desc: "24/7 intelligent resolution." },
              { title: "Sales Agents", desc: "Automated qualification." },
              { title: "Knowledge Bases", desc: "Instant internal recall." }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="p-6 sm:p-8 border border-border bg-background hover:border-primary/50 transition-colors"
              >
                <h4 className="text-base sm:text-lg font-display font-bold text-foreground mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative rings — contained by overflow-hidden */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] border border-primary/10 rounded-full opacity-50 pointer-events-none"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] md:w-[600px] h-[300px] sm:h-[450px] md:h-[600px] border border-primary/20 rounded-full opacity-50 pointer-events-none"
      />
    </section>
  );
}
