"use client"

import React from 'react'
import CountUp from 'react-countup';

export default function Statistics() {

  interface statsProps {
    description: string,
    quantity: number
  }

  const statsList: statsProps[] = [
    {
      description: "Years of experience",
      quantity: 2,
    },
    {
      description: "Projects completed",
      quantity: 6
    }
  ]

  return (
    <section id="statistics">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
        {
          statsList.map(({ description, quantity }: statsProps) => (
            <div
              key={description}
              className="font-plus-jakarta-sans text-center flex items-center">
              <CountUp end={quantity} duration={5} delay={2} className="text-5xl sm:text-7xl font-extrabold" />
              <p className="text-sm sm:text-xl text-muted-foreground ml-2 w-20 font-semibold text-left">{description}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
