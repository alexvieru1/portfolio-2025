"use client";

import { short } from "@/constants/projects";
import { AuroraText } from "./magicui/aurora-text";
import { ProjectCard } from "./project-card";
import { AnimatedGradientText } from "./magicui/animated-gradient-text";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";

const RecentWork = () => {
  return (
    <section className="w-full px-4 py-24">
      {/* Section Heading */}
      <div className="mx-auto max-w-4xl text-center mb-16">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Recent <AuroraText>work</AuroraText>
        </h2>
        <p className="mt-4 text-muted-foreground text-sm md:text-base">
          A selection of recent freelance and commercial web projects — designed
          with clean UI and performant architecture.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {short.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            href={project.href}
            description={project.description}
            dates={project.dates}
            tags={project.technologies}
            links={project.links}
            image={project.image}
            video={project.video}
          />
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className={cn(
            "group inline-flex items-center gap-1 rounded-full border border-border px-4 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted/40 transition-colors"
          )}
        >
          <AnimatedGradientText className="text-sm font-medium">
            All projects
          </AnimatedGradientText>
          <ChevronRight className="size-4 stroke-muted-foreground transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </section>
  );
};

export default RecentWork;
