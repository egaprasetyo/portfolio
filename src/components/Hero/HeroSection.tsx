import Link from "next/link";
import { Button } from "../ui/button";
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import styles from './styles.module.css'
import Image from "next/image";


export default function HeroSection() {
    return (
        <section className="pt-[100px] flex items-center border-b border-gray-300">
            <div className="container flex">
                <div className="hidden lg:flex items-center flex-1 w-full h-auto">
                    <div className="w-full">
                        <span className="text-sm uppercase font-normal tracking-[2px] text-slate-400">Frontend Developer & UI Designer</span>
                        <h1 className={`text-7xl font-extrabold mb-5 mt-3 leading-tight ${styles.title}`}>Hello, I am Christianto Ega</h1>
                        <p className="max-w-lg font-normal text-normal text-slate-300">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                        <div className="mt-12 flex items-center gap-6">
                            <Button>Download CV</Button>
                            <ul className="flex gap-5">
                                <li>
                                    <Link href="#" className={`relative z-[1] text-blue-400 w-10 h-10 border-solid border-2 border-sky-500 rounded-full flex items-center justify-center ${styles.social}`}><FaLinkedinIn className="transition" /></Link>
                                </li>
                                <li>
                                    <Link href="#" className={`relative z-[1] text-blue-400 w-10 h-10 border-solid border-2 border-sky-500 rounded-full flex items-center justify-center ${styles.social}`}><FaGithub /></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 flex items-center justify-center h-auto">
                    <div className="w-full relative">
                        <Image src="/pic_me.png" className="relative align-middle w-full h-auto" alt="hero" width={600} height={600} />
                    </div>
                </div>
            </div>

            {/* <section className="pt-[100px] flex items-center border-b border-gray-800">
                <div className="container flex">
                    <div className="hidden lg:flex items-center flex-1 w-full h-auto">
                        <div className="w-full">
                            <p className="text-sm uppercase font-normal tracking-[2px] text-slate-400 mb-3">Frontend Developer & UI Designer</p>
                            <h1 className="text-5xl md:text-6xl font-bold">
                                Hello, I am
                            </h1>{" "}
                            <h2 className="inline">
                                <span className="inline text-8xl md:text-7xl font-extrabold bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] text-transparent bg-clip-text">
                                    Christianto Ega Prasetyo
                                </span>{" "}
                            </h2>
                            <p className="max-w-lg font-normal text-xl text-muted-foreground mt-7">I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people</p>
                            <div className="mt-12 flex items-center gap-6">
                                <Button size={"lg"}>Download CV</Button>
                                <ul className="flex gap-5">
                                    <li>
                                        <Link href="#" className={`relative z-[1] text-blue-400 w-10 h-10 border-solid border-2 border-sky-500 rounded-full flex items-center justify-center`}><FaLinkedinIn className="transition" /></Link>
                                    </li>
                                    <li>
                                        <Link href="#" className={`relative z-[1] text-blue-400 w-10 h-10 border-solid border-2 border-sky-500 rounded-full flex items-center justify-center`}><FaGithub /></Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 flex items-center justify-center h-auto">
                        <div className="w-full relative">
                            <Image src="/pic_me.png" className="relative align-middle w-full h-auto" alt="hero" width={600} height={600} />
                        </div>
                    </div>
                </div>
            </section> */}
        </section>


    )
}