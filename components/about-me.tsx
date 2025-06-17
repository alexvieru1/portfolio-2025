"use client";

import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import { TextAnimate } from "./magicui/text-animate";
import { IconCloud } from "@/components/magicui/icon-cloud";
import { HyperText } from "./magicui/hyper-text";

const slugs = [
  "react",
  "nextdotjs",
  "tailwindcss",
  "framer",
  "typescript",
  "javascript",
  "express",
  "medusa",
  "postgresql",
  "docker",
  "stripe",
  "vercel",
  "expo",
  "androidstudio",
  "figma",
  "git",
  "github",
  "gitlab",
];

const AboutMe = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const shadowColor = resolvedTheme === "dark" ? "white" : "black";
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`
  );

  return (
    <section className="w-full max-w-screen overflow-hidden py-24 px-4 flex flex-col items-center justify-center text-center">
      {/* Headline */}
      <h2 className="text-balance text-4xl sm:text-5xl md:text-6xl font-semibold leading-tight tracking-tighter mb-6">
        I{" "}
        {mounted ? (
          <LineShadowText shadowColor={shadowColor} className="italic ml-2">
            Simplify
          </LineShadowText>
        ) : (
          <span className="italic ml-2">Simplify</span>
        )}{" "}
        complexity
      </h2>

      {/* Description */}
      <TextAnimate
        animation="blurIn"
        as="h3"
        once
        className="max-w-2xl text-lg text-muted-foreground leading-relaxed px-4 mb-16"
      >
        I’m Alexandru, a full-stack developer focused on creating performant,
        maintainable, and user-friendly web apps. I build with tools like
        Next.js, Tailwind, Medusa, and TypeScript — always with clean design and
        performance in mind.
      </TextAnimate>

      {/* Grid Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-center md:items-start gap-12 text-left">
        {/* Tech Stack Sphere */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left w-full md:w-1/2">
          <HyperText>Tech Stack</HyperText>
          <p className="text-muted-foreground text-sm mt-2 mb-4 max-w-xs">
            Tools I use regularly — frontend, backend, platforms, and dev tools.
          </p>
          <div className="w-full flex justify-center">
            <div className="w-[320px] h-[320px] max-w-full mr-16 lg:mr-60">
              <IconCloud images={images} />
            </div>
          </div>
        </div>

        {/* Hobbies + Quote */}
        <div className="flex flex-col justify-between items-center md:items-start w-full md:w-1/2 max-w-md md:h-[360px]">
          <div className="mb-8 md:mb-0">
            <HyperText className="pl-12 md:pl-0">Outside Work</HyperText>
            <TextAnimate
              animation="blurIn"
              as="p"
              once
              className="text-muted-foreground text-sm mt-2 leading-relaxed text-center md:text-left"
            >
              When I'm not coding, I enjoy keeping up with football (GG
              Manchester United! 🔴), experimenting with smart home setups,
              diving into audio gear, and brewing the perfect espresso ☕. I’m
              also a movies & series enthusiast — deep dives and plot breakdowns
              are my thing.
            </TextAnimate>
          </div>

          {/* Quote */}
          <div className="relative text-muted-foreground text-center md:text-left mt-6 md:mt-0 px-2">
            <span className="absolute -top-2 md:-top-[-60px] -left-3 text-6xl md:text-9xl font-serif opacity-20 select-none">
              “
            </span>
            <TextAnimate
              animation="blurIn"
              as="p"
              once
              className="italic text-sm sm:text-base leading-relaxed z-10 relative px-2"
            >
              Balance is not something you find. It’s something you create.
            </TextAnimate>
            <span className="absolute -bottom-2 -right-3 text-6xl md:text-9xl font-serif opacity-20 select-none">
              ”
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
