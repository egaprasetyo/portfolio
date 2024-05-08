import Link from "next/link";
import styles from './styles.module.css'

export default function Navbar() {
    return (
        <header className="absolute top-0 left-0 bg-transparent w-full z-[99] pt-10 pb-5">
            <div className="container">
                <div className="flex flex-wrap">
                    <div className="flex items-center justify-between w-full">
                        <div className="mr-3">
                            <h1 className="text-3xl font-extrabold">EGA</h1>
                        </div>
                        <nav>
                            <ul className="m-0 p-0 list-none flex flex-wrap items-center gap-10 text-md font-semibold">
                                <li className="relative">
                                    <Link href="#" className={styles.link}>Services</Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className={styles.link}>Works</Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className={styles.link}>Resume</Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className={styles.link}>Skills</Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className={styles.link}>Testimonials</Link>
                                </li>
                                <li className="relative">
                                    <Link href="#" className={styles.link}>Contact</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}