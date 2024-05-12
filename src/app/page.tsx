'use client'

import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import ScrollToTop from "react-scroll-to-top";
import { ChevronUpIcon } from "@radix-ui/react-icons";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
      <Contact />
      <ScrollToTop className="!bg-primary !z-50 !rounded-full" smooth component={<ChevronUpIcon className="w-8 h-8 text-center inline-block" />} />
    </>
  );
}
