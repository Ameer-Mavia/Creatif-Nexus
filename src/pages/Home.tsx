import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { AISolutions } from "@/components/sections/AISolutions";
import { About } from "@/components/sections/About";
import { Process } from "@/components/sections/Process";
import { Clients } from "@/components/sections/Clients";
import { Contact } from "@/components/sections/Contact";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-background relative">
      <div className="noise-overlay"></div>
      <Navbar />
      <Hero />
      <Services />
      <Work />
      <CTA />
      <AISolutions />
      <About />
      <Clients />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
