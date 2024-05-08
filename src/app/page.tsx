import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Skills from "@/components/Skills";
import Portfolio from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Resume />
      <Skills />
      <Portfolio />
    </>
  );
}
