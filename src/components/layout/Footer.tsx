import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background py-10 sm:py-12 border-t border-border text-foreground z-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="text-xl sm:text-2xl font-display font-bold tracking-tight">
            Creatif Nexus.
          </div>

          <div className="flex gap-5 sm:gap-8">
            {["Twitter", "LinkedIn", "Instagram"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-xs sm:text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                data-testid={`link-social-${social.toLowerCase()}`}
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-muted-foreground text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} Creatif Nexus. All rights reserved.</p>
          <div className="flex gap-4 sm:gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
