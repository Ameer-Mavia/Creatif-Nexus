import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-primary relative z-20 overflow-hidden text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 sm:gap-16 justify-between">
          {/* Left */}
          <div className="w-full lg:max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold uppercase tracking-tighter mb-6 sm:mb-8 leading-[0.9]"
            >
              Start a<br /> Project.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-primary-foreground/80 text-base sm:text-xl md:text-2xl font-medium max-w-md mb-8 sm:mb-12 text-balance"
            >
              We're currently taking on new projects. Let's build something exceptional together.
            </motion.p>

            <motion.a
              href="mailto:hello@creatifnexus.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 sm:gap-4 text-base sm:text-2xl md:text-3xl font-display font-bold border-b-2 border-primary-foreground pb-2 hover:opacity-70 transition-opacity break-all"
              data-testid="link-email"
            >
              <span>hello@creatifnexus.com</span>
              <span className="text-xl flex-shrink-0">&rarr;</span>
            </motion.a>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-full lg:flex-1 lg:max-w-md lg:ml-auto"
          >
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-3 sm:py-4 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors font-medium text-base sm:text-lg"
                  data-testid="input-name"
                />
              </div>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-3 sm:py-4 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors font-medium text-base sm:text-lg"
                  data-testid="input-email"
                />
              </div>
              <div>
                <select
                  required
                  defaultValue=""
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-3 sm:py-4 text-primary-foreground focus:outline-none focus:border-primary-foreground transition-colors font-medium text-base sm:text-lg appearance-none cursor-pointer"
                  data-testid="select-service"
                >
                  <option value="" disabled className="text-black">Select a Service</option>
                  <option value="marketing" className="text-black">Marketing Strategy</option>
                  <option value="design" className="text-black">Design & Creative</option>
                  <option value="development" className="text-black">Development</option>
                  <option value="ai" className="text-black">AI Solutions</option>
                </select>
              </div>
              <div>
                <textarea
                  required
                  placeholder="Project details"
                  rows={4}
                  className="w-full bg-transparent border-b border-primary-foreground/30 py-3 sm:py-4 text-primary-foreground placeholder:text-primary-foreground/60 focus:outline-none focus:border-primary-foreground transition-colors font-medium text-base sm:text-lg resize-none"
                  data-testid="input-details"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting || isSuccess}
                className="w-full bg-primary-foreground text-primary font-bold uppercase tracking-widest py-4 sm:py-5 hover:bg-white transition-colors disabled:opacity-50 text-sm sm:text-base"
                data-testid="btn-submit-contact"
              >
                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Inquiry"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
