import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProjectCarousel } from "@/components/portfolio/ProjectCarousel";
import { featuredProjects } from "@/data/projects";

export function Showcase() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent websites I've built."
          lead="A few favourites. Each one shows the problem, what I built, and what changed for the client."
        />

        <div className="mt-8 sm:mt-12">
          <ProjectCarousel projects={featuredProjects} />
        </div>

        <Reveal delay={0.1}>
          <div className="mt-14 flex justify-center">
            <Button href="/portfolio" variant="outline">
              View all projects
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
