import { motion } from "framer-motion";

const clients = ["Aether", "Chronos", "Equinox", "Meridian", "Solstice", "Vanguard", "Zenith", "Obsidian"];

const testimonials = [
  {
    quote: "Creatif Nexus didn't just rebuild our platform. They fundamentally reshaped how we think about automation. Their work is uncompromising.",
    author: "Sarah Jenkins",
    role: "COO, Aether Logistics",
  },
  {
    quote: "The rarest combination of strategic brilliance and absolute technical mastery. The AI agent they deployed reduced our support overhead by 60%.",
    author: "David Chen",
    role: "Founder, Equinox Finance",
  },
  {
    quote: "An agency that actually understands business goals. Their design work elevated our brand to a premium tier we didn't think was possible.",
    author: "Elena Rostova",
    role: "CMO, Vanguard Tech",
  },
];

export function Clients() {
  return (
    <section id="clients" className="py-20 sm:py-32 bg-card relative z-20 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-16 sm:mb-24 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary text-xs sm:text-sm uppercase tracking-widest font-medium mb-8 sm:mb-12"
          >
            Trusted By Industry Leaders
          </motion.h2>

          <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-12 gap-y-4 sm:gap-y-8 opacity-40">
            {clients.map((client, index) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-xl sm:text-2xl md:text-3xl font-display font-bold tracking-tighter"
              >
                {client}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-12 mt-12 sm:mt-20">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-6 sm:p-8 border border-border bg-background flex flex-col justify-between"
            >
              <div className="text-primary text-5xl sm:text-6xl font-display leading-none absolute -top-5 sm:-top-6 left-5 sm:left-6 opacity-20">"</div>
              <blockquote className="text-base md:text-lg text-foreground font-light leading-relaxed mb-8 sm:mb-12 relative z-10">
                {testimonial.quote}
              </blockquote>
              <div>
                <div className="text-foreground font-medium tracking-wide text-sm">{testimonial.author}</div>
                <div className="text-muted-foreground text-sm mt-1">{testimonial.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
