import Image from 'next/image'
import React from 'react'
import Statistics from './Statistics'

export default function About() {
  return (
    <section id="about" className='container py-24 sm:py-32'>
      <div className="bg-muted/50 border rounded-lg py-12">
        <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
          <Image alt="me" src="/me2_crop.jpg" width={500} height={500} className="grayscale brightness-90 w-[300px] object-contain rounded-lg" />
          <div className="flex flex-col justify-between">
            <div className="pb-6">
              <h2 className="font-plus-jakarta-sans text-3xl md:text-4xl font-bold">
                <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">About {" "}</span>
                me
              </h2>
              <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
                Creating friendly websites is my passion as a Frontend Developer. I have a good grasp of web development technologies such
                as HTML, CSS, Javascript, JQuery, ReactJS, and NextJS and I like to explore new trends and techniques to enhance my work. I
                have experience in working on different kinds of web projects, from basic websites to interactive web applications, and I
                always ensure to produce high-quality work that meets the client's needs and expectations. I am looking for new opportunities
                to showcase my skills and collaborate with other passionate developers.
              </p>
            </div>
            <Statistics />
          </div>
        </div>
      </div>
    </section>
  )
}
