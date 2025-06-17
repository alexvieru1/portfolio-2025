"use client";

import React, { useState } from "react";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { PlaceholdersAndVanishInput } from "@/components/ui/placeholders-and-vanish-input";

const Contact = () => {
  const [message, setMessage] = useState("");

  const placeholders = [
    "Tell me about your next big idea.",
    "What can I build for you today?",
    "Need a clean website with personality?",
    "Want a dev who thinks in user flows?",
    "Have a vision? Let’s bring it to life.",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (message.trim()) {
      const whatsappLink = `https://wa.me/40733139412?text=${encodeURIComponent(
        message
      )}`;
      window.open(whatsappLink, "_blank");
    }
  };

  return (
    <section className="relative w-full min-h-[80vh] px-4 py-32 overflow-hidden bg-gradient-to-b from-background to-muted/40">
      <div className="absolute -z-10 inset-0 blur-[100px] opacity-40 bg-gradient-to-tr from-purple-500 via-sky-500 to-transparent" />

      <div className="flex items-center justify-center h-full w-full">
        <div className="w-full max-w-2xl text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Let's <span className="text-[#5046e6]">have a chat</span>
          </h2>

          <p className="text-muted-foreground text-base sm:text-lg">
            Whether it's a quick question or a full project proposal, I'm just
            one message away.
          </p>

          <div className="flex justify-center w-full cursor-none">
            <div className="w-full max-w-xl">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
