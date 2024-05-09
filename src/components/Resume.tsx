'use client'

import React from 'react'
import { ArrowTopRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Image from 'next/image'

interface ResumeProps {
  year: string,
  role: string,
  company: string,
  descriptions?: string[]
}

interface CertificateProps {
  title: string
  institution: string
  year: string,
  url?: string,
  icon?: string
}

const resumeList: ResumeProps[] = [
  {
    year: "04/2022 - Present",
    role: "Frontend Developer",
    company: "Fleetify.id",
  },
  {
    year: "03/2020 - 05/2020",
    role: "Frontend Developer - Internship",
    company: "PT. Yoofix Digital Indonesia",
  },
  {
    year: "2016 - 2021",
    role: "University of Sanata Dharma",
    company: "Bachelor of Computer Science",
  }
]

const certificateList: CertificateProps[] = [
  {
    title: "Core Initiative Frontend Project Based Internship Program",
    year: "12/2023 - 01/2024",
    institution: "Rakamin Academy",
    url: "https://drive.google.com/file/d/1lujz1_NFVIcnJ7a8sEBHV-7xwBam9CZx/view?usp=sharing",
    icon: "rakamin-academy.webp"
  },
  {
    title: "Frontend Developer Course",
    year: "03/2022 - 03/2023",
    institution: "Progate",
    url: "https://drive.google.com/file/d/1lV2OQnM2-3hok7cxl1coXJyiNhwW_8lz/view",
    icon: "progate_logo.png"
  },
  {
    title: "UI/UX Designer Bootcamp",
    year: "10/2020 - 02/2021",
    institution: "Binar Academy",
    url: "https://drive.google.com/file/d/1alC2QeaJ52ys0BAnTlSjwldqLG5iiuEg/view",
    icon: "binar_academy_logo.png"
  }
]

export default function Resume() {
  return (
    <section id="resume" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-[1fr,1fr] gap-8 place-items-center">
        <div>
          <h2 className="font-plus-jakarta-sans text-3xl md:text-4xl font-bold mt-4 mb-10">
            <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">Education &</span>{" "}
            Experience
          </h2>

          {/* <p className="text-muted-foreground mt-4 mb-8 text-xl">
            I enjoy creating simple, beautiful, and intuitive designs to effectively communicate your message and identity.
          </p> */}

          <div className="">
            {resumeList.map(({ year, role, company, descriptions }: ResumeProps, index: number) => (
              <ResumeItem key={company} {...{ year, role, company, descriptions, index }} />
            ))}
          </div>
        </div>
        <div className="w-[300px] md:w-[500px] lg:w-[600px] object-contain flex flex-col gap-8">
          {certificateList.map(({ title, institution, year, icon, url }: CertificateProps) => (
            <CertificateItem key={title} {...{ title, institution, year, icon, url }} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ResumeItem({ year, role, company, descriptions, index }: ResumeProps & { index: number }) {
  return (
    <div className={`relative pl-12 pb-14 before:content-[''] before:absolute before:left-[-7px] before:top-[10px] before:w-4 before:h-4 before:bg-primary before:rounded-full before:transition duration-150 ease-in-out after:content-[''] after:bg-gray-300/15 after:w-0.5 ${index === resumeList.length - 1 ? "after:h-[calc(100%-70px)]" : "after:h-full"} after:absolute after:left-0 after:top-[10px] after:z-[-1]`}>
      <h6 className="inline-block px-6 py-2 border border-gray-300/15 rounded-full text-sm mb-3">{year}</h6>
      <h5 className="font-plus-jakarta-sans font-semibold text-lg">{role}</h5>
      <span className="text-muted-foreground leading-tight">{company}</span>
      {descriptions?.map((description: string) => (
        <p className="mt-4 text-muted-foreground">
          {description}
        </p>
      ))}
    </div>
  )
}

function CertificateItem({ title, institution, year, icon, url }: CertificateProps) {
  return (
    <div className='bg-muted/50 border rounded-lg py-8 px-4 md:px-6'>
      <div className="space-y-1 flex flex-col md:flex-row justify-start items-center gap-6">
        {icon &&
          <div className="mt-1 p-1 rounded-full bg-white">
            <Image className="object-contain max-w-16 max-h-16" src={`/${icon}`} alt={institution} width={60} height={60} />
          </div>
        }
        <div className="text-center md:text-left">
          <div className="text-xl flex font-plus-jakarta-sans font-bold">{title}</div>
          <div>
            <span className="mb-2 block text-primary font-semibold">{institution}</span>
            <span className="text-sm text-muted-foreground">{year}</span>
          </div>
        </div>
        <div className='md:ml-auto'>
          <div className="w-11 h-11 leading-10 text-center bg-muted rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300">
            <a
              rel="noreferrer noopener"
              target="_blank"
              href={url}
              className="flex justify-center items-center h-full">
              <ArrowTopRightIcon className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
