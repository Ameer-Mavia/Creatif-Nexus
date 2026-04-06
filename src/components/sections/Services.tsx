import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    title: "Marketing Strategy",
    category: "Growth & Positioning",
    description: "Campaigns, growth, and brand positioning that capture market share. We build narratives that resonate and strategies that convert.",
    deliverables: ["Brand Campaigns", "SEO & SEM", "Growth Strategy", "Market Research"],
    number: "01",
    id: "marketing"
  },
  {
    title: "Design & Creative",
    category: "Brand & Interface",
    description: "UI/UX, brand identity, and visual systems that command attention. Our design language speaks directly to your audience while maintaining premium aesthetics.",
    deliverables: ["UI/UX Design", "Brand Identity", "Visual Systems", "Motion Design"],
    number: "02",
    id: "design"
  },
  {
    title: "Development",
    category: "Engineering",
    description: "Robust web apps, e-commerce, and custom platforms built to scale. We write clean, maintainable code that powers the next generation of digital experiences.",
    deliverables: ["Web Applications", "E-Commerce", "Custom Platforms", "API Integration"],
    number: "03",
    id: "development"
  },
  {
    title: "AI Solutions",
    category: "Automation",
    description: "Custom chatbots, tailored AI agents, and intelligent automation that actually works. We leverage cutting-edge language models to solve real business problems.",
    deliverables: ["Custom Chatbots", "AI Sales Agents", "Process Automation", "Knowledge Base AI"],
    number: "04",
    id: "ai"
  }
];

const VisualMarketing = () => (
  <div className="absolute right-[5%] top-1/2 -translate-y-1/2 w-[200px] md:w-[300px] h-[200px] md:h-[300px] opacity-20 pointer-events-none overflow-hidden flex items-center justify-center">
    {[1, 2, 3].map((i) => (
      <motion.div
        key={i}
        className="absolute rounded-full border border-primary"
        animate={{ width: ["0%", "100%"], height: ["0%", "100%"], opacity: [1, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: i * 1, ease: "linear" }}
        style={{ aspectRatio: "1/1" }}
      />
    ))}
  </div>
);

const VisualDesign = () => (
  <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 opacity-20 pointer-events-none">
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 border border-primary"
      style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
    />
    <motion.div
      animate={{ rotate: -360 }}
      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      className="absolute inset-6 border border-primary"
      style={{ clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)" }}
    />
  </div>
);

const VisualDevelopment = () => (
  <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-40 md:w-64 h-24 md:h-32 opacity-20 pointer-events-none flex flex-col justify-between overflow-hidden">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="h-px bg-primary w-full"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2 + (i % 3), repeat: Infinity, ease: "linear", delay: (i * 0.4) }}
        style={{ width: `${30 + (i * 10)}%` }}
      />
    ))}
  </div>
);

const VisualAI = () => (
  <div className="absolute right-[5%] md:right-[10%] top-1/2 -translate-y-1/2 w-32 md:w-48 h-32 md:h-48 opacity-40 pointer-events-none grid grid-cols-4 gap-3 md:gap-4">
    {[...Array(16)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1.5 h-1.5 rounded-full bg-primary m-auto"
        animate={{ opacity: [0.2, 1, 0.2], scale: [1, 1.5, 1] }}
        transition={{ duration: 1.5 + (i % 2), repeat: Infinity, delay: i * 0.1 }}
        style={{ boxShadow: "0 0 12px 2px hsl(var(--primary))" }}
      />
    ))}
  </div>
);

export function Services() {
  const [expandedId, setExpandedId] = useState<string>("marketing");

  return (
    <section id="services" className="py-20 sm:py-32 bg-background relative z-20">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-8 flex justify-between items-end"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-display font-bold text-foreground tracking-tight">
            Our Disciplines
          </h2>
        </motion.div>
        <div className="w-full h-px bg-border mb-0" />

        <div className="flex flex-col border-b border-border">
          {services.map((service) => {
            const isExpanded = expandedId === service.id;
            return (
              <div
                key={service.id}
                data-testid={`service-row-${service.number}`}
                className="group border-t border-border relative overflow-hidden cursor-pointer bg-background"
                onMouseEnter={() => setExpandedId(service.id)}
                onClick={() => setExpandedId(service.id)}
              >
                <div className="py-6 md:py-10 px-3 sm:px-6 md:px-8 relative z-10 flex flex-col justify-center min-h-[90px] md:min-h-[120px]">
                  <div className="flex items-center justify-between w-full gap-3">
                    <h3 className={`text-xl sm:text-3xl md:text-5xl font-display font-bold transition-colors duration-500 leading-tight ${isExpanded ? "text-primary" : "text-foreground group-hover:text-primary/70"}`}>
                      {service.title}
                    </h3>

                    <div className="flex items-center gap-3 sm:gap-8 md:gap-16 flex-shrink-0">
                      <span className="hidden sm:block text-[10px] md:text-sm uppercase tracking-widest text-muted-foreground font-mono">
                        {service.category}
                      </span>
                      <span className="text-3xl sm:text-5xl md:text-7xl font-display font-bold text-muted-foreground/10 transition-colors group-hover:text-muted-foreground/20">
                        {service.number}
                      </span>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 pb-4 flex flex-col md:flex-row gap-6 md:gap-24 w-full md:w-[65%]">
                          <div className="flex-1">
                            <p className="text-sm md:text-lg text-muted-foreground leading-relaxed font-light mb-5">
                              {service.description}
                            </p>
                            <a href="#contact" className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-widest font-bold text-primary hover:text-foreground transition-colors">
                              Explore <span className="text-base sm:text-lg leading-none">→</span>
                            </a>
                          </div>

                          <div className="flex-1">
                            <h4 className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest mb-3 md:mb-4">Capabilities</h4>
                            <ul className="space-y-2 md:space-y-3">
                              {service.deliverables.map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-foreground font-medium text-xs sm:text-sm md:text-base">
                                  <span className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Ambient visuals — hidden on small screens to avoid overlap */}
                <div
                  className="absolute inset-0 z-0 transition-opacity duration-500 pointer-events-none hidden sm:block"
                  style={{ opacity: isExpanded ? 1 : 0 }}
                >
                  {service.id === "marketing" && <VisualMarketing />}
                  {service.id === "design" && <VisualDesign />}
                  {service.id === "development" && <VisualDevelopment />}
                  {service.id === "ai" && <VisualAI />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
