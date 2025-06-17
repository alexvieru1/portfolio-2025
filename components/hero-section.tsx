import React from "react";
import { Ripple } from "./magicui/ripple";

const HeroSection = () => {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-background">
      <p className="z-10 whitespace-pre-wrap text-center text-4xl md:text-6xl font-bold tracking-tight text-gray-600 dark:text-white leading-snug">
        Hi, I'm Alex.{"\n"}I build modern,{"\n"}performant web apps.
      </p>

      <Ripple mainCircleSize={420} />
    </div>
  );
};

export default HeroSection;
