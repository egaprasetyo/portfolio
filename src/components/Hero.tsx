'use client'

import React from 'react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { DownloadIcon, GitHubLogoIcon } from '@radix-ui/react-icons'
import { ReactTyped } from 'react-typed'

export default function Hero() {
  return (
    <section className='container grid lg:grid-cols-2 place-items-center py-20 md:py-30 gap-10'>
      <div className="text-center lg:text-start">
        <p className="text-sm uppercase font-normal tracking-[2px] text-slate-400 mb-5 relative">Frontend Developer
          <span className="hidden lg:block absolute left-[210px] bottom-[10px] after:absolute after:inset-x-0 after:h-[1px] after:rounded-full after:w-64 after:bg-slate-400 after:content-''"></span>
        </p>
        <main className="text-6xl md:text-6xl font-extrabold">
          <h1 className="text-5xl font-plus-jakarta-sans mb-2">
            <ReactTyped
              strings={["Hello, I am"]}
              typeSpeed={120} loop backSpeed={20}
              cursorChar="|"
              showCursor={true} />
          </h1>{" "}
          <h2 className="inline">
            <span className="font-plus-jakarta-sans inline bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] text-transparent bg-clip-text">
              Christianto Ega Prasetyo
            </span>{" "}
          </h2>
        </main>

        <p className="text-lg mt-7 mb-16 text-muted-foreground md:w-10/12 mx-auto lg:mx-0">
          Passionate about clean code, responsive designs, and turning ideas into interactive reality.
          Whether it's HTML, CSS, or JavaScript, I thrive on turning lines of code into delightful user interfaces.
        </p>

        <div className="space-y-4 md:space-y-0 md:space-x-4">
          <Link
            href="Christianto Ega Prasetyo - Frontend Developer - Resume.pdf"
            target="_blank"
            download
            className={`w-full h-14 md:w-1/3 ${buttonVariants({
              variant: "default",
            })}`}
          >
            Download CV
            <DownloadIcon className="ml-2 w-5 h-5" />
          </Link>

          <Link
            href="https://github.com/egaprasetyo"
            target="_blank"
            className={`w-full h-14 md:w-1/3 ${buttonVariants({
              variant: "outline",
            })}`}
          >
            Github Repository
            <GitHubLogoIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
      <Image src="/me_crop.png" className="relative align-middle grayscale brightness-110 z-10" alt="hero" width={400} height={400} />
      <div className="shadow"></div>
    </section>
  )
}
