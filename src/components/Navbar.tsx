'use client'

import { useState } from 'react';
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from './ui/navigation-menu';
import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu } from 'lucide-react';
import { buttonVariants } from './ui/button';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface RouteProps {
  href: string,
  label: string
}

const routeList: RouteProps[] = [
  {
    href: "#home",
    label: "Home",
  },
  {
    href: "#about",
    label: "About",
  },
  {
    href: "#resume",
    label: "Resume",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#portfolio",
    label: "Portfolio",
  },
  {
    href: "#contact",
    label: "Contact",
  }
]

export default function Navbar() {

  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky font-plus-jakarta-sans border-b-[1px] top-0 z-40 backdrop-blur supports-backdrop-blur:bg-white/95 dark:border-b-white/10">
      <NavigationMenu className='mx-auto'>
        <NavigationMenuList className='container h-20 px-4 w-screen flex justify-between'>
          <NavigationMenuItem className='font-bold flex'>
            <Link href="/" className='ml-2 font-extrabold text-4xl flex items-center'>
              <Avatar className='mr-3'>
                <AvatarImage src="https://github.com/egaprasetyo.png" alt="@ega" />
                <AvatarFallback>E</AvatarFallback>
              </Avatar>
              EGA
            </Link>
          </NavigationMenuItem>

          <span className='flex md:hidden'>
            {/* <ModeToggle /> */}

            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className='px-2'>
                <Menu className='flex md:hidden h-5 w-5' onClick={() => setIsOpen(true)} />
                <span className='sr-only'>Menu Icon</span>
              </SheetTrigger>


              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className='font-bold text-3xl'>EGA</SheetTitle>
                </SheetHeader>
                <nav className='flex flex-col justify-center items-center gap-2 mt-4'>
                  {routeList.map(({ href, label }: RouteProps) => (
                    <Link
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={buttonVariants({ variant: 'ghost' })}>
                      {label}
                    </Link>
                  ))}
                  <Link
                    href="https://github.com/egaprasetyo"
                    target='_blank'
                    className={`w-[110px] border ${buttonVariants({ variant: 'secondary' })}`}>
                    <GitHubLogoIcon className='mr-2 w-5 h-5' />
                    Github
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          <nav className='hidden items-center justify-center md:flex gap-2 backdrop-blur-sm supports-backdrop-blur:bg-white/95 rounded-md h-3/4 w-2/4 bg-white/5'>
            {routeList.map((router: RouteProps, i) => (
              <Link
                key={i}
                href={router.href}
                className={`text-lg h-full ${buttonVariants({ variant: 'ghost' })}`}>
                {router.label}
              </Link>
            ))}
          </nav>

          <div className='hidden md:flex gap-2'>
            <Link
              href="https://github.com/egaprasetyo?tab=repositories"
              target="_blank"
              className={`border ${buttonVariants({ variant: 'secondary' })}`}>
              <GitHubLogoIcon className='w-5 h-5 mr-2' />
              Github
            </Link>
            {/* <ModeToggle /> */}
          </div>
        </NavigationMenuList>
      </NavigationMenu>


    </header>
  )
}
