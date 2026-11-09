import { Hero } from "@/components/sections/Hero";
import { Platforms } from "@/components/sections/Platforms";
import { TechStrip } from "@/components/sections/TechStrip";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { Showcase } from "@/components/sections/Showcase";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Platforms />
      <TechStrip />
      <Services />
      <About />
      <Showcase />
      <Testimonials />
      <Contact />
    </>
  );
}
