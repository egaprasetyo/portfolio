import { ArrowRightIcon, ArrowTopRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface blogProps {
  title: string,
  image: string,
  url?: string,
  tag: string[]
}

const blogList: blogProps[] = [
  {
    title: "Fleetify Dashboard",
    image: "/blog/fleetify_website.png",
    tag: ["JavaScript", "JQuery", "Bootstrap", "Codeigniter", "Rest API", "Git"]
  },
  {
    title: "Calculator",
    image: "/blog/calc_app.png",
    url: "https://egaprasetyo.github.io/Calculator.App/",
    tag: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "Pokedex",
    image: "/blog/pokedex.png",
    url: "https://egaprasetyo.github.io/pokedex/",
    tag: ["HTML", "CSS", "JavaScript", "JQuery", "Rest API", "Bootstrap",]
  },
  {
    title: "Gramedia UI/UX",
    image: "/blog/gramedia_uiux.png",
    url: "https://drive.google.com/file/d/1U8WBa_XGcPGNv4ldIq4YylCTRyHeCx9D/view",
    tag: ["UI/UX Design", "Figma"]
  },
  {
    title: "FMS Dashboard",
    image: "/blog/fms_website.png",
    tag: ["JavaScript", "JQuery", "Bootstrap", "Codeigniter", "Rest API", "Git"]
  },
  {
    title: "E-Commerce Catalog",
    image: "/blog/ecommerce_catalog.png",
    url: "https://ecommerce-catalog-chega.netlify.app/",
    tag: ["VueJS", "Rest API", "Figma"]
  }
]


export default function Portfolio() {
  return (
    <section id="portfolio" className="container py-24 sm:py-32">
      <h2 className="text-3xl md:text-4xl font-bold font-plus-jakarta-sans pb-10">
        My
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">{" "} Recent {" "}</span>
        Works
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 sm:block columns-2 lg:columns-3 lg:gap-6 mx-auto space-y-4 lg:space-y-6">
        {
          blogList.map(({ title, image, url, tag }: blogProps, index: number) => (
            <div key={title} className="relative bg-muted/50 rounded-xl p-3 max-w-md md:break-inside-avoid overflow-hidden">
              <div className="relative z-10 rounded-xl overflow-hidden">
                <Image src={image} className="w-full h-auto" alt={title} width={300} height={300} />
                {url && <Link href={url} target='_blank' className="absolute top-0 left-0 w-full h-full transition ease-in-out delay-150 duration-200 bg-transparent hover:bg-foreground/35"></Link>}
              </div>
              <div className="pt-5 px-3 pb-3 flex items-center">
                <div>
                  <h6 className="mb-3 font-bold font-plus-jakarta-sans">{title}</h6>
                  <div className="flex flex-wrap gap-2">
                    {
                      tag.map((tag: string, index: number) => (
                        <span key={tag} className="text-muted-foreground text-xs py-1 px-4 rounded-[30px] bg-muted">{tag}</span>
                      ))
                    }
                  </div>
                </div>
                {url &&
                  <div className='ml-auto'>
                    <div className="w-11 h-11 leading-10 text-center bg-muted rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary duration-300">
                      <Link href={url} target="_blank" className="flex justify-center items-center h-full">
                        <ArrowTopRightIcon className="w-6 h-6" />
                      </Link>
                    </div>
                  </div>}
              </div>
            </div>
          ))
        }
      </div>
      {/* <div className="py-10 text-center">
        <Link href="/blog" className="inline-block px-6 py-2 border border-gray-300/15 rounded-full transition ease-in-out delay-150 duration-200 bg-transparent hover:-translate-y-1 hover:scale-110 hover:bg-primary">Load more <ArrowRightIcon className="inline h-4 w-4" /></Link>
      </div> */}

    </section>
  )
}
