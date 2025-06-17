import React from "react";
import { AuroraText } from "@/components/magicui/aurora-text";
import { long } from "@/constants/projects";
import Link from "next/link";
import { Safari } from "@/components/magicui/safari";

const ProjectsPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-28">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
          Curated <AuroraText>Projects</AuroraText>
        </h2>
        <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          Explore a selection of recent web projects crafted with precision and purpose — from event experiences to real estate showcases and modern business websites.
        </p>
      </div>

      {/* All Projects in 2 columns */}
      <div className="grid grid-cols-1 gap-10">
        {long.map((project, idx) => (
          <Link
            key={idx}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-[1.02] duration-300"
          >
            <div className="w-full aspect-[1203/753]">
              <Safari
                imageSrc={project.imageSrc}
                url={new URL(project.url).hostname.replace("www.", "")}
                className="w-full h-full"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
