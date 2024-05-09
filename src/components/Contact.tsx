import React from 'react'
import { RiWhatsappLine } from "react-icons/ri";
import { EnvelopeClosedIcon } from '@radix-ui/react-icons'

export default function Contact() {
  return (
    <section id="contact">

      <div className="container py-24 md:pt-28 md:pb-64">
        <h3 className="text-center text-4xl md:text-5xl font-bold font-plus-jakarta-sans mb-10">
          Let's Get in {" "}
          <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
            Touch
          </span>
        </h3>

        <div className="max-w-3xl mx-auto py-10 px-8 md:py-10 md:px-12 flex flex-wrap justify-normal md:justify-around gap-12 border rounded-lg">
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center bg-primary h-10 w-10 rounded-full">
              <EnvelopeClosedIcon className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email me</p>
              <h3 className="text-lg font-bold font-plus-jakarta-sans">christianto.ega@gmail.com</h3>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center bg-primary h-10 w-10 rounded-full">
              <RiWhatsappLine className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Whatsapp me</p>
              <h3 className="text-lg font-bold font-plus-jakarta-sans">082158440530</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-14 text-center">
        <h3 className="text-sm">
          &copy; 2024 All rights reserved by{" "}
          <a
            rel="noreferrer noopener"
            target="_blank"
            href="https://github.com/egaprasetyo"
            className="text-primary transition-all border-primary hover:border-b-2"
          >
            Christianto Ega Prasetyo
          </a>
        </h3>
      </div>


    </section>
  )
}
