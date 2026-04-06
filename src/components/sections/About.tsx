import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 sm:py-32 bg-background relative z-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          <div className="lg:col-span-5 flex flex-col">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl md:text-6xl font-display font-bold uppercase tracking-tight mb-6 sm:mb-8 text-foreground"
            >
              The Agency
            </motion.h2>

            {/* Stats — row on mobile, column on desktop */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex gap-10 sm:gap-16 lg:flex-col lg:gap-0 lg:space-y-10 mt-2 lg:mt-12"
            >
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-1">2020</div>
                <div className="text-muted-foreground text-[10px] sm:text-sm uppercase tracking-widest font-medium">Established</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-primary mb-1">15+</div>
                <div className="text-muted-foreground text-[10px] sm:text-sm uppercase tracking-widest font-medium">Global Partners</div>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 lg:pl-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-muted-foreground font-light"
            >
              <p className="text-foreground text-xl sm:text-2xl md:text-3xl leading-snug mb-8 sm:mb-12 font-medium text-balance">
                We are a boutique collective of strategists, designers, engineers, and AI specialists building the next generation of digital products.
              </p>

              <p className="mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed">
                At Creatif Nexus, we believe that the best work happens when exceptional human intuition meets the scale of machine intelligence. We don't do bloat. We don't do bureaucracy.
              </p>

              <p className="text-sm sm:text-base leading-relaxed">
                We partner closely with ambitious leaders to forge digital products that define categories. Our work is deliberate, precise, and engineered to scale. Small team, massive impact.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-10 sm:mt-16 flex flex-wrap gap-2 sm:gap-4"
            >
              {["Design Systems", "Brand Architecture", "Full-stack Dev", "AI Automation", "LLM Integration", "Growth Strategy"].map((tag) => (
                <div key={tag} className="px-3 sm:px-4 py-1.5 sm:py-2 border border-border rounded-full text-[10px] sm:text-xs uppercase tracking-widest text-muted-foreground bg-card">
                  {tag}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
