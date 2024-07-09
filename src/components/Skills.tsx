import { FigmaLogoIcon } from '@radix-ui/react-icons'
import { FaReact, FaGitAlt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { RiJavascriptFill, RiBootstrapFill } from "react-icons/ri";
import { SiJquery, SiTailwindcss } from "react-icons/si";
import { BiLogoTypescript, BiLogoVuejs, BiLogoSass } from "react-icons/bi";

import React from 'react'

interface skillsProps {
  title: string,
  description?: string,
  icon: JSX.Element
}

const skillsList: skillsProps[] = [
  {
    title: "JQuery",
    description: "Expert",
    icon: <SiJquery className="w-14 h-14" />
  },
  {
    title: "Bootstrap",
    description: "Expert",
    icon: <RiBootstrapFill className="w-14 h-14" />
  },
  {
    title: "TailwindCSS",
    description: "Advanced",
    icon: <SiTailwindcss className="w-14 h-14" />
  },
  {
    title: "Javascript",
    description: "Advanced",
    icon: <RiJavascriptFill className="w-14 h-14" />
  },
  {
    title: "Git",
    description: "Advanced",
    icon: <FaGitAlt className="w-14 h-14" />
  },
  {
    title: "ReactJS",
    description: "Intermediate",
    icon: <FaReact className="w-14 h-14" />
  },
  {
    title: "NextJS",
    description: "Intermediate",
    icon: <TbBrandNextjs className="w-14 h-14" />
  },
  {
    title: "Figma",
    description: "Intermediate",
    icon: <FigmaLogoIcon className="w-14 h-14" />
  },
  {
    title: "Typescript",
    description: "Intermediate",
    icon: <BiLogoTypescript className="w-14 h-14" />
  },
  {
    title: "VueJS",
    description: "Basic",
    icon: <BiLogoVuejs className="w-14 h-14" />
  },
  {
    title: "Sass",
    description: "Basic",
    icon: <BiLogoSass className="w-14 h-14" />
  },
]

export default function Skills() {
  return (
    <section id="skills" className="container py-24 md:py-32">
      <h2 className="text-3xl md:text-4xl font-bold text-center font-plus-jakarta-sans pt-4 pb-10">
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">My</span> {" "}
        Skills
      </h2>
      {/* <h3 className="text-xl text-center text-muted-foreground pt-4 pb-8">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nemo commodi, quisquam sequi magnam dignissimos.
      </h3> */}
      <div className="flex flex-wrap justify-center items-center gap-5">
        {skillsList.map(({ title, description, icon }: skillsProps) => (
          <div key={title} className="max-w-[140px] md:max-w-[180px] w-full text-center">
            <div className="rounded-lg pt-10 px-4 pb-8 bg-muted/50 border mb-4">
              <div className="max-w-[60px] w-full mx-auto mt-0 mb-8">
                {icon}
              </div>
              <div className="text-muted-foreground text-sm md:text-base font-bold font-plus-jakarta-sans">{description}</div>
            </div>
            <p className='text-sm md:text-base'>{title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
